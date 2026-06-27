const skills = ["Python", "Snowflake", "Airflow", "SQL", "dbt"];

export default function Home() {
  return (
    <div className="w-full flex-1 flex flex-col md:flex-row items-center justify-center gap-12 px-8 py-12 text-ivory bg-ink">
      <div className="text-center md:text-left max-w-md">

        {/* Badge */}
        <div
          className="animate-fade-up inline-flex items-center gap-2 bg-moss text-ink rounded-full px-4 py-1 text-xs tracking-widest font-medium uppercase mb-6"
          style={{ animationDelay: "0ms" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-ink shrink-0" />
          Chicago · Data Engineer
        </div>

        {/* Heading */}
        <h1
          className="animate-fade-up text-4xl font-medium text-ivory mb-2"
          style={{ animationDelay: "100ms" }}
        >
          Hello,
          <br />
          I'm <span className="font-semibold italic">Janet Villegas</span>
        </h1>

        {/* Subtitle */}
        <p
          className="animate-fade-up text-sage/80 text-sm italic mb-6"
          style={{ animationDelay: "200ms" }}
        >
          // where clean pipelines meet purposeful design
        </p>

        {/* Bio */}
        <p
          className="animate-fade-up text-ivory/80 leading-relaxed mb-8"
          style={{ animationDelay: "300ms" }}
        >
          I believe <span className="font-semibold text-ivory">every action is driven by data.</span> I work inside product and analytics orgs to build the pipelines and models that make that true in practice. Turning messy, scattered data into clean, reliable systems that teams can build on.
        </p>

        {/* Skills */}
        <div
          className="animate-fade-up flex flex-wrap gap-2 justify-center md:justify-start"
          style={{ animationDelay: "400ms" }}
        >
          {skills.map((s) => (
            <span key={s} className="text-xs px-3 py-1 bg-moss text-ink rounded-full font-medium">
              {s}
            </span>
          ))}
        </div>

      </div>

      {/* Image placeholder */}
      <div
        className="animate-fade-up w-52 h-52 bg-sage/20 border border-sage/30 rounded-full flex items-center justify-center shrink-0"
        style={{ animationDelay: "500ms" }}
      >
        {/* Future image goes here */}
      </div>
    </div>
  );
}
