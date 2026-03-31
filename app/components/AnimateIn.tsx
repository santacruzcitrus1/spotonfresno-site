"use client";
import { useEffect, useRef } from "react";

type Direction = "left" | "right" | "up";

export default function AnimateIn({
  children,
  direction = "up",
  delay = 0,
  style,
  className,
}: {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  style?: React.CSSProperties;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (delay) {
      el.style.transitionDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const dirClass = direction === "left"
    ? "slide-in-left"
    : direction === "right"
    ? "slide-in-right"
    : "slide-in-up";

  return (
    <div ref={ref} className={`${dirClass}${className ? ` ${className}` : ""}`} style={style}>
      {children}
    </div>
  );
}
