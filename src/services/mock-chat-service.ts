import { localizedChatContent } from "@/mocks/chat";
import { ChatDashboardData, ChatMessage } from "@/types/chat";
import { Locale } from "@/types/i18n";

const wait = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

export async function getChatDashboard(locale: Locale): Promise<ChatDashboardData> {
  await wait(120);

  const { conversations, messages } = localizedChatContent[locale];

  return {
    conversations,
    messages,
  };
}

export async function generateAssistantReply(locale: Locale, prompt: string): Promise<ChatMessage> {
  await wait(280);

  const { generatedReplies } = localizedChatContent[locale];
  const generatedReply = generatedReplies[prompt.length % generatedReplies.length];

  return {
    id: `msg-${crypto.randomUUID()}`,
    role: "assistant",
    content: generatedReply,
    createdAt: new Date().toISOString(),
  };
}
