import { useTranslation } from "../../i18n";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";
import StepItem from "../ui/StepItem";
import FloatingHeart from "../ui/FloatingHeart";

export default function Workflows() {
  const { t } = useTranslation();
  const w = t.workflows;

  return (
    <div>
      <SectionTitle title={w.title} subtitle={w.subtitle} />

      <div className="space-y-6">
        {w.sections.map((section, si) => (
          <Card key={section.id} className="p-6">
            {/* Section header */}
            <div className="flex items-center gap-3 mb-5">
              <span className="px-2.5 py-1 rounded-full bg-pink-100 text-pink-600 text-xs font-extrabold">
                {section.label}
              </span>
              <h3 className="text-base font-extrabold text-gray-800">
                {section.title}
              </h3>
              {/* Show floating heart demo for Memory Feed section */}
              {si === 1 && (
                <div className="ml-auto relative flex items-center gap-2">
                  <div className="relative flex items-center justify-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-pink-100 border-2 border-white shadow-sm" />
                    <div className="w-8 h-8 rounded-full bg-pink-200 border-2 border-white shadow-sm -ml-2" />
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <FloatingHeart size="sm" className="text-pink-500" />
                    </div>
                  </div>
                  <span className="text-[10px] text-pink-400 font-medium hidden sm:block">
                    floating heart demo
                  </span>
                </div>
              )}
            </div>

            {/* Steps */}
            <div className="space-y-0">
              {section.steps.map((step) => (
                <StepItem
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>

            {/* Extra interaction note for Memory Feed */}
            {si === 1 && (
              <div className="mt-5 p-4 rounded-2xl bg-pink-50 border border-pink-100">
                <p className="text-xs font-bold text-pink-500 mb-1">Interaction Detail</p>
                <div className="flex items-start gap-6 text-sm text-gray-600">
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Right side (stacked)</p>
                    <p className="text-xs">♥ Like icon</p>
                    <p className="text-xs">🔖 Save icon</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700 mb-1">Bottom left</p>
                    <p className="text-xs">User avatar</p>
                    <p className="text-xs">Partner avatar</p>
                    <p className="text-xs text-pink-500 font-medium">+ floating ♥</p>
                  </div>
                </div>
              </div>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
