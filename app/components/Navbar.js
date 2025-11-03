"use client";

export default function Navbar() {
return (
    <nav className="flex items-center justify-between bg-ink text-ivory px-8 py-4 border-b border-ivory">
        <ul className="flex space-x-10 text-sm ">
            <li>
                <a href="#about" className="hover:text-sage transition-colors">About</a>
            </li>
            <li>
                <a href="#experience" className="hover:text-sage transition-colors">Experience</a>
            </li>
            <li>
                <a href="#projects" className="hover:text-sage transition-colors">Projects</a>
            </li>
            <li>
                <a href="#resume" className="hover:text-sage transition-colors">Resume</a>
            </li>
        </ul>
    </nav>
);
}
