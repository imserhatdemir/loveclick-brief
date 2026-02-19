import { useState } from "react";
import { LangContext, translations } from "./i18n";
import type { Lang } from "./types";
import Shell from "./components/layout/Shell";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import BottomNav from "./components/layout/BottomNav";
import Overview from "./components/sections/Overview";
import Workflows from "./components/sections/Workflows";
import PageDetails from "./components/sections/PageDetails";
import TechnicalReqs from "./components/sections/TechnicalReqs";
import DesignerNotes from "./components/sections/DesignerNotes";

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const t = translations[lang];

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      <div className="min-h-screen bg-pink-50 font-sans">
        <Header />
        <Shell>
          <Sidebar />
          <main className="flex-1 px-4 py-8 md:px-10 pb-24 md:pb-10 space-y-20 animate-fade-in">
            <section id="overview">
              <Overview />
            </section>
            <section id="workflows">
              <Workflows />
            </section>
            <section id="pages">
              <PageDetails />
            </section>
            <section id="technical">
              <TechnicalReqs />
            </section>
            <section id="notes">
              <DesignerNotes />
            </section>
          </main>
        </Shell>
        <BottomNav />
      </div>
    </LangContext.Provider>
  );
}
