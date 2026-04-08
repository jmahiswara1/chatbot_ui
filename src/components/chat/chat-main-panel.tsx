import { MoreHorizontal } from "lucide-react";
import { ChatComposer } from "@/components/chat/chat-composer";
import { ChatMessageList } from "@/components/chat/chat-message-list";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dictionary } from "@/locales";
import { useChatController } from "@/features/chat/use-chat-controller";

interface ChatMainPanelProps {
  chat: ReturnType<typeof useChatController>;
  dictionary: Dictionary;
}

export function ChatMainPanel({ chat, dictionary }: ChatMainPanelProps) {
  return (
    <Card className="relative flex min-h-0 flex-col p-4 md:p-5">
      <Button
        size="icon"
        variant="ghost"
        type="button"
        className="absolute right-3 top-3 z-10 h-9 w-9 rounded-full bg-white/85 text-slate-500 shadow-sm hover:bg-white hover:text-slate-900"
        aria-label={dictionary.chat.moreActions}
      >
        <MoreHorizontal className="h-4 w-4" />
      </Button>

      <ChatMessageList
        actions={{ addToEditor: dictionary.chat.addToEditor, copy: dictionary.chat.copy }}
        isLoading={chat.isLoading}
        isSending={chat.isSending}
        messages={chat.messages}
      />

      <ChatComposer
        inputValue={chat.inputValue}
        isSending={chat.isSending}
        labels={dictionary.chat}
        onInputChange={chat.setInputValue}
        onSend={chat.sendMessage}
      />
    </Card>
  );
}
