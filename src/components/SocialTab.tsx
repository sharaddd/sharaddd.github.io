"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export const SocialTab = () => {
    return (
        <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2 p-2">
            <motion.div
                initial={{ x: -60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-col gap-2 bg-white/80 backdrop-blur-xl border border-black/5 p-2 rounded-full shadow-lg"
            >
                <a
                    href="https://github.com/sharaddd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full hover:bg-black hover:text-white transition-all group relative"
                    aria-label="GitHub"
                >
                    <Github size={20} />
                    <span className="absolute left-full ml-4 px-2 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all pointer-events-none shadow-xl">
                        GitHub
                    </span>
                </a>
                <a
                    href="https://www.linkedin.com/in/sharaddd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full hover:bg-[#0077b5] hover:text-white transition-all group relative"
                    aria-label="LinkedIn"
                >
                    <Linkedin size={20} />
                    <span className="absolute left-full ml-4 px-2 py-1 bg-[#0077b5] text-white text-[10px] font-black uppercase tracking-widest rounded whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all pointer-events-none shadow-xl">
                        LinkedIn
                    </span>
                </a>
                <div className="w-8 h-px bg-black/5 mx-auto my-1" />
                <a
                    href="mailto:sharaddtiwari@gmail.com"
                    className="p-3 rounded-full hover:bg-black hover:text-white transition-all group relative"
                    aria-label="Email"
                >
                    <Mail size={20} />
                    <span className="absolute left-full ml-4 px-2 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded whitespace-nowrap opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all pointer-events-none shadow-xl">
                        Contact
                    </span>
                </a>
            </motion.div>
        </div>
    );
};
