"use client";

import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="pt-20  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="border border-primary/50 bg-primary/20 text-primary px-4 py-1 text-xs tracking-wider font-medium flex items-center gap-2">
            <div className="w-2 h-2 bg-primary"></div>
            V1.0 NOW AVAILABLE
          </span>
        </div>

        {/* Headings */}
        <div className="mt-10">
          <h1 className="font-semibold leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter min-[360px]:tracking-normal">
            Master Markdown
          </h1>

          <h1 className="font-semibold leading-[1.05] text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-2">
            Like a Pro
          </h1>
        </div>

        {/* Subtext */}
        <p className="mt-8 max-w-2xl mx-auto text-sm min-[300px]:text-base text-muted-foreground leading-relaxed">
          Master Markdown with live preview and guided practice. See your
          formatting update instantly as you type and learn by doing.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/learn" className="bg-primary text-primary-foreground px-8 py-3 font-medium flex items-center justify-center gap-2 hover:bg-primary/85 transition-colors cursor-pointer w-fit mx-auto">
            Start Learning
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
