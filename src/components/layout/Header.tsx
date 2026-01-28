"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Logo from "../ui/Logo";

const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#videos", label: "Videos" },
    { href: "#courses", label: "Courses" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        const element = document.querySelector(href);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-soft py-3"
                    : "bg-transparent py-5"
                    }`}
            >
                <div className="container-custom">
                    <nav className="flex items-center justify-between">
                        {/* Logo */}
                        <Link
                            href="/"
                            className={`flex items-center gap-3 group transition-colors ${isScrolled ? 'header-light' : 'header-dark'}`}
                        >
                            <div className="w-12 h-12 transition-all duration-300">
                                <Logo className="w-full h-full" />
                            </div>
                            <div className="hidden sm:block">
                                <span className="font-heading font-bold text-lg leading-tight block">
                                    MINDSCAPE
                                </span>
                                <span className="text-xs tracking-widest opacity-80">
                                    PSYCHEDELIC INSTITUTE
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`font-medium text-sm tracking-wide uppercase transition-colors hover:text-teal ${isScrolled ? "text-navy-600" : "text-white/90 hover:text-white"
                                        }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="hidden lg:block">
                            <Link
                                href="#"
                                className="btn-primary text-sm"
                            >
                                Individual Coaching
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-navy hover:bg-navy-50" : "text-white hover:bg-white/10"
                                }`}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-navy/90 backdrop-blur-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                />

                {/* Menu Content */}
                <div
                    className={`absolute top-0 right-0 h-full w-80 max-w-full bg-navy shadow-2xl transform transition-transform duration-300 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <div className="flex flex-col h-full pt-24 pb-8 px-6">
                        {/* Nav Links */}
                        <nav className="flex-grow">
                            {navLinks.map((link, index) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={`block py-4 text-xl font-heading font-medium text-white/90 hover:text-gold border-b border-white/10 transition-all duration-300 transform ${isMobileMenuOpen
                                        ? "translate-x-0 opacity-100"
                                        : "translate-x-8 opacity-0"
                                        }`}
                                    style={{ transitionDelay: `${100 + index * 50}ms` }}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        {/* CTA */}
                        <div className="mt-8">
                            <Link
                                href="#"
                                className="btn-primary w-full text-center"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Individual Coaching
                            </Link>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-8 pt-6 border-t border-white/10">
                            <p className="text-white/60 text-sm">
                                Questions? Reach out to us
                            </p>
                            <a
                                href="mailto:contact@mindscapeinstitute.com"
                                className="text-teal-300 hover:text-gold transition-colors"
                            >
                                contact@mindscapeinstitute.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
