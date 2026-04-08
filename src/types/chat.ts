export type ChatRole = "assistant" | "user";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  createdAt: string;
}

export interface ChatConversation {
  id: string;
  title: string;
  preview: string;
  updatedAt: string;
}

export interface ChatDashboardData {
  messages: ChatMessage[];
  conversations: ChatConversation[];
}
