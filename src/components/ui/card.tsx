import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[2rem] bg-[#fcfcfa] shadow-inner shadow-slate-200/40",
        className,
      )}
      {...props}
    />
  );
}
