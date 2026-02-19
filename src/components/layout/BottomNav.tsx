import { Home, Sparkles, Layout, Settings, FileText } from "lucide-react";
import { useTranslation } from "../../i18n";
import { useActiveSection } from "../../hooks/useActiveSection";

const navItems = [
  { id: "overview", Icon: Home },
  { id: "workflows", Icon: Sparkles },
  { id: "pages", Icon: Layout },
  { id: "technical", Icon: Settings },
  { id: "notes", Icon: FileText },
] as const;

export default function BottomNav() {
  const { t } = useTranslation();
  const active = useActiveSection();

  return (
    <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-white/95 backdrop-blur-sm border-t border-pink-100 z-50">
      <ul className="flex items-center justify-around px-2 h-16 pb-safe">
        {navItems.map(({ id, Icon }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`
                  flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-2xl transition-all
                  ${isActive ? "text-pink-500" : "text-gray-400"}
                `}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 1.8} />
                <span className={`text-[9px] font-bold leading-none ${isActive ? "text-pink-500" : "text-gray-400"}`}>
                  {t.nav[id].split(" ")[0]}
                </span>
                {isActive && (
                  <span className="absolute -bottom-0 w-1 h-1 rounded-full bg-pink-400" />
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
