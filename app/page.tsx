export default function Home() {
  return (
    <div className="w-full flex-1 flex flex-col md:flex-row items-center justify-center gap-12 px-8 py-12 text-ivory bg-ink">
      <div className="text-center md:text-left max-w-md">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-sage/40 rounded-full px-4 py-1 text-xs tracking-widest text-sage uppercase mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-sage shrink-0" />
          Chicago · Data Engineer
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-medium text-ivory mb-2">
          Hello,
          <br />
          I'm <span className="font-semibold italic">Janet Villegas</span>
        </h1>

        {/* Subtitle */}
        <p className="text-sage/80 text-sm italic mb-6">
          // where clean pipelines meet purposeful design
        </p>

        {/* Bio */}
        <p className="text-ivory/80 leading-relaxed mb-8">
          I believe <span className="font-semibold text-ivory">every great product starts with clean data</span> — and I build the pipelines that make it possible. Based in Chicago, I design systems that ingest, transform, and surface insights that help move projects in the right direction.
        </p>

      </div>

      {/* Image placeholder */}
      <div className="w-52 h-52 bg-sage/20 border border-sage/30 rounded-full flex items-center justify-center shrink-0">
        {/* Future image goes here */}
      </div>
    </div>
  );
}
