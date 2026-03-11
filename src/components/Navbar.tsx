"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Mail, ArrowLeft } from "lucide-react";

const navItems = [
    { name: "Work", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isProjectPage = pathname !== "/";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={cn(
            "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b",
            scrolled
                ? "bg-white/80 backdrop-blur-xl border-black/5 py-4 shadow-sm"
                : "bg-white/50 backdrop-blur-sm border-transparent py-6"
        )}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Left Side: Back Button (Only on project pages) */}
                <div className="w-48">
                    {isProjectPage && (
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase text-black/40 hover:text-black transition-all group"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Back to Portfolio
                        </Link>
                    )}
                </div>

                {/* Center: Main Nav */}
                <nav className="flex items-center gap-1 sm:gap-6">
                    {!isProjectPage ? (
                        navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="px-4 py-2 text-[15px] font-black text-black/60 hover:text-black transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))
                    ) : (
                        <p className="text-xs font-black tracking-[0.3em] uppercase opacity-20 hidden md:block">Case Study Overview</p>
                    )}

                    <div className="w-[1px] h-5 bg-black/10 mx-2" />

                    <div className="flex items-center gap-1">
                        <a
                            href="https://github.com/sharaddd"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-black/60 hover:text-black transition-colors"
                            aria-label="GitHub"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sharaddd/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-black/60 hover:text-black transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:sharaddtiwari@gmail.com"
                            className="p-2 text-black/60 hover:text-black transition-colors"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    );
};
