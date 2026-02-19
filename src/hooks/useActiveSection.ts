import { useEffect, useState } from "react";

const SECTION_IDS = ["overview", "workflows", "pages", "technical", "notes"];

export function useActiveSection() {
  const [active, setActive] = useState<string>("overview");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (id: string) => (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(id);
        }
      });
    };

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(handleIntersect(id), {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      });
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return active;
}
