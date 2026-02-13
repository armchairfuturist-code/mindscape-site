import { Metadata } from "next";
import { Suspense } from "react";
import CoachingContent from "@/components/sections/CoachingContent";

export const metadata: Metadata = {
    title: "Awareness Reset: Private Intensive | Mindscape Institute",
    description: "Advanced Presence & Integration Mentorship with Kerby. A private, high-touch intensive for professionals, clinicians, and leaders.",
};

export default function CoachingPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
            <CoachingContent />
        </Suspense>
    );
}
