"use client";

import React from "react";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";

const PROJECTS_DATA = [
    {
        id: "upgrade-app",
        number: "14",
        title: "Nano Skills - upGrad App",
        description: "Product Strategy • Feature Addition",
        imageUrl: "/projects/upgrad_thumbnail_final.png",
    },
    {
        id: "finance-go",
        number: "13",
        title: "Finance Go",
        description: "Product Vision • Mobile Experience",
        imageUrl: "/projects/p2.png",
    },
    {
        id: "cosmos-analytics",
        number: "12",
        title: "Cosmos Analytics",
        description: "Product Logic • Data Platform",
        imageUrl: "/projects/p3.png",
    },
];

export const ProjectGrid = () => {
    return (
        <section id="projects" className="px-6 py-20 max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-24">
                <h2 className="text-sm font-bold tracking-[0.3em] opacity-50 mb-4">Selected</h2>
                <h1 className="text-5xl md:text-7xl font-black text-center tracking-tighter">Featured Work</h1>
                <div className="w-24 h-px bg-foreground/20 mt-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {PROJECTS_DATA.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
