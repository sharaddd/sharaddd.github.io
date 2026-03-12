"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, BarChart3, Users, Zap, Search, Globe } from "lucide-react";

const SKILLS_DATA = [
    {
        category: "Product Strategy",
        icon: <BarChart3 className="w-5 h-5" />,
        skills: ["GTM Strategy", "Growth Loops", "Retention Analysis", "North Star Metrics"],
        color: "bg-blue-500/10 text-blue-600",
    },
    {
        category: "Technical Depth",
        icon: <Code2 className="w-5 h-5" />,
        skills: ["System Architecture", "SQL & Analytics", "API Design", "Data Structures"],
        color: "bg-emerald-500/10 text-emerald-600",
    },
    {
        category: "Execution",
        icon: <Zap className="w-5 h-5" />,
        skills: ["Agile/Scrum", "PRD Writing", "Roadmap Planning", "A/B Testing"],
        color: "bg-amber-500/10 text-amber-600",
    },
    {
        category: "User Centricity",
        icon: <Users className="w-5 h-5" />,
        skills: ["User Interviews", "Intentional Prototyping", "UX Audit", "Jobs to be Done"],
        color: "bg-purple-500/10 text-purple-600",
    },
];

export const Skills = () => {
    return (
        <section className="py-24 max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {SKILLS_DATA.map((group, index) => (
                    <motion.div
                        key={group.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-8 rounded-[2rem] bg-white border border-black/[0.03] shadow-[0_2px_10px_rgba(0,0,0,0.01)] hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group"
                    >
                        <div className={`w-12 h-12 rounded-2xl ${group.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                            {group.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4 tracking-tight">{group.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1 rounded-full bg-black/[0.03] text-[11px] font-bold uppercase tracking-wider text-black/50"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
