import { Metadata } from "next";
import { notFound } from "next/navigation";
import { courses, getCourseBySlug } from "@/data/courses";
import CourseDetailContent from "./CourseDetailContent";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return courses.map((course) => ({
        slug: course.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const course = getCourseBySlug(slug);

    if (!course) {
        return {
            title: "Course Not Found | Mindscape Psychedelic Institute",
        };
    }

    return {
        title: `${course.title} | Mindscape Psychedelic Institute`,
        description: course.description,
        openGraph: {
            title: course.title,
            description: course.description,
            type: "website",
        },
    };
}

export default async function CourseDetailPage({ params }: Props) {
    const { slug } = await params;
    const course = getCourseBySlug(slug);

    if (!course) {
        notFound();
    }

    return <CourseDetailContent course={course} />;
}
