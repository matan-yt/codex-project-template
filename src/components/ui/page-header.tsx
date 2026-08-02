import { type ReactNode } from "react";

export function PageHeader({ title, description, action }: { title: string; description: string; action?: ReactNode }) {
  return <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-honey-700">Admin workspace</p><h1 className="text-3xl font-extrabold tracking-tight text-slate-950">{title}</h1><p className="mt-2 max-w-2xl text-base text-slate-600">{description}</p></div>{action}</header>;
}
