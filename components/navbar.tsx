"use client"

import { GithubIcon, Menu } from "lucide-react"
import Link from "next/link"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  return (
    <nav className="w-full border-b border-foreground/20 bg-background/80 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">

        <h1 className="text-lg sm:text-xl md:text-2xl font-medium tracking-tight">
          <span className="text-primary">Markdown</span>Verse
        </h1>

        <div className="hidden sm:flex items-center gap-3">
          <button className="flex items-center justify-center border border-border bg-secondary-foreground text-primary-foreground px-3 py-2.5 text-sm md:text-base font-medium rounded-md hover:bg-secondary-foreground/80 transition-colors duration-200">
            <GithubIcon size={18} />
          </button>

          <button className="bg-primary text-primary-foreground px-6 md:px-8 py-2 text-sm sm:text-base font-medium rounded-md hover:bg-primary/80 transition-colors duration-200">
            Get Started
          </button>
        </div>

        <div className="sm:hidden flex gap-2">
          <button className="flex items-center justify-center border border-border bg-secondary-foreground text-primary-foreground px-3 text-sm md:text-base font-medium rounded-md hover:bg-secondary-foreground/80 transition-colors duration-200">
            <GithubIcon size={18} />
          </button>
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex items-center justify-center p-2 rounded-md border border-foreground/60 hover:bg-muted transition-colors duration-200">
                <Menu size={24} />
              </button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="w-64 sm:w-72 flex flex-col gap-6 pt-10 pl-4"
            >
              <Link href="/" className="text-base font-medium">
                Get Started
              </Link>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  )
}

export default Navbar