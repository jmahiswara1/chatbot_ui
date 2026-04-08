"use client";

import { useEffect, useState, useTransition } from "react";
import { appConfig } from "@/config/app-config";
import { generateAssistantReply, getChatDashboard } from "@/services/mock-chat-service";
import { ChatConversation, ChatMessage } from "@/types/chat";
import { Locale } from "@/types/i18n";

interface ChatControllerState {
  conversations: ChatConversation[];
  inputValue: string;
  isLoading: boolean;
  isSending: boolean;
  messages: ChatMessage[];
}

const initialState: ChatControllerState = {
  conversations: [],
  inputValue: "",
  isLoading: true,
  isSending: false,
  messages: [],
};

export function useChatController(locale: Locale) {
  const [state, setState] = useState<ChatControllerState>(initialState);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    let isMounted = true;

    startTransition(async () => {
      const data = await getChatDashboard(locale);

      if (!isMounted) {
        return;
      }

      setState((current) => ({
        ...current,
        conversations: data.conversations,
        isLoading: false,
        messages: data.messages,
      }));
    });

    return () => {
      isMounted = false;
    };
  }, [locale]);

  const setInputValue = (inputValue: string) => {
    setState((current) => ({
      ...current,
      inputValue: inputValue.slice(0, appConfig.promptMaxLength),
    }));
  };

  const sendMessage = async () => {
    const content = state.inputValue.trim();

    if (!content || state.isSending) {
      return;
    }

    const nextUserMessage: ChatMessage = {
      id: `msg-${crypto.randomUUID()}`,
      role: "user",
      content,
      createdAt: new Date().toISOString(),
    };

    setState((current) => ({
      ...current,
      inputValue: "",
      isSending: true,
      messages: [...current.messages, nextUserMessage],
    }));

    const assistantMessage = await generateAssistantReply(locale, content);

    setState((current) => ({
      ...current,
      isSending: false,
      messages: [...current.messages, assistantMessage],
    }));
  };

  return {
    conversations: state.conversations,
    inputValue: state.inputValue,
    isLoading: state.isLoading || isPending,
    isSending: state.isSending,
    messages: state.messages,
    sendMessage,
    setInputValue,
  };
}
