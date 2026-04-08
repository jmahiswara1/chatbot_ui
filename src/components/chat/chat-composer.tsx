"use client";

import { KeyboardEvent } from "react";
import { SendHorizonal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";

interface ChatComposerProps {
  inputValue: string;
  isSending: boolean;
  labels: {
    browsePrompts: string;
    composerPlaceholder: string;
    improve: string;
    noBrandVoice: string;
    send: string;
  };
  onInputChange: (value: string) => void;
  onSend: () => Promise<void>;
}

export function ChatComposer({
  inputValue,
  isSending,
  labels,
  onInputChange,
  onSend,
}: ChatComposerProps) {
  const isDisabled = !inputValue.trim() || isSending;

  const handleKeyDown = async (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key !== "Enter" || event.shiftKey) {
      return;
    }

    event.preventDefault();
    await onSend();
  };

  return (
    <div className="mt-3 rounded-[1.5rem] border border-white bg-white p-3 shadow-sm">
      <label htmlFor="prompt" className="sr-only">
        {labels.composerPlaceholder}
      </label>
      <Textarea
        id="prompt"
        className="min-h-20 text-sm leading-6"
        placeholder={labels.composerPlaceholder}
        value={inputValue}
        onChange={(event) => onInputChange(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Separator />
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Button type="button" variant="soft" size="sm">
            {labels.browsePrompts}
          </Button>
          <Button type="button" variant="soft" size="sm">
            {labels.noBrandVoice}
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button type="button" variant="secondary" size="sm">
            {labels.improve}
          </Button>
          <Button
            type="button"
            size="icon"
            className="h-10 w-10"
            onClick={onSend}
            disabled={isDisabled}
            aria-label={labels.send}
          >
            <SendHorizonal className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
