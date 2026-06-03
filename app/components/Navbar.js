export default function Navbar() {
    return (
        <nav className="flex items-center justify-between bg-cream text-ivory px-8 py-6 border-b border-ivory">
            <ul className="flex space-x-10 text-sm text-ink">
                <li>
                    <a
                        href="#about"
                        className="hover:text-sage transition-colors duration-300 transform hover:-translate-y-1"
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        href="#experience"
                        className="hover:text-sage transition-colors duration-300 transform hover:-translate-y-1"
                    >
                        Experience
                    </a>
                </li>
                <li>
                    <a
                        href="#projects"
                        className="hover:text-sage transition-colors duration-300 transform hover:-translate-y-1"
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a
                        href="#resume"
                        className="hover:text-sage transition-colors duration-300 transform hover:-translate-y-1"
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}
