"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Lesson } from "@/data/lessons";

interface NavigationButtonsProps {
    currentSlug: string;
    prev: Lesson | null;
    next: Lesson | null;
}

const NavigationButtons = ({
    prev,
    next,
}: NavigationButtonsProps) => {
    return (
        <div className="flex items-center justify-between gap-4 mt-10 pt-6 border-t border-dashed border-foreground/10">
            {prev ? (
                <Link
                    href={`/learn/${prev.slug}`}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm border border-foreground/15 text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                    <ArrowLeft size={16} />
                    <span className="hidden sm:inline">{prev.title}</span>
                    <span className="sm:hidden">Previous</span>
                </Link>
            ) : (
                <div />
            )}

            {next ? (
                <Link
                    href={`/learn/${next.slug}`}
                    className="flex items-center gap-2 px-4 py-2.5 text-sm bg-primary text-primary-foreground font-medium hover:bg-primary/85 transition-colors"
                >
                    <span className="hidden sm:inline">{next.title}</span>
                    <span className="sm:hidden">Next</span>
                    <ArrowRight size={16} />
                </Link>
            ) : (
                <Link
                    href="/playground"
                    className="flex items-center gap-2 px-4 py-2.5 text-sm bg-primary text-primary-foreground font-medium hover:bg-primary/85 transition-colors"
                >
                    Open Playground
                    <ArrowRight size={16} />
                </Link>
            )}
        </div>
    );
};

export default NavigationButtons;
