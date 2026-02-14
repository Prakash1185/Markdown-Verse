"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const blurRevealVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: "blur(20px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const wordContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.035,
      }
    }
  };

  const renderWords = (text: string) => {
    return text.split(" ").map((word, i) => (
      <motion.span
        key={i}
        variants={blurRevealVariants}
        className="inline-block mr-[0.25em] last:mr-0"
      >
        {word}
      </motion.span>
    ));
  };

  return (
    <section className="pt-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Badge */}
        <motion.div variants={blurRevealVariants} className="flex justify-center">
          <span className="border border-primary/50 bg-primary/20 text-primary px-4 py-1 text-xs tracking-wider font-medium flex items-center gap-2">
            <div className="w-2 h-2 bg-primary"></div>
            V1.0 NOW AVAILABLE
          </span>
        </motion.div>

        {/* Headings */}
        <div className="mt-10">
          <motion.h1
            variants={wordContainerVariants}
            className="font-semibold leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tighter"
          >
            {renderWords("Master Markdown")}
          </motion.h1>

          <motion.h1
            variants={wordContainerVariants}
            className="font-semibold leading-[1.05] text-primary text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-2"
          >
            {renderWords("Like a Pro")}
          </motion.h1>
        </div>

        {/* Subtext */}
        <motion.p
          variants={wordContainerVariants}
          className="mt-8 max-w-2xl mx-auto text-sm min-[300px]:text-base text-muted-foreground leading-relaxed transition-all flex flex-wrap justify-center"
        >
          {renderWords("Master Markdown with live preview and guided practice. See your formatting update instantly as you type and learn by doing.")}
        </motion.p>

        {/* Buttons */}
        <motion.div variants={blurRevealVariants} className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/learn" className="bg-primary text-primary-foreground px-8 py-3 font-medium flex items-center justify-center gap-2 hover:bg-primary/85 transition-colors cursor-pointer w-fit mx-auto">
            Start Learning
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
