import { Locale } from "@/types/i18n";

export const localizedChatContent: Record<
  Locale,
  {
    conversations: Array<{ id: string; title: string; preview: string; updatedAt: string }>;
    messages: Array<{ id: string; role: "assistant" | "user"; content: string; createdAt: string }>;
    generatedReplies: string[];
  }
> = {
  en: {
    conversations: [
      {
        id: "conv-1",
        title: "Create an AI assistant landing page",
        preview: "Modern hero, pricing, and FAQ sections",
        updatedAt: "2026-04-07T10:00:00.000Z",
      },
      {
        id: "conv-2",
        title: "Brand voice prompt for SaaS product",
        preview: "Professional but warm tone for onboarding flows",
        updatedAt: "2026-04-07T09:15:00.000Z",
      },
      {
        id: "conv-3",
        title: "Generate analytics dashboard structure",
        preview: "Cards, charts, filters, and export areas",
        updatedAt: "2026-04-06T18:30:00.000Z",
      },
      {
        id: "conv-4",
        title: "Best stack for a modern chatbot UI",
        preview: "Next.js, Tailwind, Radix UI, and typed services",
        updatedAt: "2026-04-06T15:10:00.000Z",
      },
    ],
    messages: [
      {
        id: "msg-1",
        role: "assistant",
        content:
          "Artificial intelligence helps systems understand language, patterns, and context. For a chatbot interface, we can present answers in a way that feels clean, readable, and calm during long sessions.",
        createdAt: "2026-04-07T08:00:00.000Z",
      },
      {
        id: "msg-2",
        role: "user",
        content: "I want to build a chatbot UI that feels modern, simple, and premium.",
        createdAt: "2026-04-07T08:01:00.000Z",
      },
      {
        id: "msg-3",
        role: "assistant",
        content:
          "A strong starting point is a three-area layout: top navigation, the main conversation panel, and a dedicated history panel. Once the structure is stable, connecting it to a backend becomes much easier.",
        createdAt: "2026-04-07T08:02:00.000Z",
      },
    ],
    generatedReplies: [
      "We can turn this starter into reusable building blocks first, then connect a service layer when the backend is ready.",
      "A small design system will help the chat experience stay consistent across messages, panels, drawers, and dialogs.",
      "If we keep the data flow typed from the beginning, replacing mocks with real API responses will be straightforward.",
    ],
  },
  id: {
    conversations: [
      {
        id: "conv-1",
        title: "Buat landing page untuk AI assistant",
        preview: "Hero modern, pricing, dan bagian FAQ",
        updatedAt: "2026-04-07T10:00:00.000Z",
      },
      {
        id: "conv-2",
        title: "Prompt brand voice untuk produk SaaS",
        preview: "Nada profesional tapi hangat untuk onboarding",
        updatedAt: "2026-04-07T09:15:00.000Z",
      },
      {
        id: "conv-3",
        title: "Generate struktur dashboard analytics",
        preview: "Card, chart, filter, dan area ekspor",
        updatedAt: "2026-04-06T18:30:00.000Z",
      },
      {
        id: "conv-4",
        title: "Stack terbaik untuk chatbot UI modern",
        preview: "Next.js, Tailwind, Radix UI, dan service bertipe",
        updatedAt: "2026-04-06T15:10:00.000Z",
      },
    ],
    messages: [
      {
        id: "msg-1",
        role: "assistant",
        content:
          "Artificial intelligence membantu sistem memahami bahasa, pola, dan konteks. Untuk antarmuka chatbot, kita bisa menampilkan jawaban yang terasa rapi, mudah dibaca, dan nyaman dipakai dalam sesi panjang.",
        createdAt: "2026-04-07T08:00:00.000Z",
      },
      {
        id: "msg-2",
        role: "user",
        content: "Saya ingin membuat chatbot UI yang modern, simpel, dan terasa premium.",
        createdAt: "2026-04-07T08:01:00.000Z",
      },
      {
        id: "msg-3",
        role: "assistant",
        content:
          "Titik awal yang kuat adalah layout tiga area: navigasi atas, panel percakapan utama, dan panel riwayat terpisah. Setelah strukturnya stabil, menghubungkannya ke backend akan jauh lebih mudah.",
        createdAt: "2026-04-07T08:02:00.000Z",
      },
    ],
    generatedReplies: [
      "Kita bisa ubah starter ini menjadi blok komponen reusable lebih dulu, lalu sambungkan service layer saat backend sudah siap.",
      "Design system kecil akan membantu pengalaman chat tetap konsisten di message, panel, drawer, dan dialog.",
      "Kalau alur data sudah bertipe sejak awal, mengganti mock dengan respons API nyata akan jauh lebih mudah.",
    ],
  },
};
