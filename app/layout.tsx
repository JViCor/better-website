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
  description: "Software engineer portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body  className={`${fraunces.variable}`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
