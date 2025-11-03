"use client";
import { useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 font-sans bg-ink">
      <main className="w-full flex-1 px-8 py-12 text-ivory bg-ink rounded shadow">
        <section className="flex flex-row items-center justify-center text-center gap-8">
          <div className="text-center md:text-left md:w-1/4">
            <h1 className="text-3xl text-ivory md:text-4xl font-medium text-gray-900 mb-4">
              Hello, 
              <br />
              I’m <span className="font-semibold">Janet Villegas</span>
            </h1>
            <p className="text-lg text-ivory text-gray-700 leading-relaxed">
              A software engineer based in Chicago. I love working with data and
              fiddling with web design.
            </p>
          </div>
          <div className="w-64 h-32 bg-gray-300 rounded-md flex items-center justify-center mb-6">
            {/* Future image goes here */}
          </div>
        </section>
        <section id="about" className="mt-12 bg-moss p-8 ">
          <h2 className="text-2xl font-semibold mb-4 text-ink">About Me</h2>
          <p>
           What excites me most about being a Software Engineer is being able to design and create things that have purpose and solve real problems. It goes beyond designing buttons and websites and involves having a passion for designing experiences and solutions that help people, whether it's helping them make better videos,     market themselves online, or buy something online. Leaning into customer insight and understanding their needs, finding the right problems to solve, delivering solutions as quickly as possible, learning from those and then iterating and improving that value over time is the key to great product design.
          </p>
        </section>
          <section id="projects" className="bg-moss p-8 ">
          <h2 className="text-2xl font-semibold mb-4 text-ink">Projects</h2>
          <p>
           What excites me most about being a Software Engineer is being able to design and create things that have purpose and solve real problems. It goes beyond designing buttons and websites and involves having a passion for designing experiences and solutions that help people, whether it's helping them make better videos,     market themselves online, or buy something online. Leaning into customer insight and understanding their needs, finding the right problems to solve, delivering solutions as quickly as possible, learning from those and then iterating and improving that value over time is the key to great product design.
          </p>
        </section>
      </main>
    </div>
  );
}