import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function AboutPage() {
  return (
    <section id="about" className="bg-moss p-8 flex-1 flex items-center justify-center gap-8">
            <div className="w-64 h-72 flex items-center justify-center rounded bg-ink">
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 bg-gray-300 rounded-full flex items-center justify-center mb-6">
                  {/* Future image goes here */}
                </div>
                <div className="flex flex-row gap-4">
                  <a href="https://github.com/JViCor" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                     className="text-ivory hover:text-moss transition">
                    <GitHubIcon sx={{ fontSize: 32 }} />
                  </a>
                  <a href="https://www.linkedin.com/in/janet-villegas-cornejo" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                     className="text-ivory hover:text-moss transition">
                    <LinkedInIcon sx={{ fontSize: 32 }} />
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
