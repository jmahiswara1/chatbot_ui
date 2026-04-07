"use client";

import { Sparkles, MoreHorizontal, PanelRightOpen, Search, SendHorizonal, WandSparkles } from "lucide-react";
import * as Avatar from "@radix-ui/react-avatar";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as Separator from "@radix-ui/react-separator";
import * as Tabs from "@radix-ui/react-tabs";
import * as Tooltip from "@radix-ui/react-tooltip";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const navItems = ["Chat", "My Project", "Brand Voice", "Templates", "Tools"];

const messages = [
  {
    id: 1,
    role: "assistant" as const,
    text: "Artificial Intelligence membantu sistem memahami bahasa, pola, dan konteks. Untuk UI chatbot, kita bisa tampilkan jawaban yang bersih, cepat dibaca, dan nyaman dipakai dalam sesi panjang.",
  },
  {
    id: 2,
    role: "user" as const,
    text: "Saya ingin membuat chatbot UI yang modern, simpel, dan terasa premium.",
  },
  {
    id: 3,
    role: "assistant" as const,
    text: "Kita bisa mulai dari layout tiga area: navigasi atas, area percakapan utama, dan panel history. Setelah itu baru sambungkan ke API chatbot dan state management.",
  },
];

const historyItems = [
  "Buat landing page untuk AI assistant",
  "Prompt penulisan brand voice untuk produk SaaS",
  "Generate struktur dashboard analytics",
  "Apa stack terbaik untuk chatbot UI modern?",
];

function UserAvatar({ label, tone = "light" }: { label: string; tone?: "light" | "accent" }) {
  return (
    <Avatar.Root
      className={cn(
        "flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-2xl border",
        tone === "accent"
          ? "border-emerald-200 bg-emerald-100 text-emerald-700"
          : "border-white/70 bg-white text-slate-700",
      )}
    >
      <Avatar.Fallback className="text-sm font-semibold">{label}</Avatar.Fallback>
    </Avatar.Root>
  );
}

export default function Home() {
  return (
    <Tooltip.Provider delayDuration={150}>
      <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#effef7,_#f7f7f2_35%,_#efefec_100%)] px-4 py-6 text-slate-900 md:px-8">
        <div className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-7xl flex-col gap-6 rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur md:p-6">
          <header className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-inner shadow-emerald-200/80">
                <Sparkles className="h-6 w-6" />
              </div>

              <Tabs.Root defaultValue="Chat" className="w-full">
                <Tabs.List className="flex w-full flex-wrap items-center gap-2 rounded-full bg-[#f6f5f1] p-2">
                  {navItems.map((item) => (
                    <Tabs.Trigger
                      key={item}
                      value={item}
                      className="rounded-full px-4 py-2 text-sm font-medium text-slate-500 transition data-[state=active]:bg-slate-950 data-[state=active]:text-white"
                    >
                      {item}
                    </Tabs.Trigger>
                  ))}
                </Tabs.List>
              </Tabs.Root>
            </div>

            <div className="flex items-center justify-between gap-3 rounded-full bg-[#f6f5f1] p-2 pl-3">
              <div className="flex items-center gap-3">
                <UserAvatar label="IK" />
                <div>
                  <p className="text-sm font-semibold">ikkiseek</p>
                  <p className="text-xs text-slate-500">Product Designer</p>
                </div>
              </div>
              <button className="rounded-full bg-white p-2 text-slate-500 shadow-sm transition hover:text-slate-900">
                <PanelRightOpen className="h-4 w-4" />
              </button>
            </div>
          </header>

          <section className="grid flex-1 gap-6 lg:grid-cols-[minmax(0,1.7fr)_320px]">
            <div className="rounded-[2rem] bg-[#fcfcfa] p-4 shadow-inner shadow-slate-200/40 md:p-6">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="text-2xl font-semibold tracking-tight">Super Chat</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Starter layout untuk chatbot UI dengan Radix primitives.
                  </p>
                </div>
                <button className="rounded-full p-2 text-slate-500 transition hover:bg-white hover:text-slate-900">
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>

              <ScrollArea.Root className="h-[60vh] overflow-hidden">
                <ScrollArea.Viewport className="h-full w-full pr-3">
                  <div className="space-y-6">
                    {messages.map((message, index) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, delay: index * 0.08 }}
                        className={cn(
                          "flex gap-3",
                          message.role === "user" ? "justify-start" : "justify-start",
                        )}
                      >
                        <UserAvatar
                          label={message.role === "assistant" ? "AI" : "IK"}
                          tone={message.role === "assistant" ? "accent" : "light"}
                        />
                        <div className="max-w-3xl space-y-3">
                          <div
                            className={cn(
                              "rounded-[1.75rem] border px-5 py-4 text-[15px] leading-7 shadow-sm",
                              message.role === "assistant"
                                ? "border-emerald-100 bg-[#f1fff7]"
                                : "border-white bg-white",
                            )}
                          >
                            {message.text}
                          </div>
                          <div className="flex items-center gap-3 px-2 text-xs text-slate-400">
                            <span>Copy</span>
                            <span>Add to Editor</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar
                  orientation="vertical"
                  className="flex w-2 touch-none rounded-full bg-slate-100 p-0.5"
                >
                  <ScrollArea.Thumb className="relative flex-1 rounded-full bg-slate-300" />
                </ScrollArea.Scrollbar>
              </ScrollArea.Root>

              <div className="mt-6 flex justify-center">
                <button className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800">
                  <WandSparkles className="h-4 w-4" />
                  Regenerate Response
                </button>
              </div>

              <div className="mt-6 rounded-[1.75rem] border border-white bg-white p-4 shadow-sm">
                <label htmlFor="prompt" className="sr-only">
                  Ask or search anything
                </label>
                <textarea
                  id="prompt"
                  className="min-h-32 w-full resize-none bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                  placeholder="Ask or search anything"
                />
                <Separator.Root className="my-4 h-px bg-slate-100" />
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
                    <button className="rounded-full bg-[#f6f5f1] px-3 py-2 transition hover:text-slate-900">
                      Browse Prompts
                    </button>
                    <button className="rounded-full bg-[#f6f5f1] px-3 py-2 transition hover:text-slate-900">
                      No Brand Voice
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-500 transition hover:text-slate-900">
                      Improve
                    </button>
                    <button className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-white transition hover:bg-slate-800">
                      <SendHorizonal className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <aside className="flex flex-col gap-5">
              <div className="rounded-[2rem] bg-[#fcfcfa] p-5 shadow-inner shadow-slate-200/40">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-semibold tracking-tight">History Chat</p>
                    <p className="text-sm text-slate-500">Prompt dan sesi terakhir</p>
                  </div>
                  <button className="rounded-full bg-white p-2 text-slate-500 shadow-sm transition hover:text-slate-900">
                    <Search className="h-4 w-4" />
                  </button>
                </div>

                <ScrollArea.Root className="h-[360px] overflow-hidden">
                  <ScrollArea.Viewport className="h-full w-full">
                    <div className="space-y-3 pr-3">
                      {historyItems.map((item) => (
                        <button
                          key={item}
                          className="w-full rounded-[1.5rem] border border-emerald-100 bg-[#f3fff8] px-4 py-3 text-left text-sm leading-6 text-slate-700 transition hover:border-emerald-200 hover:bg-[#ecfff5]"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </ScrollArea.Viewport>
                  <ScrollArea.Scrollbar
                    orientation="vertical"
                    className="flex w-2 touch-none rounded-full bg-slate-100 p-0.5"
                  >
                    <ScrollArea.Thumb className="relative flex-1 rounded-full bg-slate-300" />
                  </ScrollArea.Scrollbar>
                </ScrollArea.Root>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.25 }}
                className="overflow-hidden rounded-[2rem] bg-[linear-gradient(145deg,_#45e393,_#8bf7c9_55%,_#d8fff1)] p-5 text-slate-900 shadow-[0_24px_50px_rgba(16,185,129,0.24)]"
              >
                <div className="mb-8 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-emerald-600">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xl font-semibold">Pro Plan</p>
                    <p className="text-sm text-slate-700/70">Unlock premium workspace</p>
                  </div>
                </div>
                <p className="text-4xl font-semibold tracking-tight">$126.54</p>
                <p className="mt-1 text-sm text-slate-700/75">per month</p>
                <p className="mt-4 max-w-xs text-sm leading-6 text-slate-700/80">
                  Dapatkan history lebih panjang, template tim, dan akses workspace AI yang lebih lengkap.
                </p>
                <button className="mt-8 w-full rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800">
                  Get Pro Plan Now
                </button>
              </motion.div>
            </aside>
          </section>
        </div>
      </main>
    </Tooltip.Provider>
  );
}
