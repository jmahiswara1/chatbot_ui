import { TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-24 w-full resize-none bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400",
      className,
    )}
    {...props}
  />
));

Textarea.displayName = "Textarea";
