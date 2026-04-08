import { Sparkles, PanelRightOpen } from "lucide-react";
import { LocaleSwitcher } from "@/components/ui/locale-switcher";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { appConfig } from "@/config/app-config";
import { Dictionary } from "@/locales";
import { Locale } from "@/types/i18n";

interface TopNavProps {
  dictionary: Dictionary;
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  onOpenHistory: () => void;
}

export function TopNav({
  dictionary,
  locale,
  onLocaleChange,
  onOpenHistory,
}: TopNavProps) {
  return (
    <header className="flex items-center justify-between gap-3 rounded-[1.5rem] bg-[#f6f5f1] px-3 py-2">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-inner shadow-emerald-200/80">
          <Sparkles className="h-5 w-5" />
        </div>
        <p className="truncate text-sm font-semibold leading-5 text-slate-900">
          {appConfig.brand.name}
        </p>
      </div>

      <div className="flex items-center gap-2.5">
        <LocaleSwitcher
          labels={{ en: dictionary.locale.en, id: dictionary.locale.id }}
          locale={locale}
          onChange={onLocaleChange}
        />
        <div className="hidden items-center gap-2.5 rounded-full bg-white px-2.5 py-1.5 shadow-sm sm:flex">
          <Avatar label="GD" className="h-9 w-9 rounded-full text-sm" />
          <div className="pr-1 text-left leading-tight">
            <p className="text-sm font-semibold text-slate-900">
              {appConfig.brand.username}
            </p>
            <p className="text-xs text-slate-500">{dictionary.user.role}</p>
          </div>
        </div>
        <Button
          size="icon"
          variant="secondary"
          className="h-10 w-10 xl:hidden"
          onClick={onOpenHistory}
          type="button"
          aria-label={dictionary.chat.openHistory}
        >
          <PanelRightOpen className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
