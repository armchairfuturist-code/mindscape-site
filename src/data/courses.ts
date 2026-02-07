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
    instructor: 'stephan' | 'amber' | 'both';
    metrics: {
        completionRate?: number;
        recommendRate?: number;
        students?: number;
    };
    highlights: string[];
    curriculum: {
        title: string;
        topics: string[];
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
}

export const courses: Course[] = [
    {
        slug: "5-meo-dmt-facilitation",
        title: "Certified 5-MeO/Bufo Facilitator Course",
        subtitle: "Master the art of sacred facilitation",
        description: "A comprehensive certification program preparing you to safely and ethically facilitate 5-MeO-DMT experiences. This course combines ancient wisdom with modern safety protocols, trauma-informed practices, and somatic integration techniques.",
        image: "/images/5meof.jpg",
        price: null,
        type: "certification",
        status: "waitlist",
        requiresInterview: true,
        nextCohort: "June 2026",
        duration: "12 weeks",
        format: "Live Online + Self-Paced",
        instructor: "stephan",
        metrics: {
            completionRate: 97,
            recommendRate: 96,
            students: 450,
        },
        highlights: [
            "Comprehensive safety protocols & emergency response",
            "Trauma-informed facilitation techniques",
            "Somatic integration practices",
            "Legal & ethical frameworks",
            "Ongoing mentorship & community",
        ],
        curriculum: [
            {
                title: "Module 1: Foundations",
                topics: [
                    "History and cultural context of 5-MeO-DMT",
                    "Pharmacology and neurochemistry",
                    "Legal landscape and ethical considerations",
                    "Setting and container creation",
                ],
            },
            {
                title: "Module 2: Safety & Screening",
                topics: [
                    "Medical contraindications",
                    "Psychological screening protocols",
                    "Emergency response procedures",
                    "Risk mitigation strategies",
                ],
            },
            {
                title: "Module 3: Facilitation Skills",
                topics: [
                    "Pre-session preparation techniques",
                    "Breathwork and somatic practices",
                    "Holding space during peak experiences",
                    "Integration support methods",
                ],
            },
            {
                title: "Module 4: Integration & Aftercare",
                topics: [
                    "Post-session integration protocols",
                    "Long-term support strategies",
                    "Community building",
                    "Practitioner self-care",
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
                question: "Do I need prior experience with psychedelics?",
                answer: "While personal experience can be valuable, it's not required. We focus on developing the skills and knowledge needed for safe facilitation.",
            },
            {
                question: "Is this course legally recognized?",
                answer: "This course provides comprehensive training for jurisdictions where such work is permitted. We cover legal considerations for various regions.",
            },
            {
                question: "What support is available after the course?",
                answer: "Graduates gain access to our ongoing practitioner community, mentorship opportunities, and continuing education resources.",
            },
        ],
    },
    {
        slug: "martin-ball-5-meo-dmt",
        title: "Martin Ball 5-MeO DMT",
        subtitle: "Advanced integration techniques with Dr. Martin Ball",
        description: "Deep dive into advanced 5-MeO-DMT integration practices with renowned expert Dr. Martin Ball. Learn to support clients through profound non-dual experiences and facilitate lasting transformation.",
        image: "/images/5meoi.avif",
        price: null,
        type: "certification",
        status: "open",
        requiresInterview: true,
        duration: "8 weeks",
        format: "Live Online",
        instructor: "stephan",
        metrics: {
            completionRate: 94,
            recommendRate: 98,
        },
        highlights: [
            "Guest lectures from Dr. Martin Ball",
            "Non-dual experience navigation",
            "Advanced integration protocols",
            "Case study analysis",
        ],
        curriculum: [
            {
                title: "Understanding Non-Dual Experience",
                topics: [
                    "The phenomenology of ego dissolution",
                    "Navigating boundless awareness",
                    "Common challenges and their resolution",
                ],
            },
            {
                title: "Integration Frameworks",
                topics: [
                    "Embodiment practices",
                    "Meaning-making and narrative integration",
                    "Long-term transformation support",
                ],
            },
        ],
        faq: [
            {
                question: "Is prior 5-MeO experience required?",
                answer: "Basic familiarity with 5-MeO-DMT work is recommended. Our foundational course is excellent preparation.",
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
