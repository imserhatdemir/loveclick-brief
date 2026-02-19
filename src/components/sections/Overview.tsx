import { useTranslation } from "../../i18n";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

export default function Overview() {
  const { t } = useTranslation();
  const o = t.overview;

  return (
    <div>
      <SectionTitle title={o.title} subtitle={o.subtitle} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Vision */}
        <Card accent className="p-6 md:col-span-2">
          <p className="text-xs font-bold text-pink-400 uppercase tracking-widest mb-2">
            {o.vision.label}
          </p>
          <p className="text-gray-700 leading-relaxed text-base font-medium">
            {o.vision.text}
          </p>
        </Card>

        {/* Platform Pillars */}
        <Card className="p-6">
          <p className="text-xs font-bold text-pink-400 uppercase tracking-widest mb-3">
            {o.pillars.label}
          </p>
          <ul className="space-y-2">
            {o.pillars.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-pink-300 flex-shrink-0" />
                <span className="text-sm text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Design Language */}
        <Card className="p-6">
          <p className="text-xs font-bold text-pink-400 uppercase tracking-widest mb-3">
            {o.designLanguage.label}
          </p>
          <p className="text-sm text-gray-700 font-semibold mb-4">{o.designLanguage.tone}</p>
          <div className="border-t border-pink-50 pt-4">
            <p className="text-xs font-bold text-pink-400 uppercase tracking-widest mb-2">
              {o.designLanguage.font.label}
            </p>
            <p className="text-sm text-gray-500 mb-2">{o.designLanguage.font.value}</p>
            <p className="text-xl font-extrabold text-gray-800 tracking-tight">
              {o.designLanguage.font.sample}
            </p>
          </div>
        </Card>

        {/* Color Palette */}
        <Card className="p-6 md:col-span-2">
          <p className="text-xs font-bold text-pink-400 uppercase tracking-widest mb-4">
            {o.palette.label}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-3">
            {o.palette.swatches.map((swatch) => (
              <div key={swatch.hex} className="flex flex-col items-center gap-2">
                <div
                  className="w-full aspect-square rounded-2xl border border-pink-100 shadow-sm"
                  style={{ backgroundColor: swatch.hex }}
                />
                <div className="text-center">
                  <p className="text-[11px] font-bold text-gray-700 leading-tight">{swatch.name}</p>
                  <p className="text-[10px] font-mono text-gray-400 mt-0.5">{swatch.hex}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">{swatch.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
