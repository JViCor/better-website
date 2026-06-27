import { experienceItems } from "../data/experience"
import ExperienceTimeline from "../components/ExperienceTimeline"

export default function ExperiencePage() {
  return (
    <section id="experience" className="bg-moss h-page overflow-hidden flex flex-col px-8 py-16">
      <div className="max-w-3xl mx-auto flex flex-col flex-1 w-full min-h-0">
        <h2 className="text-2xl font-semibold mb-8 text-ink shrink-0">Experience</h2>
        <ExperienceTimeline items={experienceItems} />
      </div>
    </section>
  )
}
