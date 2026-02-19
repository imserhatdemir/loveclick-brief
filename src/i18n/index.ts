import { createContext, useContext } from "react";
import { en, type Translations } from "./en";
import { tr } from "./tr";
import type { Lang } from "../types";

export type { Lang };
export type { Translations };

export const translations: Record<Lang, Translations> = { en, tr };

interface LangContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

export const LangContext = createContext<LangContextValue>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export const useTranslation = () => useContext(LangContext);
