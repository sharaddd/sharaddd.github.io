"use client";

import React from "react";
import { BlinkitThumbnail } from "./BlinkitThumbnail";
import { PremiumThumbnail } from "./PremiumThumbnail";
import { motion } from "framer-motion";

interface ProjectBase {
    id: string;
}

interface StandardProject extends ProjectBase {
    custom: "standard";
    title: string;
    subtitle: string;
    tagline: string;
    bgColor: string;
    accentColor: string;
    screenshotUrl?: string;
    watermarkIcon: "play" | "heart";
}

interface BlinkitProject extends ProjectBase {
    custom: "blinkit";
}

type ProjectItem = StandardProject | BlinkitProject;

const PROJECTS_DATA: ProjectItem[] = [
    {
        id: "blinkit-laundry",
        custom: "blinkit"
    },
    {
        id: "upgrade-app",
        custom: "standard",
        title: "upGrad: Nano Skills",
        subtitle: "Driving EdTech Retention: Micro-learning for the busy professional.",
        tagline: "upGrad • Strategy • Feature Addition",
        bgColor: "#E83B46",
        accentColor: "#ffffff",
        watermarkIcon: "play",
        screenshotUrl: "/projects/upgrad_thumbnail_final.png" // Placeholder used previously
    },
    {
        id: "elderly-care",
        custom: "standard",
        title: "Elderly Care Platform",
        subtitle: "Designing for the Longevity Economy: Accessible UI for remote vitals tracking.",
        tagline: "Inclusive Design • Longevity Economy",
        bgColor: "#0F766E",
        accentColor: "#ffffff",
        watermarkIcon: "heart",
        screenshotUrl: "/projects/elderly_care_thumbnail.png" // Placeholder used previously
    },
];

export const ProjectGrid = () => {
    return (
        <section id="projects" className="px-6 pt-4 pb-32 max-w-7xl mx-auto">
            <div className="flex flex-col items-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <h2 className="text-xs font-black tracking-[0.4em] opacity-40 mb-6 uppercase text-white">Selected Highlights</h2>
                <h1 className="text-5xl md:text-8xl font-black text-center tracking-tighter leading-[0.8] mb-12 text-white">
                    Strategic<br />Impact
                </h1>
                <div className="w-24 h-px bg-white/10" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS_DATA.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: index * 0.15, duration: 1, ease: [0.33, 1, 0.68, 1] }}
                    >
                        {project.custom === "blinkit" ? (
                            <BlinkitThumbnail id={project.id} />
                        ) : (
                            <PremiumThumbnail
                                id={project.id}
                                title={project.title}
                                subtitle={project.subtitle}
                                tagline={project.tagline}
                                bgColor={project.bgColor}
                                accentColor={project.accentColor}
                                watermarkIcon={project.watermarkIcon}
                                screenshotUrl={project.screenshotUrl}
                            />
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
