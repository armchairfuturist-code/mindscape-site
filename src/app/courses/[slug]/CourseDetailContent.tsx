"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowLeft,
    Clock,
    Users,
    BookOpen,
    Check,
    ChevronDown,
    ChevronUp,
    Star,
    Calendar,
    Mail,
    Send,
    Zap,
    Shield,
    UserCheck
} from "lucide-react";
import { Course } from "@/data/courses";

interface Props {
    course: Course;
}


function StatusToggle({
    course,
    email,
    setEmail,
    isSubmitted,
    handleWaitlistSubmit,
}: {
    course: Course;
    email: string;
    setEmail: (email: string) => void;
    isSubmitted: boolean;
    handleWaitlistSubmit: (e: React.FormEvent) => void;
}) {
    if (course.status === "open") {
        const isMasterclass = course.type === "masterclass";
        return (
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8">
                <h3 className="font-heading font-semibold text-xl text-white mb-4">
                    {isMasterclass ? "Instant Access" : "Enrollment Open"}
                </h3>
                <p className="text-white/70 mb-6">
                    {isMasterclass
                        ? "Get immediate access to all course materials and begin your journey today."
                        : "Secure your spot now and begin your journey."}
                </p>
                <Link
                    href={course.kajabiLink || "#"}
                    className="btn-primary w-full text-center text-lg py-4"
                >
                    {isMasterclass ? "Buy Now" : "Apply Now"}
                </Link>
                {course.priceTiers ? (
                    <div className="mt-4 space-y-2">
                        {course.priceTiers.map((tier, i) => (
                            <div key={i} className="flex justify-between items-center text-sm text-white/70 px-4 py-3 bg-white/5 rounded-lg border border-white/10">
                                <span className="font-medium text-white/90">{tier.label}</span>
                                <span className="font-bold text-gold">${tier.price}</span>
                            </div>
                        ))}
                    </div>
                ) : (
                    course.price && (
                        <p className="text-white/50 text-sm text-center mt-4">
                            Price: ${course.price}
                        </p>
                    )
                )}
            </div>
        );
    }

    return (
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8">
            {isSubmitted ? (
                <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                        <Check size={24} className="text-green-400" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-white mb-2">
                        You're on the List!
                    </h3>
                    <p className="text-white/70">
                        We'll notify you when enrollment opens for the{" "}
                        {course.nextCohort} cohort.
                    </p>
                </div>
            ) : (
                <>
                    <div className="flex items-center gap-2 mb-4">
                        <Calendar size={18} className="text-gold" />
                        <h3 className="font-heading font-semibold text-xl text-white">
                            Join {course.nextCohort || "2026"} Waitlist
                        </h3>
                    </div>
                    <p className="text-white/70 mb-6">
                        Due to overwhelming demand, enrollment is currently closed.
                        {course.nextCohort && ` Next cohort starts ${course.nextCohort}.`}
                    </p>
                    <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20
                       text-white placeholder:text-white/40
                       focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                        />
                        <button type="submit" className="btn-primary w-full py-4">
                            <span className="flex items-center justify-center gap-2">
                                Join Waitlist
                                <Send size={16} />
                            </span>
                        </button>
                    </form>
                </>
            )}
        </div>
    );
}

function AccordionItem({
    title,
    topics,
    description,
    isOpen,
    onClick,
}: {
    title: string;
    topics: string[];
    description?: string;
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <div className="border border-slate-200 rounded-lg overflow-hidden">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between p-5 bg-white hover:bg-slate-50 transition-colors text-left"
            >
                <span className="font-heading font-semibold text-navy">{title}</span>
                {isOpen ? (
                    <ChevronUp size={20} className="text-teal" />
                ) : (
                    <ChevronDown size={20} className="text-slate-400" />
                )}
            </button>
            {isOpen && (
                <div className="p-5 pt-0 bg-white">
                    {description && (
                        <p className="text-slate-600 mb-4 italic">{description}</p>
                    )}
                    <ul className="space-y-2">
                        {topics.map((topic, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <Check size={16} className="text-teal mt-1 flex-shrink-0" />
                                <span className="text-slate-600">{topic}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

function FAQItem({
    question,
    answer,
    isOpen,
    onClick,
}: {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}) {
    return (
        <div className="border-b border-slate-200 last:border-b-0">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-5 text-left"
            >
                <span className="font-semibold text-navy pr-4">{question}</span>
                {isOpen ? (
                    <ChevronUp size={20} className="text-teal flex-shrink-0" />
                ) : (
                    <ChevronDown size={20} className="text-slate-400 flex-shrink-0" />
                )}
            </button>
            {isOpen && (
                <div className="pb-5">
                    <p className="text-slate-600">{answer}</p>
                </div>
            )}
        </div>
    );
}

export default function CourseDetailContent({ course }: Props) {
    const [activeSection, setActiveSection] = useState("how-it-works");
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleWaitlistSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Integrate with email service
        setIsSubmitted(true);
    };

    const isMasterclass = course.type === "masterclass";
    const navItems = isMasterclass
        ? [
            { id: "course-details", label: "Course Details" },
            ...(course.guides ? [{ id: "guides", label: "Your Guides" }] : []),
            { id: "faq", label: "FAQ" },
        ]
        : [
            { id: "how-it-works", label: "How It Works" },
            { id: "schedule", label: "Schedule" },
            { id: "curriculum", label: "Curriculum" },
            ...(course.guides ? [{ id: "guides", label: "Your Guides" }] : []),
            { id: "apply", label: course.status === "open" ? "Apply Now" : "Waitlist" },
            { id: "faq", label: "FAQ" },
        ];

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center bg-navy overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src={course.image}
                        alt={course.title}
                        fill
                        className="object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80" />
                </div>

                <div className="container-custom relative z-10 pt-32 pb-16">
                    {/* Back Link */}
                    <Link
                        href="/#courses"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft size={16} />
                        Back to Courses
                    </Link>

                    <div className="grid lg:grid-cols-5 gap-12 items-start">
                        {/* Left Content */}
                        <div className="lg:col-span-3">
                            {/* Type Badge */}
                            <span className="badge bg-teal/20 text-teal-300 mb-4">
                                {course.type === "certification"
                                    ? "Certification Program"
                                    : course.type === "masterclass"
                                        ? "Masterclass"
                                        : "Digital Resource"}
                            </span>

                            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
                                {course.title}
                            </h1>
                            <p className="text-xl text-teal-200 mb-6 font-semibold uppercase tracking-wide">{course.subtitle}</p>
                            <div className="text-lg text-white/80 mb-8 whitespace-pre-wrap max-w-2xl leading-relaxed">
                                {course.description}
                            </div>

                            {/* Meta */}
                            <div className="flex flex-wrap gap-6 text-white/70 mb-8">
                                {course.duration && (
                                    <span className="flex items-center gap-2">
                                        <Clock size={18} />
                                        {course.duration}
                                    </span>
                                )}
                                {course.format && (
                                    <span className="flex items-center gap-2">
                                        <BookOpen size={18} />
                                        {course.format}
                                    </span>
                                )}
                                <span className="flex items-center gap-2">
                                    <Users size={18} />
                                    {course.instructor === "both"
                                        ? "Stephan & Amber"
                                        : course.instructor === "stephan"
                                            ? "Stephan Kerby"
                                            : course.instructor === "martin"
                                                ? "Martin W. Ball, Ph.D."
                                                : "Amber Kerby, LMFT"}
                                </span>
                            </div>

                            {/* Metrics Bar */}
                            <div className="flex flex-wrap gap-8">
                                {course.metrics.completionRate && (
                                    <div className="group">
                                        <div className="text-3xl font-bold text-gold mb-1 group-hover:scale-110 transition-transform">
                                            {course.metrics.completionRate}%
                                        </div>
                                        <div className="text-white/60 text-xs uppercase tracking-wider font-medium">Cohort Completion</div>
                                    </div>
                                )}
                                {course.metrics.recommendRate && (
                                    <div className="group">
                                        <div className="text-3xl font-bold text-gold mb-1 group-hover:scale-110 transition-transform">
                                            {course.metrics.recommendRate}%
                                        </div>
                                        <div className="text-white/60 text-xs uppercase tracking-wider font-medium">Recommended</div>
                                    </div>
                                )}
                                {course.metrics.students && (
                                    <div className="group">
                                        <div className="text-3xl font-bold text-gold mb-1 group-hover:scale-110 transition-transform">
                                            {course.metrics.students.toLocaleString()}+
                                        </div>
                                        <div className="text-white/60 text-xs uppercase tracking-wider font-medium">Alumni</div>
                                    </div>
                                )}
                            </div>

                            {/* Testimonial Preview */}
                            {course.testimonial && (
                                <div className="mt-12 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-gold" />
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={14} className="text-gold fill-gold" />
                                        ))}
                                    </div>
                                    <p className="text-white/90 text-lg italic mb-6 leading-relaxed">
                                        &ldquo;{course.testimonial.quote}&rdquo;
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal to-navy flex items-center justify-center border border-white/20">
                                            <span className="text-white font-semibold">
                                                {course.testimonial.author.charAt(0)}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">
                                                {course.testimonial.author}
                                            </p>
                                            <p className="text-teal-300 text-sm">
                                                {course.testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Column - Status Toggle */}
                        <div className="lg:col-span-2 lg:sticky lg:top-32">
                            <StatusToggle
                                course={course}
                                email={email}
                                setEmail={setEmail}
                                isSubmitted={isSubmitted}
                                handleWaitlistSubmit={handleWaitlistSubmit}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Sticky Navigation */}
            <nav className="sticky top-[72px] z-40 bg-white border-b border-slate-200 shadow-sm">
                <div className="container-custom">
                    <div className="flex overflow-x-auto scrollbar-hide -mx-4 px-4">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors ${activeSection === item.id
                                    ? "border-teal text-teal"
                                    : "border-transparent text-slate-600 hover:text-navy"
                                    }`}
                                onClick={() => setActiveSection(item.id)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Content Sections */}
            <div className="bg-white">
                {isMasterclass ? (
                    /* Unified Course Details for Masterclasses - Expert UX Layout */
                    <section id="course-details" className="section bg-white overflow-hidden">
                        <div className="container-custom">
                            <div className="max-w-6xl mx-auto">
                                <div className="decorative-line mb-8" />
                                <div className="flex flex-col lg:flex-row gap-16 mb-24">
                                    {/* Left Side: Overview & Philosophy */}
                                    <div className="lg:w-2/3">
                                        <h2 className="text-navy text-4xl mb-8 font-heading font-bold">Course Overview</h2>
                                        <div className="prose prose-lg text-slate-600 max-w-none">
                                            <p className="text-2xl text-navy/80 font-medium leading-relaxed mb-8 border-l-4 border-teal pl-6 italic">
                                                {course.howItWorksIntro}
                                            </p>
                                            <div className="whitespace-pre-wrap leading-relaxed space-y-4">
                                                {course.description}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Side: What You'll Learn (Sticky Card) */}
                                    <div className="lg:w-1/3">
                                        <div className="sticky top-32 p-10 bg-gradient-to-br from-navy to-navy-800 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
                                            <div className="absolute -top-24 -right-24 w-64 h-64 bg-teal/10 rounded-full blur-3xl group-hover:bg-teal/20 transition-colors duration-700" />
                                            <h3 className="text-2xl font-heading font-bold mb-8 flex items-center gap-3 relative z-10">
                                                <div className="w-10 h-10 rounded-xl bg-teal/20 flex items-center justify-center">
                                                    <BookOpen size={20} className="text-teal-300" />
                                                </div>
                                                What You'll Learn
                                            </h3>
                                            <ul className="space-y-5 relative z-10">
                                                {course.highlights.map((highlight, i) => (
                                                    <li key={i} className="flex items-start gap-4 group/item">
                                                        <div className="mt-1.5 w-2 h-2 rounded-full bg-teal-400/50 group-hover/item:bg-teal-300 transition-colors" />
                                                        <span className="text-slate-200 text-base leading-snug group-hover/item:text-white transition-colors">
                                                            {highlight}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Core Focus Pillars - Visual Grid */}
                                <div className="mb-32">
                                    <h3 className="text-3xl font-heading font-bold text-navy text-center mb-16">Core Focus Areas</h3>
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {course.howItWorks?.filter(item => !item.title.toLowerCase().includes("raising the standard") && !item.title.toLowerCase().includes("access")).map((item, index) => (
                                            <div
                                                key={index}
                                                className="group relative p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-teal/20 hover:shadow-2xl transition-all duration-500"
                                            >
                                                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 text-teal group-hover:bg-teal group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                                                    {index % 3 === 0 ? <Zap size={28} /> : index % 3 === 1 ? <Shield size={28} /> : <UserCheck size={28} />}
                                                </div>
                                                <h4 className="text-xl font-heading font-bold text-navy mb-4">
                                                    {item.title}
                                                </h4>
                                                <p className="text-slate-600 leading-relaxed text-sm">
                                                    {item.description}
                                                </p>
                                                <div className="absolute bottom-4 right-8 opacity-0 group-hover:opacity-10 scale-50 group-hover:scale-100 transition-all duration-500">
                                                    <Star size={48} className="text-teal" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Syllabus Section - Deep Engagement */}
                                <div className="mb-32 lg:px-20">
                                    <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                                        <div className="text-left">
                                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-teal mb-3 block">Self-Paced Learning</span>
                                            <h3 className="text-4xl font-heading font-bold text-navy">Course Curriculum</h3>
                                        </div>
                                        <p className="text-slate-500 font-medium md:max-w-xs text-right italic">
                                            A structured pathway designed to take you from foundational science to advanced facilitation mastery.
                                        </p>
                                    </div>
                                    <div className="space-y-4">
                                        {course.curriculum.map((module, index) => (
                                            <AccordionItem
                                                key={index}
                                                title={module.title}
                                                topics={module.topics}
                                                description={module.description}
                                                isOpen={openAccordion === index}
                                                onClick={() =>
                                                    setOpenAccordion(openAccordion === index ? null : index)
                                                }
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Raising the Standard - Final Closing Section */}
                                {course.howItWorks?.find(item => item.title.toLowerCase().includes("raising the standard")) && (
                                    <div className="relative rounded-[3rem] bg-navy p-12 md:p-20 text-white text-center overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-teal-900 opacity-50" />
                                        <div className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full -mr-48 -mt-48 blur-3xl shadow-[0_0_50px_rgba(20,184,166,0.3)]" />
                                        <div className="relative z-10 max-w-3xl mx-auto">
                                            <Star className="text-teal-400 mx-auto mb-8 animate-pulse" size={40} />
                                            <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6">Raising the Standard</h3>
                                            <p className="text-xl text-slate-300 leading-relaxed mb-10 italic">
                                                "{course.howItWorks.find(item => item.title.toLowerCase().includes("raising the standard"))?.description}"
                                            </p>
                                            <button
                                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                                className="btn-primary bg-teal hover:bg-teal-400 text-navy font-bold hover:scale-105 transition-transform"
                                            >
                                                Get Started Today
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                ) : (
                    /* Existing Segmented Sections for Certifications */
                    <>
                        <section id="how-it-works" className="section bg-gradient-to-b from-slate-50 to-white">
                            <div className="container-custom">
                                <div className="max-w-4xl">
                                    <div className="decorative-line mb-8" />
                                    <h2 className="text-navy mb-8">
                                        {course.howItWorks ? "How It Works" : "Experience What You're Really Capable Of"}
                                    </h2>
                                    <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6">
                                        {course.howItWorksIntro ? (
                                            <p className="text-xl text-navy-500/80 font-medium whitespace-pre-wrap">
                                                {course.howItWorksIntro}
                                            </p>
                                        ) : (
                                            <p className="text-xl text-navy-500/80 font-medium">
                                                At Mindscape, we don't just teach facilitation; we master the art of transformative care.
                                            </p>
                                        )}
                                        {!course.howItWorks && <p>{course.description}</p>}
                                    </div>

                                    {course.howItWorks && (
                                        <div className="mt-12 grid sm:grid-cols-2 gap-8">
                                            {course.howItWorks.map((item, index) => (
                                                <div
                                                    key={index}
                                                    className="p-8 rounded-2xl bg-white border border-slate-100 shadow-soft hover:shadow-medium transition-all group"
                                                >
                                                    <h3 className="text-xl font-heading font-semibold text-navy mb-4 group-hover:text-teal transition-colors">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-slate-600 leading-relaxed">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {course.highlights.length > 0 && !course.howItWorks && (
                                        <div className="mt-12 grid sm:grid-cols-2 gap-6">
                                            {course.highlights.map((highlight, index) => (
                                                <div
                                                    key={index}
                                                    className="group flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-100 shadow-soft hover:shadow-medium transition-all"
                                                >
                                                    <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-teal group-hover:text-white transition-colors">
                                                        <Check size={20} />
                                                    </div>
                                                    <span className="text-slate-700 font-medium pt-1">{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>

                        {!isMasterclass && (
                            <section id="schedule" className="section-sm bg-navy text-white relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-30" />
                                <div className="container-custom relative z-10">
                                    <h2 className="text-3xl font-heading font-semibold text-center mb-12">
                                        Program Logistics
                                    </h2>
                                    <div className="grid md:grid-cols-3 gap-8">
                                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                                            <Clock size={32} className="text-gold mx-auto mb-4" />
                                            <h4 className="font-semibold text-white mb-2 uppercase tracking-wide text-xs">Duration</h4>
                                            <p className="text-white/80 text-lg">{course.duration || "Self-paced"}</p>
                                        </div>
                                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                                            <BookOpen size={32} className="text-gold mx-auto mb-4" />
                                            <h4 className="font-semibold text-white mb-2 uppercase tracking-wide text-xs">Learning Format</h4>
                                            <p className="text-white/80 text-lg">{course.format || "Digital"}</p>
                                        </div>
                                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-center hover:bg-white/10 transition-colors">
                                            <Calendar size={32} className="text-gold mx-auto mb-4" />
                                            <h4 className="font-semibold text-white mb-2 uppercase tracking-wide text-xs">Enrollment</h4>
                                            <p className="text-white/80 text-lg">
                                                {course.nextCohort || "Open Enrollment"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        )}

                        {course.curriculum.length > 0 && (
                            <section id="curriculum" className="section bg-white">
                                <div className="container-custom">
                                    <div className="text-center max-w-3xl mx-auto mb-16">
                                        <div className="decorative-line mx-auto mb-6" />
                                        <h2 className="text-navy mb-4">The Curriculum</h2>
                                        <p className="text-lg text-slate-600">
                                            A synthesis of clinical depth, spiritual insight, and practical mastery.
                                        </p>
                                    </div>
                                    <div className="space-y-6 max-w-3xl mx-auto">
                                        {course.curriculum.map((module, index) => (
                                            <AccordionItem
                                                key={index}
                                                title={module.title}
                                                topics={module.topics}
                                                description={module.description}
                                                isOpen={openAccordion === index}
                                                onClick={() =>
                                                    setOpenAccordion(openAccordion === index ? null : index)
                                                }
                                            />
                                        ))}
                                    </div>
                                </div>
                            </section>
                        )}
                    </>
                )}

                {/* Guides / Your Guides */}
                {course.guides && course.guides.length > 0 && (
                    <section id="guides" className="section bg-slate-50">
                        <div className="container-custom">
                            <div className="text-center max-w-3xl mx-auto mb-16">
                                <div className="decorative-line mx-auto mb-6" />
                                <h2 className="text-navy mb-4">Your Guides</h2>
                                <p className="text-lg text-slate-600">
                                    A blend of clinical precision and experiential wisdom.
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {course.guides.map((guide, index) => (
                                    <div key={index} className="bg-white p-8 rounded-2xl shadow-soft border border-slate-100 flex flex-col items-center text-center">
                                        <div className="w-20 h-20 rounded-full bg-navy/5 flex items-center justify-center mb-6 border-2 border-gold/30">
                                            <Users size={32} className="text-navy/40" />
                                        </div>
                                        <h3 className="text-xl font-bold text-navy mb-1">{guide.name}</h3>
                                        <p className="text-teal font-semibold text-sm uppercase tracking-wider mb-4">{guide.role}</p>
                                        <p className="text-slate-600 text-sm leading-relaxed">{guide.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Final CTA Strip - Hidden for Masterclasses */}
                {!isMasterclass && (
                    <section id="apply" className="py-24 bg-gradient-to-br from-navy to-navy-800 text-white text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-teal)_0%,_transparent_70%)] opacity-10" />
                        <div className="container-custom relative z-10">
                            <h2 className="text-4xl font-heading font-bold mb-6">Invest in Your Mastery</h2>
                            <p className="text-xl text-teal-200 mb-12 max-w-2xl mx-auto">
                                Join a community of practitioners dedicated to the highest standards of psychedelic care.
                            </p>
                            <div className="max-w-md mx-auto">
                                <StatusToggle
                                    course={course}
                                    email={email}
                                    setEmail={setEmail}
                                    isSubmitted={isSubmitted}
                                    handleWaitlistSubmit={handleWaitlistSubmit}
                                />
                            </div>
                        </div>
                    </section>
                )}

                {/* FAQ */}
                {course.faq.length > 0 && (
                    <section id="faq" className="section bg-slate-50">
                        <div className="container-custom">
                            <div className="max-w-3xl mx-auto">
                                <h2 className="text-3xl font-heading font-semibold text-navy text-center mb-12">
                                    Common Questions
                                </h2>
                                <div className="bg-white rounded-2xl shadow-soft p-2 md:p-6">
                                    {course.faq.map((item, index) => (
                                        <FAQItem
                                            key={index}
                                            question={item.question}
                                            answer={item.answer}
                                            isOpen={openFAQ === index}
                                            onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </>
    );
}
