import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dictionary } from "@/locales";
import { ChatConversation } from "@/types/chat";

interface ChatHistoryPanelProps {
  conversations: ChatConversation[];
  dictionary: Dictionary;
  isLoading: boolean;
}

export function ChatHistoryPanel({
  conversations,
  dictionary,
  isLoading,
}: ChatHistoryPanelProps) {
  return (
    <Card className="flex min-h-0 flex-1 flex-col p-4">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="text-xl font-semibold tracking-tight">{dictionary.chat.historyTitle}</p>
          <p className="text-sm text-slate-500">{dictionary.chat.historySubtitle}</p>
        </div>
        <Button
          size="icon"
          variant="secondary"
          type="button"
          aria-label={dictionary.chat.openHistory}
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>

      <ScrollArea className="min-h-0 flex-1 overflow-hidden" viewportClassName="h-full w-full">
        <div className="space-y-2 pr-2">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="h-20 animate-pulse rounded-[1.5rem] bg-white" />
              ))
            : conversations.map((conversation) => (
                <button
                  key={conversation.id}
                  className="w-full rounded-[1.35rem] border border-emerald-100 bg-[#f3fff8] px-3 py-3 text-left transition hover:border-emerald-200 hover:bg-[#ecfff5]"
                  type="button"
                >
                  <p className="text-sm font-medium leading-6 text-slate-700">
                    {conversation.title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{conversation.preview}</p>
                </button>
              ))}
        </div>
      </ScrollArea>
    </Card>
  );
}
