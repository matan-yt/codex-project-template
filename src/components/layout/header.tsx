"use client";
import { Menu, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth/actions";
export function Header({ email, onMenu }: { email: string; onMenu: () => void }) { return <header className="flex h-18 items-center justify-between border-b border-slate-200 bg-white px-4 sm:px-7"><Button onClick={onMenu} variant="ghost" className="lg:hidden" aria-label="Open navigation"><Menu /></Button><div className="ml-auto flex items-center gap-3"><div className="hidden text-right sm:block"><p className="text-sm font-semibold text-slate-900">Signed in</p><p className="max-w-52 truncate text-xs text-slate-500">{email}</p></div><form action={signOut}><Button variant="ghost" size="sm" aria-label="Log out"><LogOut className="size-4" /><span className="hidden sm:inline">Log out</span></Button></form></div></header>; }
