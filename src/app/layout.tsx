import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mindscape Psychedelic Institute | Professional Psychedelic Education",
  description:
    "Where Psychedelic Education Meets Integrity, Insight, and Embodied Wisdom. Training clinicians, facilitators, and guides worldwide to support real transformation—safely, ethically, and skillfully.",
  keywords: [
    "psychedelic education",
    "psychedelic therapy training",
    "5-MeO-DMT facilitation",
    "psilocybin training",
    "MDMA therapy",
    "psychedelic integration",
    "trauma-informed facilitation",
    "entheogen training",
    "psychedelic certification",
  ],
  authors: [{ name: "Stephan Kerby & Amber Kerby" }],
  openGraph: {
    title: "Mindscape Psychedelic Institute",
    description:
      "Professional psychedelic education for clinicians, facilitators, and guides. Certified training programs that bridge ancient wisdom with modern science.",
    type: "website",
    locale: "en_US",
    siteName: "Mindscape Psychedelic Institute",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindscape Psychedelic Institute",
    description:
      "Professional psychedelic education for clinicians, facilitators, and guides.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
