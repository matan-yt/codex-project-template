import { type InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils/cn";
export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => <input className={cn("h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-base text-slate-950 shadow-sm outline-none placeholder:text-slate-400 focus:border-hive-500 focus:ring-2 focus:ring-hive-200 disabled:cursor-not-allowed disabled:bg-slate-50", className)} ref={ref} {...props} />);
Input.displayName = "Input";
