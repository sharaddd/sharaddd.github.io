"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export const Hero = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    };

    const item: any = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <section className="relative flex flex-col items-center justify-center px-4 pt-40 pb-12 text-center overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-sky/5 blur-[120px] rounded-full -z-10" />

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-5xl space-y-8"
            >
                {/* Status Pill */}
                <motion.div
                    variants={item}
                    className="mx-auto flex items-center gap-2 bg-white border border-black/[0.04] px-4 py-1.5 rounded-full w-fit shadow-[0_2px_10px_rgba(0,0,0,0.02)] text-[11px] font-semibold"
                >
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-black/80 tracking-tight font-bold">Available for work</span>
                </motion.div>

                {/* Heading */}
                <motion.div variants={item} className="space-y-4">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[1.05] font-black font-display text-black">
                        Sharad | <span className="text-neutral-300">Product Manager</span>
                    </h1>
                </motion.div>

                {/* Subtext */}
                <motion.p
                    variants={item}
                    className="text-lg md:text-xl text-foreground/60 max-w-3xl mx-auto leading-relaxed font-medium"
                >
                    Bridging <span className="text-black font-bold">technical execution</span> with <span className="text-black font-bold">product strategy</span>. I leverage a computer science foundation to build intentional, high-impact prototypes and drive enterprise solutions.
                </motion.p>

                {/* Buttons */}
                <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                    <button className="bg-black text-white px-10 py-5 rounded-full font-bold text-sm hover:translate-y-[-2px] hover:shadow-2xl transition-all w-full sm:w-auto flex items-center justify-center gap-2">
                        Explore My Projects
                        <ArrowUpRight size={18} />
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
};
