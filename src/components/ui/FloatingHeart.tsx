interface FloatingHeartProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: "text-sm",
  md: "text-lg",
  lg: "text-2xl",
};

export default function FloatingHeart({ className = "", size = "md" }: FloatingHeartProps) {
  return (
    <span
      className={`inline-block animate-float-heart select-none ${sizes[size]} ${className}`}
      aria-hidden="true"
    >
      ♥
    </span>
  );
}
