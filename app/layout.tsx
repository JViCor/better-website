import type { Metadata } from "next";
import { Fraunces } from 'next/font/google';
import Navbar from "./components/Navbar";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata = {
  title: "Janet Villegas Portfolio",
  description: "Data engineer portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ "--navbar-height": "5rem" } as React.CSSProperties} className={`${fraunces.variable} font-sans`}>
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
