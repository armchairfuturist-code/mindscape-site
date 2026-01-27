"use client";

import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

// Placeholder testimonials - will be replaced with real content
const testimonials = [
    {
        id: 1,
        quote: "The personal breakthroughs I experienced have been nothing short of transformational. Stephan's approach bridges clinical precision with spiritual depth in a way I've never encountered.",
        author: "Dr. Sarah Mitchell",
        role: "Clinical Psychologist",
        rating: 5,
    },
    {
        id: 2,
        quote: "Amber's ketamine training completely transformed my practice. Her integration of IFS with psychedelic therapy is groundbreaking. I feel genuinely equipped to help my clients now.",
        author: "Michael Chen, LCSW",
        role: "Therapist",
        rating: 5,
    },
    {
        id: 3,
        quote: "The 5-MeO facilitator course was the most comprehensive and ethically grounded training I've found. The ongoing community support has been invaluable.",
        author: "Elena Rodriguez",
        role: "Integration Coach",
        rating: 5,
    },
    {
        id: 4,
        quote: "I came as a skeptical clinician and left as a believer in the power of well-facilitated psychedelic experiences. The safety protocols alone were worth the investment.",
        author: "Dr. James Patterson",
        role: "Psychiatrist",
        rating: 5,
    },
    {
        id: 5,
        quote: "What sets Mindscape apart is the emphasis on embodiment. This isn't just intellectual learning—it's transformative practice that you feel in your body.",
        author: "Lisa Thompson",
        role: "Somatic Therapist",
        rating: 5,
    },
    {
        id: 6,
        quote: "The certification program exceeded my expectations. The combination of live sessions, community support, and practical training prepared me thoroughly for this work.",
        author: "David Kim",
        role: "Certified Entheogenic Guide",
        rating: 5,
    },
    {
        id: 7,
        quote: "Stephan and Amber have created something truly special. The depth of knowledge, the ethical framework, and the ongoing mentorship make this the gold standard in psychedelic education.",
        author: "Dr. Amanda Foster",
        role: "Researcher & Clinician",
        rating: 5,
    },
    {
        id: 8,
        quote: "As someone new to this field, I felt completely supported throughout the training. The trauma-informed approach isn't just taught—it's modeled in every interaction.",
        author: "Rachel Green, MA",
        role: "Mental Health Counselor",
        rating: 5,
    },
    {
        id: 9,
        quote: "The MDMA masterclass prepared me for the future of therapy. The knowledge of the MAPS protocol and practical integration techniques have been invaluable.",
        author: "Dr. Robert Hayes",
        role: "Psychotherapist",
        rating: 5,
    },
    {
        id: 10,
        quote: "I've taken many trainings, but this one stands alone. The quality of instruction, the depth of community, and the transformational nature of the work is unmatched.",
        author: "Jennifer Walsh",
        role: "Retreat Facilitator",
        rating: 5,
    },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    return (
        <div className="flex-shrink-0 w-[400px] max-w-[85vw] p-6 rounded-2xl bg-white border border-slate-100 shadow-soft">
            {/* Rating */}
            <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-gold fill-gold" />
                ))}
            </div>

            {/* Quote */}
            <div className="relative mb-6">
                <Quote size={24} className="absolute -top-2 -left-2 text-teal-200 opacity-50" />
                <p className="text-slate-700 leading-relaxed pl-4">
                    &ldquo;{testimonial.quote}&rdquo;
                </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal to-navy flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                        {testimonial.author.charAt(0)}
                    </span>
                </div>
                <div>
                    <p className="font-semibold text-navy">{testimonial.author}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
            </div>
        </div>
    );
}

export default function TestimonialsSection() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-scroll animation
    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationId: number;
        let scrollPos = 0;

        const scroll = () => {
            if (!isPaused && scrollContainer) {
                scrollPos += 0.5;
                if (scrollPos >= scrollContainer.scrollWidth / 2) {
                    scrollPos = 0;
                }
                scrollContainer.scrollLeft = scrollPos;
            }
            animationId = requestAnimationFrame(scroll);
        };

        animationId = requestAnimationFrame(scroll);
        return () => cancelAnimationFrame(animationId);
    }, [isPaused]);

    return (
        <section className="section bg-gradient-to-b from-white to-slate-50 overflow-hidden">
            <div className="container-custom mb-12">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <div className="decorative-line mx-auto mb-6" />
                    <h2 className="text-navy mb-4">Wall of Love</h2>
                    <p className="text-lg text-slate-600">
                        Join thousands of facilitators who have transformed their practice
                        through our training programs.
                    </p>
                </div>
            </div>

            {/* Scrolling Testimonials */}
            <div
                ref={scrollRef}
                className="flex gap-6 overflow-x-hidden pb-4"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Double the testimonials for infinite scroll effect */}
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                    <TestimonialCard key={`${testimonial.id}-${index}`} testimonial={testimonial} />
                ))}
            </div>

            {/* Stats Bar */}
            <div className="container-custom mt-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-navy text-white">
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-gold mb-1">97%</div>
                        <div className="text-white/70 text-sm">Cohort Completion</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-gold mb-1">96%</div>
                        <div className="text-white/70 text-sm">Strongly Recommended</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-gold mb-1">1,200+</div>
                        <div className="text-white/70 text-sm">Graduates Worldwide</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-gold mb-1">4.9/5</div>
                        <div className="text-white/70 text-sm">Average Rating</div>
                    </div>
                </div>
            </div>
        </section>
    );
}
