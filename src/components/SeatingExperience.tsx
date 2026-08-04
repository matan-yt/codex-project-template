"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { siteConfig } from "../config/site";
import { loadGuests, type Guest } from "../lib/googleSheets";
import { findGuests } from "../lib/search";
import { HallMap } from "./HallMap";

export function SeatingExperience() {
  const [guests, setGuests] = useState<Guest[]>([]); const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Guest | null>(null); const [loading, setLoading] = useState(true); const [error, setError] = useState(false);
  const resultRef = useRef<HTMLElement>(null);
  const suggestions = useMemo(() => query.trim().length >= 2 ? findGuests(guests, query) : [], [guests, query]);
  const fetchGuests = async (refresh = false) => { setLoading(true); setError(false); try { setGuests(await loadGuests(refresh)); } catch { setError(true); } finally { setLoading(false); } };
  useEffect(() => { void fetchGuests(); }, []);
  useEffect(() => { if (selected) window.setTimeout(() => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 60); }, [selected]);
  const reset = () => { setSelected(null); setQuery(""); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return <main>
    <section className="hero" style={siteConfig.heroImagePath ? { backgroundImage: `url(${siteConfig.heroImagePath})` } : undefined}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow">חוגגים יחד</p><h1>{siteConfig.eventTitle}</h1><p className="subtitle">{siteConfig.subtitle}</p>
        <div className="search-panel">
          <h2>{siteConfig.searchInstruction}</h2>
          <label className="search-field"><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => { setQuery(event.target.value); setSelected(null); }} placeholder={siteConfig.searchPlaceholder} aria-label={siteConfig.searchPlaceholder} autoComplete="off" /></label>
          <p className="helper">אפשר להקליד שם פרטי, שם משפחה או חלק מהשם</p>
          {loading && <p className="status">טוענים את רשימת ההושבה…</p>}
          {error && <div className="error"><p>לא הצלחנו לטעון את רשימת ההושבה. נסו לרענן את העמוד.</p><button onClick={() => void fetchGuests(true)}>נסו שוב</button></div>}
          {!loading && !error && query.trim().length >= 2 && <div className="suggestions" role="listbox">
            {suggestions.length ? suggestions.map((guest) => <button key={`${guest.name}-${guest.table}`} onClick={() => setSelected(guest)} role="option">{guest.name}<span>←</span></button>) : <div className="no-results"><strong>לא מצאנו את השם</strong><span>נסו להקליד שם פרטי, שם משפחה או חלק אחר מהשם</span></div>}
          </div>}
          <button className="refresh" onClick={() => void fetchGuests(true)} disabled={loading}>↻ רענון רשימה</button>
        </div>
      </div>
    </section>
    {selected && <section className="result-section" ref={resultRef} tabIndex={-1}>
      <article className="result-card"><p>ברוכים הבאים, {selected.name}</p><div className="table-value"><span>השולחן שלכם</span><strong>{selected.table}</strong></div>{selected.guestCount && <small>ההזמנה שלכם כוללת {selected.guestCount} אורחים</small>}<button onClick={reset}>חיפוש נוסף</button></article>
      <HallMap selectedTable={selected.table} />
    </section>}
    <footer>נתראה ברחבה ✦</footer>
  </main>;
}
