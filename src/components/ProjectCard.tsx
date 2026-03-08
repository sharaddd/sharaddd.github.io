"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectCardProps {
    id: string;
    number: string;
    title: string;
    description: string;
    imageUrl: string;
}

export const ProjectCard = ({ id, number, title, description, imageUrl }: ProjectCardProps) => {
    return (
        <Link href={`/projects/${id}`} className="group block mb-12">
            <div className="relative overflow-hidden aspect-[4/3] bg-neutral-100 dark:bg-neutral-800 rounded-sm">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    className="w-full h-full relative"
                >
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </motion.div>


            </div>

            <div className="mt-4 space-y-1">
                <h3 className="text-sm font-bold tracking-widest uppercase text-foreground/90">{title}</h3>
                <p className="text-sm text-foreground/50 font-medium uppercase">{description}</p>
            </div>
        </Link>
    );
};
