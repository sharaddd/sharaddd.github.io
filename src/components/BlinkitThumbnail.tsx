"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface BlinkitThumbnailProps {
    id: string;
}

export const BlinkitThumbnail = ({ id }: BlinkitThumbnailProps) => {
    return (
        <motion.div
            initial="initial"
            whileHover="hover"
            className="group cursor-pointer relative"
        >
            <Link href={`/projects/${id}`} className="block">
                {/* Main Card Container */}
                <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden bg-[#F8E000] shadow-2xl transition-all duration-500 group-hover:shadow-[0_40px_100px_rgba(248,224,0,0.2)]">

                    {/* Subtle Watermark Texture */}
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none overflow-hidden">
                        {[...Array(12)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute text-7xl font-black rotate-[-25deg] uppercase tracking-tighter text-black whitespace-nowrap"
                                style={{
                                    top: `${i * 15}%`,
                                    left: `${(i % 2) * -20}%`,
                                    opacity: 0.5
                                }}
                            >
                                BLINKIT LAUNDRY BLINKIT LAUNDRY
                            </div>
                        ))}
                    </div>

                    {/* Content Layer */}
                    <div className="relative h-full p-8 flex flex-col justify-between z-10">
                        {/* Header Section */}
                        <div className="space-y-3 pr-12">
                            <motion.h3
                                variants={{
                                    initial: { y: 0 },
                                    hover: { y: -2 }
                                }}
                                className="text-3xl font-black text-[#1a1a1a] tracking-tighter leading-none"
                            >
                                Laundry in<br />Gurgaon
                            </motion.h3>
                            <p className="text-sm font-bold text-black/60 leading-tight max-w-[80%]">
                                Revamping Doorstep Fabric Care: Trust & Efficiency for a $2.7B Market.
                            </p>
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
                                        <Image
                                            src="/blinkit_home.png"
                                            alt="Blinkit Laundry UI"
                                            fill
                                            className="object-cover object-right-top scale-[1.02] origin-top-right"
                                            priority
                                            unoptimized
                                        />
                                        {/* Dynamic Island Placeholder */}
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
                                className="bg-black text-[#F8E000] px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-widest flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] border border-white/5"
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
                        Blinkit • Product Strategy • New Pilot
                    </p>
                </div>
            </Link>
        </motion.div>
    );
};
