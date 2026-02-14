import { redirect } from "next/navigation";
import { getAllLessons } from "@/data/lessons";

export default function LearnPage() {
    const firstLesson = getAllLessons()[0];
    redirect(`/learn/${firstLesson.slug}`);
}
