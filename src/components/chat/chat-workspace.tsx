import { Dictionary } from "@/locales";
import { ChatHistoryPanel } from "@/components/chat/chat-history-panel";
import { ChatMainPanel } from "@/components/chat/chat-main-panel";
import { useChatController } from "@/features/chat/use-chat-controller";
import { Locale } from "@/types/i18n";

interface ChatWorkspaceProps {
  chat: ReturnType<typeof useChatController>;
  dictionary: Dictionary;
  locale: Locale;
  onOpenHistory: () => void;
}

function ChatWorkspaceRoot({ chat, dictionary }: ChatWorkspaceProps) {
  return (
    <section className="min-h-0 flex-1 xl:grid xl:grid-cols-[minmax(720px,1fr)_clamp(220px,16vw,280px)] xl:gap-3">
      <ChatMainPanel chat={chat} dictionary={dictionary} />

      <aside className="hidden min-h-0 xl:flex">
        <ChatHistoryPanel
          conversations={chat.conversations}
          dictionary={dictionary}
          isLoading={chat.isLoading}
        />
      </aside>
    </section>
  );
}

function MobileHistory({
  chat,
  dictionary,
}: Omit<ChatWorkspaceProps, "onOpenHistory" | "locale">) {
  return (
    <div className="flex h-full flex-col gap-5">
      <ChatHistoryPanel
        conversations={chat.conversations}
        dictionary={dictionary}
        isLoading={chat.isLoading}
      />
    </div>
  );
}

export const ChatWorkspace = Object.assign(ChatWorkspaceRoot, {
  MobileHistory,
});
