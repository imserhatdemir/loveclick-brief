import { useTranslation } from "../../i18n";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import FloatingHeart from "../ui/FloatingHeart";

export default function DesignerNotes() {
  const { t } = useTranslation();
  const n = t.notes;

  return (
    <div>
      <SectionTitle title={n.title} subtitle={n.subtitle} />

      {/* Pull quote */}
      <Card className="p-8 mb-6 text-center relative overflow-hidden">
        <div className="absolute top-4 right-6 opacity-20">
          <FloatingHeart size="lg" className="text-pink-400 text-4xl" />
        </div>
        <div className="relative">
          <span className="text-5xl text-pink-200 font-serif leading-none select-none">"</span>
          <p className="text-base md:text-lg font-semibold text-gray-700 leading-relaxed max-w-2xl mx-auto -mt-4">
            {n.quote}
          </p>
          <span className="text-5xl text-pink-200 font-serif leading-none select-none">"</span>
        </div>
      </Card>

      {/* Principle cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {n.principles.map((p, i) => (
          <Card key={i} className="p-6">
            <div className="w-10 h-10 rounded-2xl bg-pink-100 flex items-center justify-center mb-4">
              <span className="text-xl select-none">
                {i === 0 ? "♥" : i === 1 ? "✦" : "📖"}
              </span>
            </div>
            <h3 className="text-base font-extrabold text-gray-800 mb-2">{p.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{p.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
