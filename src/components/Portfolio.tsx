"use client";
import { portfolio } from "@/data/portfolio";
import PortfolioCard from "./PortfolioCard";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-slate-50 dark:bg-[#2F4850]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#876E7D] font-semibold">OUR WORK</p>

          <h2 className="text-4xl font-bold mt-3">Featured Projects</h2>

          <p className="mt-5 text-gray-600 dark:text-gray-300">
            A selection of our recent work crafted with passion and innovation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((project) => (
            <PortfolioCard
              key={project.title}
              title={project.title}
              images={project.images}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
