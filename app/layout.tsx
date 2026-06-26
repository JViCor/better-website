import type { Metadata } from "next";
import { Lora } from 'next/font/google';
import Navbar from "./components/Navbar";
import "./globals.css";

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

export const metadata = {
  title: "Janet Villegas Portfolio",
  description: "Data engineer portfolio website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ "--navbar-height": "3.75rem" } as React.CSSProperties} className={`${lora.variable} font-sans min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
      </body>
    </html>
  );
}
