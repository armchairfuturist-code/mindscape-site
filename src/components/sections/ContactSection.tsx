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
                                    Unlock the Vault and receive your
                                    Facilitator's Toolkit instantly through our Kajabi community.
                                </p>

                                <div className="space-y-6">
                                    <a
                                        href="https://mindscape.mykajabi.com/mindscapevault"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full btn-primary py-4 text-lg inline-flex items-center justify-center gap-2"
                                    >
                                        Get Instant Access
                                        <Send size={18} />
                                    </a>

                                    <p className="text-white/40 text-xs text-center">
                                        Join over 1,200 facilitators in our private learning portal.
                                    </p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
