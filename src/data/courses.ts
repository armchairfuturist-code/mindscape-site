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
        title: "Expanding Therapeutic Horizons",
        subtitle: "Therapy Hit a Wall. We’re Breaking It Down.",
        description: "You know the feeling.\n\nYou’re sitting across from a client. You’ve done the work. You’ve used the modalities. You’ve built the rapport. But they’re still stuck. The trauma is lodged somewhere words just can’t reach.\n\nWe aren’t just entering a new chapter of mental health. We are rewriting the whole book.\n\nKetamine. Psilocybin. MDMA.\n\nThese aren’t just substances; they are keys. And the door is unlocking. The question isn’t if these tools will become the standard of care. The question is whether you’ll be ready when they do.",
        image: "/images/eth.avif",
        price: 299,
        priceTiers: [
            { label: "Standard", price: 299 },
            { label: "With CE Credits", price: 349 }
        ],
        type: "masterclass",
        status: "open",
        requiresInterview: false,
        nextCohort: "May 31 – June 2",
        duration: "3 Days",
        format: "Online LIVE (Virtual Classroom)",
        instructor: "both",
        metrics: {
            completionRate: 92,
            students: 650,
        },
        highlights: [
            "Three days of immersion",
            "Deep dive into Ketamine, Psilocybin, and MDMA",
            "Live interaction with clinical and expert guides",
            "Optional CE Credits available",
        ],
        howItWorksIntro: "Most training is passive. You watch a screen, you take notes, you forget half of it by dinner. We don’t do that here. This is three days of immersion. It’s a download of decades of experience—from the clinical sterility of the hospital to the raw reality of underground work—compressed into a format you can actually use.",
        howItWorks: [
            {
                title: "The Setup",
                description: "We meet live, virtually. No pre-recorded fluff. You’re in the room (digitally) with Dr. Mandler, Dr. Leeker, Dr. Wallington, and the Kerbys. You ask questions. You challenge ideas. You get answers.",
            },
            {
                title: "The Goal",
                description: "This isn’t about just learning 'facts.' It’s about synthesis. We take the pharmacology, the ethics, and the ancient history, and we braid them into a framework you can apply to your practice.",
            },
            {
                title: "The Certification",
                description: "For those who need the paper trail, we offer CE Credits ($349 tier). For those who just want the knowledge, we keep the price accessible ($299).",
            },
        ],
        curriculum: [
            {
                title: "Day 1: The Bridge (Ketamine)",
                description: "Ketamine is the 'now.' It’s the only legal psychedelic medicine currently available for widespread prescription. It is the bridge between the old world and the new.",
                topics: [
                    "The Science: We strip away the jargon and explain exactly what Ketamine does to the brain's neuroplasticity.",
                    "The Practice: How to move from 'administering a drug' to 'facilitating a breakthrough.'",
                    "The Evidence: Real clinical applications that show why this works for treatment-resistant depression when nothing else does.",
                ],
            },
            {
                title: "Day 2: The Deep Dive (Psilocybin)",
                description: "The mushroom is the teacher. Here, we look backward to look forward.",
                topics: [
                    "Roots & Research: From indigenous wisdom to modern clinical trials. You can't understand the medicine if you don't respect the lineage.",
                    "The Container: How to hold space when a client’s ego dissolves. Frameworks for safety, set, and setting.",
                    "Integration: The journey is only 10% of the work. The other 90% is what happens after. We teach you how to help clients land.",
                ],
            },
            {
                title: "Day 3: The Heart Opener (MDMA)",
                description: "MDMA is poised to revolutionize PTSD treatment. It quiets the fear center (amygdala) so the client can finally look their trauma in the eye without blinking.",
                topics: [
                    "The Mechanism: Why MDMA is unique compared to classic psychedelics.",
                    "Trauma Work: Analyzing the Phase 3 clinical trials that are shocking the medical community with their success rates.",
                    "The Future: Navigating the complex legal and ethical landscape that is shifting beneath our feet right now.",
                ],
            },
        ],
        guides: [
            {
                name: "Stephan \"Kerby\" Kerby",
                role: "The Visionary",
                description: "Founder of Unchurch University. He bridges the gap between the street and the clinic. A master facilitator of 5-MeO-DMT who understands that trauma-informed care is the only care that matters."
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
                name: "Dr. Olivia Leeker",
                role: "The Psychologist",
                description: "17+ years in the trenches—from VA hospitals to corrections. She understands the darkest corners of the human experience and uses psychedelic integration to bring light to them."
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
                question: "\"Why these specific instructors?\"",
                answer: "Because you need both sides of the coin. You need Dr. Stephen Mandler and Dr. Olivia Leeker for the clinical, board-certified, \"hospital-grade\" safety and legitimacy. But you also need Stephan and Amber Kerby. You need the underground wisdom, the \"Wounded Healer\" perspective, and the raw experience of guiding thousands of journeys. We blend the white coat with the shamanic heart. That’s the only way this works."
            },
            {
                question: "\"Will I be certified to administer MDMA after this?\"",
                answer: "No course can legally grant you that right yet—because the federal laws haven't fully flipped. This course gives you the foundation. It puts you at the front of the line. When the floodgates open, you won't be scrambling to learn the basics. You’ll be ready to serve."
            }
        ]
    },
    {
        slug: "mdma-masterclass",
        title: "Masterclass: MDMA",
        subtitle: "The Molecule of Connection",
        description: "You know that feeling? The one where the static in your head finally goes quiet. The walls you built—brick by bloody brick—suddenly look transparent. You can breathe. You can connect.\n\nThat’s the promise of MDMA.\n\nBut let’s be real for a second. There’s the street version of the story, full of clenched jaws and bad techno, and then there’s the truth. The truth is that this molecule is currently shaking the foundations of modern psychiatry. It’s doing in three sessions what talk therapy hasn’t been able to do in thirty years.\n\nWe aren't here to moralize. We’re here to understand.\n\nThis Master Class is the signal in the noise. It’s a deep, unflinching look at the history, the chemistry, and the sheer human potential of MDMA. Whether you’re a therapist trying to understand the future of your field, or just someone trying to understand the wiring of your own brain, this is where you start.",
        image: "/images/mdma.avif",
        price: 49,
        type: "masterclass",
        status: "open",
        requiresInterview: false,
        nextCohort: "Immediate Access",
        duration: "Self-Paced",
        format: "Digital Masterclass",
        instructor: "both",
        metrics: {
            completionRate: 94,
            recommendRate: 97,
        },
        highlights: [
            "Comprehensive history and origin story",
            "In-depth pharmacology and neurochemistry",
            "PTSD trials and clinical applications",
            "Safety, risk, and harm reduction maps",
        ],
        howItWorksIntro: "We stripped away the academic fluff. No gatekeeping. No semester-long commitments. Just the raw information, delivered straight to you.",
        howItWorks: [
            {
                title: "1. The Download (Self-Paced Study)",
                description: "Once you’re in, you own it. The content is yours to devour at 2 AM on a Tuesday or slowly digest over a month of Sundays. We know life gets in the way. We know you’re busy. So we built this to fit into the cracks of your schedule. You set the rhythm.",
            },
            {
                title: "2. The Deep Dive (Curriculum)",
                description: "We go through it all. The good, the bad, and the chemically complex. You’ll watch, read, and listen as we dismantle the myths and look at the actual mechanics of how this substance rewires trauma and opens the heart.",
            },
            {
                title: "3. The Human Element (Optional 1-on-1)",
                description: "Sometimes, you hit a wall. Or maybe a revelation that you need to pressure-test against a real human being. For a small extra fee, you can book a session with the instructor. No chatbots. No scripts. Just a real conversation to clarify the nuance and dig deeper into the specific things keeping you up at night.",
            },
        ],
        curriculum: [
            {
                title: "Module 1: The Origin Story",
                description: "Before it was a party drug, it was a mistake. Then it was a secret. Then it was a threat. We trace the lineage from the Merck labs in 1912 through the therapy rooms of the 70s to the rave scene and back to the FDA’s desk today. Context is everything.",
                topics: [
                    "Merck Lab origins (1912)",
                    "Therapeutic use in the 1970s",
                    "The shift to the rave scene",
                    "The modern FDA approval path",
                ],
            },
            {
                title: "Module 2: Under the Hood (Pharmacology)",
                description: "What actually happens when the molecule hits the serotonin receptor? We strip down the biology. You don't need a medical degree to understand this, but you will need to pay attention. We talk mechanism of action, neurotoxicity, and the delicate dance of neurochemistry.",
                topics: [
                    "Serotonin receptor mechanics",
                    "Mechanism of Action (MOA)",
                    "Neurotoxicity risks",
                    "Biological effects on the heart and brain",
                ],
            },
            {
                title: "Module 3: The Scalpel (Therapeutic Application)",
                description: "Here’s where it gets heavy. We look at the research. The PTSD trials. The couples therapy. The way MDMA acts not as a numbing agent, but as an emotional anesthetic that allows you to perform surgery on your own soul. We look at why it works when nothing else does.",
                topics: [
                    "PTSD Phase 3 clinical trials",
                    "Couples therapy applications",
                    "Emotional anesthesia and memory reconsolidation",
                    "Case studies in healing",
                ],
            },
            {
                title: "Module 4: Safety, Risk, and the Dark Side",
                description: "We don’t sugarcoat it. There are risks. There are contraindications. There are ways to do this wrong that end in disaster. We talk about harm reduction, dosage, set, and setting. If you respect the substance, it respects you. If you don't... well, we cover that too.",
                topics: [
                    "Contraindications and medication interactions",
                    "Dosage guidelines and purity",
                    "Harm reduction strategies",
                    "Set and setting optimization",
                ],
            },
        ],
        faq: [
            {
                question: "\"Do I need a science background to get this?\"",
                answer: "No. If you can read this, you can learn this. We explain the jargon. We translate the biochemistry into English. We built this for humans, not just academics.",
            },
            {
                question: "\"Is this course advocating for illegal use?\"",
                answer: "Look, we’re educators, not your lawyer or your dealer. We provide information. Unbiased, research-backed data. What you do with your own consciousness is, frankly, your business. But we believe you should be navigating the territory with a map, not a blindfold.",
            },
            {
                question: "\"Why is it so cheap?\"",
                answer: "Because information wants to be free, but hosting servers costs money. We priced this to be a \"hell yes\" decision. We want this knowledge in as many hands as possible because we think it matters.",
            },
            {
                question: "\"Can I really talk to the instructor?\"",
                answer: "Yes. For a nominal fee. Sometimes you need to look someone in the eye (or through a screen) and ask the hard question. We make that space available because generic answers rarely solve specific problems.",
            },
            {
                question: "\"Is this relevant if I just want to understand the therapy aspect?\"",
                answer: "It’s especially relevant then. The medicalization of MDMA is happening right now. If you're in the healing space and you aren't looking at this, you're looking at the past. This is the future.",
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
        subtitle: "A Practical Guide to Awakening with 5-MeO-DMT",
        description: "A precise, somatic map for navigating the non-dual landscape. This protocol bridges the gap between peak 5-MeO-DMT experiences and permanent, embodied awakening.",
        image: "/images/ep.jpg",
        price: null,
        type: "ebook",
        status: "open",
        format: "eBook/Paperback",
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
        format: "eBook/Paperback",
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
