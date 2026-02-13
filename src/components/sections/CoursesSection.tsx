"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRight, BookOpen, Clock, Users, X } from "lucide-react";
import { Course, courses } from "@/data/courses";

type ProgramTab = "all" | Course["type"];
type RoleFilter = "all" | "clinicians" | "facilitators" | "seekers";
type CommitmentFilter = "all" | "high" | "flexible" | "light";
type StartFilter = "all" | "open-now" | "upcoming" | "coming-soon";

const tabs: { id: ProgramTab; label: string }[] = [
    { id: "all", label: "All" },
    { id: "certification", label: "Certifications" },
    { id: "masterclass", label: "Masterclasses" },
    { id: "ebook", label: "Books" },
];

const roleTagsBySlug: Record<string, RoleFilter[]> = {
    "5-meo-dmt-facilitation": ["clinicians", "facilitators"],
    "martin-ball-5-meo-dmt": ["facilitators", "clinicians"],
    "mastering-ketamine-assisted-therapy": ["clinicians", "facilitators"],
    "the-embodiment-protocol": ["facilitators", "seekers"],
    "5-meo-dmt-bufo-masterclass": ["facilitators", "seekers"],
    "integration-specialist-masterclass": ["clinicians", "facilitators"],
};

const fitStatementBySlug: Record<string, string> = {
    "5-meo-dmt-facilitation": "Practitioners ready for live mentorship and long-term facilitation standards.",
    "martin-ball-5-meo-dmt": "Coaches and facilitators supporting post-5-MeO integration in real client work.",
    "mastering-ketamine-assisted-therapy": "Clinicians and facilitators seeking responsible KAT frameworks.",
    "the-embodiment-protocol": "Facilitators committed to integrating awakening through nervous system work.",
};

function getInstructorLabel(course: Course): string {
    if (course.instructor === "both") {
        return "Stephan & Amber Kerby";
    }
    if (course.instructor === "stephan") {
        return "Stephan Kerby";
    }
    if (course.instructor === "martin") {
        return "Martin W. Ball, Ph.D.";
    }
    return "Amber Kerby";
}

function getRoleTags(course: Course): RoleFilter[] {
    if (roleTagsBySlug[course.slug]) {
        return roleTagsBySlug[course.slug];
    }

    if (course.type === "certification") {
        return ["clinicians", "facilitators"];
    }
    if (course.type === "masterclass") {
        return ["clinicians", "facilitators", "seekers"];
    }
    return ["seekers", "facilitators"];
}

function getCommitmentLevel(course: Course): CommitmentFilter {
    if (course.type === "certification") {
        return "high";
    }
    if (course.type === "masterclass") {
        return "flexible";
    }
    return "light";
}

function getStartCategory(course: Course): StartFilter {
    if (course.status === "coming-soon") {
        return "coming-soon";
    }
    if (course.status === "waitlist") {
        return "upcoming";
    }
    if (course.type === "certification") {
        return "upcoming";
    }
    return "open-now";
}

function getFitStatement(course: Course): string {
    if (fitStatementBySlug[course.slug]) {
        return fitStatementBySlug[course.slug];
    }

    if (course.type === "certification") {
        return "Best for practitioners who want live accountability, supervision, and applied practice.";
    }
    if (course.type === "masterclass") {
        return "Best for self-paced learners building practical, trauma-informed competence.";
    }
    return "Best for readers who want practical frameworks they can study and revisit anytime.";
}

function getPathBadge(course: Course): string | null {
    if (
        course.type === "certification" &&
        course.status === "open" &&
        (course.slug === "5-meo-dmt-facilitation" || course.slug === "martin-ball-5-meo-dmt")
    ) {
        return "Reserve Seat";
    }

    return null;
}

function CourseCard({
    course,
    onOpenDeposit,
}: {
    course: Course;
    onOpenDeposit: (course: Course) => void;
}) {
    const statusColors: Record<Course["status"], string> = {
        open: "bg-green-100 text-green-800",
        waitlist: "bg-gold text-navy",
        "coming-soon": "bg-teal text-white",
    };

    const statusLabels: Record<Course["status"], string> = {
        open: "Open",
        waitlist: "Waitlist",
        "coming-soon": "Coming Soon",
    };

    const typeLabels: Record<Course["type"], string> = {
        certification: "Certification",
        masterclass: "Masterclass",
        ebook: "Book",
    };

    const isExternal = !!course.amazonLink;
    const href = course.amazonLink || `/courses/${course.slug}`;
    const showDeposit =
        course.type === "certification" &&
        course.status === "open" &&
        (Boolean(course.payLink) || Boolean(course.depositQrImage)) &&
        Boolean(course.depositAmount);

    const handleDepositClick = (event: React.MouseEvent | React.KeyboardEvent) => {
        event.preventDefault();
        event.stopPropagation();
        onOpenDeposit(course);
    };

    const cardContent = (
        <>
            <div
                className={`relative rounded-lg overflow-hidden mb-5 -mx-6 -mt-6 ${
                    course.type === "ebook" ? "aspect-[3/4] bg-slate-100" : "aspect-[16/10]"
                }`}
            >
                <img
                    src={course.image}
                    alt={course.title}
                    className={`w-full h-full ${
                        course.type === "ebook"
                            ? "object-contain"
                            : "object-cover group-hover:scale-105 transition-transform duration-500"
                    }`}
                />
                {course.type !== "ebook" && (
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-navy/20 to-transparent" />
                )}

                {course.type !== "ebook" && (
                    <>
                        {getPathBadge(course) && (
                            <div className="absolute top-4 left-4">
                                <span className="badge bg-white/90 text-navy backdrop-blur-sm">{getPathBadge(course)}</span>
                            </div>
                        )}

                        {course.status !== "open" && (
                            <div className="absolute top-4 right-4">
                                <span className={`badge ${statusColors[course.status]}`}>{statusLabels[course.status]}</span>
                            </div>
                        )}

                        {course.type === "certification" && (
                            <div className="absolute bottom-4 left-4">
                                <span className="badge bg-white/90 text-navy backdrop-blur-sm">{typeLabels[course.type]}</span>
                            </div>
                        )}
                    </>
                )}
            </div>

            <div className="flex-grow">
                <h3 className="font-heading font-semibold text-lg text-navy mb-2 group-hover:text-teal transition-colors line-clamp-2">
                    {course.title}
                </h3>
                <p className="text-slate-600 text-sm line-clamp-2 mb-3">{course.subtitle}</p>
                <p className="text-slate-700 text-sm leading-relaxed mb-4">
                    <span className="font-semibold text-navy">Best for:</span> {getFitStatement(course)}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                    {course.duration && (
                        <span className="flex items-center gap-1.5">
                            <Clock size={14} />
                            {course.duration}
                        </span>
                    )}
                    <span className="flex items-center gap-1.5">
                        <Users size={14} />
                        {getInstructorLabel(course)}
                    </span>
                    {course.format && (
                        <span className="flex items-center gap-1.5">
                            <BookOpen size={14} />
                            {course.format}
                        </span>
                    )}
                </div>
            </div>

            <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 gap-3">
                <div>
                    {course.price ? (
                        <span className="font-semibold text-navy">${course.price}</span>
                    ) : (
                        <span className="text-sm text-slate-500">
                            {isExternal ? "Amazon" : course.nextCohort ? `Next: ${course.nextCohort}` : "View Details"}
                        </span>
                    )}
                </div>

                <div className="flex items-center gap-3">
                    <span className={`inline-flex items-center gap-1 text-teal text-sm group-hover:gap-2 transition-all ${isExternal ? "font-bold" : "font-medium"}`}>
                        {isExternal ? "Buy on Amazon" : "Learn More"}
                        <ArrowRight size={16} />
                    </span>

                    {showDeposit && (
                        <button
                            type="button"
                            onClick={handleDepositClick}
                            onKeyDown={(event) => {
                                if (event.key === "Enter" || event.key === " ") {
                                    handleDepositClick(event);
                                }
                            }}
                            className="btn-deposit text-xs px-3 py-2"
                        >
                            {`Reserve Deposit (${`$${course.depositAmount}`})`}
                        </button>
                    )}
                </div>
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
        <Link href={href} className="group card-interactive flex flex-col h-full">
            {cardContent}
        </Link>
    );
}

export default function CoursesSection() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const programParam = searchParams.get("program");
    const [roleFilter, setRoleFilter] = useState<RoleFilter>("all");
    const [commitmentFilter, setCommitmentFilter] = useState<CommitmentFilter>("all");
    const [startFilter, setStartFilter] = useState<StartFilter>("all");
    const [depositIntentCourse, setDepositIntentCourse] = useState<Course | null>(null);

    const activeTab: ProgramTab =
        programParam === "certifications"
            ? "certification"
            : programParam === "masterclasses"
                ? "masterclass"
                : programParam === "books"
                    ? "ebook"
                    : "all";

    const setActiveTab = (tab: ProgramTab) => {
        const programQuery =
            tab === "certification"
                ? "certifications"
                : tab === "masterclass"
                    ? "masterclasses"
                    : tab === "ebook"
                        ? "books"
                        : "all";

        router.replace(`/?program=${programQuery}#courses`, { scroll: false });
    };

    const filteredCourses = useMemo(() => {
        const filtered = courses
            .filter((course) => activeTab === "all" || course.type === activeTab)
            .filter((course) => roleFilter === "all" || getRoleTags(course).includes(roleFilter))
            .filter((course) => commitmentFilter === "all" || getCommitmentLevel(course) === commitmentFilter)
            .filter((course) => startFilter === "all" || getStartCategory(course) === startFilter)
            .sort((a, b) => {
                const statusOrder: Record<Course["status"], number> = {
                    open: 0,
                    waitlist: 1,
                    "coming-soon": 2,
                };
                const typeOrder: Record<Course["type"], number> = {
                    certification: 0,
                    masterclass: 1,
                    ebook: 2,
                };

                if (statusOrder[a.status] !== statusOrder[b.status]) {
                    return statusOrder[a.status] - statusOrder[b.status];
                }
                return typeOrder[a.type] - typeOrder[b.type];
            });

        return filtered;
    }, [activeTab, roleFilter, commitmentFilter, startFilter]);

    const clearFilters = () => {
        setRoleFilter("all");
        setCommitmentFilter("all");
        setStartFilter("all");
    };

    const shouldShowClearFilters = roleFilter !== "all" || commitmentFilter !== "all" || startFilter !== "all";

    return (
        <section id="courses" className="section bg-white">
            <div className="container-custom">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="decorative-line mx-auto mb-6" />
                    <h2 className="text-navy mb-4">Our Programs</h2>
                    <p className="text-lg text-slate-600">
                        A wide range of coursework to fit your schedule and your needs.
                        Whether you&apos;re a licensed clinician, facilitator, guide, or dedicated seeker,
                        our curriculum is designed to meet you where you are.
                    </p>
                </div>

                <div className="mb-6 border border-slate-200 rounded-xl p-2 bg-slate-50">
                    <div className="flex flex-wrap gap-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                type="button"
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                                    activeTab === tab.id
                                        ? "bg-navy text-white"
                                        : "bg-white text-slate-700 border border-slate-200 hover:border-teal/40 hover:text-navy"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mb-10 grid md:grid-cols-4 gap-3">
                    <select
                        value={roleFilter}
                        onChange={(event) => setRoleFilter(event.target.value as RoleFilter)}
                        className="px-3 py-3 rounded-lg border border-slate-200 text-slate-700 bg-white"
                    >
                        <option value="all">All Roles</option>
                        <option value="clinicians">Clinicians / Therapists</option>
                        <option value="facilitators">Facilitators / Coaches</option>
                        <option value="seekers">Serious Seekers</option>
                    </select>

                    <select
                        value={commitmentFilter}
                        onChange={(event) => setCommitmentFilter(event.target.value as CommitmentFilter)}
                        className="px-3 py-3 rounded-lg border border-slate-200 text-slate-700 bg-white"
                    >
                        <option value="all">All Commitment Levels</option>
                        <option value="high">High Commitment (Live)</option>
                        <option value="flexible">Flexible (Self-Paced)</option>
                        <option value="light">Lightweight (Books)</option>
                    </select>

                    <select
                        value={startFilter}
                        onChange={(event) => setStartFilter(event.target.value as StartFilter)}
                        className="px-3 py-3 rounded-lg border border-slate-200 text-slate-700 bg-white"
                    >
                        <option value="all">All Start Timing</option>
                        <option value="open-now">Open Now</option>
                        <option value="upcoming">Upcoming Cohort</option>
                        <option value="coming-soon">Coming Soon</option>
                    </select>

                    <button
                        type="button"
                        onClick={clearFilters}
                        disabled={!shouldShowClearFilters}
                        className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-slate-200 text-slate-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50"
                    >
                        <X size={16} />
                        Clear Filters
                    </button>
                </div>

                {filteredCourses.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCourses.map((course) => (
                            <CourseCard key={course.slug} course={course} onOpenDeposit={setDepositIntentCourse} />
                        ))}
                    </div>
                ) : (
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-10 text-center">
                        <p className="text-xl font-heading text-navy mb-2">No programs match these filters yet.</p>
                        <p className="text-slate-600">Try broadening your role, commitment, or start timing filters.</p>
                    </div>
                )}

            </div>

            {depositIntentCourse && (
                <div
                    className="fixed inset-0 z-[110] bg-navy/75 backdrop-blur-sm px-4 py-8"
                    role="presentation"
                    onClick={() => setDepositIntentCourse(null)}
                >
                    <div
                        className="max-w-md mx-auto bg-white rounded-2xl shadow-large border border-slate-200 overflow-hidden"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Deposit confirmation"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                            <h4 className="text-lg font-heading font-semibold text-navy">Reserve Your Seat</h4>
                            <button
                                type="button"
                                onClick={() => setDepositIntentCourse(null)}
                                className="w-8 h-8 rounded-full border border-slate-300 text-slate-600 hover:text-navy hover:border-slate-400 transition-colors inline-flex items-center justify-center"
                                aria-label="Close deposit confirmation"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        <div className="p-6">
                            <p className="text-slate-700 mb-2">
                                You&apos;re reserving your seat with a
                                <span className="font-semibold text-navy"> {depositIntentCourse.depositAmount ? `$${depositIntentCourse.depositAmount}` : "deposit"}</span>.
                            </p>
                            <p className="text-slate-600 text-sm mb-6">
                                {depositIntentCourse.requiresInterview
                                    ? "Remaining tuition is due after interview acceptance."
                                    : "Remaining tuition is due at class start date."}
                            </p>

                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    type="button"
                                    onClick={() => setDepositIntentCourse(null)}
                                    className="px-4 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
                                >
                                    Back
                                </button>

                                {depositIntentCourse.payLink ? (
                                    <a
                                        href={depositIntentCourse.payLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => setDepositIntentCourse(null)}
                                        className="btn-deposit text-center py-3"
                                    >
                                        Continue to Deposit
                                    </a>
                                ) : (
                                    <Link
                                        href={`/courses/${depositIntentCourse.slug}#apply`}
                                        onClick={() => setDepositIntentCourse(null)}
                                        className="btn-deposit text-center py-3"
                                    >
                                        View Deposit Details
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
