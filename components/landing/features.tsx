"use client";

import { ArrowRight, BookOpen, Code2, EditIcon } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const fadeIn = {
    initial: { opacity: 0, scale: 0.98 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 pt-28 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Dotted Divider with Text */}
        <motion.div className="flex items-center gap-4 mb-14" {...fadeIn}>
          <div className="flex-1 border-t-2 border-dashed border-foreground/15"></div>
          <span className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-medium">
            What We Offer
          </span>
          <div className="flex-1 border-t-2 border-dashed border-foreground/15"></div>
        </motion.div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature 1 — Learning */}
          <motion.div
            className="border border-foreground/10 bg-card p-8 sm:p-10 flex flex-col gap-6 group hover:border-primary/40 transition-colors duration-300"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.1 }}
          >
            <div className="w-12 h-12 border border-primary/40 bg-primary/10 flex items-center justify-center">
              <BookOpen size={22} className="text-primary" />
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Structured Learning
            </h3>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Learn Markdown from the ground up with our carefully crafted
              lessons. From basic syntax to advanced formatting — everything
              organized in a clear, step-by-step learning path.
            </p>

            <Link
              href="/learn"
              className="mt-auto w-fit bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium flex items-center gap-2 hover:bg-primary/85 transition-colors duration-200 cursor-pointer"
            >
              Learn Now
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Feature 2 — Practice */}
          <motion.div
            className="border border-foreground/10 bg-card p-8 sm:p-10 flex flex-col gap-6 group hover:border-primary/40 transition-colors duration-300"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
            <div className="w-12 h-12 border border-primary/40 bg-primary/10 flex items-center justify-center">
              <Code2 size={22} className="text-primary" />
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Practice Playground
            </h3>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Put your skills to the test with our built-in Markdown playground.
              Write, preview, and experiment in real-time — the best way to
              truly master Markdown is by doing.
            </p>

            <Link
              href="/playground"
              className="mt-auto w-fit bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium flex items-center gap-2 hover:bg-primary/85 transition-colors duration-200 cursor-pointer"
            >
              Try Now
              <ArrowRight size={16} />
            </Link>
          </motion.div>

          {/* Feature 2 — Practice */}
          <motion.div
            className="border border-foreground/10 bg-card p-8 sm:p-10 flex flex-col gap-6 group hover:border-primary/40 transition-colors duration-300"
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
          >
            <div className="w-12 h-12 border border-primary/40 bg-primary/10 flex items-center justify-center">
              <EditIcon size={22} className="text-primary" />
            </div>

            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Live Editor
            </h3>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Write your blog effortlessly in our editor and get it converted
              into markdown format. Completely free of cost so get your work
              done right now.
            </p>

            <Link
              href="/editor"
              className="mt-auto w-fit bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium flex items-center gap-2 hover:bg-primary/85 transition-colors duration-200 cursor-pointer"
            >
              Open Editor
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
