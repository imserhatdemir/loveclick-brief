import { Heart, Home, Sparkles, Layout, Settings, FileText } from "lucide-react";
import { useTranslation } from "../../i18n";
import { useActiveSection } from "../../hooks/useActiveSection";
import LanguageToggle from "../ui/LanguageToggle";

const navIcons = {
  overview: Home,
  workflows: Sparkles,
  pages: Layout,
  technical: Settings,
  notes: FileText,
};

const navIds = ["overview", "workflows", "pages", "technical", "notes"] as const;

export default function Sidebar() {
  const { t } = useTranslation();
  const active = useActiveSection();

  return (
    <aside className="hidden md:flex flex-col w-60 flex-shrink-0 sticky top-0 h-screen border-r border-pink-100 bg-white">
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 h-16 border-b border-pink-100">
        <div className="w-9 h-9 rounded-2xl bg-pink-100 flex items-center justify-center">
          <Heart size={18} className="text-pink-500 fill-pink-400" />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-base font-extrabold text-gray-800">{t.site.title}</span>
          <span className="text-[10px] font-medium text-pink-400">{t.site.subtitle}</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 px-3 overflow-y-auto">
        <p className="px-2 mb-2 text-[10px] font-700 font-bold text-pink-300 uppercase tracking-widest">
          Sections
        </p>
        <ul className="space-y-0.5">
          {navIds.map((id) => {
            const Icon = navIcons[id];
            const isActive = active === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-2xl text-sm font-semibold transition-all
                    ${isActive
                      ? "bg-pink-100 text-pink-600"
                      : "text-gray-500 hover:bg-pink-50 hover:text-pink-500"}
                  `}
                >
                  <Icon size={16} />
                  {t.nav[id]}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Lang toggle */}
      <div className="px-5 py-4 border-t border-pink-100">
        <LanguageToggle />
      </div>
    </aside>
  );
}
