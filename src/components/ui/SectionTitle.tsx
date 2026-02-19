interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-1 text-base font-medium text-pink-400">{subtitle}</p>
      )}
      <div className="mt-3 h-1 w-12 rounded-full bg-pink-200" />
    </div>
  );
}
