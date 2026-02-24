"use client";

import { GithubIcon, Menu } from "lucide-react";
import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-foreground/10 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-semibold tracking-tight space-x-2"
        >
          <span className="bg-primary text-primary-foreground px-2 py-1">
            M
          </span>
          <span className="text-primary">Markdown</span>Verse
        </Link>

        {/* Desktop Nav */}
        <div className="hidden sm:flex items-center gap-6">
          <Link
            href="/learn"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Learning Path
          </Link>
          <Link
            href="/playground"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Playground
          </Link>
          <Link
            href="/editor"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Editor
          </Link>
          <div className="flex items-center gap-3 ml-2">
            {/* <Link href="https://github.com/Prakash1185/Markdown-Verse" target="_blank" className="flex items-center justify-center border border-border bg-secondary-foreground text-primary-foreground px-3 py-2 text-sm font-medium rounded-md hover:bg-secondary-foreground/80 transition-colors">
              <GithubIcon size={18} />
            </Link> */}
            <Link
              href="/learn"
              className="bg-primary text-primary-foreground px-6 py-2 text-sm font-medium rounded-md hover:bg-primary/85 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="sm:hidden flex items-center gap-3">
          {/* <Link href="https://github.com/Prakash1185/Markdown-Verse" target="_blank" className="p-2 border border-border rounded-md text-muted-foreground">
            <GithubIcon size={18} />
          </Link> */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex items-center justify-center p-2 rounded-md border border-foreground/20 hover:bg-muted transition-colors">
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 bg-background border-l border-foreground/10 px-5 pt-16"
            >
              <nav className="flex flex-col gap-6">
                <Link
                  href="/"
                  className="text-lg font-medium border-b border-foreground/5 pb-2"
                >
                  Home
                </Link>
                <Link
                  href="/learn"
                  className="text-lg font-medium border-b border-foreground/5 pb-2"
                >
                  Learning Path
                </Link>
                <Link
                  href="/playground"
                  className="text-lg font-medium border-b border-foreground/5 pb-2"
                >
                  Playground
                </Link>
                <Link
                  href="/editor"
                  className="text-lg font-medium border-b border-foreground/5 pb-2"
                >
                  Editor
                </Link>
                <Link
                  href="/learn"
                  className="mt-4 bg-primary text-primary-foreground px-6 py-3 text-center font-medium rounded-md"
                >
                  Start Learning
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
