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
        <motion.div
            initial="initial"
            whileHover="hover"
            className="group mb-12"
        >
            <Link href={`/projects/${id}`} className="block cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/3] bg-neutral-100 dark:bg-neutral-800 rounded-sm">
                    <motion.div
                        variants={{
                            initial: { scale: 1 },
                            hover: { scale: 1.05 }
                        }}
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
                        {/* Overlay on hover */}
                        <motion.div
                            variants={{
                                initial: { opacity: 0 },
                                hover: { opacity: 0.05 }
                            }}
                            className="absolute inset-0 bg-black pointer-events-none"
                        />
                    </motion.div>

                    {/* Floating indicator for 'Start Journey' */}
                    <div className="absolute top-4 right-4 overflow-hidden pointer-events-none z-10">
                        <motion.div
                            variants={{
                                initial: { x: 100, opacity: 0 },
                                hover: { x: 0, opacity: 1 }
                            }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="bg-white/95 backdrop-blur-md text-black text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full flex items-center gap-2 shadow-2xl border border-black/5"
                        >
                            Start Journey
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                        </motion.div>
                    </div>
                </div>

                <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-3">
                        <span className="text-[10px] font-black text-foreground/20 tracking-widest">{number}</span>
                        <h3 className="text-sm font-black tracking-widest uppercase text-foreground/90 group-hover:text-blue-600 transition-colors duration-300">{title}</h3>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-[11px] text-foreground/40 font-bold uppercase tracking-wide">{description}</p>
                        <motion.div
                            variants={{
                                initial: { opacity: 0, x: -10 },
                                hover: { opacity: 1, x: 0 }
                            }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-blue-600"
                        >
                            Explore Journey →
                        </motion.div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};
