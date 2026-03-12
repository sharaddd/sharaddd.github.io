"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, GraduationCap, Heart, Shield } from "lucide-react";

interface PremiumThumbnailProps {
    id: string;
    title: string;
    subtitle: string;
    tagline: string;
    bgColor: string;
    accentColor: string;
    screenshotUrl?: string;
    watermarkIcon: "play" | "heart";
    strategyTag: string;
    metricBullet: string;
}

export const PremiumThumbnail = ({
    id,
    title,
    subtitle,
    tagline,
    bgColor,
    accentColor,
    screenshotUrl,
    watermarkIcon,
    strategyTag,
    metricBullet
}: PremiumThumbnailProps) => {
    return (
        <motion.div
            initial="initial"
            whileHover="hover"
            className="group cursor-pointer relative"
        >
            <Link href={`/projects/${id}`} className="block">
                {/* Main Card Container */}
                <div
                    className="relative aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-3xl"
                    style={{ backgroundColor: bgColor }}
                >

                    {/* Subtle Watermark Texture */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none overflow-hidden flex flex-wrap gap-12 p-12">
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className="rotate-[-25deg]">
                                {watermarkIcon === "play" ? (
                                    <div className="flex gap-4 items-center">
                                        <Play size={40} fill="currentColor" />
                                        <GraduationCap size={44} />
                                    </div>
                                ) : (
                                    <div className="flex gap-4 items-center">
                                        <Heart size={40} fill="currentColor" />
                                        <Shield size={40} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Content Layer */}
                    <div className="relative h-full p-8 flex flex-col justify-between z-10">
                        {/* Header Section */}
                        <div className="space-y-4 pr-12 text-white">
                            <div className="inline-flex px-2 py-0.5 rounded bg-white/10 border border-white/20">
                                <span className="text-[9px] font-black uppercase tracking-widest text-white/80">{strategyTag}</span>
                            </div>
                            <motion.h3
                                variants={{
                                    initial: { y: 0 },
                                    hover: { y: -2 }
                                }}
                                className="text-3xl font-black text-white tracking-tighter leading-none"
                            >
                                {title}
                            </motion.h3>
                            <div className="space-y-2">
                                <p className="text-sm font-bold text-white/80 leading-tight max-w-[90%]">
                                    {subtitle}
                                </p>
                                <div className="flex gap-2 items-start opacity-70">
                                    <div className="w-1 h-1 rounded-full bg-white/40 mt-1.5 shrink-0" />
                                    <p className="text-[11px] font-bold text-white leading-tight italic">
                                        {metricBullet}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Visual Mockup - iPhone 15 Pro Style */}
                        <div className="absolute top-[35%] -right-12 w-[85%] aspect-[9/19] z-20">
                            <motion.div
                                variants={{
                                    initial: { y: 0, rotate: -8, scale: 1 },
                                    hover: { y: -10, rotate: -5, scale: 1.02 }
                                }}
                                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                                className="relative w-full h-full"
                            >
                                {/* iPhone Frame */}
                                <div className="absolute inset-0 bg-[#1a1a1a] rounded-[48px] p-[10px] shadow-[0_50px_100px_rgba(0,0,0,0.3)] ring-1 ring-white/10">
                                    <div className="h-full w-full bg-white rounded-[38px] overflow-hidden relative border border-white/5">
                                        {screenshotUrl ? (
                                            <Image
                                                src={screenshotUrl}
                                                alt={title}
                                                fill
                                                className="object-cover object-top scale-[1.02]"
                                                priority
                                                unoptimized
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-neutral-100 flex items-center justify-center text-[10px] font-black uppercase text-black/20 text-center p-8">
                                                Inject Figma Screenshot Here
                                            </div>
                                        )}
                                        {/* Dynamic Island */}
                                        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Bottom Footer Action */}
                        <div className="flex items-center justify-between mt-auto relative z-30">
                            <motion.div
                                variants={{
                                    initial: { opacity: 1, x: 0, scale: 1 },
                                    hover: { opacity: 1, x: 5, scale: 1.05 }
                                }}
                                className="bg-black text-white px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-widest flex items-center gap-3 shadow-2xl border border-white/10"
                            >
                                VIEW CASE STUDY
                                <ArrowRight size={16} />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* External Subtitle Label */}
                <div className="mt-6 flex items-center gap-4">
                    <div className="w-10 h-px bg-white/10" />
                    <p className="text-[11px] font-black uppercase tracking-[0.3em] text-white/30">
                        {tagline}
                    </p>
                </div>
            </Link>
        </motion.div>
    );
};
