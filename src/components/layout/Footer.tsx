import Link from "next/link";
import Image from "next/image";
import { Mail, Youtube, Linkedin, Instagram } from "lucide-react";
import Logo from "../ui/Logo";

const footerLinks = {
    programs: [
        { href: "/courses/5-meo-dmt-facilitation", label: "5-MeO-DMT Facilitation" },
        { href: "/courses/psilocybin-masterclass", label: "Psilocybin Masterclass" },
        { href: "/courses/mdma-masterclass", label: "MDMA Masterclass" },
        { href: "/coaching", label: "Awareness Reset (1:1)" },
        { href: "/courses/certified-entheogenic-guide", label: "Certified Entheogenic Guide" },
    ],
    resources: [
        { href: "/#videos", label: "Video Library" },
        { href: "#", label: "Facilitator Toolkit" },
        { href: "#", label: "Research & Articles" },
        { href: "/#about", label: "About Us" },
        { href: "/#contact", label: "Contact" },
    ],
};

const socialLinks = [
    { href: "https://www.youtube.com/@mindscapeinstitute", icon: Youtube, label: "YouTube" },
    { href: "https://www.linkedin.com/in/mindscapeinstitute/", icon: Linkedin, label: "LinkedIn" },
    { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
    { href: "mailto:contact@mindscapeinstitute.com", icon: Mail, label: "Email" },
];

export default function Footer() {
    return (
        <footer className="bg-navy text-white">
            {/* Main Footer */}
            <div className="container-custom pt-16 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6 text-white group">
                            <div className="w-12 h-12 transition-all duration-300">
                                <Logo className="w-full h-full" />
                            </div>
                            <div>
                                <span className="font-heading font-bold text-lg leading-tight block">
                                    MINDSCAPE
                                </span>
                                <span className="text-xs tracking-widest text-white/70">
                                    PSYCHEDELIC INSTITUTE
                                </span>
                            </div>
                        </Link>
                        <p className="text-white/70 text-sm leading-relaxed mb-6">
                            Training clinicians, facilitators, and guides worldwide to support
                            real transformation—safely, ethically, and skillfully.
                        </p>
                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
                           hover:bg-teal transition-colors duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Programs Column */}
                    <div>
                        <h4 className="font-heading font-semibold text-lg mb-6">Programs</h4>
                        <ul className="space-y-3">
                            {footerLinks.programs.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-gold transition-colors duration-200 text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Column */}
                    <div>
                        <h4 className="font-heading font-semibold text-lg mb-6">Resources</h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="text-white/70 hover:text-gold transition-colors duration-200 text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h4 className="font-heading font-semibold text-lg mb-6">
                            Join the Mindscape Vault
                        </h4>
                        <p className="text-white/70 text-sm mb-6">
                            Get exclusive teachings, tools, and early access to trainings.
                        </p>
                        <a
                            href="https://mindscape.mykajabi.com/mindscapevault"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full btn-primary inline-flex items-center justify-center text-center"
                        >
                            Get Instant Access
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container-custom py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/50 text-sm">
                            © {new Date().getFullYear()} Mindscape Psychedelic Institute. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <Link href="#" className="text-white/50 hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="text-white/50 hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="#" className="text-white/50 hover:text-white transition-colors">
                                Disclaimer
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
