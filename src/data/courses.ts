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
}

export const courses: Course[] = [
    {
        slug: "5-meo-dmt-facilitation",
        title: "Certified 5-MeO/Bufo Facilitator Course",
        subtitle: "Master the art of sacred facilitation",
        description: "The God Molecule doesn’t care about your resume. It cares about your presence. Your nervous system. Your ability to sit in the fire without burning up.\n\nYou’re here because you feel the pull. Maybe you’ve sat with the medicine yourself and felt the fabric of reality tear open. Maybe you’ve seen the healing it offers—the kind that happens in twenty minutes but lasts a lifetime—and you realized: This is what I’m supposed to do.\n\nBut holding space for 5-MeO-DMT isn’t like other modalities. It’s not just \"tripsitting.\" It’s non-dual surgery. It’s walking someone to the edge of the void, holding their hand while they dissolve, and being the anchor that brings them back.\n\nYou don't learn this from a textbook. You learn it by transmission. You learn it by doing the work.\n\nWelcome to the Mindscape Psychedelic Institute. We’re building the next generation of safe, ethical, trauma-informed facilitators.\n\nWe start in May 2026. The question is: are you ready to carry this weight?",
        image: "/images/5meof.jpg",
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
        title: "The 5-MeO-DMT Advanced Integration Course",
        subtitle: "With Martin W. Ball, Ph.D.",
        description: "There are psychedelics. And then there is 5-MeO-DMT.\n\nMost plant medicines show you the furniture of your mind—your trauma, your history, your stories. 5-MeO takes the house, burns it down, and leaves you floating in a white void of absolute nothingness. And absolute everythingness.\n\nIt’s the \"God Molecule.\" It is the Everest of the psyche.\n\nAnd when a client comes back from that... when they open their eyes after twenty minutes of ego-obliteration, they don't just need a chat. They need a completely different kind of map.\n\nMost coaches aren't equipped for this. You can't use standard integration techniques for an experience that transcends the standard human self.\n\nStarting March 4th, we are going to fix that.\n\nThis is a 9-week deep dive into the specific, nuanced, and profound art of integrating the 5-MeO experience. Limited to just 15 students, taught by the man who literally wrote the books on it, Martin W. Ball, Ph.D.\n\nIf you want to work with the most powerful molecule on the planet, you need to know how to handle the power.",
        image: "/images/5meoi.avif",
        price: null,
        type: "certification",
        status: "open",
        requiresInterview: true,
        nextCohort: "March 4, 2026",
        duration: "9 weeks",
        format: "Live Online (2-hour sessions)",
        instructor: "martin",
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
        title: "Mastering Ketamine Assisted Therapy",
        subtitle: "Clinical excellence in KAT facilitation",
        description: "A comprehensive certification program for practitioners seeking to master Ketamine-Assisted Therapy. This course provides deep clinical insights, safety protocols, and therapeutic frameworks for working with this powerful tool.",
        image: "/images/1.png",
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
        slug: "expanding-therapeutic-horizons",
        title: "Masterclass: Expanding Therapeutic Horizons",
        subtitle: "The Future of Therapy",
        description: "Explore the emerging landscape of psychedelic-assisted therapy and how it's reshaping mental health treatment. Perfect for clinicians looking to understand this evolving field.",
        image: "/images/eth.avif",
        price: null,
        type: "masterclass",
        status: "open",
        requiresInterview: false,
        duration: "4 weeks",
        format: "On-Demand",
        instructor: "amber",
        metrics: {
            completionRate: 92,
            students: 650,
        },
        highlights: [
            "Current research overview",
            "Clinical trial insights",
            "Integration with traditional therapy",
            "Future trends and opportunities",
        ],
        curriculum: [
            {
                title: "The Psychedelic Renaissance",
                topics: [
                    "Historical context and modern revival",
                    "Current research landscape",
                    "Regulatory developments",
                ],
            },
            {
                title: "Clinical Applications",
                topics: [
                    "PTSD and trauma treatment",
                    "Depression and anxiety",
                    "Addiction and end-of-life care",
                ],
            },
        ],
        faq: [
            {
                question: "Is this for licensed therapists only?",
                answer: "While designed with clinicians in mind, this course is valuable for anyone interested in the therapeutic applications of psychedelics.",
            },
        ],
    },
    {
        slug: "mdma-masterclass",
        title: "Masterclass - MDMA",
        subtitle: "MDMA-Assisted Therapy Training",
        description: "Prepare for the emerging field of MDMA-assisted therapy. This course covers the MAPS protocol, trauma-informed approaches, and the unique considerations of working with MDMA.",
        image: "/images/mdma.avif",
        price: null,
        type: "masterclass",
        status: "waitlist",
        requiresInterview: false,
        nextCohort: "March 2026",
        duration: "8 weeks",
        format: "Live Online",
        instructor: "both",
        metrics: {
            completionRate: 94,
            recommendRate: 97,
        },
        highlights: [
            "MAPS protocol training",
            "Trauma-informed approaches",
            "Co-therapy models",
            "Integration frameworks",
        ],
        curriculum: [
            {
                title: "MDMA Science & History",
                topics: [
                    "Pharmacology and effects",
                    "Research history and current trials",
                    "Regulatory pathway to approval",
                ],
            },
            {
                title: "Therapeutic Applications",
                topics: [
                    "PTSD treatment protocols",
                    "The therapeutic relationship in MDMA therapy",
                    "Working with trauma memories",
                ],
            },
        ],
        faq: [
            {
                question: "When will MDMA therapy be legal?",
                answer: "We cover the current regulatory landscape and prepare you for when MDMA-assisted therapy receives approval.",
            },
        ],
    },
    {
        slug: "psilocybin-masterclass",
        title: "Masterclass - Psilocybin",
        subtitle: "Psilocybin Facilitation Training",
        description: "Comprehensive training in psilocybin facilitation covering both clinical and ceremonial approaches. Learn to create safe, meaningful experiences for healing and growth.",
        image: "/images/1.png",
        price: null,
        type: "masterclass",
        status: "open",
        duration: "8 weeks",
        format: "Live Online + Practicum",
        instructor: "both",
        metrics: {
            completionRate: 95,
            recommendRate: 96,
            students: 420,
        },
        highlights: [
            "Clinical and ceremonial frameworks",
            "Dosing and session design",
            "Music and environment curation",
            "Integration support methods",
        ],
        curriculum: [
            {
                title: "Psilocybin Fundamentals",
                topics: [
                    "Mycology and pharmacology",
                    "Historical and indigenous contexts",
                    "Current research and applications",
                ],
            },
            {
                title: "Facilitation Mastery",
                topics: [
                    "Set and setting optimization",
                    "Navigating challenging experiences",
                    "Group facilitation considerations",
                ],
            },
        ],
        faq: [
            {
                question: "Does this course include hands-on experience?",
                answer: "The course includes a practicum component in jurisdictions where psilocybin work is legal.",
            },
        ],
    },
    {
        slug: "5-meo-dmt-bufo-masterclass",
        title: "Masterclass - 5-MeO-DMT/Bufo",
        subtitle: "Advanced 5-MeO Practices",
        description: "Deep dive into advanced 5-MeO-DMT practices for experienced practitioners. Explore both synthetic and toad-derived medicine with rigorous safety and ethical frameworks.",
        image: "/images/2.png",
        price: null,
        type: "masterclass",
        status: "open",
        requiresInterview: false,
        duration: "6 weeks",
        format: "Live Online",
        instructor: "stephan",
        metrics: {
            completionRate: 93,
            recommendRate: 98,
        },
        highlights: [
            "Synthetic vs. toad-derived considerations",
            "Advanced safety protocols",
            "Ecological and ethical sourcing",
            "Non-dual experience support",
        ],
        curriculum: [
            {
                title: "Advanced Pharmacology",
                topics: [
                    "Synthetic vs. organic sources",
                    "Potency and variability",
                    "Interactions and contraindications",
                ],
            },
            {
                title: "Mastery in Practice",
                topics: [
                    "Complex session navigation",
                    "Working with challenging states",
                    "Advanced integration techniques",
                ],
            },
        ],
        faq: [
            {
                question: "Is prior 5-MeO experience required?",
                answer: "Yes, this advanced course requires completion of our foundational 5-MeO training or equivalent experience.",
            },
        ],
    },
    {
        slug: "embodiment-protocol",
        title: "The Embodiment Protocol",
        subtitle: "A Practical Guide to Somatic Integration",
        description: "A comprehensive eBook guide to embodiment practices for psychedelic integration. Essential reading for facilitators and individuals seeking to ground transformative experiences in the body.",
        image: "/images/3.png",
        price: 19.99,
        type: "ebook",
        status: "open",
        format: "Digital Download",
        instructor: "stephan",
        metrics: {
            students: 1200,
        },
        highlights: [
            "Practical somatic exercises",
            "Integration frameworks",
            "Daily embodiment practices",
            "Trauma-informed approach",
        ],
        curriculum: [],
        faq: [
            {
                question: "Is this suitable for beginners?",
                answer: "Yes, the protocol is designed to be accessible for anyone interested in embodiment practices.",
            },
        ],
    },
    {
        slug: "educational-manual",
        title: "Educational Manual eBook",
        subtitle: "Kerby, Stephan, Ball",
        description: "A collaborative educational manual covering the foundations of psychedelic facilitation. Written by Stephan Kerby and Martin Ball, this text serves as essential reading for our certification programs.",
        image: "/images/1.png",
        price: 29.99,
        type: "ebook",
        status: "open",
        format: "Digital Download",
        instructor: "stephan",
        metrics: {
            students: 850,
        },
        highlights: [
            "Comprehensive facilitation guide",
            "Safety protocols and ethics",
            "Integration frameworks",
            "Case studies and examples",
        ],
        curriculum: [],
        faq: [
            {
                question: "Is this required for certification courses?",
                answer: "This manual is included with our certification programs and serves as a key reference text.",
            },
        ],
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
