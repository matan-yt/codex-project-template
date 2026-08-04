"use client";

type Props = { selectedTable: string };
const tablePositions = [
  [12, 558, 630], [11, 706, 630], [10, 854, 630], [9, 1002, 630],
  [8, 558, 783], [7, 706, 783], [6, 854, 783], [5, 1002, 783],
  [4, 558, 936], [3, 706, 936], [2, 854, 936], [1, 1002, 936],
] as const;
const sideTables = [[21, 19, 670], [20, 19, 804], [19, 19, 938]] as const;

function Table({ number, x, y, wide, active }: { number: number; x: number; y: number; wide?: boolean; active: boolean }) {
  const width = wide ? 281 : 120;
  const height = wide ? 91 : 115;
  return <g id={`table-${number}`} className={active ? "map-table selected" : "map-table"}>
    {active && <rect className="table-ring" x={x - 9} y={y - 9} width={width + 18} height={height + 18} rx="28" />}
    <rect className="table-shape" x={x} y={y} width={width} height={height} rx={wide ? 28 : 28} />
    <text x={x + width / 2} y={y + height / 2 + 9} textAnchor="middle">{number}</text>
  </g>;
}

export function HallMap({ selectedTable }: Props) {
  const activeTable = String(Number(selectedTable));
  const mapTables = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "19", "20", "21"]);
  if (!mapTables.has(activeTable)) console.warn(`Table ${selectedTable} does not exist on the hall map.`);
  return <section className="map-wrap" aria-label="מפת האולם">
    <div className="map-heading"><span>מפת האולם</span><i /></div>
    <svg className="hall-map" viewBox="0 0 1200 1200" role="img" aria-label={`מפת האולם, שולחן ${selectedTable} מודגש`}>
      <defs><linearGradient id="floor" x1="0" x2="1"><stop stopColor="#fbf2e7"/><stop offset="1" stopColor="#f5e5d8"/></linearGradient></defs>
      <rect x="12" y="12" width="1176" height="1176" rx="38" className="hall-border" />
      <rect x="32" y="32" width="1136" height="1136" rx="27" fill="url(#floor)" />
      <rect x="473" y="25" width="410" height="154" rx="28" className="dj-stage"/><text x="678" y="117" textAnchor="middle" className="area-label dj">DJ</text>
      <rect x="371" y="230" width="727" height="333" rx="31" className="dance-floor"/><text x="734" y="410" textAnchor="middle" className="area-label">רחבת ריקודים</text>
      <rect x="190" y="294" width="110" height="321" rx="23" className="bar"/><text x="245" y="463" textAnchor="middle" className="area-label">בר</text>
      {tablePositions.map(([number, x, y]) => <Table key={number} number={number} x={x} y={y} active={String(number) === activeTable} />)}
      {sideTables.map(([number, x, y]) => <Table key={number} number={number} x={x} y={y} wide active={String(number) === activeTable} />)}
      <path d="M334 1200v-80l90-90 90 90v80" className="entrance-line"/><text x="424" y="1131" textAnchor="middle" className="entrance-label">כניסה<tspan x="424" dy="28">לאולם</tspan></text>
    </svg>
  </section>;
}
