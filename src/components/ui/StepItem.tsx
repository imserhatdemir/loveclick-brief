interface StepItemProps {
  number: number;
  title: string;
  description: string;
}

export default function StepItem({ number, title, description }: StepItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center">
        <span className="text-sm font-bold text-pink-500">{number}</span>
      </div>
      <div className="pb-5 border-b border-pink-50 flex-1 last:border-0 last:pb-0">
        <p className="font-700 text-gray-800 font-bold text-sm">{title}</p>
        <p className="mt-0.5 text-sm text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
