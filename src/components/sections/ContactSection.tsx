"use client";

import { useState } from "react";
import { Mail, MapPin, Send, Check } from "lucide-react";

export default function ContactSection() {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setIsSubmitted(true);
        setIsLoading(false);
    };

    return (
        <section id="contact" className="section bg-navy relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Content */}
                    <div>
                        <div className="decorative-line mb-6" />
                        <h2 className="text-white mb-6">
                            Join the Mindscape Vault
                        </h2>
                        <p className="text-lg text-white/70 mb-8 leading-relaxed">
                            Step into a deeper level of mastery with the Mindscape Vault —
                            a private library of high-level teachings, practical tools,
                            trauma-informed guidance, and behind-the-scenes insights designed
                            for facilitators, therapists, and seekers committed to doing this
                            work with integrity.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0">
                                    <Check size={18} className="text-teal-300" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Exclusive Content</h4>
                                    <p className="text-white/60 text-sm">
                                        Practical frameworks and resources you won't find anywhere else
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0">
                                    <Check size={18} className="text-teal-300" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Early Access</h4>
                                    <p className="text-white/60 text-sm">
                                        Be first to know about new trainings and program openings
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0">
                                    <Check size={18} className="text-teal-300" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Free Facilitator Toolkit</h4>
                                    <p className="text-white/60 text-sm">
                                        Download immediately when you join
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="pt-8 border-t border-white/10">
                            <p className="text-white/50 text-sm mb-4">Questions? Reach out directly:</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="mailto:contact@mindscapeinstitute.com"
                                    className="inline-flex items-center gap-2 text-teal-300 hover:text-gold transition-colors"
                                >
                                    <Mail size={16} />
                                    contact@mindscapeinstitute.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 lg:p-10">
                        {isSubmitted ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                                    <Check size={32} className="text-green-400" />
                                </div>
                                <h3 className="text-2xl font-heading font-semibold text-white mb-3">
                                    Welcome to the Vault!
                                </h3>
                                <p className="text-white/70">
                                    Check your email for your free Facilitator's Toolkit.
                                    We're truly glad you're here.
                                </p>
                            </div>
                        ) : (
                            <>
                                <h3 className="text-2xl font-heading font-semibold text-white mb-2">
                                    Get Your Free Toolkit
                                </h3>
                                <p className="text-white/60 mb-8">
                                    Enter your email to unlock the Vault and receive your
                                    Facilitator's Toolkit instantly.
                                </p>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="you@example.com"
                                            required
                                            className="w-full px-4 py-4 rounded-lg bg-white/10 border border-white/20
                               text-white placeholder:text-white/40
                               focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent
                               transition-all duration-200"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full btn-primary py-4 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isLoading ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                        fill="none"
                                                    />
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                                    />
                                                </svg>
                                                Joining...
                                            </span>
                                        ) : (
                                            <span className="flex items-center justify-center gap-2">
                                                Get Instant Access
                                                <Send size={18} />
                                            </span>
                                        )}
                                    </button>

                                    <p className="text-white/40 text-xs text-center">
                                        We respect your privacy. Unsubscribe at any time.
                                    </p>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
