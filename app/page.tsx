import Link from "next/link";

export default function Home() {
  return (
      <main className="w-full min-h-[calc(100vh-var(--navbar-height))] flex-1 px-8 py-12 text-ivory bg-ink shadow">
        <section id="intro" className="flex flex-row items-center justify-center text-center gap-8 h-[calc(100vh-10rem)]">
          <div className="text-center md:text-left md:w-1/4">
            <h1 className="text-3xl text-ivory md:text-4xl font-medium text-gray-900 mb-4">
              Hello, 
              <br />
              I’m <span className="font-semibold">Janet Villegas</span>
            </h1>
            <p className="text-lg text-ivory text-gray-700 leading-relaxed">
              A software engineer based in Chicago. I love working with data and
              fiddling with web design.
            </p>
          </div>
          <div className="w-64 h-32 bg-gray-300 rounded-md flex items-center justify-center mb-6">
            {/* Future image goes here */}
          </div>
        </section>
      </main>
  );
}