"use client";

import { useEffect, useRef } from "react";
import { WandSparkles } from "lucide-react";
import { ChatMessageItem } from "@/components/chat/chat-message-item";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChatMessage } from "@/types/chat";

interface ChatLabels {
  addToEditor: string;
  copy: string;
  regenerate: string;
}

interface ChatMessageListProps {
  actions: ChatLabels;
  isLoading: boolean;
  isSending: boolean;
  messages: ChatMessage[];
}

export function ChatMessageList({
  actions,
  isLoading,
  isSending,
  messages,
}: ChatMessageListProps) {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isSending]);

  return (
    <div className="min-h-0 flex-1 pr-8 md:pr-10">
      <ScrollArea className="h-full overflow-hidden" viewportClassName="h-full w-full pr-2">
        <div className="space-y-4 pt-0.5">
          {isLoading
            ? Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="h-28 animate-pulse rounded-[1.75rem] bg-white" />
              ))
            : messages.map((message) => (
                <ChatMessageItem key={message.id} labels={actions} message={message} />
              ))}

          {isSending && (
            <div className="flex gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-100 text-sm font-semibold text-emerald-700">
                AI
              </div>
              <div className="flex items-center gap-2 rounded-[1.75rem] border border-emerald-100 bg-[#f1fff7] px-5 py-4">
                <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-500 [animation-delay:-0.2s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-500 [animation-delay:-0.1s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-500" />
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </ScrollArea>

      <div className="mt-3 flex justify-center pr-0 md:pr-2">
        <Button type="button">
          <WandSparkles className="h-4 w-4" />
          {actions.regenerate}
        </Button>
      </div>
    </div>
  );
}
