"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

const founders = [
    {
        name: "Stephan Kerby",
        role: "Co-Founder & Lead Instructor",
        image: "/images/16e2cf5d-d123-4198-ac1f-d8bf089a256f.jpg",
        bio: "My personal healing journey through entheogens opened the path to profound transformation and awakened a lifelong dedication to helping others do the same. This work began with the founding of a visionary initiative and has evolved into a mission to make psychedelic facilitation safer, more embodied, and trauma-informed.",
        specialties: [
            "5-MeO-DMT Facilitation",
            "Somatic Integration",
            "Trauma-Informed Practice",
        ],
        linkedin: "https://www.linkedin.com/in/mindscapeinstitute/",
    },
    {
        name: "Amber Kerby, LMFT",
        role: "Co-Founder & Lead Instructor",
        image: "/images/ea7b4995-4a6d-441f-a654-8950252753f4.jpg",
        bio: "Licensed marriage and family therapist specializing in IFS and psychedelic integration. Through Non Ordinary Therapy, LLC, I bring clinical expertise and deep compassion to the field of psychedelic-assisted healing.",
        specialties: [
            "IFS Level 2 Trained",
            "Psychedelic Integration",
            "Trauma-Informed Practice",
        ],
        linkedin: "https://www.linkedin.com/in/nonordinarytherapy/",
    },
];

export default function AboutSection() {
    return (
        <section id="about" className="section bg-gradient-to-b from-slate-50 to-white overflow-hidden">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="decorative-line mx-auto mb-6" />
                    <h2 className="text-navy mb-4">Meet the Founders</h2>
                    <p className="text-lg text-slate-600">
                        Stephan and Amber Kerby co-founded Mindscape Psychedelic Institute
                        to teach cutting-edge programs for therapists, facilitators, and guides
                        seeking to understand and responsibly use entheogens for healing and awakening.
                    </p>
                </div>

                {/* Couple Image */}
                <div className="max-w-2xl mx-auto mb-16">
                    <div className="relative rounded-2xl overflow-hidden shadow-large">
                        <Image
                            src="/images/1d73c25a-9bb6-4d61-8111-671d1f3ebc59.jpg"
                            alt="Stephan and Amber Kerby"
                            width={800}
                            height={600}
                            className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <p className="text-white/90 text-lg font-medium">
                                Together, we blend science, spirituality, and clinical awareness—
                                emphasizing safety, ethics, and embodied practice as the foundation
                                for transformative work.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Individual Bios */}
                <div className="grid md:grid-cols-2 gap-12">
                    {founders.map((founder, index) => (
                        <div
                            key={founder.name}
                            className="group"
                        >
                            <div className="flex flex-col lg:flex-row gap-6">
                                {/* Image */}
                                <div className="lg:w-48 flex-shrink-0">
                                    <div className="relative rounded-xl overflow-hidden aspect-[3/4] lg:aspect-square">
                                        <Image
                                            src={founder.image}
                                            alt={founder.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <h3 className="font-heading font-semibold text-2xl text-navy mb-1">
                                        {founder.name}
                                    </h3>
                                    <p className="text-teal font-medium mb-4">{founder.role}</p>
                                    <p className="text-slate-600 mb-4 leading-relaxed">
                                        {founder.bio}
                                    </p>

                                    {/* Specialties */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {founder.specialties.map((specialty) => (
                                            <span
                                                key={specialty}
                                                className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm"
                                            >
                                                {specialty}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="flex gap-3">
                                        <a
                                            href={founder.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center
                               hover:bg-teal hover:text-white transition-colors"
                                            aria-label={`${founder.name}'s LinkedIn`}
                                        >
                                            <Linkedin size={16} />
                                        </a>
                                        <a
                                            href="mailto:contact@mindscapeinstitute.com"
                                            className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center
                               hover:bg-teal hover:text-white transition-colors"
                                            aria-label={`Email ${founder.name}`}
                                        >
                                            <Mail size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mission Statement */}
                <div className="mt-20 p-10 rounded-2xl bg-navy text-white text-center">
                    <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-4">
                        Our Mission
                    </h3>
                    <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
                        To bring the highest level of psychedelic education and curriculum to the forefront
                        of mental health and therapy. We're dedicated to crafting certification programs
                        that not only enlighten but also ensure the creation of safer spaces for
                        psychedelic exploration.
                    </p>
                    <div className="mt-8">
                        <Link href="#courses" className="btn-primary">
                            Explore Our Programs
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
