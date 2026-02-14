"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Users, Heart, Shield } from "lucide-react";

const features = [
    {
        icon: Award,
        title: "Fully Certified Training",
        subtitle: "Where professional standards meet embodied wisdom",
        description:
            "Our programs are fully certified and designed to prepare clinicians, facilitators, and guides to work safely, ethically, and skillfully in psychedelic care. We combine rigorous professional standards with lived experience, trauma-informed practices, and nondual insight.",
    },
    {
        icon: Users,
        title: "Support That Doesn't End",
        subtitle: "Lifelong community and mentorship",
        description:
            "True learning happens over time-through mentorship, community, and lived practice. From interactive mentorship to an ongoing practitioner community, you'll have guidance, feedback, and connection as you grow-personally, professionally, and spiritually.",
    },
    {
        icon: Heart,
        title: "A Safe Space",
        subtitle: "Built with intention, held with integrity",
        description:
            "Psychedelic education requires more than information-it requires a safe, supportive space to explore, question, and grow. Our faculty is experienced in trauma-informed facilitation and deeply understands the vulnerability this work invites.",
    },
    {
        icon: Shield,
        title: "Ethical Foundation",
        subtitle: "Responsibility at the core",
        description:
            "We cultivate an environment where emotional safety, confidentiality, and personal agency are honored. Here, honesty is welcomed, uncertainty is safe to explore, and transformation unfolds with compassion-not pressure.",
    },
];

export default function FeaturesSection() {
    const [visibleItems, setVisibleItems] = useState<number[]>([]);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute("data-index") || "0");
                        setVisibleItems((prev) => [...new Set([...prev, index])]);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const items = sectionRef.current?.querySelectorAll("[data-index]");
        items?.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="features"
            className="section bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
        >
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal to-transparent opacity-20" />
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-100/50 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold/10 rounded-full blur-3xl" />

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="decorative-line mx-auto mb-6" />
                    <h2 className="text-navy mb-4">
                        At Mindscape, We Offer
                    </h2>
                    <p className="text-lg text-slate-600">
                        Unlock the potential of consciousness-not just through information,
                        but through integration, embodiment, and lived experience.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            data-index={index}
                            className={`group p-8 lg:p-10 rounded-2xl bg-white border border-slate-100
                         shadow-soft hover:shadow-large transition-all duration-500
                         hover:-translate-y-1 ${visibleItems.includes(index)
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-8"
                                }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal to-teal-600 
                             flex items-center justify-center mb-6 
                             group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-7 h-7 text-white" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-heading font-semibold text-navy mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-teal font-medium mb-4">{feature.subtitle}</p>
                            <p className="text-slate-600 leading-relaxed">{feature.description}</p>

                            {/* Hover accent */}
                            <div className="mt-6 w-0 h-0.5 bg-gradient-to-r from-teal to-gold 
                             group-hover:w-20 transition-all duration-500 rounded-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
