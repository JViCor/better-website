import Project from "../components/Project";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 bg-cream">
      <main className="w-full flex-1 px-8 py-12 text-ivory bg-ink rounded shadow">
        <section className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold mb-6 text-ink">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Project
              title="Portfolio Website"
              description="A personal website built with Next.js and Tailwind CSS to showcase my work and skills."
            />
            <Project
              title="Data Visualization Dashboard"
              description="An interactive dashboard for visualizing and analyzing datasets using React and D3.js."
            />
            <Project
              title="E-commerce Platform"
              description="A full-stack e-commerce application with product listings, shopping cart, and checkout features."
            />
          </div>
        </section>
      </main>
    </div>
  );
}
