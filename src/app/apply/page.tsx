import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarClock, CheckCircle2, ClipboardCheck, ShieldCheck } from "lucide-react";

const defaultApplicationLink = "https://mindscape.mykajabi.com/pl/2148013702";

export const metadata: Metadata = {
    title: "Application & Interview Guide | Mindscape Institute",
    description: "Understand what happens after you apply, how interviews work, and key deposit and tuition policies for live certification programs.",
};

export default function ApplicationGuidePage() {
    return (
        <main className="bg-white">
            <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-200">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-xs uppercase tracking-wider text-teal font-semibold mb-3">Application Guide</p>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-navy mb-6">What Happens After You Apply</h1>
                        <p className="text-lg text-slate-600">
                            What it is: a clear path from application to enrollment. Who it&apos;s for: serious applicants to live certification
                            programs. What happens next: apply, reserve your seat, then complete interview with confidence.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-heading font-semibold text-navy mb-3">1) What Happens Next</h2>
                            <p className="text-slate-600">A straightforward timeline from initial application to enrollment confirmation.</p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-4">
                            {[
                                "Submit your application",
                                "Reserve seat with deposit",
                                "Complete fit interview",
                                "Finalize tuition and onboarding",
                            ].map((step, index) => (
                                <div key={step} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                                    <p className="text-xs font-semibold tracking-wide uppercase text-teal mb-2">Step {index + 1}</p>
                                    <p className="text-slate-700 font-medium leading-snug">{step}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-slate-50 border-y border-slate-200">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-heading font-semibold text-navy mb-3">2) Readiness Checklist</h2>
                            <p className="text-slate-600">Use this to self-qualify before investing your time in the interview process.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "You can commit to live participation and structured training timelines.",
                                "You are open to feedback, supervision, and ethical accountability.",
                                "You understand this is professional development, not casual curiosity.",
                                "You are prepared to integrate learning between sessions.",
                                "You have reviewed tuition, deposit, and refund policy language.",
                                "You are willing to work within your legal and professional scope.",
                            ].map((item) => (
                                <div key={item} className="flex items-start gap-3 rounded-xl bg-white border border-slate-200 p-4">
                                    <CheckCircle2 size={18} className="text-teal mt-0.5 flex-shrink-0" />
                                    <p className="text-slate-700 leading-snug">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-heading font-semibold text-navy mb-3">3) Interview Expectations</h2>
                            <p className="text-slate-600">What to expect so you can show up clear and prepared.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-5">
                            <div className="rounded-xl border border-slate-200 p-6">
                                <div className="inline-flex items-center gap-2 text-teal font-semibold mb-3">
                                    <CalendarClock size={18} />
                                    Duration
                                </div>
                                <p className="text-slate-700">Most interviews run 20-30 minutes and focus on fit, readiness, and expectations.</p>
                            </div>
                            <div className="rounded-xl border border-slate-200 p-6">
                                <div className="inline-flex items-center gap-2 text-teal font-semibold mb-3">
                                    <ClipboardCheck size={18} />
                                    Prepare
                                </div>
                                <p className="text-slate-700">Bring your training goals, prior experience, scheduling constraints, and key questions.</p>
                            </div>
                            <div className="rounded-xl border border-slate-200 p-6">
                                <div className="inline-flex items-center gap-2 text-teal font-semibold mb-3">
                                    <ShieldCheck size={18} />
                                    Focus
                                </div>
                                <p className="text-slate-700">Interviews evaluate alignment with training standards, safety orientation, and ethical maturity.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-slate-50 border-y border-slate-200">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-heading font-semibold text-navy mb-3">4) Policies at a Glance</h2>
                            <p className="text-slate-600">Clear policy guidance before you submit payment.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="rounded-xl bg-white border border-slate-200 p-5">
                                <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">Deposit</p>
                                <p className="text-slate-700">Deposits reserve your seat and are applied to tuition according to the program policy.</p>
                            </div>
                            <div className="rounded-xl bg-white border border-slate-200 p-5">
                                <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">Tuition Timing</p>
                                <p className="text-slate-700">Remaining tuition is typically due after acceptance or by class start, depending on program.</p>
                            </div>
                            <div className="rounded-xl bg-white border border-slate-200 p-5">
                                <p className="text-xs uppercase tracking-wide text-slate-500 mb-2">Refunds</p>
                                <p className="text-slate-700">Refund windows vary by program. Review your specific offer terms before completing payment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-navy text-white text-center">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">5) Ready for the Next Step?</h2>
                        <p className="text-slate-300 mb-8">Start your application or reserve your seat to begin enrollment.</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <a href={defaultApplicationLink} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
                                Start Application
                                <ArrowRight size={16} />
                            </a>
                            <Link href="/courses/5-meo-dmt-facilitation#apply" className="btn-secondary inline-flex items-center gap-2">
                                Reserve Spot
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
