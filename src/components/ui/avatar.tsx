import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "@/lib/utils";

interface AvatarProps {
  className?: string;
  label: string;
  tone?: "accent" | "light";
}

export function Avatar({ className, label, tone = "light" }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border",
        tone === "accent"
          ? "border-emerald-200 bg-emerald-100 text-emerald-700"
          : "border-white/70 bg-white text-slate-700",
        className,
      )}
    >
      <AvatarPrimitive.Fallback className="text-sm font-semibold">
        {label}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
}
