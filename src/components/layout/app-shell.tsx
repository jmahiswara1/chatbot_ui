import { ReactNode } from "react";

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <main className="h-dvh w-full overflow-hidden bg-[radial-gradient(circle_at_top,_#effef7,_#f7f7f2_35%,_#efefec_100%)] p-[clamp(6px,0.7vw,14px)] text-slate-900">
      <div className="flex h-full w-full flex-col gap-[clamp(10px,0.9vw,16px)] overflow-hidden rounded-[clamp(20px,1.8vw,34px)] border border-white/70 bg-white/80 p-[clamp(10px,0.9vw,16px)] shadow-[0_30px_80px_rgba(15,23,42,0.08)] backdrop-blur">
        {children}
      </div>
    </main>
  );
}
