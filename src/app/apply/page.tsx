import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const defaultApplicationLink = "https://mindscape.mykajabi.com/pl/2148013702";
const enrollmentFlow = [
    {
        title: "Submit your application",
        details: [
            "Commit to live participation and structured training timelines.",
            "Approach this as professional development, not casual curiosity.",
            "Be ready to work within your legal and professional scope.",
        ],
    },
    {
        title: "Reserve seat with deposit",
        details: [
            "Deposits reserve your seat and apply to tuition per program policy.",
            "Review refund terms before completing payment.",
            "Payment confirmation keeps your enrollment process moving.",
        ],
    },
    {
        title: "Complete fit interview",
        details: [
            "Most interviews run 20-30 minutes.",
            "Bring your goals, prior experience, schedule constraints, and questions.",
            "We assess fit, safety orientation, and ethical readiness.",
        ],
    },
    {
        title: "Finalize tuition and onboarding",
        details: [
            "Remaining tuition is due after acceptance or by class start, depending on program.",
            "Receive onboarding details and class access instructions.",
            "Plan to integrate learning between sessions.",
        ],
    },
];

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
                        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
                            {enrollmentFlow.map((step, index) => (
                                <div key={step.title} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                                    <p className="text-xs font-semibold tracking-wide uppercase text-teal mb-2">Step {index + 1}</p>
                                    <p className="text-slate-700 font-semibold leading-snug">{step.title}</p>
                                    <ul className="mt-3 space-y-2">
                                        {step.details.map((detail) => (
                                            <li key={detail} className="flex items-start gap-2">
                                                <CheckCircle2 size={14} className="text-teal mt-0.5 flex-shrink-0" />
                                                <span className="text-sm text-slate-600 leading-snug">{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-navy text-white text-center">
                <div className="container-custom">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Ready for the Next Step?</h2>
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
