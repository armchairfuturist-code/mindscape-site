import HeroSection from "@/components/sections/HeroSection";
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
      <FeaturesSection />
      <VideosSection />
      <CoursesSection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
