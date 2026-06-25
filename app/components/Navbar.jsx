"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/resume", label: "Resume" },
];

export default function Navbar() {
  const navRef = useRef(null);
  const [open, setOpen] = useState(false);

  const updateHeight = () => {
    const el = navRef.current;
    if (!el) return;
    document.documentElement.style.setProperty(
      "--navbar-height",
      `${el.getBoundingClientRect().height}px`
    );
  };

  useEffect(() => {
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Disable scroll while menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav ref={navRef} className="relative z-40 bg-cream/95 backdrop-blur-sm border-b border-ivory">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-center py-4">
          {/* Desktop links */}
          <ul className="hidden md:flex gap-2 md:gap-6 flex-nowrap text-sm font-medium tracking-wide whitespace-nowrap">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="px-2 md:px-4 py-2 rounded-full text-ink hover:text-sage transition-colors duration-200">
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden ml-auto p-2 rounded-md focus:outline-none"
          >
            <svg className="w-6 h-6 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Fullscreen overlay — rendered outside <nav> so it covers everything including the navbar */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-cream/95 backdrop-blur-sm" onClick={close} />

        {/* X button */}
        <button
          onClick={(e) => { e.stopPropagation(); close(); }}
          aria-label="Close menu"
          className="absolute top-4 right-6 z-50 p-2 rounded-md focus:outline-none"
        >
          <svg className="w-6 h-6 text-ink" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Centered links */}
        <div className="relative z-50 flex items-center justify-center h-full">
          <ul className="flex flex-col gap-8 text-xl font-semibold text-center">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={close}
                  className="block px-8 py-2 text-ink hover:text-sage transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
