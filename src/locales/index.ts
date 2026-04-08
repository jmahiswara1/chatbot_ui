import { en } from "@/locales/en";
import { id } from "@/locales/id";

export const dictionaries = {
  en,
  id,
} as const;

export type Dictionary = (typeof dictionaries)[keyof typeof dictionaries];
