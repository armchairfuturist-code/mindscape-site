export interface Course {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    price: number | null;
    type: 'masterclass' | 'certification' | 'ebook';
    status: 'open' | 'waitlist' | 'coming-soon';
    requiresInterview?: boolean;
    nextCohort?: string;
    duration?: string;
    format?: string;
    instructor: 'stephan' | 'amber' | 'both' | 'martin';
    featuredInstructor?: {
        name: string;
        image: string;
        bio: string;
    };
    metrics: {
        completionRate?: number;
        recommendRate?: number;
        students?: number;
    };
    highlights: string[];
    curriculum: {
        title: string;
        topics: string[];
        description?: string;
    }[];
    testimonial?: {
        quote: string;
        author: string;
        role: string;
        image?: string;
    };
    faq: {
        question: string;
        answer: string;
    }[];
    kajabiLink?: string;
    howItWorksIntro?: string;
    howItWorks?: {
        title: string;
        description: string;
    }[];
    guides?: {
        name: string;
        role: string;
        description: string;
    }[];
    priceTiers?: {
        label: string;
        price: number;
    }[];
    amazonLink?: string;
    optInLink?: string;
    payLink?: string;
    depositAmount?: number;
    depositQrImage?: string;
    depositHandle?: string;
    depositNote?: string;
    enrollmentTitle?: string;
    enrollmentDescription?: string;
    applyCtaLabel?: string;
    depositCtaLabel?: string;
    finalCtaTitle?: string;
    finalCtaDescription?: string;
    waitlistLink?: string;
}


export const courses: Course[] = [
    {
        slug: "5-meo-dmt-facilitation",
        title: "Certified 5-MeO/Bufo Facilitator Course",
        subtitle: "A 12-Month Immersive Training in Safe, Ethical, Trauma-Informed Facilitation",
        description: "5-MeO-DMT does not respond to charisma. It does not respond to credentials. It responds to nervous system stability, humility, and embodied presence.\n\nThis medicine is powerful. It can open identity structures in minutes and reveal what feels like infinity. But insight alone is not the work. The work is safety. The work is integration. The work is knowing how to guide someone through dissolution without imposing your own story onto their experience.\n\nMany people feel called to this path after their own profound encounter with the medicine. They sense the depth, the possibility, and the transformation. But facilitation is not about recreating mystical moments. It is about building the capacity to hold intensity without destabilizing yourself or your participant.\n\nAt Mindscape Psychedelic Institute, we train facilitators to understand nondual states without spiritual inflation, screen participants responsibly, recognize trauma responses and nervous system dysregulation, work within legal and ethical boundaries, and guide integration so insight becomes embodiment.\n\nThis is not a weekend certification. It is a structured 12-month immersion: six months of live training and six months of mentorship with supervised development. If you feel called to this work, the question is not whether you are ready to carry the weight. The real question is whether you are willing to do the inner work required to hold others safely.\n\nOur next cohort begins May 2026.",
        image: "/images/5meocertlive.jpeg",
        price: 5500,
        type: "certification",
        status: "open",
        requiresInterview: true,
        optInLink: "https://mindscape.mykajabi.com/pl/2148013702",
        payLink: "https://mindscape.mykajabi.com/offers/MsBAFNMt",
        depositAmount: 500,
        nextCohort: "May 2026",
        duration: "12 months",
        format: "6 months live training + 6 months mentorship",
        instructor: "stephan",
        metrics: {
            completionRate: 97,
            recommendRate: 96,
            students: 450,
        },
        highlights: [
            "12-month immersive facilitator training",
            "Trauma-informed, ethics-first framework",
            "Live cohort learning with active feedback",
            "Six-month mentorship and supervised development",
        ],
        howItWorksIntro: "We don’t believe facilitation can be learned in a weekend. This training is a structured, long-term immersion with clear standards, real accountability, and ongoing community.",
        howItWorks: [
            {
                title: "The Training Container",
                description: "For six months, you step into a committed, interactive cohort. You will practice, receive feedback, and examine your own blind spots so you can remain steady when someone dissolves in front of you.",
            },
            {
                title: "The Educational Framework",
                description: "You move through curriculum that blends nondual theory, trauma-informed facilitation, screening, nervous system literacy, ethics, somatic awareness, and integration. You review materials independently, then apply and refine the work in live sessions.",
            },
            {
                title: "Mentorship & Apprenticeship",
                description: "After the live training phase, you enter a six-month mentorship period with direct access to experienced facilitators, case discussions, and applied supervision to deepen discernment and embodiment.",
            },
            {
                title: "Certification",
                description: "Certification is earned through participation, demonstrated competency, and ethical alignment. Completion marks your readiness to serve within a professional standard, not just attendance.",
            },
        ],
        curriculum: [
            {
                title: "Phase 1: The Foundation & Safety",
                description: "Facilitation begins with safety. Before altered states, we build medical literacy, risk awareness, and emergency readiness so every graduate can prevent harm and operate responsibly.",
                topics: [
                    "Pharmacology and neurochemistry of 5-MeO-DMT",
                    "Medical and psychological contraindications",
                    "Screening and intake protocols",
                    "Emergency response procedures and harm reduction",
                ],
            },
            {
                title: "Phase 2: The Arc of the Journey",
                description: "The medicine session is one moment in a longer process. This phase develops your ability to support preparation, session flow, re-entry, and long-term integration for sustainable change.",
                topics: [
                    "Nervous system assessment and preparation",
                    "Intentional pre-session container design",
                    "Phases of the 5-MeO-DMT experience",
                    "Re-entry stabilization and integration frameworks",
                ],
            },
            {
                title: "Phase 3: The Art of Space Holding",
                description: "Facilitation is not control. It is steadiness under intensity. This phase trains internal regulation and discernment so you can support destabilizing moments without reacting, rescuing, or imposing meaning.",
                topics: [
                    "Facilitator nervous system regulation skills",
                    "Somatic awareness and grounded presence",
                    "Projection and countertransference recognition",
                    "Intervention vs. non-intervention discernment",
                ],
            },
            {
                title: "Phase 4: Ethics, Power & Professional Integrity",
                description: "Altered states can amplify vulnerability, transference, and power dynamics. This phase develops ethical maturity, boundaries, and accountability practices required for responsible professional care.",
                topics: [
                    "Power dynamics, boundaries, and informed consent",
                    "Ethics of touch and financial transparency",
                    "Transference, countertransference, and inflation risk",
                    "Ongoing self-inquiry and accountability practices",
                ],
            },
        ],
        testimonial: {
            quote: "The personal breakthroughs I experienced have been nothing short of transformational. Stephan's approach bridges clinical precision with spiritual depth.",
            author: "Dr. Sarah Mitchell",
            role: "Clinical Psychologist",
        },
        faq: [
            {
                question: "Is this training right for me?",
                answer: "This program is designed for professionals and serious practitioners who feel genuinely called to responsible 5-MeO-DMT facilitation. Many students are licensed therapists, medical professionals, experienced facilitators, and coaches seeking deeper clinical and ethical grounding. It is not a curiosity course or weekend certification. It is a structured year-long immersion requiring maturity, accountability, and sustained inner work.",
            },
            {
                question: "What is the tuition and refund policy?",
                answer: "Enrollment requires a non-refundable $500 deposit to reserve your seat due to the limited cohort size and mentorship commitment. From the first day of live training, students have a three-week evaluation period. If you withdraw during that window, all tuition paid is refunded minus the $500 deposit. After the three-week evaluation period, tuition becomes non-refundable.",
            },
            {
                question: "Why is the program 12 months long?",
                answer: "Facilitation is not learned through information alone. Competency requires time, repetition, supervision, and personal integration. The first six months focus on structured live training and foundational development. The following six months provide mentorship, case consultation, and continued refinement.",
            },
            {
                question: "What happens after the live training phase?",
                answer: "After the initial six months of weekly live classes, students enter a six-month mentorship and apprenticeship period. This phase includes case discussions, applied supervision, and continued integration training. Certification is based on participation, demonstrated competency, and ethical alignment, not simply attendance.",
            },
            {
                question: "Can I download the course materials?",
                answer: "All recorded trainings and materials remain accessible through the student portal for the duration of the program and beyond. Due to the proprietary nature of the curriculum, materials are not available for bulk download or redistribution.",
            },
            {
                question: "When does the next cohort begin?",
                answer: "The next cohort begins May 2026. Enrollment is limited to preserve the quality of supervision and mentorship, and applications are reviewed prior to acceptance.",
            },
        ],
    },
    {
        slug: "martin-ball-5-meo-dmt",
        title: "5-MeO-DMT Integration Coaching Course",
        subtitle: "A 9-Week Live Intensive with Martin W. Ball, Ph.D.",
        description: "Thank you for your interest in the 5-MeO-DMT Integration Coaching Course. This 9-week live training is built for practitioners who want a rigorous, practical framework for guiding clients after transformative 5-MeO-DMT experiences.\n\nLed by Martin W. Ball, Ph.D., this is one of the most comprehensive integration-focused trainings available for working with the nondual, somatic, and relational complexity of this molecule.\n\nYou will learn how to support clients beyond insight moments and into embodied, ethical, ongoing integration work.",
        image: "/images/5meoball.jpeg",
        price: 2500,
        type: "certification",
        status: "open",
        requiresInterview: false,
        optInLink: "https://mindscape.mykajabi.com/5meointegration",
        depositAmount: 500,
        depositQrImage: "/images/ballvenmo.png",
        depositHandle: "@Martin-Ball-3",
        depositNote: "$500 non-refundable deposit reserves your seat. Remaining balance is due at class start.",
        enrollmentTitle: "Enrollment Open - 15 Seats",
        enrollmentDescription: "Reserve one of 15 seats for the March-May live cohort and train directly with Martin W. Ball, Ph.D.",
        applyCtaLabel: "Apply + Hold Your Seat",
        depositCtaLabel: "Reserve One of 15 Seats ($500)",
        finalCtaTitle: "Reserve Your Spot Today",
        finalCtaDescription: "Enrollment is capped at 15 participants to preserve personalized support and live coaching quality.",
        nextCohort: "Weds March 4 - May 13, 2026",
        duration: "9 weeks",
        format: "Live Zoom (Wednesdays, 3-5 PM Pacific) + recordings",
        instructor: "martin",
        featuredInstructor: {
            name: "Martin W. Ball, Ph.D.",
            image: "/images/mball.jpeg",
            bio: "Martin W. Ball, Ph.D., is a world-recognized authority on 5-MeO-DMT and one of the foremost pioneers in the modern entheogenic movement. He earned his doctorate in Religious Studies from the University of California, Santa Barbara, and has taught at Southern Oregon University, Rogue Community College, UC Berkeley, and UC Santa Barbara in the fields of Religion, Native American Studies, and ESL.\n\nDr. Ball is widely credited with coining the term “God Molecule” to describe 5-MeO-DMT and has authored more books on the subject than any other scholar or practitioner. His works include Entheogenic Liberation, 5-MeO-DMT Integration, Facilitating 5-MeO-DMT, and The 5-MeO-DMT Glossary, each contributing significantly to the philosophical, practical, and integration-based understanding of this powerful entheogen.\n\nSince 2008, he has hosted The Entheogenic Evolution Podcast, engaging in long-form dialogue on nonduality, psychedelic science, spiritual transformation, and cultural evolution."
        },
        metrics: {
            completionRate: 94,
            recommendRate: 98,
            students: 15,
        },
        highlights: [
            "Live on Wednesdays, 3-5 PM Pacific (recorded)",
            "Limited to 15 participants for personalized attention",
            "Built specifically for 5-MeO-DMT integration coaching",
            "Led by Martin W. Ball, Ph.D.",
        ],
        howItWorksIntro: "This is a focused 9-week live container for serious practitioners. We keep the cohort capped at 15 so Martin can provide direct guidance, case-based teaching, and nuanced feedback throughout the training.",
        howItWorks: [
            {
                title: "The Commitment",
                description: "Live classes run Wednesdays from 3-5 PM Pacific via Zoom. Sessions are recorded for later review, but live attendance is strongly encouraged for dialogue and supervision.",
            },
            {
                title: "The Rhythm",
                description: "Program dates are March 4 through May 13, 2026, with no class on March 25 and April 1 for spring break and integration time.",
            },
            {
                title: "Class Size",
                description: "Enrollment is limited to 15 participants so each student receives personalized attention and direct support.",
            },
            {
                title: "Tuition",
                description: "$2,500 for new students, or $2,000 for Mindscape alumni. A $500 non-refundable deposit reserves your seat, with remaining balance due at class start.",
            },
        ],
        curriculum: [
            {
                title: "Module 1: Distinctive Nature of 5-MeO-DMT",
                description: "Understand what makes 5-MeO-DMT integration distinct from other psychedelic integration approaches.",
                topics: [
                    "How 5-MeO-DMT differs from other psychedelics",
                    "Nondual context and integration implications",
                    "Common misconceptions in post-5-MeO support",
                ],
            },
            {
                title: "Module 2: Somatic and Energetic Integration",
                description: "Work with nondual energetics and body-based processing methods in a grounded coaching container.",
                topics: [
                    "Nondual energetics and somatic processing",
                    "Human energetic system interactions",
                    "Embodiment techniques for stabilization",
                ],
            },
            {
                title: "Module 3: Practical Integration Session Skills",
                description: "Translate theory into coaching practice with concrete session structure and communication skills.",
                topics: [
                    "Active listening in nonordinary integration contexts",
                    "Embodiment exercises for post-session processing",
                    "Three facets of integration: then, now, and next",
                ],
            },
            {
                title: "Module 4: Reactivations and Ongoing Support",
                description: "Prepare for delayed effects and complex post-session dynamics with practical, ethical coaching tools.",
                topics: [
                    "Addressing reactivations and post-session effects",
                    "When to support, stabilize, or refer out",
                    "Building confidence for professional integration services",
                ],
            },
        ],
        priceTiers: [
            {
                label: "New Students",
                price: 2500,
            },
            {
                label: "Mindscape Alumni",
                price: 2000,
            },
        ],
        faq: [
            {
                question: "When are classes held?",
                answer: "Classes run Wednesdays, 3-5 PM Pacific Time, from March 4 through May 13, 2026. There is no class on March 25 or April 1 for spring break.",
            },
            {
                question: "What is the tuition?",
                answer: "Tuition is $2,500 for new students and $2,000 for previous Mindscape Institute students. A $500 non-refundable deposit reserves your seat, and the remaining balance is due at class start.",
            },
            {
                question: "What if I miss a live class?",
                answer: "Sessions are recorded, so you can catch up. Live attendance is still encouraged to get full value from direct interaction and real-time coaching dialogue.",
            },
            {
                question: "How many seats are available?",
                answer: "Enrollment is capped at 15 participants to preserve teaching quality and personalized support.",
            },
            {
                question: "How do I pay the deposit?",
                answer: "Use the Reserve Spot button on this page to view Martin's Venmo QR code and payment handle. Submit your $500 deposit to reserve your seat.",
            },
        ],
    },
    {
        slug: "mastering-ketamine-assisted-therapy",
        waitlistLink: "https://mindscape.mykajabi.com/pl/2148566324",
        optInLink: "https://mindscape.mykajabi.com/pl/2148566324",
        payLink: "https://mindscape.mykajabi.com/offers/hnvmwd8j",
        title: "Mastering Ketamine Assisted Therapy",
        subtitle: "Clinical excellence in KAT facilitation",
        description: "A comprehensive certification program for practitioners seeking to master Ketamine-Assisted Therapy. This course provides deep clinical insights, safety protocols, and therapeutic frameworks for working with this powerful tool.",
        image: "/images/mkatlive.jpeg",
        price: null,
        type: "certification",
        status: "waitlist",
        requiresInterview: true,
        duration: "10 weeks",
        format: "Live Online + Clinical Practicum",
        instructor: "both",
        metrics: {
            completionRate: 98,
            recommendRate: 99,
        },
        highlights: [
            "Clinical pharmacology of Ketamine",
            "Therapeutic protocols & session design",
            "Screening & safety assessments",
            "Integration & somatic support",
        ],
        curriculum: [
            {
                title: "Module 1: Clinical Foundations",
                topics: [
                    "Neurobiology of Ketamine",
                    "Medical screening and contraindications",
                    "Legal & clinical frameworks",
                ],
            },
            {
                title: "Module 2: The Therapeutic Container",
                topics: [
                    "Set and setting for KAT",
                    "Dosing strategies",
                    "Holding space for non-ordinary states",
                ],
            },
        ],
        faq: [
            {
                question: "Is this for medical professionals only?",
                answer: "While clinical backgrounds are preferred, we welcome experienced facilitators who work in collaboration with medical teams.",
            },
        ],
    },
    {
        slug: "the-embodiment-protocol",
        title: "The Embodiment Protocol",
        subtitle: "Facilitator Certification Training",
        description: "You’ve glimpsed the Infinite. Now it’s time to live it.\n\nFor decades, 5-MeO-DMT facilitation has revolved around the peak experience — the explosive moment of ego dissolution that promises enlightenment. But real transformation doesn’t happen in the peak. It happens in the return.\n\nIn The Integration & Embodiment Protocol, facilitators and teachers Stephan Kerby and Amber Kerby, LMFT challenge over forty years of traditional 5-MeO-DMT facilitation by offering a grounded, trauma-informed, and truly evolutionary approach to the medicine. Rooted in nondual awareness, neuroscience, and therapeutic practice, this training lays out a new framework for transformation — one where awakening is not an event to chase, but a state to live.",
        image: "/images/eplive.jpeg",
        price: null,
        type: "certification",
        status: "coming-soon",
        waitlistLink: "https://mindscape.mykajabi.com/emobodiment-protocol-waitlist",
        instructor: "both",
        metrics: {
            recommendRate: 100,
        },
        highlights: [
            "Rewire the nervous system to stabilize awakening",
            "Integrate trauma through presence and somatic awareness",
            "Bridge psychological and spiritual growth through a single lens",
            "Cultivate coherence between thought, emotion, and energy",
            "Evolve beyond the 'mystical chase' into a life of authentic being",
        ],
        curriculum: [
            {
                title: "Phase 1: The Peak vs. The Return",
                description: "Rethinking 5-MeO-DMT facilitation through the lens of embodiment.",
                topics: [
                    "Limitations of traditional peak-focused models",
                    "The neurobiology of the return",
                    "Introduction to the Embodiment Protocol framework",
                ],
            },
            {
                title: "Phase 2: Stabilizing Awakening",
                description: "Retraining the nervous system to hold non-dual awareness in daily life.",
                topics: [
                    "Nervous system regulation techniques",
                    "Integration of trauma through presence",
                    "Stabilizing spiritual shifts somatically",
                ],
            },
        ],
        faq: [
            {
                question: "Is this based on the book?",
                answer: "Yes, this certification course is the live, practical application of the protocols laid out in 'The Embodiment Protocol' book by Stephan and Amber Kerby.",
            },
        ],
    },
    {
        slug: "expanding-therapeutic-horizons",
        title: "Expanding Therapeutic Horizons",
        subtitle: "A Clinical, Trauma-Informed Approach",
        description: "Expanding Therapeutic Horizons is an in-depth, self-paced course designed for therapists and clinical professionals seeking a responsible, evidence-informed understanding of psychedelic-assisted approaches.\n\nThis training examines psilocybin, MDMA, and ketamine through a therapeutic and clinical lens, emphasizing safety, ethical practice, preparation, and integration. Rather than promoting psychedelics as standalone solutions, the course explores how these substances can support therapeutic work when approached with structure, discernment, and trauma-informed care.",
        image: "/images/eth.jpeg",
        price: 250,
        type: "masterclass",
        kajabiLink: "https://mindscape.mykajabi.com/offers/GVU7n3CL",
        status: "open",
        requiresInterview: false,
        duration: "Self-Paced",
        format: "Evergreen",
        instructor: "both",
        metrics: {
            completionRate: 92,
            students: 650,
        },
        highlights: [
            "Clinical perspectives on psilocybin, MDMA, and ketamine",
            "Neurobiology and mechanisms of action",
            "Screening, assessment, and contraindications",
            "Trauma-informed facilitation frameworks",
        ],
        howItWorksIntro: "A clinically grounded perspective taught by a multidisciplinary faculty including doctors of psychology, psychiatric care, and experienced facilitators.",
        howItWorks: [
            {
                title: "A Clinically Grounded Perspective",
                description: "This course is taught by a multidisciplinary faculty, bringing medical, psychological, and facilitation perspectives into a cohesive clinical framework that bridges theory and practice. The focus throughout is on clinical responsibility, not trend-driven enthusiasm.",
            },
            {
                title: "Trauma-Informed at Every Level",
                description: "This training is built on the understanding that psychedelic work often amplifies underlying trauma dynamics. We explore nervous system regulation, working with vulnerability, and avoiding re-traumatization through pacing and consent.",
            },
            {
                title: "Designed for Depth, Not Hype",
                description: "Ideal for clinicians who want to expand their understanding without abandoning professional rigor. Especially relevant for therapists exploring psychedelic-assisted therapy and mental health professionals seeking clarity around emerging modalities.",
            },
            {
                title: "Expanding Responsibly",
                description: "Psychedelic-assisted therapy is an evolving field that demands both curiosity and restraint. This course offers a grounded framework for understanding how these substances can fit into thoughtful, trauma-informed care.",
            },
        ],
        curriculum: [
            {
                title: "Module 1: Clinical Foundations",
                description: "Neurobiology, mechanisms of action, and therapeutic relevance of Psilocybin, MDMA, and Ketamine.",
                topics: [
                    "Clinical perspectives on psilocybin, MDMA, and ketamine",
                    "Neurobiology and mechanisms of action",
                    "Therapeutic relevance and applications",
                ],
            },
            {
                title: "Module 2: Safety & Assessment",
                description: "Screening, assessment, and contraindications for therapeutic safety.",
                topics: [
                    "Screening and assessment protocols",
                    "Contraindications and safety planning",
                    "Preparation strategies for efficacy",
                ],
            },
            {
                title: "Module 3: Trauma-Informed Frameworks",
                description: "Facilitation and session structure with a focus on trauma-informed care.",
                topics: [
                    "Trauma-informed facilitation",
                    "Session structure and pacing",
                    "Ethical considerations and scope",
                ],
            },
        ],
        guides: [
            {
                name: "Stephan Kerby",
                role: "The Visionary",
                description: "Founder of Mindscape Psychedelic Institute. He bridges the gap between the street and the clinic. A master facilitator of 5-MeO-DMT who understands that trauma-informed care is the only care that matters."
            },
            {
                name: "Amber Kerby, LMFT",
                role: "The Integrator",
                description: "She blends the clinical world of Marriage and Family Therapy with the depth of Internal Family Systems (IFS) and Ketamine. She knows how to hold space for the parts of us that are most afraid."
            },
            {
                name: "Dr. Stephen Mandler",
                role: "The Psychiatrist",
                description: "Chief Medical Officer. Board-certified. He’s been everywhere from Afghanistan to the Menninger Clinic. He brings the medical weight and credibility necessary to legitimize this work in the eyes of the establishment."
            },
            {
                name: "Dr. Desmond Wallington",
                role: "The Activist-Healer",
                description: "A licensed psychologist with Indigenous heritage. He helped decriminalize nature in DC and Denver. He reminds us that \"new\" medicine is actually very, very old."
            }
        ],
        faq: [
            {
                question: "\"Is this legal?\"",
                answer: "The education is 100% legal. The application depends on where you live and your license. Ketamine is legal for medical use now. MDMA and Psilocybin are on the fast track for FDA approval, with specific jurisdictions (like Oregon and Colorado) already opening doors. We teach you the map so you don't get lost in the territory."
            },
            {
                question: "\"I’m just a talk therapist. Is this too medical for me?\"",
                answer: "No. This is designed for the \"Intermediate\" professional. If you understand basic psychology and mental health, you belong here. You don’t need to be a chemist to understand how these medicines heal. We translate the pharmacology into human language."
            },
            {
                question: "\"Will I be certified to administer after this?\"",
                answer: "No single course can legally grant you that right yet in most jurisdictions—federal laws are still shifting. This course gives you the clinical foundation to practice responsibly within your scope and legal framework."
            }
        ]
    },
    {
        slug: "mdma-masterclass",
        title: "MDMA Masterclass",
        subtitle: "Trauma-Informed, Therapeutically-Oriented",
        description: "The MDMA Masterclass is a comprehensive, self-paced training designed for therapists, facilitators, and serious students seeking a clear, responsible understanding of MDMA-assisted work.\n\nThis course approaches MDMA not as a recreational or peak-experience substance, but as a powerful therapeutic catalyst—one that requires skill, structure, and ethical clarity. The emphasis throughout is on safety, nervous system regulation, and long-term integration rather than emotional catharsis alone.",
        image: "/images/mdmamc.jpeg",
        price: 150,
        type: "masterclass",
        status: "open",
        requiresInterview: false,
        duration: "Self-Paced",
        format: "Evergreen",
        kajabiLink: "https://mindscape.mykajabi.com/offers/psT3GJ39",
        instructor: "both",
        metrics: {
            completionRate: 94,
            recommendRate: 97,
        },
        highlights: [
            "Pharmacology and effects on the brain",
            "Trauma processing and regulation",
            "Dosing, timing, and pacing",
            "Facilitation frameworks and ethics",
        ],
        howItWorksIntro: "MDMA is uniquely relational. This course is taught from the understanding that how MDMA is facilitated matters as much as the medicine itself.",
        howItWorks: [
            {
                title: "A Therapeutic & Facilitation Lens",
                description: "You’ll learn how to create a safe therapeutic container, support emotional openness without fostering dependency, and navigate transference and boundaries to maintain ethical clarity.",
            },
            {
                title: "Trauma-Informed by Design",
                description: "Based on contemporary trauma theory, we explore why MDMA can reduce fear while increasing access to traumatic material, and how to work with emotional flooding or overwhelm.",
            },
            {
                title: "Perspectives from Experienced Practitioners",
                description: "Includes insights and interviews from experienced MDMA-assisted therapy practitioners, offering real-world perspectives on session dynamics, challenges, and lessons learned.",
            },
            {
                title: "Self-Paced, Evergreen Access",
                description: "A fully self-paced course designed to support long-term competency. Suited for therapists, facilitators, and serious students seeking a professional, trauma-informed foundation.",
            },
            {
                title: "Raising the Standard",
                description: "MDMA can create profound states of safety and connection—but those states must be handled with care. We emphasize safety over sentiment and integration over intensity.",
            },
        ],
        curriculum: [
            {
                title: "Module 1: Foundations & Pharmacology",
                description: "Understanding the molecule, its origin, and its effects on the brain.",
                topics: [
                    "MDMA pharmacology and neurochemistry",
                    "Effects on the brain and nervous system",
                    "History and therapeutic context",
                ],
            },
            {
                title: "Module 2: Therapeutic Applications",
                description: "The role of MDMA in trauma processing and emotional regulation.",
                topics: [
                    "Trauma processing mechanisms",
                    "Emotional regulation and safety",
                    "Dosing strategies and timing",
                ],
            },
            {
                title: "Module 3: Facilitation & Practice",
                description: "Frameworks for creating safe containers and navigating sessions.",
                topics: [
                    "Facilitation frameworks",
                    "Working with vulnerability and attachment",
                    "Integration practices for lasting change",
                ],
            },
        ],
        faq: [
            {
                question: "\"Do I need a science background?\"",
                answer: "No. If you can read this, you can learn this. We explain the jargon and translate biochemistry into human language. We built this for humans, not just academics.",
            },
            {
                question: "\"Is this course advocating for illegal use?\"",
                answer: "We are educators providing unbiased, research-backed data. What you do with your own consciousness is your business, but we believe you should navigate the territory with a map, not a blindfold.",
            },
            {
                question: "\"Who is this for?\"",
                answer: "Therapists, facilitators, and serious students who want a grounded, responsible foundation. It is not for recreational users looking for 'trip tips'.",
            }
        ],
    },
    {
        slug: "psilocybin-masterclass",
        title: "Psilocybin Masterclass",
        subtitle: "Trauma-Informed, Facilitation-Focused",
        description: "This Psilocybin Masterclass is a comprehensive, self-paced training designed for therapists, facilitators, guides, and serious students who want a grounded, responsible education in working with psilocybin mushrooms.\n\nRather than emphasizing peak experiences or spiritualized narratives, this course focuses on safety, ethical facilitation, and long-term outcomes. It is built on the understanding that psilocybin is not inherently therapeutic—the quality of preparation, facilitation, and integration determines its impact.",
        image: "/images/Psilomc.jpeg",
        price: 150,
        type: "masterclass",
        kajabiLink: "https://mindscape.mykajabi.com/offers/cPXgVgnV",
        status: "open",
        duration: "Self-Paced",
        format: "Evergreen",
        instructor: "both",
        metrics: {
            completionRate: 95,
            recommendRate: 96,
            students: 420,
        },
        highlights: [
            "Pharmacology and effects on nervous system",
            "Dosing strategies and protocols",
            "Set, setting, and safety preparation",
            "Trauma-informed facilitation skills",
        ],
        howItWorksIntro: "Psilocybin is a powerful tool—but tools require skill. This masterclass exists to raise the standard of education by prioritizing safety over spectacle and integration over experience.",
        howItWorks: [
            {
                title: "Facilitation & Safety at the Center",
                description: "Designed from a facilitator’s perspective. You’ll learn to hold space during intense experiences, respond skillfully to fear or resistance, and avoid common facilitation mistakes.",
            },
            {
                title: "Trauma-Informed by Design",
                description: "Informed by modern trauma theory, we cover how psilocybin can amplify trauma, working with nervous system regulation, and why integration is often more important than the experience itself.",
            },
            {
                title: "Perspectives from Experienced Facilitators",
                description: "Includes interviews with experienced psilocybin facilitators offering grounded perspectives on what actually happens in real sessions and how to navigate ethical challenges.",
            },
            {
                title: "Self-Paced, Evergreen Access",
                description: "Fully self-paced and designed for long-term competency. Perfect for therapists, facilitators, and serious students who value ethics, depth, and responsibility.",
            },
        ],
        curriculum: [
            {
                title: "Module 1: Foundations & Preparation",
                description: "Pharmacology, dosing, and setting the stage for safe work.",
                topics: [
                    "Psilocybin pharmacology and brain effects",
                    "Dosing strategies and intention approaches",
                    "Set, setting, and preparation protocols",
                    "Distinctions between mushroom strains",
                ],
            },
            {
                title: "Module 2: The Art of Facilitation",
                description: "Core skills for holding space and navigating the journey.",
                topics: [
                    "Facilitation frameworks and best practices",
                    "Responding to fear, grief, and resistance",
                    "Trauma responses vs. therapeutic process",
                    "Navigating challenging experiences",
                ],
            },
            {
                title: "Module 3: Integration & Ethics",
                description: "Supporting lasting change and maintaining professional integrity.",
                topics: [
                    "Integration strategies for lasting change",
                    "Ethical challenges and avoiding harm",
                    "Scope of practice and referral",
                ],
            },
        ],
        faq: [
            {
                question: "\"Do I need prior experience?\"",
                answer: "While personal experience with psilocybin can be valuable, this course is designed to provide a professional and theoretical foundation regardless of your history.",
            },
            {
                question: "\"Is this a certification?\"",
                answer: "This is a masterclass focused on knowledge and skill acquisition. It does not provide a legal license to practice, as psilocybin laws vary globally.",
            },
        ],
    },
    {
        slug: "5-meo-dmt-bufo-masterclass",
        title: "5-MeO-DMT / Bufo Masterclass",
        subtitle: "Foundations for the Most Powerful Work",
        description: "The 5-MeO-DMT / Bufo Masterclass is an advanced, self-paced training designed for those who are serious about understanding and working with one of the most powerful psychedelic substances known.\n\nThis course establishes the conceptual, ethical, and safety foundations required before working with this medicine in any meaningful or responsible way. It is a high-level, safety-centered education rooted in real-world facilitation experience and trauma-informed practice.",
        image: "/images/5meomc.jpeg",
        price: 500,
        type: "masterclass",
        kajabiLink: "https://mindscape.mykajabi.com/offers/BWJWzpdP",
        status: "open",
        requiresInterview: false,
        duration: "Self-Paced",
        format: "Evergreen",
        instructor: "stephan",
        metrics: {
            completionRate: 93,
            recommendRate: 98,
        },
        highlights: [
            "Pharmacology and phenomenology of 5-MeO-DMT",
            "Synthetic vs. Bufo distinctions",
            "Nondual experiences and ego dissolution",
            "Safety, screening, and contraindications",
        ],
        howItWorksIntro: "5-MeO-DMT has the capacity to reveal profound truth—and to cause profound harm when mishandled. This course exists to raise the standard of education by emphasizing preparation, integration, and responsibility.",
        howItWorks: [
            {
                title: "Facilitation, Responsibility & Risk",
                description: "5-MeO-DMT is fundamentally different. We address why traditional frameworks fail, how to navigate loss of identity, and the difference between surrender and dissociation.",
            },
            {
                title: "Trauma-Informed by Necessity",
                description: "Trauma-informed practice is essential. We explore why somatic responses are common, the risks of spiritual bypassing, and why integration is more complex than with other psychedelics.",
            },
            {
                title: "A Clear Path Forward",
                description: "This masterclass stands alone as a foundational education, but for those seeking hands-on training, it serves as excellent preparation for our LIVE Facilitation Course.",
            },
            {
                title: "Who This Course Is For",
                description: "Appropriate for facilitators, therapists, and serious students who value safety, humility, and responsibility. Not designed for casual exploration.",
            },
        ],
        curriculum: [
            {
                title: "Module 1: The Medicine & Experience",
                description: "Understanding the unique nature of 5-MeO-DMT and Bufo.",
                topics: [
                    "Pharmacology and phenomenology",
                    "Synthetic vs. Toad-derived distinctions",
                    "The nature of nondual experience",
                    "Why it is uniquely destabilizing",
                ],
            },
            {
                title: "Module 2: Safety & Facilitation",
                description: "Core safety protocols and the role of the facilitator.",
                topics: [
                    "Screening and contraindications",
                    "The facilitator's role: before, during, after",
                    "Common errors and their consequences",
                    "Non-intervention vs. support",
                ],
            },
            {
                title: "Module 3: Integration & Trauma",
                description: "Navigating the aftermath and supporting somatic processing.",
                topics: [
                    "Somatic responses and release",
                    "Integration challenges specific to 5-MeO",
                    "Stabilizing and orienting after the void",
                    "Spiritual bypassing risks",
                ],
            },
        ],
        faq: [
            {
                question: "\"Is prior 5-MeO experience required?\"",
                answer: "It is helpful but not strictly required for this educational masterclass. However, personal experience is essential before attempting to facilitate.",
            },
            {
                question: "\"Can I facilitate after this?\"",
                answer: "This course provides the educational foundation. Competent facilitation requires guided practice, mentorship, and experience, which are offered in our advanced live certification programs.",
            },
        ],
    },
    {
        slug: "entheogenic-guide-masterclass",
        title: "Trauma-Informed Entheogenic Guide Masterclass",
        subtitle: "Foundational Certification for Ethical Guiding",
        description: "The Trauma-Informed Entheogenic Guide Masterclass is an advanced, comprehensive training designed for those who are serious about stepping into the role of guide—and for anyone who ultimately intends to facilitate entheogenic work responsibly.\n\nWith over 15 hours of instruction, a detailed textbook, a complete forms cabinet, and extensive practical material, this masterclass offers one of the most thorough foundational trainings available for entheogenic guiding.",
        image: "/images/tieg.jpeg",
        price: 500,
        type: "masterclass",
        kajabiLink: "https://mindscape.mykajabi.com/offers/799AMW2L",
        status: "open",
        requiresInterview: false,
        duration: "Self-Paced (15+ Hours)",
        format: "Evergreen Certification",
        instructor: "both",
        metrics: {
            students: 350,
            completionRate: 96
        },
        highlights: [
            "Core principles of trauma-informed guiding",
            "Screening, preparation, and orientation",
            "Nervous system responses and somatic awareness",
            "Integration frameworks for long-term benefit",
        ],
        howItWorksIntro: "This course exists to raise the standard of guiding by emphasizing competence over charisma, safety over ceremony, and ethics over identity.",
        howItWorks: [
            {
                title: "A Deep, Multimodal Education",
                description: "Covers principles across Psilocybin, MDMA, Ayahuasca, 5-MeO-DMT, and more. Focuses on universal guiding principles that translate across medicines.",
            },
            {
                title: "Trauma-Informed by Design",
                description: "Entheogenic work often surfaces trauma. You'll learn to distinguish trauma responses from spiritual process, avoid re-traumatization, and know when to refer out.",
            },
            {
                title: "From Guide to Facilitator",
                description: "Serves as a foundational pathway toward facilitation, establishing the ethical, psychological, and practical groundwork for advanced training.",
            },
            {
                title: "Evergreen Certification Program",
                description: "Now a fully self-paced, evergreen certification course. Engage deeply with the material on your own schedule while maintaining the rigor of the original live training.",
            },
        ],
        curriculum: [
            {
                title: "Module 1: The Guide's Foundation",
                description: "Core principles and ethical frameworks for responsible guiding.",
                topics: [
                    "Trauma-informed guiding principles",
                    "Ethical boundaries and scope",
                    "Set, setting, and container design",
                ],
            },
            {
                title: "Module 2: The Journey Arc",
                description: "Navigating the session from preparation to closing.",
                topics: [
                    "Screening and participant orientation",
                    "Nervous system awareness",
                    "Managing difficult or destabilizing experiences",
                ],
            },
            {
                title: "Module 3: Professional Practice",
                description: "The business and administration of safe guiding.",
                topics: [
                    "Documentation and forms",
                    "Professional standards",
                    "Integration frameworks",
                ],
            },
        ],
        faq: [
            {
                question: "\"Is this a certification?\"",
                answer: "Yes. This is a comprehensive educational process. Upon completion, you receive a certification acknowledging your training in trauma-informed guiding principles.",
            },
            {
                question: "\"Do I need to be a therapist?\"",
                answer: "No. This course is designed for guides, coaches, and facilitators. However, it teaches you how to work within your scope and when to refer to clinical professionals.",
            },
        ],
    },
    {
        slug: "integration-specialist-masterclass",
        title: "Psychedelic Integration Specialist Masterclass",
        subtitle: "Advanced Training in Integration & Embodiment",
        description: "The Psychedelic Integration Specialist Masterclass is an advanced, comprehensive training designed for therapists, facilitators, guides, and integration practitioners who want to support lasting change after psychedelic experiences.\n\nBuilt on the truth that psychedelic experiences do not create change—integration does. The training moves beyond insight-processing into embodiment, nervous system regulation, and behavioral transformation.",
        image: "/images/iscourse.jpeg",
        price: 500,
        type: "masterclass",
        kajabiLink: "https://mindscape.mykajabi.com/offers/ftJsdmcT/checkout",
        status: "open",
        requiresInterview: false,
        duration: "Self-Paced (17+ Hours)",
        format: "Evergreen",
        instructor: "both",
        metrics: {
            students: 280,
            recommendRate: 99
        },
        highlights: [
            "Core principles of integration across substances",
            "Somatic, emotional, and psychological work",
            "Trauma-informed integration strategies",
            "6+ hours of recorded demos",
        ],
        howItWorksIntro: "Integration has become the determining factor between growth and fragmentation. This course raises the standard by emphasizing stabilization, embodiment, and responsibility.",
        howItWorks: [
            {
                title: "Integration as the Real Work",
                description: "We move beyond meaning-making into embodiment and nervous system regulation, helping practitioners support clients long after the experience itself.",
            },
            {
                title: "Demonstration-Based Learning",
                description: "Includes over six hours of recorded integration demonstrations. Observe real sessions to see how to work with resistance, intensity, and translation into daily life.",
            },
            {
                title: "Trauma-Informed at the Core",
                description: "Integration is where trauma surfaces. We emphasize regulation, avoiding re-traumatization, and supporting embodiment without reinforcing identity narratives.",
            },
            {
                title: "Evergreen, Depth-Oriented",
                description: "A rigorous, self-paced program for serious practitioners. Ideal for therapists, facilitators, and coaches seeking a trauma-informed framework.",
            },
        ],
        curriculum: [
            {
                title: "Module 1: The Art of Integration",
                description: "Foundational concepts and shifting from insight to embodiment.",
                topics: [
                    "Distinguishing insight from integration",
                    "Core principles across substances",
                    "Somatic and emotional processing",
                ],
            },
            {
                title: "Module 2: Applied Practice (Demos)",
                description: "Learning through observation of real-world integration work.",
                topics: [
                    "Attuned presence and pacing",
                    "Working with resistance and confusion",
                    "Translating non-ordinary states to life",
                ],
            },
            {
                title: "Module 3: Advanced Challenges",
                description: "Navigating complex integration scenarios.",
                topics: [
                    "Destabilization and identity shifts",
                    "Trauma-informed strategies",
                    "Ethical boundaries in integration",
                ],
            },
        ],
        faq: [
            {
                question: "\"Who is this for?\"",
                answer: "Therapists, facilitators, guides, and coaches who support clients after psychedelic experiences. It is an advanced training for those already working or stepping into this field.",
            },
            {
                question: "\"Do I get to see real sessions?\"",
                answer: "Yes. Use of recorded demonstrations is a central part of this training, bridging the gap between theory and practice.",
            },
        ],
    },
    {
        slug: "embodiment-protocol",
        title: "The Embodiment Protocol",
        subtitle: "A Practical Guide to Awakening with 5-MeO-DMT",
        description: "A precise, somatic map for navigating the non-dual landscape. This protocol bridges the gap between peak 5-MeO-DMT experiences and permanent, embodied awakening.",
        image: "/images/ep.jpg",
        price: null,
        type: "ebook",
        status: "open",
        format: "Book/Paperback",
        instructor: "both",
        amazonLink: "https://a.co/d/01vCBCxJ",
        metrics: {
            students: 1200,
        },
        highlights: [
            "Practical somatic exercises",
            "Integration frameworks",
            "Daily embodiment practices",
            "Non-dual realization mapping",
        ],
        curriculum: [],
        faq: [],
    },
    {
        slug: "field-notes-from-the-infinite",
        title: "Field Notes from the Infinite",
        subtitle: "By Stephan Kerby",
        description: "A contemplative collection of reflections on awakening, embodiment, and the return to everyday life.",
        image: "/images/fieldnotesbook.jpg",
        price: null,
        type: "ebook",
        status: "open",
        format: "Book/Paperback",
        instructor: "stephan",
        amazonLink: "https://www.amazon.com/dp/B0GMVJ83JM?ref=cm_sw_r_ffobk_cp_ud_dp_ZW8CY5P6ZH8ASMKPJGY3&social_share=cm_sw_r_ffobk_cp_ud_dp_ZW8CY5P6ZH8ASMKPJGY3&bestFormat=true",
        metrics: {},
        highlights: [
            "Contemplative reflections",
            "Integration-oriented insights",
            "Non-dual perspectives",
            "Everyday embodiment",
        ],
        curriculum: [],
        faq: [],
    },
    {
        slug: "trauma-informed-manual",
        title: "Trauma-Informed 5-MeO-DMT Facilitation",
        subtitle: "An Educational Manual",
        description: "The professional standard for sacred medicine work. A comprehensive manual detailing safe, ethical, and clinical frameworks for holding the highest levels of psychedelic experience.",
        image: "/images/TI.jpg",
        price: null,
        type: "ebook",
        status: "open",
        format: "Book/Paperback",
        instructor: "stephan",
        amazonLink: "https://a.co/d/0itFRdyD",
        metrics: {
            students: 850,
        },
        highlights: [
            "Comprehensive facilitation guide",
            "Safety protocols and ethics",
            "Trauma-informed frameworks",
            "Professional standards",
        ],
        curriculum: [],
        faq: [],
    },
];

export function getCourseBySlug(slug: string): Course | undefined {
    return courses.find((course) => course.slug === slug);
}

export function getCoursesByType(type: Course['type']): Course[] {
    return courses.filter((course) => course.type === type);
}

export function getCoursesByStatus(status: Course['status']): Course[] {
    return courses.filter((course) => course.status === status);
}

export function getCoursesByInstructor(instructor: Course['instructor']): Course[] {
    return courses.filter((course) => course.instructor === instructor || course.instructor === 'both');
}
