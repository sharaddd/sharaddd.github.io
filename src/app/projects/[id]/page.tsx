"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";

// In a real app, this would come from a database or a central config
const PROJECTS_DATA: Record<string, any> = {
    "aura-wellness": {
        title: "UPGRADE APP: NANO SKILLS",
        subtitle: "Enhancing user growth through bite-sized skill acquisition.",
        category: "PRODUCT DESIGN • FEATURE ADDITION",
        year: "2024",
        role: "Product Designer",
        description: "Upgrade App is a learning platform where we introduced 'Nano Skills'—short, actionable learning paths designed to keep users engaged and building habits. This feature addition involved complex user journey mapping and a new interactive module system.",
        mainImage: "/projects/p1.png",
        content: [
            {
                type: "text",
                heading: "The Challenge",
                body: "Building a wellness app that doesn't feel like another chore. Most health apps are data-heavy and clinical. Aura needed to feel like a breath of fresh air—warm, inviting, and human."
            },
            {
                type: "image",
                url: "/projects/p1.png",
                caption: "Mobile interface showcasing the daily mood tracker."
            },
            {
                type: "text",
                heading: "Visual Direction",
                body: "We chose a palette of soft teals, deep purples, and warm corals to represent the full spectrum of human emotion. Glassmorphism was used to create a sense of depth and lightness."
            }
        ]
    },
    "finance-go": {
        title: "FINANCE GO",
        subtitle: "Simplifying complex financial data for the modern investor.",
        category: "PRODUCT DESIGN • OFFICIAL WEBSITE",
        year: "2023",
        role: "Product Designer",
        description: "Finance Go is a platform that bridge the gap between amateur investors and professional tools. The goal was to make complex financial metrics understandable at a glance.",
        mainImage: "/projects/p2.png",
        content: []
    },
    "cosmos-analytics": {
        title: "COSMOS ANALYTICS",
        subtitle: "Visualizing the future of large-scale data systems.",
        category: "DASHBOARD DESIGN • DATA PLATFORM",
        year: "2024",
        role: "UI Engineer",
        description: "A high-performance analytics dashboard designed for real-time monitoring of global server infrastructures. Built with speed and clarity as the primary objectives.",
        mainImage: "/projects/p3.png",
        content: []
    }
};

export async function generateStaticParams() {
    return Object.keys(PROJECTS_DATA).map((id) => ({
        id: id,
    }));
}

export default function ProjectPage({ params }: { params: { id: string } }) {
    const project = PROJECTS_DATA[params.id];

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">Project Not Found</h1>
                    <Link href="/" className="text-accent-sky hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white dark:bg-black">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity mb-12"
                >
                    <ArrowLeft size={16} /> Back to Work
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
                    <div className="space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-black tracking-tighter"
                        >
                            {project.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-2xl text-foreground/60 max-w-xl"
                        >
                            {project.subtitle}
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-2 gap-8 border-t border-foreground/10 pt-8">
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Role</p>
                            <p className="font-medium">{project.role}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Year</p>
                            <p className="font-medium">{project.year}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-bold uppercase tracking-widest opacity-50">Category</p>
                            <p className="font-medium">{project.category}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Image */}
            <section className="px-6 max-w-7xl mx-auto mb-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="relative aspect-video w-full overflow-hidden rounded-sm bg-neutral-100 dark:bg-neutral-900"
                >
                    <Image
                        src={project.mainImage}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>
            </section>

            {/* Project Content */}
            <section className="px-6 max-w-3xl mx-auto pb-40">
                <div className="space-y-24">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold">About the project</h2>
                        <p className="text-xl leading-relaxed text-foreground/70">
                            {project.description}
                        </p>
                    </div>

                    {project.content.map((item: any, i: number) => (
                        <div key={i} className="space-y-8">
                            {item.type === "text" && (
                                <div className="space-y-4">
                                    <h3 className="text-xl font-bold uppercase tracking-widest">{item.heading}</h3>
                                    <p className="text-lg leading-relaxed text-foreground/60">{item.body}</p>
                                </div>
                            )}
                            {item.type === "image" && (
                                <div className="space-y-4">
                                    <div className="relative aspect-square md:aspect-video w-full overflow-hidden rounded-sm bg-neutral-100 dark:bg-neutral-900 border border-foreground/5">
                                        <Image src={item.url} alt={item.caption} fill className="object-cover" />
                                    </div>
                                    <p className="text-sm text-center italic text-foreground/40">{item.caption}</p>
                                </div>
                            )}
                        </div>
                    ))}

                    <div className="pt-20 border-t border-foreground/10 text-center">
                        <Link href="/" className="text-5xl md:text-7xl font-black hover:opacity-50 transition-opacity tracking-tighter">
                            NEXT PROJECT →
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
