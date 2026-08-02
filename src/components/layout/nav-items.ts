import { type LucideIcon, BookOpen, FolderKanban, Gamepad2, Image, LayoutDashboard, Settings, Timer } from "lucide-react";
export type NavItem = { href: string; label: string; icon: LucideIcon };
export const navItems: NavItem[] = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard }, { href: "/games", label: "Games", icon: Gamepad2 }, { href: "/questions", label: "Questions", icon: BookOpen }, { href: "/categories", label: "Categories", icon: FolderKanban }, { href: "/media", label: "Media", icon: Image }, { href: "/sessions", label: "Sessions", icon: Timer }, { href: "/settings", label: "Settings", icon: Settings },
];
