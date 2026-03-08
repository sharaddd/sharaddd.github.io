"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

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
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 pt-40 pb-20 text-center overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-sky/15 blur-[120px] rounded-full -z-10" />

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-4xl space-y-8"
            >
                {/* Status Pill */}
                <motion.div
                    variants={item}
                    className="mx-auto flex items-center gap-2 bg-white border border-black/5 px-4 py-2 rounded-full w-fit shadow-sm text-sm font-medium"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-foreground/80 tracking-wide text-[10px] font-black">Open for building new products</span>
                </motion.div>

                {/* Name */}
                <motion.div variants={item}>
                    <h2 className="text-6xl md:text-8xl font-black text-foreground tracking-tighter leading-none mb-4">
                        Sharad Tiwari
                    </h2>
                </motion.div>

                {/* Heading */}
                <motion.h1
                    variants={item}
                    className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-foreground/80"
                >
                    Building the <span className="text-accent-coral">Brain.</span> &nbsp;
                    Prototyping the <span className="text-accent-lavender italic">Vision.</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    variants={item}
                    className="text-base md:text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed font-medium"
                >
                    Focused on the <span className="text-foreground font-black text-black/80">Strategic 'Why'</span> before the 'How'. Crafting intentional prototypes to showcase product logic and the strategic thinking behind high-impact solutions.
                </motion.p>

                {/* Buttons */}
                <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                    <button className="bg-black text-white px-10 py-5 rounded-full font-black text-xs hover:translate-y-[-2px] hover:shadow-2xl transition-all w-full sm:w-auto">
                        Explore My Products
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
};
