import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', 
  variable: '--font-inter', 
});

export const metadata = {
  title: "Janet Villegas Portfolio",
  description: "Software engineer portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-ivory text-ink font-sans">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
