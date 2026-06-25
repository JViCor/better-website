"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const setVar = () => {
      const h = el.getBoundingClientRect().height;
      document.documentElement.style.setProperty("--navbar-height", `${h}px`);
    };
    setVar();
    window.addEventListener("resize", setVar);
    return () => window.removeEventListener("resize", setVar);
  }, []);

  return (
    <nav ref={navRef} className="h-15 bg-cream/95 backdrop-blur-sm border-b border-ivory">
        <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center justify-center py-4">
            <ul className="flex gap-4 md:gap-6 text-sm font-medium tracking-wide">
                <li>
                <Link href="/" className="px-4 py-2 rounded-full text-ink hover:text-sage transition-colors duration-200">
                    Home
                </Link>
                </li>
                <li>
                    <Link href="/about" className="px-4 py-2 rounded-full text-ink hover:text-sage transition-colors duration-200">
                    About Me
                    </Link>
                </li>
                <li>
                <Link href="/projects" className="px-4 py-2 rounded-full text-ink hover:text-sage transition-colors duration-200">
                    Projects
                </Link>
                </li>
                <li>
                    <Link href="/experience" className="px-4 py-2 rounded-full text-ink hover:text-sage transition-colors duration-200">
                    Experience
                    </Link>
                </li>
                <li>
                <Link href="/resume" className="px-4 py-2 rounded-full text-ink hover:text-sage transition-colors duration-200">
                    Resume
                </Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  );
}