export const siteConfig = {
  eventTitle: "בת המצווה של אביה",
  subtitle: "איזה כיף שבאתם לחגוג איתנו",
  searchInstruction: "הקלידו את השם שלכם כדי למצוא את השולחן",
  searchPlaceholder: "חיפוש לפי שם",
  spreadsheetId: "1jnD47xLRHeEzegnPnbokXCZb-yxaN7I8wrXcwhMbpGo",
  // The public Google Sheet tab containing the seating data.
  sheetName: "Sheet1",
  sheetGid: "658573267",
  heroImagePath: "/images/avia-hero.jpg",
} as const;

export function getSheetCsvUrl(cacheBust = false) {
  const url = new URL(`https://docs.google.com/spreadsheets/d/${siteConfig.spreadsheetId}/gviz/tq`);
  url.searchParams.set("tqx", "out:csv");
  url.searchParams.set("sheet", siteConfig.sheetName);
  url.searchParams.set("gid", siteConfig.sheetGid);
  if (cacheBust) url.searchParams.set("_", Date.now().toString());
  return url.toString();
}
