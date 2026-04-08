import * as TabsPrimitive from "@radix-ui/react-tabs";
import { ReactNode } from "react";

export function Tabs({
  children,
  className,
  defaultValue,
}: {
  children: ReactNode;
  className?: string;
  defaultValue: string;
}) {
  return (
    <TabsPrimitive.Root defaultValue={defaultValue} className={className}>
      {children}
    </TabsPrimitive.Root>
  );
}

export function TabsList({ children }: { children: ReactNode }) {
  return (
    <TabsPrimitive.List className="flex w-full flex-wrap items-center gap-2 rounded-full bg-[#f6f5f1] p-2">
      {children}
    </TabsPrimitive.List>
  );
}

export function TabsTrigger({
  children,
  value,
}: {
  children: ReactNode;
  value: string;
}) {
  return (
    <TabsPrimitive.Trigger
      value={value}
      className="rounded-full px-4 py-2 text-sm font-medium text-slate-500 transition data-[state=active]:bg-slate-950 data-[state=active]:text-white"
    >
      {children}
    </TabsPrimitive.Trigger>
  );
}
