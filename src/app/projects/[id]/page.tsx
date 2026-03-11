import React from "react";
import Link from "next/link";
import { ProjectClientContent } from "./ProjectClientContent";

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

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = PROJECTS_DATA[id];

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold text-white">Project Not Found</h1>
                    <Link href="/" className="text-blue-500 hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return <ProjectClientContent project={project} />;
}
