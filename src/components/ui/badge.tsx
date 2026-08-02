import { type HTMLAttributes } from "react";
import { cn } from "@/lib/utils/cn";
export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) { return <span className={cn("inline-flex items-center rounded-full bg-honey-100 px-2.5 py-1 text-xs font-bold text-honey-900", className)} {...props} />; }
