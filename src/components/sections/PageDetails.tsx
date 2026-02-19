import { useTranslation } from "../../i18n";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

export default function PageDetails() {
  const { t } = useTranslation();
  const p = t.pages;

  return (
    <div>
      <SectionTitle title={p.title} subtitle={p.subtitle} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {p.cards.map((card) => (
          <Card key={card.tag} className="p-6 flex flex-col gap-4">
            {/* Tag + title */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-xs font-extrabold mb-2">
                {card.tag}
              </span>
              <h3 className="text-lg font-extrabold text-gray-800">{card.title}</h3>
              <p className="mt-1 text-sm text-gray-500 leading-relaxed">{card.description}</p>
            </div>

            {/* Components */}
            <div className="space-y-3 border-t border-pink-50 pt-4">
              {card.components.map((comp, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex-shrink-0 w-1.5 rounded-full bg-pink-200 mt-1" />
                  <div>
                    <p className="text-sm font-bold text-gray-700">{comp.label}</p>
                    <p className="mt-0.5 text-xs text-gray-500 leading-relaxed">{comp.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
