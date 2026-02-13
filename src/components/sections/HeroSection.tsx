"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Play } from "lucide-react";

export default function HeroSection() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0">
                {/* Image Background */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=2560"
                        alt="Atmospheric Peaks - Mindscape Consciousness"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>

                {/* Overlays for depth and readability */}
                <div className="absolute inset-0 bg-navy/60 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/80 z-20" />

                {/* Animated highlights */}
                <div className="absolute inset-0 z-30 opacity-20 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/20 rounded-full blur-3xl animate-float" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl animate-float animation-delay-200" />
                </div>
            </div>

            {/* Content */}
            <div className="container-custom relative z-30 pt-24 pb-16">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm 
                       border border-white/20 mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                        <span className="text-white/90 text-sm font-medium">
                            Professional Psychedelic Education
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1
                        className={`text-white mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2">
                            Welcome to
                        </span>
                        <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-light">
                            Mindscape
                        </span>
                    </h1>

                    {/* Subtitle */}
                    <p
                        className={`text-xl md:text-2xl lg:text-3xl text-white/90 font-light mb-4 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        Where Psychedelic Education Meets
                    </p>
                    <p
                        className={`text-lg md:text-xl text-teal-200 font-medium mb-8 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        Integrity, Insight, and Embodied Wisdom
                    </p>

                    {/* Description */}
                    <p
                        className={`text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        Training clinicians, facilitators, and guides worldwide to support
                        real transformation—safely, ethically, and skillfully.
                    </p>

                    {/* CTAs */}
                    <div
                        className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        <Link href="#courses" className="btn-primary text-lg px-8 py-4">
                            Explore Programs
                        </Link>
                        <Link
                            href="#videos"
                            className="group inline-flex items-center gap-3 text-white/90 hover:text-white font-medium transition-colors"
                        >
                            <span className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 
                             flex items-center justify-center group-hover:bg-white/20 transition-all">
                                <Play size={20} fill="currentColor" />
                            </span>
                            Watch Our Videos
                        </Link>
                    </div>

                    {/* Stats */}
                    <div
                        className={`grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-white/10 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                            }`}
                    >
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-gold mb-1">1,200+</div>
                            <div className="text-white/60 text-sm md:text-base">Trained Facilitators</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-gold mb-1">96%</div>
                            <div className="text-white/60 text-sm md:text-base">Recommend Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-gold mb-1">10+</div>
                            <div className="text-white/60 text-sm md:text-base">Specialized Courses</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-30 transition-all duration-700 delay-1000 ${isVisible ? "opacity-100" : "opacity-0"
                    }`}
            >
                <a
                    href="#courses"
                    className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <ChevronDown size={20} className="animate-bounce" />
                </a>
            </div>
        </section>
    );
}
