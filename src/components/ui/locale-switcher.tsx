import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { localeValues, Locale } from "@/types/i18n";

interface LocaleSwitcherProps {
  labels: Record<Locale, string>;
  locale: Locale;
  onChange: (locale: Locale) => void;
}

export function LocaleSwitcher({ labels, locale, onChange }: LocaleSwitcherProps) {
  return (
    <div className="flex items-center gap-1 rounded-full bg-white/70 p-1 shadow-sm">
      {localeValues.map((value) => (
        <Button
          key={value}
          size="sm"
          variant="ghost"
          className={cn(
            "h-9 rounded-full px-3 text-sm font-medium",
            value === locale && "bg-white text-slate-950 shadow-sm",
          )}
          onClick={() => onChange(value)}
          type="button"
        >
          {labels[value]}
        </Button>
      ))}
    </div>
  );
}
