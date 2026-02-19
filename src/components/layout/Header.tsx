import { Heart } from "lucide-react";
import { useTranslation } from "../../i18n";
import LanguageToggle from "../ui/LanguageToggle";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 md:hidden bg-white/90 backdrop-blur-sm border-b border-pink-100">
      <div className="flex items-center justify-between px-4 h-14">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-pink-100 flex items-center justify-center">
            <Heart size={14} className="text-pink-500 fill-pink-400" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-extrabold text-gray-800 tracking-tight">
              {t.site.title}
            </span>
            <span className="text-[10px] font-medium text-pink-400">
              {t.site.subtitle}
            </span>
          </div>
        </div>
        <LanguageToggle />
      </div>
    </header>
  );
}
