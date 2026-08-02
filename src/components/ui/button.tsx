import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils/cn";

const buttonVariants = cva("inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-honey-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", { variants: { variant: { primary: "bg-hive-700 text-white hover:bg-hive-800", secondary: "bg-hive-100 text-hive-900 hover:bg-hive-200", ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-950", danger: "bg-red-600 text-white hover:bg-red-700" }, size: { default: "h-10 px-4", sm: "h-8 px-3 text-xs", lg: "h-11 px-5" } }, defaultVariants: { variant: "primary", size: "default" } });
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, ...props }, ref) => <button className={cn(buttonVariants({ variant, size }), className)} ref={ref} {...props} />);
Button.displayName = "Button";
