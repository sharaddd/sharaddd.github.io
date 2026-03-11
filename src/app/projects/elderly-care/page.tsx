"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Shield, Heart, Activity, Clock, Zap, ChevronRight, Mic, X, Layout, Users, Wind, MapPin, Wallet, Plus, ArrowUpRight, Moon, Calendar, Mail } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export default function ElderlyCarePage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            x: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        },
    };

    return (
        <main className="min-h-screen bg-white text-[#1a1a1a]">
            {/* Ambient glows */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                {/* Ambient Glows */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.05, 0.08, 0.05],
                        x: [0, 20, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#468164]/5 blur-[120px] rounded-full"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.03, 0.06, 0.03],
                        y: [0, -20, 0]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#468164]/5 blur-[120px] rounded-full"
                />
            </div>

            <Navbar />

            {/* ── HERO ── */}
            <section className="pt-20 pb-4 px-6 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left — content */}
                    <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                            <Link href="/" className="inline-flex items-center gap-2 text-[10px] font-black tracking-[-0.01em] opacity-40">
                                <ArrowLeft size={12} /> Back to Work
                            </Link>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-5">
                            {/* Case Study Badge */}
                            <motion.div
                                initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
                                animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="space-y-4"
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border-[#468164]/20 bg-[#468164]/5 border">
                                    <span className="text-[12px] font-black tracking-[0.05em] text-[#468164]">HealthTech Case Study</span>
                                </div>

                                {/* Project Title */}
                                <h1 className="space-y-0 leading-none">
                                    <div className="flex items-baseline gap-0 leading-none">
                                        <span className="text-[42px] md:text-[56px] font-black tracking-[-0.03em] leading-none text-black">Elderly</span>
                                        <span className="text-[42px] md:text-[56px] font-black tracking-[-0.03em] leading-none text-[#468164]">Care</span>
                                    </div>
                                    <div className="flex items-center gap-0 mt-1">
                                        <span
                                            className="text-[32px] md:text-[42px] font-black tracking-[0.05em]"
                                            style={{
                                                color: "#1a1a1a",
                                                borderBottom: "3px solid #468164",
                                                paddingBottom: "1px",
                                                display: "inline-block",
                                                lineHeight: 1.05,
                                            }}
                                        >Compassionate Care for Your Loved Ones</span>
                                    </div>
                                </h1>

                                {/* Subheading */}
                                <p className="text-base leading-relaxed font-medium text-black/70 max-w-lg">
                                    Bridging the gap between caregivers and seniors through an intuitive, inclusive interface designed for high-trust health monitoring and connection.
                                </p>
                            </motion.div>

                            {/* Start Journey Button */}
                            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="pt-2">
                                <Link
                                    href="https://elderly-care-ten.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#468164] text-white px-8 py-4 rounded-full font-black text-sm hover:translate-y-[-2px] hover:shadow-xl transition-all inline-flex items-center gap-2 group"
                                >
                                    Live Demo
                                    <Zap size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>

                            {/* PM Contributions */}
                            <div className="space-y-2 pt-1">
                                <p className="text-[10px] font-black tracking-widest text-black/40">Project Focus</p>
                                <div className="grid grid-cols-2 gap-2">
                                    {[
                                        {
                                            icon: "🛡️",
                                            label: "Inclusive Design",
                                            section: "UX",
                                            title: "Intent-Based Navigation",
                                            desc: "High-contrast, voice-enabled interface with large touch targets designed to eliminate 'app fatigue' for seniors."
                                        },
                                        {
                                            icon: "❤️",
                                            label: "Trust Connection",
                                            section: "PRODUCT",
                                            title: "Vetted Care Ecosystem",
                                            desc: "A closed network of background-checked professionals to eliminate 'stranger danger' and ensure family confidence."
                                        },
                                        {
                                            icon: "📊",
                                            label: "Health Vitals",
                                            section: "DATA",
                                            title: "Peace of Mind Dashboard",
                                            desc: "Converts routines into a real-time health dashboard for adult children without making seniors feel surveilled."
                                        },
                                        {
                                            icon: "⚡",
                                            label: "Emergency Loop",
                                            section: "SAFETY",
                                            title: "Severity-1 Incident Response",
                                            desc: "A foolproof SOS system that instantly routes emergency alerts to families and medical services with zero latency."
                                        },
                                    ].map(item => (
                                        <div key={item.label} className="flex flex-col gap-2 p-3.5 rounded-2xl bg-gray-50 border border-gray-100 group hover:border-[#468164]/30 transition-all shadow-sm h-full">
                                            <div className="flex items-center gap-2">
                                                <span className="text-xl leading-none flex-shrink-0">{item.icon}</span>
                                                <div>
                                                    <p className="text-[10px] font-black text-black/80 leading-none">{item.label}</p>
                                                    <p className="text-[8px] font-black tracking-widest text-[#468164] mt-0.5 uppercase">{item.section}</p>
                                                </div>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-[12px] font-black text-black leading-tight group-hover:text-[#468164] transition-colors">{item.title}</p>
                                                <p className="text-[10px] text-black/50 font-medium leading-normal">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right — Phone Mockup */}
                    <div className="lg:col-span-7 flex justify-center lg:justify-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative w-full max-w-[340px] aspect-[9/19] bg-white rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.1)] border-[12px] border-[#1a1a1a] overflow-hidden flex flex-col"
                        >
                            <Image
                                src="/projects/elderly_care_thumbnail.png"
                                alt="Elderly Care App Interface"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── THE PROBLEM (Slide 1) ── */}
            <section id="journey" className="px-6 py-12 max-w-[1400px] mx-auto border-t border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
                        <div className="space-y-2">
                            <p className="text-[10px] font-black tracking-widest text-[#468164] uppercase">The Problem</p>
                            <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-[0.95]">
                                The Care Gap in an <br /><span className="text-[#468164]">Urbanizing World</span>
                            </h2>
                            <p className="text-sm text-black/60 leading-relaxed font-medium">
                                In modern urban India, evolving family structures leave elders increasingly independent but vulnerable to fragmented health solutions and cognitive overload.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                            {[
                                { t: "Fragmentation", d: "Users juggle multiple apps for essential needs." },
                                { t: "Cognitive Load", d: "Cluttered UIs create high tech-anxiety for seniors." },
                                { t: "Caregiver Paradox", d: "Adult children face constant 'silent anxiety' remotely." },
                                { t: "Safety Gap", d: "Lack of non-intrusive safety nets for independent elders." }
                            ].map((point) => (
                                <div key={point.t} className="p-3 rounded-xl bg-gray-50 border border-gray-100 group">
                                    <p className="text-[12px] font-black text-black group-hover:text-[#468164] transition-colors uppercase tracking-tight">{point.t}</p>
                                    <p className="text-[11px] text-black/50 font-medium leading-tight mt-1">{point.d}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative aspect-video rounded-3xl bg-[#0a0a0a] overflow-hidden shadow-2xl group border border-[#468164]/20"
                    >
                        <div className="absolute inset-0 bg-[#468164]/10 group-hover:bg-[#468164]/5 transition-colors duration-500" />

                        {/* Mock Graph Background */}
                        <div className="absolute bottom-0 left-0 w-full h-[60%] opacity-20 pointer-events-none">
                            <svg viewBox="0 0 400 100" className="w-full h-full">
                                <motion.path
                                    d="M 0 80 Q 50 10, 100 70 T 200 30 T 300 60 T 400 10"
                                    fill="none"
                                    stroke="#468164"
                                    strokeWidth="2"
                                    initial={{ pathLength: 0 }}
                                    whileInView={{ pathLength: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                />
                                <motion.path
                                    d="M 0 100 L 0 80 Q 50 10, 100 70 T 200 30 T 300 60 T 400 10 L 400 100 Z"
                                    fill="url(#gradient)"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 1, duration: 1 }}
                                />
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#468164" stopOpacity="0.5" />
                                        <stop offset="100%" stopColor="#468164" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                            <div className="text-center mb-6 relative z-10 w-full">
                                <p className="text-[#468164] text-[10px] font-black tracking-[0.3em] uppercase mb-1">Target Market Model</p>
                                <h3 className="text-white text-2xl font-black tracking-tighter uppercase whitespace-nowrap">The Market Opportunity</h3>
                            </div>

                            <div className="w-full max-w-[400px] space-y-2 relative z-10">
                                {[
                                    { label: "TAM", val: "$9 BILLION", sub: "156M Seniors (Total Indian Silver Economy)", opacity: "bg-white/5", border: "border-white/10" },
                                    { label: "SAM", val: "$2.5 BILLION", sub: "35M Seniors (Urban & Digitally Active)", opacity: "bg-[#468164]/10", border: "border-[#468164]/20" },
                                    { label: "SOM", val: "$75 MILLION", sub: "1M Seniors (Target Tier-1 Metros)", opacity: "bg-[#468164]", border: "border-white/20", text: "text-white" }
                                ].map((item, idx) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                                        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                        viewport={{ once: true }}
                                        transition={{
                                            delay: 1 + (idx * 0.15),
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 20
                                        }}
                                        whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.1)" }}
                                        className={`flex items-center gap-4 p-3 rounded-xl border ${item.border} ${item.opacity} transition-all cursor-default overflow-hidden group/item`}
                                    >
                                        <div className={`w-12 h-8 rounded-lg ${item.label === 'SOM' ? 'bg-white/20' : 'bg-white/5'} flex items-center justify-center border border-white/10 group-hover/item:bg-[#468164]/20 transition-colors`}>
                                            <span className="text-[10px] font-black text-white">{item.label}</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className={`text-sm font-black tracking-tight ${item.label === 'SOM' ? 'text-white' : 'text-[#468164]'}`}>{item.val}</p>
                                            <p className={`text-[9px] font-medium leading-none ${item.label === 'SOM' ? 'text-white/70' : 'text-white/40'}`}>{item.sub}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── THE VISION (Slide 2) ── */}
            <section className="px-6 py-12 bg-[#468164] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
                    <div className="lg:col-span-12 space-y-8">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl">
                            <p className="text-[10px] font-black tracking-widest text-white/60 uppercase mb-2">The Vision</p>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[0.9]">
                                Combining <span className="text-white/80 italic">Empathy</span> with Drive.
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Part A: The Heart */}
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[9px] font-black uppercase tracking-widest border border-white/5">A. Inspiration</div>
                                <p className="text-lg text-white font-medium leading-relaxed">I built Elderly Care after my mother's sudden hand surgery highlighted the "micro-stressors" of coordinating care while balancing a career.</p>
                                <div className="p-4 rounded-xl bg-black/10 border-l-4 border-white/40 italic text-white/90 text-sm font-medium">"Care is about the 100 small things in between big emergencies."</div>
                            </motion.div>

                            {/* Part B: The Brain */}
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="space-y-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[9px] font-black uppercase tracking-widest border border-white/5">B. Strategy</div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-1.5">
                                        <p className="text-[10px] font-black text-white/70 uppercase tracking-tighter">Market Opportunity</p>
                                        <p className="text-sm md:text-base text-white font-medium leading-snug">The "golden billion" (elderly) are ignored in tech obsessed with GenZ.</p>
                                    </div>
                                    <div className="space-y-1.5">
                                        <p className="text-[10px] font-black text-white/70 uppercase tracking-tighter">Solution-Market Fit</p>
                                        <p className="text-sm md:text-base text-white font-medium leading-snug">Extreme Simplicity + High Reliability = Family Essential.</p>
                                    </div>
                                </div>
                                <p className="text-base font-black text-white italic pt-4 border-t border-white/10">Goal: Empathy-driven tech empowers instead of alienates.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── USER PERSONAS (Slide 2.5) ── */}
            <section className="px-6 py-12 bg-white max-w-[1400px] mx-auto border-t border-gray-100">
                <div className="space-y-8">
                    <div className="space-y-2 text-center">
                        <p className="text-[10px] font-black tracking-widest text-[#468164] uppercase">Empathy Mapping</p>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tighter">User Persona <span className="text-[#468164]">Insights</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                            { role: "The Veteran", sub: "Retired Army", pain: "Security & Verification skepticism." },
                            { role: "The Matriarch", sub: "School Principal", pain: "Physical friction of daily chores." },
                            { role: "The Banker", sub: "Retired Manager", pain: "Information/UI decision fatigue." },
                            { role: "The Artisan", sub: "Boutique Owner", pain: "Micro-service care gaps." }
                        ].map((persona, i) => (
                            <motion.div
                                key={persona.role}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-5 rounded-2xl bg-gray-50 border border-transparent hover:border-[#468164]/20 transition-all text-center"
                            >
                                <h3 className="text-sm font-black text-black group-hover:text-[#468164] uppercase tracking-tight">{persona.role}</h3>
                                <p className="text-[9px] font-black text-[#468164]/40 uppercase tracking-widest mt-0.5">{persona.sub}</p>
                                <p className="text-[11px] text-black/60 font-medium mt-3 leading-snug">{persona.pain}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── RESEARCH & PRIORITIZATION (Slide 2.6 - 2.7) ── */}
            <section className="px-6 py-12 bg-gray-50 max-w-[1400px] mx-auto border-t border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
                    <div className="lg:col-span-4 space-y-2">
                        <p className="text-[10px] font-black tracking-widest text-[#468164] uppercase">Research Synthesis</p>
                        <h2 className="text-3xl font-black tracking-tighter leading-none">Core <span className="text-[#468164]">Pain Points</span></h2>
                    </div>
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                            { icon: "🛡️", t: "Trust & Safety", d: "Seniors feel deeply vulnerable letting unverified providers in." },
                            { icon: "⚠️", t: "Injury Risk", d: "Everyday tasks are the single biggest injury triggers." },
                            { icon: "📉", t: "UI Anxiety", d: "Cluttered UIs with tiny fonts confuse senior users." },
                            { icon: "⌛", t: "Fragmentation", d: "Service agencies force long, inflexible care slots." }
                        ].map((point, i) => (
                            <div key={point.t} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-gray-100 group">
                                <span className="text-xl shrink-0 group-hover:scale-110 transition-transform">{point.icon}</span>
                                <div>
                                    <p className="text-sm font-black text-black leading-tight">{point.t}</p>
                                    <p className="text-[11px] text-black/40 font-medium leading-tight mt-0.5">{point.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-6 pt-12 border-t border-gray-200 overflow-x-auto">
                    <div className="space-y-2">
                        <p className="text-[10px] font-black tracking-widest text-[#468164] uppercase">Framework</p>
                        <h2 className="text-3xl font-black tracking-tighter leading-none">Strategic <span className="text-[#468164]">Prioritization</span></h2>
                    </div>

                    <div className="w-full border-t border-gray-200">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-gray-100">
                                    <th className="py-6 text-[10px] font-black uppercase tracking-widest text-black/40">Problem Area</th>
                                    <th className="py-6 text-[10px] font-black uppercase tracking-widest text-black/40">Primary Persona</th>
                                    <th className="py-6 text-[10px] font-black uppercase tracking-widest text-black/40 text-center">Impact (A)</th>
                                    <th className="py-6 text-[10px] font-black uppercase tracking-widest text-black/40 text-center">Reach (B)</th>
                                    <th className="py-6 text-[10px] font-black uppercase tracking-widest text-black/40 text-center">Overall Score</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {[
                                    {
                                        area: "1. Emergency/SOS Response",
                                        sub: "(Critical safety link)",
                                        persona: "Veteran / Artisan",
                                        impact: "3 (High)",
                                        reach: "3 (High)",
                                        score: 81,
                                        isPriority: true
                                    },
                                    {
                                        area: "2. Trusted Service Verification",
                                        sub: "(Security)",
                                        persona: "Veteran",
                                        impact: "3 (High)",
                                        reach: "2 (Med)",
                                        score: 54,
                                        isPriority: false
                                    },
                                    {
                                        area: "3. Medication Reminders",
                                        sub: "(Health adherence)",
                                        persona: "Artisan / Banker",
                                        impact: "2 (Med)",
                                        reach: "3 (High)",
                                        score: 36,
                                        isPriority: false
                                    },
                                    {
                                        area: "4. Micro-Task Assistance",
                                        sub: "(Heavy lifting/chores)",
                                        persona: "Principal",
                                        impact: "2 (Med)",
                                        reach: "2 (Med)",
                                        score: 18,
                                        isPriority: false
                                    },
                                    {
                                        area: "5. Social Isolation/Community",
                                        sub: "(Loneliness)",
                                        persona: "Principal",
                                        impact: "1 (Low)",
                                        reach: "3 (High)",
                                        score: 9,
                                        isPriority: false
                                    }
                                ].map((row) => (
                                    <motion.tr
                                        key={row.area}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className={`group hover:bg-gray-50/50 transition-colors ${row.isPriority ? 'bg-[#468164]/5' : ''}`}
                                    >
                                        <td className="py-6 pr-8">
                                            <p className="text-base font-black text-black leading-tight">{row.area}</p>
                                            <p className="text-xs text-black/40 font-medium mt-1 uppercase tracking-widest">{row.sub}</p>
                                        </td>
                                        <td className="py-6 pr-8">
                                            <span className="px-3 py-1 rounded-full bg-gray-100 text-black/60 text-[10px] font-black uppercase tracking-widest">
                                                {row.persona}
                                            </span>
                                        </td>
                                        <td className="py-6 text-center">
                                            <span className={`text-sm font-bold ${row.impact.includes('3') ? 'text-emerald-600' : row.impact.includes('2') ? 'text-amber-600' : 'text-gray-400'}`}>
                                                {row.impact}
                                            </span>
                                        </td>
                                        <td className="py-6 text-center">
                                            <span className={`text-sm font-bold ${row.reach.includes('3') ? 'text-emerald-600' : row.reach.includes('2') ? 'text-amber-600' : 'text-gray-400'}`}>
                                                {row.reach}
                                            </span>
                                        </td>
                                        <td className="py-6 text-center">
                                            <div className="flex flex-col items-center justify-center">
                                                <span className={`text-2xl font-black ${row.isPriority ? 'text-[#468164] scale-110' : 'text-black/20'}`}>
                                                    {row.score}
                                                </span>
                                                {row.isPriority && (
                                                    <span className="text-[8px] font-black uppercase tracking-tighter text-[#468164]/60 mt-1">MVP Priority</span>
                                                )}
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── PRODUCT PILLARS (Slide 3.0) ── */}
            <section className="px-6 py-12 bg-white">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        { t: "Adaptive Vitals", d: "High-contrast viz for seniors + real-time sync for caregivers.", icon: "📊" },
                        { t: "The Safety Loop", d: "Predictive triggers based on activity deviations.", icon: "🛡️" },
                        { t: "Care Circles", d: "Medication management that reduces cognitive load.", icon: "🔁" }
                    ].map((feature, i) => (
                        <div key={feature.t} className="p-6 rounded-2xl border border-gray-100 bg-gray-50/50 group hover:border-[#468164]/30 transition-all">
                            <span className="text-xl mb-3 block group-hover:scale-110 transition-transform">{feature.icon}</span>
                            <h3 className="text-base font-black text-black group-hover:text-[#468164] transition-colors mb-1 uppercase tracking-tight">{feature.t}</h3>
                            <p className="text-[11px] text-black/50 font-medium leading-snug">{feature.d}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── APP INTERFACE (Slide 3.1) ── */}
            <section className="px-6 py-12 max-w-[1400px] mx-auto border-t border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-12 mb-4">
                        <div className="space-y-2">
                            <p className="text-[10px] font-black tracking-widest text-[#468164] uppercase font-mono">MVP Goal: Low Friction</p>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-none text-black">The Frictionless <br /><span className="text-[#468164] leading-none">Onboarding.</span></h2>
                        </div>
                    </div>

                    <div className="lg:col-span-5 space-y-6">
                        <div className="p-6 rounded-2xl bg-[#468164]/5 border border-[#468164]/20">
                            <p className="text-sm text-[#468164] font-bold leading-relaxed">
                                I designed the signup to require <span className="font-black">only a phone number</span>. No passwords to remember. The system auto-fills the OTP, making the journey under 10 seconds.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { t: "Zero-Password Logic", d: "No memory burden for users with cognitive fatigue." },
                                { t: "Native OTP Filling", d: "Eliminates the 'Switch App' friction for reading codes." },
                                { t: "Large Targets", d: "Inputs designed for 44px minimum touch area." }
                            ].map(item => (
                                <div key={item.t} className="flex gap-4 p-4 rounded-xl bg-gray-50/50 border border-gray-100">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#468164] mt-2 shrink-0" />
                                    <div>
                                        <p className="text-base font-black tracking-tight">{item.t}</p>
                                        <p className="text-xs text-black/50 font-medium">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>



                    <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#468164]/5 blur-[120px] -z-10 rounded-full" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative w-full max-w-[340px] aspect-[9/19.5] rounded-[52px] border-[14px] border-black shadow-[0_50px_100px_-15px_rgba(0,0,0,0.3)] overflow-hidden"
                        >
                            <Image src="/projects/elderly_care_signup.png" fill className="object-cover" alt="Onboarding flow" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── APP INTERFACE: CORE HUB (Annotated) ── */}
            <section className="px-6 py-20 bg-gray-50/70 border-y border-gray-100 overflow-visible">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-12 mb-8">
                        <div className="space-y-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black text-white text-[10px] font-black uppercase tracking-widest">
                                Phase 02: Healthcare Hub
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-tight text-black">The Holistic <span className="text-[#468164]">Care Hub.</span></h2>
                            <p className="text-sm text-black/40 font-medium">A single source of truth for vitals, bookings, and emergency support.</p>
                        </div>
                    </div>

                    <div className="lg:col-span-4 relative flex justify-center lg:justify-start">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#468164]/5 blur-[120px] -z-10 rounded-full" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative w-full max-w-[280px] aspect-[9/19.5] rounded-[52px] border-[12px] border-black shadow-[0_50px_100px_-15px_rgba(0,0,0,0.3)] bg-white overflow-visible"
                        >
                            <div className="relative w-full h-full rounded-[40px] overflow-hidden">
                                <Image src="/projects/elderly_care_dashboard.png" fill className="object-cover" alt="Dashboard" />
                            </div>

                            {/* ANNOTATION PINS */}
                            {[
                                { t: "My Account", d: "Unified family settings & billing", top: "8%", left: "94.5%", side: "right", isProfile: true },
                                { t: "Voice AI", d: "Conversational interface for non-readers", top: "8%", left: "75%", side: "right", isVoice: true },
                                { t: "Family Wallet", d: "Shared funds for remote care admin", top: "18%", left: "85%", side: "right", isWallet: true },
                                { t: "Priority Care", d: "High-contrast SOS medication loop", top: "54%", left: "85%", side: "right", isMedication: true },
                                { t: "Instant SOS", d: "Persistantly visible emergency anchor", top: "92%", left: "85%", side: "right" },
                            ].map((pin, i) => (
                                <motion.div
                                    key={pin.t}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + (i * 0.1) }}
                                    className="absolute z-30 group"
                                    style={{ top: pin.top, left: pin.left }}
                                >
                                    <div className="relative">
                                        <div className="absolute inset-0 w-4 h-4 rounded-full bg-[#468164]/40 animate-ping -translate-x-1.5 -translate-y-1.5 pointer-events-none" />
                                        <div className="w-4 h-4 rounded-full bg-[#468164] border-2 border-white shadow-lg cursor-pointer group-hover:scale-125 transition-transform relative z-10" />

                                        <div className="absolute top-0 w-[240px] pointer-events-none group-hover:pointer-events-auto opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100 z-50 left-8 -translate-y-12">
                                            <div className="bg-white rounded-3xl border border-gray-100 shadow-2xl overflow-hidden">
                                                <div className="px-5 py-3 bg-gray-50 flex items-center gap-2 border-b border-gray-100">
                                                    <div className="w-5 h-5 rounded-full bg-[#468164] flex items-center justify-center text-white">
                                                        {pin.isVoice ? <Mic size={10} /> : (pin.isProfile ? <Users size={10} /> : <Activity size={10} />)}
                                                    </div>
                                                    <p className="text-[10px] font-black uppercase tracking-widest">{pin.t}</p>
                                                </div>
                                                <div className="p-4">
                                                    <p className="text-xs font-medium text-black/60 leading-relaxed">{pin.d}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="lg:col-span-8 space-y-4">
                        {[
                            {
                                t: "Live Service Visibility",
                                d: "Real-time status updates for ongoing home visits (like physiotherapy) provide immediate context and peace of mind without needing to dig through menus."
                            },
                            {
                                t: "At-a-Glance Health Tracking",
                                d: "A unified dashboard aggregates daily medication schedules and real-time vitals into simple, high-contrast cards, ensuring adherence is visually clear and rewarding."
                            },
                            {
                                t: "Zero-Friction Support",
                                d: "Direct access to a dedicated 'Call Care Manager' and a persistent, bottom-anchored SOS button ensures human help is always just one tap away."
                            }
                        ].map((point, i) => (
                            <motion.div
                                key={point.t}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-6 rounded-3xl bg-white border border-gray-100 shadow-sm group hover:border-[#468164]/20 transition-colors"
                            >
                                <p className="text-sm font-black tracking-tight group-hover:text-[#468164] transition-colors">{point.t}</p>
                                <p className="text-xs text-black/50 font-medium leading-relaxed mt-1">{point.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── COMMERCIAL STRATEGY ── */}
            <section className="px-6 py-12 bg-white border-t border-gray-100">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4 space-y-6">
                        <div className="space-y-2">
                            <p className="text-[10px] font-black tracking-widest text-emerald-600 uppercase">Strategy</p>
                            <h2 className="text-3xl font-black tracking-tighter text-black leading-none">Commercial <span className="text-emerald-600">Framework.</span></h2>
                        </div>
                        <div className="p-6 rounded-2xl bg-black text-white space-y-2">
                            <p className="text-[#468164]/80 text-[9px] font-black uppercase tracking-[0.2em]">The Core Insight</p>
                            <h3 className="text-base font-black leading-tight italic">"Trust is the currency. We sell reliability, not just software."</h3>
                        </div>
                    </div>

                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { t: "B2C Subscription", label: "Revenue", d: "Monthly 'Peace of Mind' tier for monitoring.", icon: <Shield size={18} /> },
                            { t: "Marketplace Fee", label: "Revenue", d: "10-15% commission from verified vendors.", icon: <Users size={18} /> },
                            { t: "Hyper-Local Launch", label: "GTM", d: "Targeting high-density hubs (Delhi) first.", icon: <MapPin size={18} /> },
                            { t: "Buyer Targeting", label: "GTM", d: "Marketing geared toward 'Worried Professionals'.", icon: <Zap size={18} /> }
                        ].map((item, i) => (
                            <div key={item.t} className="p-4 rounded-xl bg-gray-50 border border-gray-100 flex items-center gap-4 group hover:border-emerald-200 transition-all">
                                <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-emerald-600 shrink-0 group-hover:scale-110 transition-transform">{item.icon}</div>
                                <div>
                                    <div className="flex items-center gap-2"><p className="text-[8px] font-black uppercase tracking-widest text-black/20">{item.label}</p><p className="text-xs font-black text-black group-hover:text-emerald-600 transition-colors uppercase tracking-tight">{item.t}</p></div>
                                    <p className="text-[11px] text-black/50 font-medium leading-tight mt-0.5">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── MEASURING SUCCESS ── */}
            <section className="px-6 py-12 bg-gray-50/50 border-t border-gray-100">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-4 space-y-6">
                        <div className="space-y-2">
                            <p className="text-[10px] font-black tracking-widest text-[#468164] uppercase">Metrics</p>
                            <h2 className="text-3xl font-black tracking-tighter text-black leading-none">Impact <span className="text-[#468164]">Assessment.</span></h2>
                        </div>
                        <div className="p-6 rounded-2xl bg-[#468164]/5 border border-[#468164]/10">
                            <p className="text-xs font-bold text-[#468164] leading-relaxed italic">
                                "Success is measured when a caregiver gets a full night's sleep knowing their parent is safe."
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-8 overflow-hidden rounded-3xl border border-gray-100 bg-white">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50/50 border-b border-gray-100">
                                    <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-black/40">Type</th>
                                    <th className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-black/40">Metric</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50">
                                {[
                                    { type: "North Star", m: "Successful Care Actions completed ↑" },
                                    { type: "Adoption", m: "% Users with completed emergency profiles ↑" },
                                    { type: "Engagement", m: "% Med-reminders acknowledged daily ↑" },
                                    { type: "Retention", m: "% Monthly subscription renewals ↑" },
                                    { type: "Guardrail", m: "# of False SOS Alarms triggered ↓" }
                                ].map((row, i) => (
                                    <tr key={i} className="hover:bg-[#468164]/5 transition-colors">
                                        <td className="py-4 px-6 text-[10px] font-black uppercase tracking-widest text-[#468164]/60">{row.type}</td>
                                        <td className="py-4 px-6 text-xs font-bold text-black">{row.m}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── FUTURE & FOOTER ── */}
            <footer className="px-6 py-12 bg-black text-white relative">
                <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-4">
                        <p className="text-[10px] font-black tracking-widest text-[#468164] uppercase">Vision V2</p>
                        <h2 className="text-3xl font-black tracking-tighter leading-none">Proactive <span className="text-[#468164]">Wellness.</span></h2>
                        <p className="text-sm text-white/50 font-medium max-w-sm">Moving from reactive loops to AI-driven health predictions based on passive sensor data.</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-[#468164] text-center space-y-3">
                        <p className="text-white/40 text-[10px] font-black uppercase tracking-widest leading-none">"Designing for our future selves"</p>
                        <p className="text-2xl font-black text-white">Sharad Tiwari — Aspiring PM</p>
                        <p className="text-[9px] font-black tracking-widest text-white/40 uppercase">Elderly Care — Strategic Case Study</p>
                    </div>
                </div>
            </footer>
        </main>
    );
}
