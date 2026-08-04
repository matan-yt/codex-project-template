import { getSheetCsvUrl } from "../config/site";

export type Guest = { name: string; table: string; guestCount?: string };

function parseCsv(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [], value = "", quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    if (char === '"' && quoted && text[i + 1] === '"') { value += '"'; i += 1; }
    else if (char === '"') quoted = !quoted;
    else if (char === "," && !quoted) { row.push(value.trim()); value = ""; }
    else if ((char === "\n" || char === "\r") && !quoted) {
      if (char === "\r" && text[i + 1] === "\n") i += 1;
      row.push(value.trim());
      if (row.some(Boolean)) rows.push(row);
      row = []; value = "";
    } else value += char;
  }
  row.push(value.trim());
  if (row.some(Boolean)) rows.push(row);
  return rows;
}

const headerIndex = (headers: string[], choices: string[]) =>
  headers.findIndex((header) => choices.includes(header.replace(/\s+/g, " ").trim()));

function normalizeTable(value: string) {
  const number = Number(value.trim());
  return Number.isFinite(number) && number > 0 ? String(number) : null;
}

export async function loadGuests(refresh = false): Promise<Guest[]> {
  const response = await fetch(getSheetCsvUrl(refresh), { cache: "no-store" });
  if (!response.ok) throw new Error("Unable to load seating sheet");
  const rows = parseCsv(await response.text());
  if (rows.length < 2) return [];
  const headers = rows[0].map((header) => header.replace(/^\uFEFF/, ""));
  const name = headerIndex(headers, ["שם המוזמן", "שם המוזמנים"]);
  const table = headerIndex(headers, ["שולחן", "מספר שולחן"]);
  const guestCount = headerIndex(headers, ["סה\"כ אורחים", "סה״כ אורחים", "כמות אורחים"]);
  const status = headerIndex(headers, ["סטטוס"]);
  if (name < 0 || table < 0) throw new Error("Missing seating columns");
  return rows.slice(1).flatMap((row) => {
    const guestName = row[name]?.trim();
    const tableNumber = normalizeTable(row[table] ?? "");
    const isAttending = status < 0 || row[status]?.trim() === "מגיע";
    return guestName && tableNumber && isAttending
      ? [{ name: guestName, table: tableNumber, guestCount: guestCount >= 0 ? row[guestCount]?.trim() : undefined }]
      : [];
  });
}
