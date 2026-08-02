import { AlertCircle, Info } from "lucide-react";
import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";
export function Alert({ variant = "info", className, children, ...props }: HTMLAttributes<HTMLDivElement> & { variant?: "info" | "error" }) { const Icon = variant === "error" ? AlertCircle : Info; return <div role="alert" className={cn("flex gap-3 rounded-xl border p-4 text-sm", variant === "error" ? "border-red-200 bg-red-50 text-red-900" : "border-hive-200 bg-hive-50 text-hive-950", className)} {...props}><Icon className="mt-0.5 size-4 shrink-0" />{children}</div>; }
