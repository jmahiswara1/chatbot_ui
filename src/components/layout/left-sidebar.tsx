import {
  FolderKanban,
  LayoutTemplate,
  MessageSquareText,
  PanelLeftClose,
  PanelLeftOpen,
  Sparkles,
  Wrench,
} from "lucide-react";
import { appConfig } from "@/config/app-config";
import { Button } from "@/components/ui/button";
import { Dictionary } from "@/locales";
import { cn } from "@/lib/utils";

interface LeftSidebarProps {
  collapsed: boolean;
  dictionary: Dictionary;
  onToggle: () => void;
}

const navIconMap = {
  brandVoice: Sparkles,
  chat: MessageSquareText,
  projects: FolderKanban,
  templates: LayoutTemplate,
  tools: Wrench,
} as const;

export function LeftSidebar({ collapsed, dictionary, onToggle }: LeftSidebarProps) {
  return (
    <aside
      className={cn(
        "hidden h-full shrink-0 flex-col rounded-[1.75rem] border border-white/70 bg-[#fcfcfa] p-3 shadow-inner shadow-slate-200/40 lg:flex",
        collapsed ? "w-[84px]" : "w-[clamp(220px,14vw,250px)]",
      )}
    >
      <div className={cn("flex items-center gap-3 pb-3", collapsed && "justify-center")}>
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-inner shadow-emerald-200/80">
          <Sparkles className="h-5 w-5" />
        </div>
        {!collapsed && (
          <div>
            <p className="text-sm font-semibold leading-5">{appConfig.brand.name}</p>
            <p className="text-xs text-slate-500">AI workspace</p>
          </div>
        )}
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-2 pt-1">
        {appConfig.navItems.map((item) => {
          const Icon = navIconMap[item.id as keyof typeof navIconMap];
          const label = dictionary.nav[item.id as keyof Dictionary["nav"]];
          const isActive = item.id === "chat";

          return (
            <button
              key={item.id}
              type="button"
              className={cn(
                "flex h-12 items-center rounded-[1.2rem] px-3 text-sm font-medium transition",
                collapsed ? "justify-center px-0" : "gap-3",
                isActive
                  ? "bg-slate-950 text-white shadow-sm"
                  : "text-slate-500 hover:bg-white hover:text-slate-950",
              )}
              aria-label={label}
              title={collapsed ? label : undefined}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {!collapsed && <span>{label}</span>}
            </button>
          );
        })}
      </div>

      <div className="pt-3">
        <Button
          type="button"
          size="icon"
          variant="ghost"
          className={cn("h-10 w-10 shrink-0", !collapsed && "w-full justify-start px-3")}
          onClick={onToggle}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <PanelLeftOpen className="h-4 w-4" /> : <PanelLeftClose className="h-4 w-4" />}
          {!collapsed && <span className="text-sm">Collapse</span>}
        </Button>
      </div>
    </aside>
  );
}
