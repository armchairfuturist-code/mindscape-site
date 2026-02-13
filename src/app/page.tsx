import { Suspense } from "react";
import HeroSection from "@/components/sections/HeroSection";
import EnrollmentProcessSection from "@/components/sections/EnrollmentProcessSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import VideosSection from "@/components/sections/VideosSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CoursesSection from "@/components/sections/CoursesSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<div className="section bg-white" />}>
        <CoursesSection />
      </Suspense>
      <EnrollmentProcessSection />
      <FeaturesSection />
      <TestimonialsSection />
      <VideosSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
