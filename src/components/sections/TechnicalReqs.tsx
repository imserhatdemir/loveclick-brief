import { useTranslation } from "../../i18n";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import FloatingHeart from "../ui/FloatingHeart";

type AnimationType = "fade" | "float" | "loading";

function AnimationDemo({ type }: { type: AnimationType }) {
  if (type === "fade") {
    return (
      <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center animate-fade-in">
        <span className="text-pink-400 text-xl">✦</span>
      </div>
    );
  }
  if (type === "float") {
    return (
      <div className="relative w-12 h-12 flex items-end justify-center pb-1">
        <div className="w-8 h-8 rounded-full bg-pink-100 border-2 border-white" />
        <div className="absolute -top-1 left-1/2 -translate-x-1/2">
          <FloatingHeart size="sm" className="text-pink-500" />
        </div>
      </div>
    );
  }
  return (
    <div className="w-12 h-12 rounded-full border-4 border-pink-200 border-t-pink-400 animate-spin" />
  );
}

export default function TechnicalReqs() {
  const { t } = useTranslation();
  const tech = t.technical;

  return (
    <div>
      <SectionTitle title={tech.title} subtitle={tech.subtitle} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Animations */}
        <Card className="p-6 md:col-span-2">
          <p className="text-xs font-bold text-pink-400 uppercase tracking-widest mb-4">
            {tech.animations.label}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {tech.animations.items.map((anim) => (
              <div
                key={anim.type}
                className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-pink-50 border border-pink-100 text-center"
              >
                <AnimationDemo type={anim.type as AnimationType} />
                <div>
                  <p className="text-sm font-bold text-gray-700">{anim.name}</p>
                  <p className="mt-1 text-xs text-gray-500 leading-relaxed">{anim.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Typography */}
        <Card className="p-6">
          <p className="text-xs font-bold text-pink-400 uppercase tracking-widest mb-4">
            {tech.typography.label}
          </p>
          {/* Live font demo */}
          <div className="mb-4 p-4 rounded-2xl bg-pink-50 border border-pink-100 space-y-2">
            <p className="text-2xl font-extrabold text-gray-800 leading-tight">LoveClick</p>
            <p className="text-base font-semibold text-gray-700">Couple Memories</p>
            <p className="text-sm font-medium text-gray-600">Share your story together</p>
            <p className="text-xs font-normal text-gray-400">© 2025 LoveClick App</p>
          </div>
          <ul className="space-y-2">
            {tech.typography.rules.map((rule, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-pink-300 flex-shrink-0" />
                <span className="text-xs text-gray-600">{rule}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Spacing */}
        <Card className="p-6">
          <p className="text-xs font-bold text-pink-400 uppercase tracking-widest mb-4">
            {tech.spacing.label}
          </p>
          {/* Spacing visual */}
          <div className="mb-4 p-4 rounded-2xl bg-pink-50 border border-pink-100">
            <div className="bg-white rounded-xl shadow-sm p-3 mb-2">
              <div className="h-1 w-full rounded-full bg-pink-100 mb-1.5" />
              <div className="h-1 w-3/4 rounded-full bg-pink-100 mb-1.5" />
              <div className="h-1 w-1/2 rounded-full bg-pink-100" />
            </div>
            <p className="text-[10px] text-pink-400 text-center font-mono">390 × 844px canvas</p>
          </div>
          <ul className="space-y-2">
            {tech.spacing.rules.map((rule, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-pink-300 flex-shrink-0" />
                <span className="text-xs text-gray-600">{rule}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}
