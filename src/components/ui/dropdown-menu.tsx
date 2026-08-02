"use client";

import { type ReactNode, useState } from "react";
export function DropdownMenu({ label, children }: { label: string; children: ReactNode }) { const [open, setOpen] = useState(false); return <div className="relative"><button onClick={() => setOpen(!open)} aria-expanded={open} className="rounded-lg px-3 py-2 text-sm font-semibold hover:bg-slate-100">{label}</button>{open && <div className="absolute right-0 z-20 mt-2 min-w-44 rounded-xl border border-slate-200 bg-white p-1 shadow-lg">{children}</div>}</div>; }
