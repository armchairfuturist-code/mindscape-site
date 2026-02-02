"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowRight,
    Check,
    AlertCircle,
    Brain,
    Fingerprint,
    Waves,
    Zap,
    Shield,
    Calendar,
    ArrowUpRight,
    Users,
    Clock,
    DollarSign
} from "lucide-react";

export default function CoachingContent() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center bg-navy overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/80 z-10" />
                    {/* Abstract background image - Deep/Cosmic/Meditative */}
                    <div
                        className="absolute inset-0 opacity-40 bg-cover bg-center mix-blend-overlay"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2048&auto=format&fit=crop')" }}
                    />
                </div>

                <div className="container-custom relative z-20 pt-32 pb-16">
                    <div className="max-w-4xl">
                        <span className="inline-block py-1 px-3 rounded-full bg-teal/20 text-teal-300 text-sm font-medium tracking-wider mb-6 border border-teal/30">
                            PRIVATE INTENSIVE
                        </span>
                        <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                            Awareness Reset: <br />
                            <span className="text-teal-200">Private Intensive</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 mb-8 font-light leading-relaxed max-w-2xl">
                            Advanced Presence & Integration Mentorship with Kerby | Mindscape Institute
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="#consultation" className="btn-primary text-lg px-8 py-4">
                                Book Consultation
                            </a>
                            <a href="#details" className="px-8 py-4 rounded-lg bg-white/5 border border-white/20 text-white hover:bg-white/10 transition-all font-medium">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Disclaimer Section - High Impact */}
            <section id="details" className="py-24 bg-navy-900 text-white relative border-b border-navy-800">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="max-w-2xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video relative bg-navy-800">
                            <iframe
                                src="https://www.youtube.com/embed/fDoYJQDsWCE"
                                title="Awareness Reset: Video Preview"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute inset-0 w-full h-full"
                            />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 leading-snug">
                            "This is not therapy.<br />
                            This is not coaching.<br />
                            And this is not for everyone."
                        </h2>
                        <div className="prose prose-lg prose-invert mx-auto text-white/70">
                            <p className="text-lg leading-relaxed">
                                Awareness Reset is a private, high-touch intensive designed for professionals,
                                clinicians, facilitators, founders, and leaders who already function well in the world—
                                <span className="text-white font-semibold"> but know something deeper is asking to reorganize.</span>
                            </p>
                            <p className="text-lg leading-relaxed mt-6">
                                This work is about attention, identity flexibility, and nervous system regulation.
                                No medicine. No peak-state chasing. No spiritual performance.
                            </p>
                            <p className="text-xl font-medium text-teal-200 mt-8">
                                Just direct, embodied work with how experience is actually being organized—moment to moment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why This Exists - Split Layout */}
            <section className="section bg-white">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="decorative-line mb-6" />
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-8">
                                Why Awareness Reset Exists
                            </h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    Most people don’t need more insight. <br />
                                    <span className="font-semibold text-navy">They need a different relationship to identity and attention.</span>
                                </p>
                                <p>
                                    After years working at the intersection of clinical therapy, psychedelic facilitation,
                                    non-dual realization, and integration work, I’ve seen a clear pattern:
                                </p>
                                <blockquote className="pl-6 border-l-4 border-teal text-navy italic font-medium my-6">
                                    "People can understand a lot… have powerful experiences… even 'wake up' in meaningful ways…
                                    and still live from the same underlying nervous system patterns."
                                </blockquote>
                                <p>
                                    Awareness Reset exists to address that layer directly—without medicine, without abstraction, and without bypass.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
                                {/* Placeholder Content Image */}
                                <div className="absolute inset-0 bg-navy/5" />
                                <Image
                                    src="/images/image.png"
                                    alt="Deep contemplative state"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent flex items-end p-8">
                                    <p className="text-white font-medium text-xl italic leading-relaxed">
                                        "This is quiet work. Precise work. And often deeply reorganizing."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who This Is For - Grid */}
            <section className="section bg-slate-50">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Who This IS For */}
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-soft border-t-4 border-teal">
                            <div className="flex items-center gap-3 mb-8">
                                <Check className="text-teal w-8 h-8" />
                                <h3 className="text-2xl font-heading font-bold text-navy">Who This Is For</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Are already successful, competent, and self-responsible",
                                    "Are not looking for reassurance or motivation",
                                    "Have likely done therapy, coaching, or deep personal work",
                                    "Want embodied clarity, not concepts",
                                    "Can tolerate honest reflection and challenge",
                                    "Value discretion, depth, and precision"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-teal mt-2.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-3">Often attended by:</p>
                                <p className="text-navy font-medium">Therapists, clinicians, psychedelic facilitators, executives, founders, and high-level professionals.</p>
                            </div>
                        </div>

                        {/* Who This Is NOT For */}
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-soft border-t-4 border-slate-300">
                            <div className="flex items-center gap-3 mb-8">
                                <AlertCircle className="text-slate-400 w-8 h-8" />
                                <h3 className="text-2xl font-heading font-bold text-slate-700">Who This Is Not For</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "In acute psychological crisis",
                                    "Looking for emotional caretaking",
                                    "Seeking spiritual peak experiences",
                                    "Wanting quick fixes or identity reinforcement",
                                    "Unwilling to be challenged or slowed down"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 text-slate-600">
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-6 border-t border-slate-100">
                                <p className="text-slate-500 italic">This work requires capacity, maturity, and consent.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Work With - Icon Grid */}
            <section className="section bg-navy text-white">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">What We Work With</h2>
                        <p className="text-teal-200 text-lg">Direct engagement with the mechanisms of your experience.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Brain,
                                title: "Attention Training",
                                desc: "Learning how awareness is habitually contracted."
                            },
                            {
                                icon: Fingerprint,
                                title: "Identity Flexibility",
                                desc: "Loosening rigid self-structures without destabilization."
                            },
                            {
                                icon: Waves,
                                title: "Nervous System Regulation",
                                desc: "Increasing tolerance for uncertainty, silence, and change."
                            },
                            {
                                icon: Zap,
                                title: "Integration Without Medicine",
                                desc: "Translating insight into lived orientation."
                            },
                            {
                                icon: Shield,
                                title: "Embodied Presence",
                                desc: "Not as an idea, but as a functional capacity."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                                <item.icon className="w-10 h-10 text-gold mb-6" />
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-white/70 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Structure / Pricing */}
            <section className="section bg-gradient-to-b from-slate-50 to-white">
                <div className="container-custom">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-6">The Structure</h2>
                        <p className="text-slate-600 text-lg">All work is conducted one-on-one and held in strict confidence.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Option 1 */}
                        <div className="bg-white p-8 rounded-2xl shadow-soft border border-slate-100 flex flex-col relative overflow-hidden group hover:border-teal/30 transition-all">
                            <div className="absolute top-0 left-0 w-full h-1 bg-slate-300 group-hover:bg-teal transition-colors" />
                            <h3 className="text-2xl font-bold text-navy mb-2">Foundational Intensive</h3>
                            <div className="text-4xl font-bold text-teal mb-8">$3,750</div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {[
                                    "5 private sessions (90 minutes each)",
                                    "Structured Awareness Reset protocol",
                                    "Personalized integration practices",
                                    "Light between-session support"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 items-start">
                                        <Check className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#consultation" className="btn-secondary w-full justify-center">Select Option 1</a>
                        </div>

                        {/* Option 2 */}
                        <div className="bg-navy p-8 rounded-2xl shadow-medium border border-navy flex flex-col relative overflow-hidden text-white">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gold" />
                            <div className="absolute top-4 right-4">
                                <span className="bg-gold text-navy text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Most Comprehensive</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Advanced Intensive</h3>
                            <div className="text-4xl font-bold text-gold mb-8">$7,500</div>
                            <ul className="space-y-4 mb-8 flex-grow">
                                {[
                                    "10 private sessions (90 minutes each)",
                                    "Deeper identity & nervous system work",
                                    "Fully personalized embodiment practices",
                                    "Priority scheduling",
                                    "Ongoing between-session support"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3 items-start">
                                        <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                                        <span className="text-white/90">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#consultation" className="btn-primary w-full justify-center">Select Option 2</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Fit Consultation */}
            <section id="consultation" className="section bg-teal-50 border-y border-teal-100">
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                        <div>
                            <span className="text-teal-600 font-bold tracking-wide uppercase text-sm mb-2 block">Required First Step</span>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-6">Professional Fit Consultation</h2>
                            <p className="text-slate-700 text-lg mb-6">
                                Because this work is selective, all participants begin with a Professional Fit Consultation.
                                It’s a mutual assessment of readiness, fit, and appropriateness.
                            </p>
                            <div className="flex flex-col gap-4 mb-8">
                                <div className="flex items-center gap-4 bg-white p-4 rounded-lg border border-teal-100 shadow-sm">
                                    <Clock className="text-teal w-6 h-6" />
                                    <div>
                                        <span className="block font-bold text-navy">30 Minutes</span>
                                        <span className="text-sm text-slate-500">Video Call</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 bg-white p-4 rounded-lg border border-teal-100 shadow-sm">
                                    <DollarSign className="text-teal w-6 h-6" />
                                    <div>
                                        <span className="block font-bold text-navy">$150</span>
                                        <span className="text-sm text-slate-500">Applied toward intensive if we proceed</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-slate-600 italic mb-8">
                                "This is not a sales call. If it’s not aligned, I’ll tell you."
                            </p>
                            <Link href="/contact" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
                                Book Consultation <ArrowRight size={18} />
                            </Link>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-soft border border-slate-100">
                            <h3 className="font-heading font-bold text-navy mb-6 text-xl">About Kerby</h3>
                            <div className="prose prose-slate text-slate-600">
                                <p className="mb-4">
                                    I work as a facilitator, mentor, and educator through Mindscape Institute, where we train
                                    therapists and facilitators in trauma-informed, ethically grounded psychedelic work.
                                </p>
                                <p className="mb-4">
                                    My approach is shaped by clinical training, years of facilitation experience, non-dual practice,
                                    and long-term integration work.
                                </p>
                                <p className="font-medium text-navy border-l-2 border-gold pl-4">
                                    "Awareness Reset is not a side offering. It is the distillation of how I actually work when depth matters."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Word */}
            <section className="py-24 bg-navy text-center">
                <div className="container-custom">
                    <div className="max-w-2xl mx-auto">
                        <div className="w-16 h-1 bg-gold mx-auto mb-8" />
                        <h2 className="text-3xl font-heading font-bold text-white mb-8">A Final Word</h2>
                        <div className="text-xl text-white/80 space-y-2 leading-relaxed font-light mb-12">
                            <p>This work is intentionally limited.</p>
                            <p>It is not scalable.</p>
                            <p>It is not discounted.</p>
                            <p>And it is not rushed.</p>
                        </div>
                        <p className="text-2xl font-medium text-white mb-12">
                            If you’re looking for something refined, honest, and direct—<br />
                            <span className="text-teal-200">this may be the right container.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="#consultation" className="btn-primary">Book Consultation</a>
                            <Link href="/training" className="px-6 py-3 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors">
                                Explore Training Programs
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
