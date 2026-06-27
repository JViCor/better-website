"use client";
import { useEffect, useRef } from "react";

type ExperienceItem = {
  title: string;
  startDate: string;
  endDate?: string;
  description: string[];
  skills?: string[];
};

export default function ExperienceTimeline({ items }: { items: ExperienceItem[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const entryRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { root: container, threshold: 0.15 }
    );

    entryRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={scrollRef} className="flex-1 overflow-y-auto pr-2 min-h-0">
      {items.map((item, i) => (
        <div
          key={item.title}
          ref={(el) => { entryRefs.current[i] = el; }}
          className="entry-fade flex gap-6"
        >
          {/* Timeline column */}
          <div className="flex flex-col items-center shrink-0">
            <div className="w-4 h-4 rounded-full bg-sage border-2 border-moss shrink-0 mt-2" />
            {i < items.length - 1 && (
              <div className="w-0 border-l-2 border-dashed border-sage/60 flex-1 my-2" />
            )}
          </div>

          {/* Content */}
          <div className={`flex-1 ${i < items.length - 1 ? "pb-10" : "pb-6"}`}>
            <article className="bg-ink p-6 rounded-lg shadow-sm">
              <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <h3 className="text-lg font-semibold text-ivory">{item.title}</h3>
                <time className="text-sm text-white/60 shrink-0">
                  {item.startDate}{item.endDate ? ` — ${item.endDate}` : ""}
                </time>
              </header>

              <ul className="list-disc list-inside mb-4 text-white space-y-1">
                {item.description.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>

              {item.skills?.length ? (
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((s) => (
                    <span key={s} className="text-xs px-3 py-1 bg-moss text-ink rounded-full font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          </div>
        </div>
      ))}
    </div>
  );
}
