"use client";

import { useState, type ReactNode } from "react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";

export function AppShell({ children, email }: { children: ReactNode; email: string }) {
  const [open, setOpen] = useState(false);
  return <div className="min-h-screen bg-slate-50 lg:flex"><Sidebar open={open} onClose={() => setOpen(false)} />{open && <button aria-label="Close navigation overlay" className="fixed inset-0 z-30 bg-slate-950/40 lg:hidden" onClick={() => setOpen(false)} />}<div className="min-w-0 flex-1"><Header email={email} onMenu={() => setOpen(true)} /><main className="mx-auto w-full max-w-7xl p-5 sm:p-8">{children}</main></div></div>;
}
