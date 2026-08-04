import type { Guest } from "./googleSheets";

export function normalizeSearch(value: string) {
  return value.normalize("NFKD").replace(/[\u0591-\u05C7]/g, "").replace(/[^\p{L}\p{N}\s]/gu, " ").replace(/\s+/g, " ").trim().toLocaleLowerCase();
}

export function findGuests(guests: Guest[], query: string) {
  const words = normalizeSearch(query).split(" ").filter(Boolean);
  if (words.length === 0) return [];
  return guests.filter((guest) => {
    const name = normalizeSearch(guest.name);
    return words.every((word) => name.includes(word));
  }).slice(0, 6);
}
