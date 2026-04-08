export const localeValues = ["en", "id"] as const;

export type Locale = (typeof localeValues)[number];
