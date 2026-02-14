"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { lessonCategories, getAllLessons } from "@/data/lessons";

const Sidebar = ({ onClose }: { onClose?: () => void }) => {
    const pathname = usePathname();
    const currentSlug = pathname.split("/").pop();
    const allLessons = getAllLessons();

    // Calculate global lesson number
    const getLessonNumber = (slug: string) => {
        return allLessons.findIndex((l) => l.slug === slug) + 1;
    };

    return (
        <aside className="h-full flex flex-col bg-card/50 hide-scrollbar border-l ">
            {/* Lessons Navigation */}
            <nav className="flex-1 overflow-y-auto hide-scrollbar p-3 pb-20 flex flex-col gap-5">
                {lessonCategories.map((category) => (
                    <div key={category.name}>
                        <h3 className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground/70 font-medium px-2 mb-2">
                            {category.name}
                        </h3>

                        <div className="flex flex-col gap-1">
                            {category.lessons.map((lesson) => {
                                const isActive = currentSlug === lesson.slug;
                                const num = getLessonNumber(lesson.slug);

                                return (
                                    <Link
                                        key={lesson.slug}
                                        href={`/learn/${lesson.slug}`}
                                        onClick={onClose}
                                        className={`
                      flex items-center gap-3 px-3 py-2.5 text-sm transition-all duration-200
                      border
                      ${isActive
                                                ? "bg-primary/15 border-primary/40 text-foreground"
                                                : "bg-foreground/[0.03] border-foreground/8 hover:bg-foreground/[0.06] hover:border-foreground/15 text-muted-foreground hover:text-foreground"
                                            }
                    `}
                                    >
                                        {/* Lesson Number */}
                                        <span
                                            className={`
                        w-7 h-7 flex items-center justify-center text-xs font-mono font-semibold flex-shrink-0 border
                        ${isActive
                                                    ? "bg-primary text-primary-foreground border-primary"
                                                    : "bg-foreground/5 text-muted-foreground border-foreground/10"
                                                }
                      `}
                                        >
                                            {String(num).padStart(2, "0")}
                                        </span>

                                        <span className="truncate text-[13px]">{lesson.title}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;
