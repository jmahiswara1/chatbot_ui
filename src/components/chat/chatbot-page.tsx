"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/app-shell";
import { LeftSidebar } from "@/components/layout/left-sidebar";
import { TopNav } from "@/components/layout/top-nav";
import { ChatWorkspace } from "@/components/chat/chat-workspace";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useI18n } from "@/features/i18n/i18n-provider";
import { useChatController } from "@/features/chat/use-chat-controller";

export function ChatbotPage() {
  const { dictionary, locale, setLocale } = useI18n();
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const chat = useChatController(locale);

  return (
    <TooltipProvider>
      <AppShell>
        <div className="flex min-h-0 flex-1 gap-3">
          <LeftSidebar
            collapsed={isSidebarCollapsed}
            dictionary={dictionary}
            onToggle={() => setIsSidebarCollapsed((current) => !current)}
          />

          <div className="flex min-h-0 flex-1 flex-col gap-3">
            <TopNav
              dictionary={dictionary}
              locale={locale}
              onLocaleChange={setLocale}
              onOpenHistory={() => setIsHistoryOpen(true)}
            />

            <ChatWorkspace
              chat={chat}
              dictionary={dictionary}
              locale={locale}
              onOpenHistory={() => setIsHistoryOpen(true)}
            />
          </div>
        </div>

        <Dialog open={isHistoryOpen} onOpenChange={setIsHistoryOpen}>
          <DialogContent className="xl:hidden">
            <ChatWorkspace.MobileHistory chat={chat} dictionary={dictionary} />
          </DialogContent>
        </Dialog>
      </AppShell>
    </TooltipProvider>
  );
}
