import { motion } from "motion/react";
import { Avatar } from "@/components/ui/avatar";
import { ChatMessage } from "@/types/chat";
import { cn } from "@/lib/utils";

interface ChatMessageItemProps {
  labels: {
    addToEditor: string;
    copy: string;
  };
  message: ChatMessage;
}

export function ChatMessageItem({ labels, message }: ChatMessageItemProps) {
  const isAssistant = message.role === "assistant";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="flex gap-3"
    >
      <Avatar
        label={isAssistant ? "AI" : "GD"}
        tone={isAssistant ? "accent" : "light"}
      />
      <div className="max-w-3xl space-y-3">
        <div
          className={cn(
            "rounded-[1.75rem] border px-5 py-4 text-[15px] leading-7 shadow-sm",
            isAssistant
              ? "border-emerald-100 bg-[#f1fff7]"
              : "border-white bg-white",
          )}
        >
          {message.content}
        </div>
        <div className="flex items-center gap-3 px-2 text-xs text-slate-400">
          <span>{labels.copy}</span>
          <span>{labels.addToEditor}</span>
        </div>
      </div>
    </motion.div>
  );
}
