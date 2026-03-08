"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Work", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className={cn(
                    "flex items-center gap-1 p-1.5 rounded-full border border-black/5 bg-white/80 backdrop-blur-xl transition-all duration-300 shadow-sm",
                    scrolled && "shadow-lg border-black/10"
                )}
            >
                <Link
                    href="/"
                    className="flex items-center gap-2 px-4 py-2 hover:opacity-80 transition-opacity"
                >
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                        <span className="text-white font-bold text-xs">P</span>
                    </div>
                    <span className="font-semibold text-sm tracking-tight text-foreground">Portfolio</span>
                </Link>

                <div className="hidden sm:flex items-center gap-1 mx-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="px-4 py-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors relative"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <Link
                    href="#contact"
                    className="bg-black text-white px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 active:scale-95 transition-all shadow-md ml-2"
                >
                    Contact
                </Link>
            </motion.nav>
        </div>
    );
};
