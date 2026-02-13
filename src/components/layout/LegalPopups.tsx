"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

type LegalDoc = {
    key: "privacy" | "terms" | "disclaimer";
    label: string;
    title: string;
    intro: string;
    sections: { heading: string; body: string }[];
};

const legalDocs: LegalDoc[] = [
    {
        key: "privacy",
        label: "Privacy Policy",
        title: "Privacy Policy",
        intro:
            "Mindscape Psychedelic Institute (\"Mindscape,\" \"we,\" \"our,\" or \"us\") values your privacy. This policy explains, in general terms, how we collect, use, and safeguard information when you use our website, submit forms, or interact with our educational offerings.",
        sections: [
            {
                heading: "Information We Collect",
                body:
                    "We may collect contact details you voluntarily provide (such as name, email, phone, and message content), course enrollment details, payment-related metadata from third-party processors, and standard technical data such as IP address, browser type, device type, and pages visited.",
            },
            {
                heading: "How We Use Information",
                body:
                    "We use information to operate and improve the website, respond to inquiries, process enrollments, provide student communications, manage waitlists, send educational or promotional updates, maintain security, and comply with legal obligations.",
            },
            {
                heading: "Sharing and Service Providers",
                body:
                    "We may share limited information with trusted service providers (for example, hosting, analytics, email delivery, scheduling, and payment processing) only as reasonably necessary to operate our services. We may also disclose information when required by law or to protect rights, safety, and site integrity.",
            },
            {
                heading: "Cookies and Analytics",
                body:
                    "Our site may use cookies or similar technologies for functionality, performance measurement, and basic analytics. You can manage cookie preferences through your browser settings, though some site features may not function as intended if cookies are disabled.",
            },
            {
                heading: "Data Retention and Security",
                body:
                    "We retain information for as long as reasonably needed for business, educational, support, and legal purposes. While we use commercially reasonable safeguards, no method of online transmission or storage is guaranteed to be fully secure.",
            },
            {
                heading: "Your Choices",
                body:
                    "You may request to update or remove certain personal information, or opt out of marketing emails using unsubscribe links. We may keep records needed for legal compliance, fraud prevention, or legitimate operational purposes.",
            },
        ],
    },
    {
        key: "terms",
        label: "Terms of Service",
        title: "Terms of Service",
        intro:
            "These terms govern your access to and use of the Mindscape Psychedelic Institute website and related educational content. By using this site, you agree to these terms. If you do not agree, please discontinue use.",
        sections: [
            {
                heading: "Educational Purpose",
                body:
                    "Mindscape provides educational information and professional development resources. Content is offered for general informational and educational purposes and is not guaranteed to be complete, current, or applicable to every situation.",
            },
            {
                heading: "Eligibility and Responsible Use",
                body:
                    "You agree to use this site lawfully and responsibly, and only in jurisdictions where your access is permitted. You are solely responsible for understanding and complying with local laws, regulations, and professional standards relevant to your activities.",
            },
            {
                heading: "Intellectual Property",
                body:
                    "Unless otherwise stated, site content, curriculum materials, branding, and media are owned by or licensed to Mindscape and are protected by intellectual property laws. You may not copy, reproduce, distribute, republish, or commercially exploit materials without written permission.",
            },
            {
                heading: "Payments, Enrollment, and Program Policies",
                body:
                    "Program pricing, enrollment decisions, schedules, and refund policies may vary by offering and may be updated at our discretion. Specific terms communicated at checkout, in enrollment documents, or in program agreements control for that offering.",
            },
            {
                heading: "No Warranties and Limitation of Liability",
                body:
                    "The website and content are provided \"as is\" and \"as available\" without warranties of any kind. To the fullest extent permitted by law, Mindscape disclaims liability for indirect, incidental, special, consequential, or punitive damages arising from site use, reliance on content, or inability to access services.",
            },
            {
                heading: "Changes to Terms",
                body:
                    "We may revise these terms from time to time by posting updated language on this site. Continued use after changes are posted constitutes acceptance of the revised terms.",
            },
        ],
    },
    {
        key: "disclaimer",
        label: "Disclaimer",
        title: "Disclaimer",
        intro:
            "Mindscape Psychedelic Institute provides educational content related to facilitation, integration, and professional development. The following disclaimers apply to all website content and communications unless otherwise stated in writing.",
        sections: [
            {
                heading: "No Medical or Mental Health Advice",
                body:
                    "Nothing on this website is medical, psychiatric, psychological, legal, or financial advice. Site content does not create a clinician-client, therapist-client, coach-client, or fiduciary relationship. Always seek qualified professionals for personal care decisions.",
            },
            {
                heading: "No Guarantee of Outcomes",
                body:
                    "Educational participation does not guarantee licensure, certification recognition, legal authorization to practice, business results, health outcomes, or specific personal transformation outcomes.",
            },
            {
                heading: "Jurisdiction and Legal Compliance",
                body:
                    "Laws concerning controlled substances, facilitation services, and therapeutic practice vary by region and may change. You are solely responsible for assessing legal risk and compliance in your location, profession, and scope of work.",
            },
            {
                heading: "Third-Party Links and Platforms",
                body:
                    "This site may link to third-party websites, booking systems, video platforms, or payment providers. We do not control and are not responsible for third-party content, security practices, terms, or availability.",
            },
            {
                heading: "Use at Your Own Risk",
                body:
                    "By using this site, you acknowledge that reliance on any information is at your own risk. To the fullest extent allowed by law, Mindscape disclaims liability for actions taken or not taken based on website content.",
            },
        ],
    },
];

const lastUpdated = "February 13, 2026";

export default function LegalPopups() {
    const [activeDoc, setActiveDoc] = useState<LegalDoc["key"] | null>(null);

    useEffect(() => {
        if (!activeDoc) {
            document.body.style.overflow = "";
            return;
        }

        const onEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setActiveDoc(null);
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onEscape);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onEscape);
        };
    }, [activeDoc]);

    const selectedDoc = legalDocs.find((doc) => doc.key === activeDoc) || null;

    return (
        <>
            <div className="flex gap-6 text-sm">
                {legalDocs.map((doc) => (
                    <button
                        key={doc.key}
                        type="button"
                        onClick={() => setActiveDoc(doc.key)}
                        className="text-white/50 hover:text-white transition-colors cursor-pointer"
                    >
                        {doc.label}
                    </button>
                ))}
            </div>

            {selectedDoc && (
                <div
                    className="fixed inset-0 z-[100] bg-navy/75 backdrop-blur-sm px-4 py-8 md:py-12"
                    onClick={() => setActiveDoc(null)}
                    role="presentation"
                >
                    <div
                        className="mx-auto h-full w-full max-w-4xl rounded-2xl bg-white shadow-large border border-slate-200 overflow-hidden"
                        onClick={(event) => event.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="legal-modal-title"
                    >
                        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 md:px-8">
                            <h3 id="legal-modal-title" className="text-2xl font-heading text-navy">
                                {selectedDoc.title}
                            </h3>
                            <button
                                type="button"
                                onClick={() => setActiveDoc(null)}
                                className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-300 text-slate-600 hover:text-navy hover:border-slate-400 transition-colors"
                                aria-label="Close legal policy popup"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        <div className="max-h-[calc(100%-73px)] overflow-y-auto px-6 py-6 md:px-8 md:py-8">
                            <p className="text-slate-700 leading-relaxed mb-6">{selectedDoc.intro}</p>
                            <p className="text-sm text-slate-500 mb-8">Last updated: {lastUpdated}</p>

                            <div className="space-y-6">
                                {selectedDoc.sections.map((section) => (
                                    <section key={section.heading}>
                                        <h4 className="text-lg font-heading text-navy mb-2">{section.heading}</h4>
                                        <p className="text-slate-700 leading-relaxed">{section.body}</p>
                                    </section>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
