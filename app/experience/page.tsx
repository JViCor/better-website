import { experienceItems } from "../data/experience"

export default function ExperiencePage() {
  return (
    <section id="experience" className="mt-12 bg-moss p-8">
      <h2 className="text-2xl font-semibold mb-4 text-ink">Experience</h2>

      <div className="space-y-6">
        {experienceItems.map((item) => (
          <article key={item.title} className="bg-ink p-6 rounded shadow-sm">
            <header className="flex items-baseline justify-between mb-3">
              <h3 className="text-lg font-semibold text-ivory">{item.title}</h3>
              <time className="text-sm text-ivory/80">
                {item.startDate}
                {item.endDate ? ` — ${item.endDate}` : ""}
              </time>
            </header>

            <ul className="list-disc list-inside mb-3 text-ivory">
              {item.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>

            {item.skills?.length ? (
              <div className="flex flex-wrap gap-2">
                {item.skills.map((s) => (
                  <span
                    key={s}
                    className="text-sm px-2 py-1 bg-cream text-ink rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  )
}