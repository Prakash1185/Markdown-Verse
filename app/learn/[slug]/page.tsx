"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import {
    getLessonBySlug,
    getAdjacentLessons,
    getLessonCategory,
    getLessonIndex,
    getAllLessons,
} from "@/data/lessons";
import PracticeEditor from "@/components/learn/practice-editor";
import NavigationButtons from "@/components/learn/navigation-buttons";

export default function LessonPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const lesson = getLessonBySlug(slug);

    if (!lesson) {
        notFound();
    }

    const { prev, next } = getAdjacentLessons(slug);
    const category = getLessonCategory(slug);
    const lessonIndex = getLessonIndex(slug);
    const totalLessons = getAllLessons().length;

    return (
        <div className="max-w-4xl lg:ml-8 px-4 sm:px-6 py-8 sm:py-10">
            {/* Lesson Header */}
            <div className="mb-10">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <span className="uppercase tracking-wider border border-foreground/10 bg-foreground/[0.03] px-2 py-0.5">
                        {category}
                    </span>
                    <span className="text-foreground/30">·</span>
                    <span>
                        {lessonIndex + 1} / {totalLessons}
                    </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
                    {lesson.title}
                </h1>
                <p className="mt-2 text-muted-foreground text-sm sm:text-base">
                    {lesson.description}
                </p>

                {/* Divider */}
                <div className="mt-6 border-t border-dashed border-foreground/10" />
            </div>

            {/* Lesson Content */}
            <article className="prose-markdown">
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                    {lesson.content}
                </ReactMarkdown>
            </article>

            {/* Practice Editor */}
            <PracticeEditor
                instructions={lesson.practiceInstructions}
                defaultCode={lesson.practiceDefaultCode}
            />

            {/* Navigation */}
            <NavigationButtons currentSlug={slug} prev={prev} next={next} />
        </div>
    );
}
