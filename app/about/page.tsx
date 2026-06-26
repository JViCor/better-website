export default function AboutPage() {
  return (
    <section id="about" className="bg-moss p-8 flex-1 flex items-center justify-center gap-8">
            <div className="w-64 h-72 flex items-center justify-center rounded bg-ink">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center mb-6">
                  {/* Future image goes here */}
                </div>
                <div className="flex flex-row gap-4">
                  <a href="https://github.com/janetvillegas" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <svg className="w-8 h-8 text-ivory hover:text-moss transition" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/janetvillegas" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg className="w-8 h-8 text-ivory hover:text-moss transition" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.601 2.002 3.601 4.604v5.592z"/>
                  </svg>
                  </a>
                </div>
              </div>
            </div>
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold mb-4 text-ink">About Me</h2>
            <p>
              What excites me most about being a Data Engineer is being able to solve real problems. It goes beyond designing buttons and websites and involves having a passion for designing experiences and solutions that help people, whether it's helping them make better videos, market themselves online, or buy something online. Leaning into customer insight and understanding their needs, finding the right problems to solve, delivering solutions as quickly as possible, learning from those and then iterating and improving that value over time is the key to great product design.
            </p>
          </div>
    </section>
  );
}
