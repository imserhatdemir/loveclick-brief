import { useTranslation } from "../../i18n";

export default function LanguageToggle() {
  const { lang, setLang, t } = useTranslation();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "tr" : "en")}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-100 hover:bg-pink-200 transition-colors text-sm font-bold text-pink-600"
      aria-label="Toggle language"
    >
      <span className="text-xs text-pink-400">{t.lang.current}</span>
      <span className="w-px h-3 bg-pink-300" />
      <span>{t.lang.toggle}</span>
    </button>
  );
}
