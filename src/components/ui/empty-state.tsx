import { Inbox } from "lucide-react";
import { Card } from "@/components/ui/card";
export function EmptyState({ title, description }: { title: string; description: string }) { return <Card className="flex min-h-64 flex-col items-center justify-center px-6 text-center"><div className="mb-4 rounded-2xl bg-honey-100 p-3 text-honey-800"><Inbox aria-hidden="true" /></div><h2 className="text-lg font-bold text-slate-950">{title}</h2><p className="mt-2 max-w-sm text-sm leading-6 text-slate-600">{description}</p></Card>; }
