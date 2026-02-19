interface ShellProps {
  children: React.ReactNode;
}

export default function Shell({ children }: ShellProps) {
  return (
    <div className="max-w-6xl mx-auto flex min-h-screen">
      {children}
    </div>
  );
}
