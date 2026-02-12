"use client";

import Link from "next/link";
import { ArrowRight, Clock, Users, BookOpen } from "lucide-react";
import { courses } from "@/data/courses";

function CourseCard({ course }: { course: typeof courses[0] }) {
    const statusColors = {
        open: "bg-green-100 text-green-700",
        waitlist: "bg-gold text-navy shadow-sm font-bold",
        "coming-soon": "bg-teal text-white shadow-sm font-bold",
    };

    const statusLabels = {
        open: course.requiresInterview ? "Interview Required" : "Purchase Now",
        waitlist: "Join Waitlist",
        "coming-soon": "Coming Soon",
    };

    const typeLabels = {
        masterclass: "Masterclass",
        certification: "Certification",
        ebook: "eBook",
    };

    const isExternal = !!course.amazonLink;
    const href = course.amazonLink || `/courses/${course.slug}`;

    const cardContent = (
        <>
            {/* Image */}
            <div className="relative aspect-[16/10] rounded-lg overflow-hidden mb-5 -mx-6 -mt-6">
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                    <span className={`badge ${statusColors[course.status]}`}>
                        {statusLabels[course.status]}
                    </span>
                </div>

                {/* Type Badge - Hidden for ebooks */}
                {course.type !== 'ebook' && (
                    <div className="absolute bottom-4 left-4">
                        <span className="badge bg-white/90 text-navy backdrop-blur-sm">
                            {typeLabels[course.type]}
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex-grow">
                <h3 className="font-heading font-semibold text-lg text-navy mb-2 group-hover:text-teal transition-colors line-clamp-2">
                    {course.title}
                </h3>
                <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                    {course.subtitle}
                </p>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                    {course.duration && (
                        <span className="flex items-center gap-1.5">
                            <Clock size={14} />
                            {course.duration}
                        </span>
                    )}
                    {course.instructor && (
                        <span className="flex items-center gap-1.5">
                            <Users size={14} />
                            {course.instructor === 'both' ? 'Stephan & Amber' :
                                course.instructor === 'stephan' ? 'Stephan Kerby' :
                                    course.instructor === 'martin' ? 'Martin W. Ball, Ph.D.' : 'Amber Kerby'}
                        </span>
                    )}
                    {course.format && (
                        <span className="flex items-center gap-1.5">
                            <BookOpen size={14} />
                            {course.format}
                        </span>
                    )}
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
                <div>
                    {course.price ? (
                        <span className="font-semibold text-navy">${course.price}</span>
                    ) : (
                        <span className="text-sm text-slate-500">
                            {isExternal ? 'Amazon' : (course.nextCohort ? `Next: ${course.nextCohort}` : 'View Details')}
                        </span>
                    )}
                </div>
                <span className="inline-flex items-center gap-1 text-teal font-medium text-sm group-hover:gap-2 transition-all">
                    {isExternal ? 'Buy on Amazon' : 'Learn More'}
                    <ArrowRight size={16} />
                </span>
            </div>
        </>
    );

    if (isExternal) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group card-interactive flex flex-col h-full"
            >
                {cardContent}
            </a>
        );
    }

    return (
        <Link
            href={href}
            className="group card-interactive flex flex-col h-full"
        >
            {cardContent}
        </Link>
    );
}

export default function CoursesSection() {
    // Group courses by type
    const certifications = courses.filter(c => c.type === 'certification');
    const masterclasses = courses.filter(c => c.type === 'masterclass');
    const ebooks = courses.filter(c => c.type === 'ebook');

    return (
        <section id="courses" className="section bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="decorative-line mx-auto mb-6" />
                    <h2 className="text-navy mb-4">Our Programs</h2>
                    <p className="text-lg text-slate-600">
                        A wide range of coursework to fit your schedule and your needs.
                        Whether you're a licensed clinician, facilitator, guide, or dedicated seeker,
                        our curriculum is designed to meet you where you are.
                    </p>
                </div>

                {/* Certification Programs */}
                {certifications.length > 0 && (
                    <div className="mb-16">
                        <div className="mb-8 p-6 bg-navy text-white rounded-xl">
                            <h3 className="text-2xl font-heading font-semibold mb-2">
                                Certification Programs
                            </h3>
                            <p className="text-slate-300">
                                These are <strong>LIVE</strong> cohort-based trainings. To ensure the highest quality of facilitation and safety, an interview is required for all certification paths.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {certifications.map((course) => (
                                <CourseCard key={course.slug} course={course} />
                            ))}
                        </div>
                    </div>
                )}

                {/* Masterclasses */}
                {masterclasses.length > 0 && (
                    <div className="mb-16">
                        <div className="mb-8 p-6 bg-slate-50 border border-slate-200 rounded-xl">
                            <h3 className="text-2xl font-heading font-semibold text-navy mb-2">
                                Masterclasses
                            </h3>
                            <p className="text-slate-600">
                                <strong>Evergreen</strong> trainings designed for self-paced learning. No interviews needed—you can purchase and begin these trainings immediately.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {masterclasses.map((course) => (
                                <CourseCard key={course.slug} course={course} />
                            ))}
                        </div>
                    </div>
                )}

                {/* eBooks & Resources */}
                {ebooks.length > 0 && (
                    <div id="ebooks">
                        <div className="mb-8">
                            <h3 className="text-2xl font-heading font-semibold text-navy mb-2">
                                eBooks & Resources
                            </h3>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {ebooks.map((course) => (
                                <CourseCard key={course.slug} course={course} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
