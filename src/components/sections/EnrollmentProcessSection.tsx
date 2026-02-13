import { CheckCircle2, Clock3, Users } from "lucide-react";

const certificationSteps = [
    "Apply + schedule interview",
    "Reserve your seat with deposit",
    "Complete fit interview",
    "Finalize tuition after acceptance",
];

const masterclassSteps = [
    "Choose your masterclass",
    "Enroll instantly",
    "Start anytime at your pace",
    "Revisit lessons as needed",
];

export default function EnrollmentProcessSection() {
    return (
        <section className="py-10 bg-slate-50 border-y border-slate-200">
            <div className="container-custom">
                <div className="max-w-6xl mx-auto">
                    <p className="text-xs uppercase tracking-wider text-teal font-semibold text-center mb-3">
                        Choose Your Path
                    </p>
                    <h3 className="text-2xl md:text-3xl font-heading font-semibold text-navy text-center mb-4">
                        Two Training Styles, Different Commitments
                    </h3>
                    <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
                        Live certifications are premium, cohort-based immersions with mentorship and interview.
                        Masterclasses are evergreen, shorter trainings you can begin anytime.
                    </p>

                    <div className="grid lg:grid-cols-2 gap-6">
                        <div className="rounded-2xl bg-white border border-slate-200 shadow-soft p-6">
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-teal font-semibold mb-2">Live Certifications</p>
                                    <h4 className="text-xl font-heading text-navy font-semibold">High-Commitment, Mentored Training</h4>
                                </div>
                                <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-teal-50 text-teal-700 px-3 py-1 rounded-full">
                                    <Users size={14} />
                                    Cohort-Based
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-5">
                                <span className="inline-flex items-center gap-1.5"><Clock3 size={14} />Up to 12 months</span>
                                <span>Best for deep professional and personal development</span>
                            </div>

                            <div className="space-y-3">
                                {certificationSteps.map((step, index) => (
                                    <div key={step} className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
                                        <CheckCircle2 size={18} className="text-teal flex-shrink-0" />
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium">Step {index + 1}</p>
                                            <p className="text-sm text-slate-700 font-semibold leading-tight">{step}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl bg-white border border-slate-200 shadow-soft p-6">
                            <div className="flex items-start justify-between gap-4 mb-4">
                                <div>
                                    <p className="text-xs uppercase tracking-wider text-gold-dark font-semibold mb-2">Evergreen Masterclasses</p>
                                    <h4 className="text-xl font-heading text-navy font-semibold">Flexible, Self-Paced Learning</h4>
                                </div>
                                <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-gold/15 text-navy px-3 py-1 rounded-full">
                                    <Clock3 size={14} />
                                    Start Anytime
                                </span>
                            </div>

                            <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-5">
                                <span className="inline-flex items-center gap-1.5"><Clock3 size={14} />Shorter excursions</span>
                                <span>Best for focused upskilling and flexible schedules</span>
                            </div>

                            <div className="space-y-3">
                                {masterclassSteps.map((step, index) => (
                                    <div key={step} className="flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-200 px-4 py-3">
                                        <CheckCircle2 size={18} className="text-gold-dark flex-shrink-0" />
                                        <div>
                                            <p className="text-xs text-slate-500 font-medium">Step {index + 1}</p>
                                            <p className="text-sm text-slate-700 font-semibold leading-tight">{step}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
