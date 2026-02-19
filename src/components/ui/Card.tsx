interface CardProps {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
}

export default function Card({ children, className = "", accent }: CardProps) {
  return (
    <div
      className={`
        bg-white rounded-3xl border border-pink-100 shadow-sm
        ${accent ? "border-l-4 border-l-pink-300" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
