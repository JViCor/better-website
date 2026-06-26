import { experienceItems } from "../data/experience"

export default function ExperiencePage() {
  return (
    <section id="experience" className="bg-moss flex-1 px-8 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8 text-ink">Experience</h2>

        <div className="space-y-6">
          {experienceItems.map((item) => (
            <article key={item.title} className="bg-ink p-6 rounded-lg shadow-sm">
              <header className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <h3 className="text-lg font-semibold text-ivory">{item.title}</h3>
                <time className="text-sm text-ivory/80 shrink-0">
                  {item.startDate}
                  {item.endDate ? ` — ${item.endDate}` : ""}
                </time>
              </header>

              <ul className="list-disc list-inside mb-4 text-white space-y-1">
                {item.description.map((line, i) => (
                  <li key={i}>{line}</li>
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
          ))}
        </div>
      </div>
    </section>
  )
}