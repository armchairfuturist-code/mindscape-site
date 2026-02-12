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
    waitlistLink?: string;
}


export const courses: Course[] = [
    {
        slug: "5-meo-dmt-facilitation",
        title: "Certified 5-MeO/Bufo Facilitator Course",
        subtitle: "Master the art of sacred facilitation",
        description: "The God Molecule doesn’t care about your resume. It cares about your presence. Your nervous system. Your ability to sit in the fire without burning up.\n\nYou’re here because you feel the pull. Maybe you’ve sat with the medicine yourself and felt the fabric of reality tear open. Maybe you’ve seen the healing it offers—the kind that happens in twenty minutes but lasts a lifetime—and you realized: This is what I’m supposed to do.\n\nBut holding space for 5-MeO-DMT isn’t like other modalities. It’s not just \"tripsitting.\" It’s non-dual surgery. It’s walking someone to the edge of the void, holding their hand while they dissolve, and being the anchor that brings them back.\n\nYou don't learn this from a textbook. You learn it by transmission. You learn it by doing the work.\n\nWelcome to the Mindscape Psychedelic Institute. We’re building the next generation of safe, ethical, trauma-informed facilitators.\n\nWe start in May 2026. The question is: are you ready to carry this weight?",
        image: "/images/5meocertlive.jpeg",
        price: 5500,
        type: "certification",
        status: "open",
        requiresInterview: true,
        nextCohort: "May 2026",
        duration: "6 months",
        format: "Deep-Dive Theory + Live Visceral Classes",
        instructor: "stephan",
        metrics: {
            completionRate: 97,
            recommendRate: 96,
            students: 450,
        },
        highlights: [
            "Trauma-informed & ethical facilitation",
            "30+ hours of deep-dive recorded theory",
            "Live mentorship with experienced facilitators",
            "Comprehensive safety & shadow work",
        ],
        howItWorksIntro: "We don’t believe in weekend certifications. You can’t learn to pilot a rocket ship in a Saturday workshop. This is a slow burn. A six-month container designed to dismantle your bad habits and rebuild your capacity to serve.",
        howItWorks: [
            {
                title: "The Container",
                description: "For six months, you are ours. And we are yours. You step into a cohort of people just as committed as you are. This isn’t a webinar where you hide your camera. This is a tribe. You’ll practice, you’ll process, and you’ll strip away the layers of your own ego so you don’t project them onto your clients.",
            },
            {
                title: "The Transmission",
                description: "We combine over 30 hours of recorded deep-dive theory with live, visceral classes. You watch the materials on your time, let them sink in, and then we meet live to tear them apart and put them back together. We focus on embodiment. It’s not about what you know; it’s about who you are when the room gets intense.",
            },
            {
                title: "The Mentorship",
                description: "You aren’t walking this path alone. You get direct access to facilitators who have sat in the chair hundreds of times. We’ve seen the miracles, and we’ve seen the mess. We’re here to show you the difference.",
            },
            {
                title: "The Certification",
                description: "By May 2026, if you’ve done the work, you won’t just have a piece of paper. You’ll have a calling. You’ll be a Certified 5-MeO Facilitator, ready to serve with integrity.",
            },
        ],
        curriculum: [
            {
                title: "Phase 1: The Foundation & Safety",
                description: "Before we touch the stars, we ground in the dirt. You’ll learn the pharmacology, the contraindications, and the boring, unsexy safety protocols that actually save lives. If you can’t keep a body safe, you have no business touching a soul.",
                topics: [
                    "Pharmacology and neurochemistry",
                    "Medical contraindications",
                    "Emergency response procedures",
                    "Risk mitigation strategies",
                ],
            },
            {
                title: "Phase 2: The Arc of the Journey",
                description: "Preparation is everything. Integration is everything else. The medicine experience is just the peak of the mountain. We teach you how to prepare a client’s nervous system before the session and how to help them make sense of the ineffable when they return.",
                topics: [
                    "Nervous system preparation",
                    "Pre-session container creation",
                    "Integration framework & protocols",
                    "Long-term support strategies",
                ],
            },
            {
                title: "Phase 3: The Art of Space Holding",
                description: "What do you do when a client screams? What do you do when they go silent? What do you do when you feel fear? We train you in non-dual awareness. You learn to become the empty vessel.",
                topics: [
                    "Non-dual surgery techniques",
                    "Navigation of peak experiences",
                    "Emotional regulation for facilitators",
                    "Somatic presence skills",
                ],
            },
            {
                title: "Phase 4: Ethics & The Shadow",
                description: "Power corrupts. Spiritual power corrupts absolutely. We do deep shadow work to ensure you understand the ethics of touch, money, and power dynamics. We keep you clean so the medicine can be pure.",
                topics: [
                    "Ethics of touch and power",
                    "Financial integrity in medicine work",
                    "Shadow work for practitioners",
                    "Personal ego dissolution",
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
                question: "Is this actually for me?",
                answer: "Look, $5,500 is a lot of money. We get it. That’s why we have a 3-Week Vibe Check. From the first day of class, you have three weeks to test the waters. Show up. Watch the videos. Feel the energy of the instructors. If you sit through the first three sessions and realize, \"Nope, this isn't my tribe,\" you email us. We refund you 100%. No hard feelings. We part as friends.",
            },
            {
                question: "What happens after week 3?",
                answer: "If you stay past the third session, we lock the doors. Metaphorically speaking. At that point, you’re committed. The tuition becomes non-refundable. Why? Because the container needs stability. We need to know who is in the boat with us so we can row into deep water.",
            },
            {
                question: "Can I download the materials?",
                answer: "Eventually, yes. But not during the trial period. We protect our intellectual property because it’s taken years of blood, sweat, and tears to build. Once you’re fully committed (past the 3-week mark) or paid in full, the library is yours to keep for personal use.",
            },
            {
                question: "Why is it so long?",
                answer: "Because rushing this process hurts people. We are playing the long game. We want you to be a facilitator for the next 20 years, not a burnout statistic in six months.",
            },
            {
                question: "When do we start?",
                answer: "The next cohort certifies in May 2026. The clock is ticking. Secure your spot. Do the work. Serve the medicine.",
            },
        ],
    },
    {
        slug: "martin-ball-5-meo-dmt",
        title: "5-MeO-DMT Advanced Intregration Course",
        subtitle: "Featuring Martin W. Ball, Ph.D",
        description: "There are psychedelics. And then there is 5-MeO-DMT.\n\nMost plant medicines show you the furniture of your mind—your trauma, your history, your stories. 5-MeO takes the house, burns it down, and leaves you floating in a white void of absolute nothingness. And absolute everythingness.\n\nIt’s the \"God Molecule.\" It is the Everest of the psyche.\n\nAnd when a client comes back from that... when they open their eyes after twenty minutes of ego-obliteration, they don't just need a chat. They need a completely different kind of map.\n\nMost coaches aren't equipped for this. You can't use standard integration techniques for an experience that transcends the standard human self.\n\nStarting March 4th, we are going to fix that.\n\nThis is a 9-week deep dive into the specific, nuanced, and profound art of integrating the 5-MeO experience. Limited to just 15 students, taught by the man who literally wrote the books on it, Martin W. Ball, Ph.D.\n\nIf you want to work with the most powerful molecule on the planet, you need to know how to handle the power.",
        image: "/images/5meoball.jpeg",
        price: null,
        type: "certification",
        status: "open",
        requiresInterview: true,
        nextCohort: "March 4, 2026",
        duration: "9 weeks",
        format: "Live Online (2-hour sessions)",
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
            "Limited to just 15 students for intimacy",
            "Taught by Martin W. Ball, Ph.D.",
            "9-week intensive deep dive",
            "Live 2-hour sessions every Wednesday",
        ],
        howItWorksIntro: "Look, this isn't a webinar you play in the background at 2x speed while you fold laundry. This is a crucible. We are keeping this small—15 people max—because this work requires intimacy. It requires looking each other in the eye (virtually) and deconstructing the most intense experience a human being can have.",
        howItWorks: [
            {
                title: "The Commitment",
                description: "We meet live for 2 hours every Wednesday. We talk. We argue. We unpack the readings. We do the work.",
            },
            {
                title: "The Rhythm",
                description: "It’s 9 weeks of instruction, but we respect the integration process itself. We’re taking a two-week \"Spring Break\" (March 25 & April 1) to let the material settle.",
            },
            {
                title: "The Safety Net",
                description: "Life is messy. If you miss a live session, we record everything. You can catch up. But try to be there. The magic is in the conversation.",
            },
            {
                title: "The Dates",
                description: "Start: Wednesday, March 4th. End: Wednesday, May 13th. (No class March 25th or April 1st).",
            },
        ],
        curriculum: [
            {
                title: "Phase 1: The Landscape of the Void",
                description: "You can't guide someone through territory you don't understand. We start by stripping away the myths.",
                topics: [
                    "The pharmacology and history of 5-MeO-DMT",
                    "Why the \"Toad\" is distinct from ayahuasca, mushrooms, or LSD",
                    "The Entheological Paradigm: Understanding the nature of the \"Universal Self\"",
                ],
            },
            {
                title: "Phase 2: The Shattering",
                description: "What happens to the ego? We dive into the terrifying and beautiful mechanics of ego dissolution.",
                topics: [
                    "Navigating the \"White Out\" vs. the \"Black Out\"",
                    "Understanding energetic symmetry and somatic release",
                    "Why clients feel like they are dying (and why that’s the point)",
                ],
            },
            {
                title: "Phase 3: The Reactivation",
                description: "The hardest part isn't the trip; it's the Tuesday morning after. This is where the real coaching happens.",
                topics: [
                    "Identifying \"energetic kinks\" and holding patterns in the body",
                    "The phenomenon of \"reactivations\" (when the medicine comes back weeks later)",
                    "Grounding techniques that actually work for non-dual experiences",
                ],
            },
            {
                title: "Phase 4: The Coach's Stance",
                description: "How do you hold space for the infinite without your own ego getting in the way?",
                topics: [
                    "Projections, mirrors, and the ethics of power",
                    "Screening clients: Who is ready and who is absolutely not",
                    "Building a practice that honors the molecule",
                ],
            },
        ],
        faq: [
            {
                question: "Do I need to have taken 5-MeO-DMT to take this course?",
                answer: "Honestly? It helps. It helps a lot. Trying to explain the taste of salt to someone who has never eaten is difficult. Trying to explain the annihilation of space-time to someone who hasn't been there is nearly impossible. However, if you are a serious practitioner preparing to enter this space, you are welcome.",
            },
            {
                question: "Is this a certification?",
                answer: "This is training. Real, hard-earned knowledge. We don't hand you a piece of paper that makes you a \"Shaman.\" The medicine doesn't care about certificates. We give you the competence and confidence to do the work safely. That’s worth more than a badge on your website.",
            },
            {
                question: "Who is Martin W. Ball?",
                answer: "If you’re in this space, you likely already know. But if not: Martin is a radical thinker, a Ph.D., and an author who has spent years mapping the visual and energetic language of the tryptamine experience. He doesn't sugarcoat things. He teaches you to see clearly.",
            },
            {
                question: "What if I can’t make the live times?",
                answer: "We get it. Time zones are weird. Kids get sick. All sessions are recorded and uploaded. You won't lose the content, but you will miss the direct interaction with Martin and the cohort.",
            },
            {
                question: "Why is the class so small?",
                answer: "Because mass-market education is for memorizing facts. Transformation requires conversation. With only 15 spots, you aren't a number. You're a colleague.",
            },
        ],
    },
    {
        slug: "mastering-ketamine-assisted-therapy",
        waitlistLink: "https://mindscape.mykajabi.com/pl/2148566324",
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
        price: 150,
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
        price: 49,
        type: "masterclass",
        status: "open",
        requiresInterview: false,
        duration: "Self-Paced",
        format: "Evergreen",
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
        price: null,
        type: "masterclass",
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
        price: null,
        type: "masterclass",
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
        price: null,
        type: "masterclass",
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
