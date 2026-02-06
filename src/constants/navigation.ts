export const NAV_ITEMS = [
  { href: "/", localeKey: "home" },
  { href: "/about", localeKey: "about" },
  { href: "/experience", localeKey: "experience" },
  { href: "/contact", localeKey: "contact" },
] as const;

export const LANGUAGES_OPTIONS = {
  "en-us": {
    name: "English",
    flag: "circle-flags:us",
  },
  "pt-br": {
    name: "Português",
    flag: "circle-flags:br",
  },
} as const;

export const LANGUAGES_ARRAY = [
  { code: "en-us", name: "English", flag: "circle-flags:us" },
  { code: "pt-br", name: "Português", flag: "circle-flags:br" },
] as const;
