import { NavItem } from "@/types/app";

export const appConfig = {
  brand: {
    name: "Super Chat",
    username: "Gadang Mahiswara",
  },
  promptMaxLength: 500,
  navItems: [
    { id: "chat" },
    { id: "projects" },
    { id: "brandVoice" },
    { id: "templates" },
    { id: "tools" },
  ] satisfies NavItem[],
} as const;
