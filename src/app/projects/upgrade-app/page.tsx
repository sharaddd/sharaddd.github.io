"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Search, Map, Zap, BookOpen, Calendar, ChevronRight, Rocket } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export default function UpgradeAppPage() {
    return (
        <main className="min-h-screen bg-white text-[#1a1a1a]">
            {/* Ambient glows */}
            <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#E92E2E]/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-[#E92E2E]/5 blur-[100px] rounded-full" />
            </div>

            <Navbar />

            {/* ── HERO ── */}
            <section className="pt-40 pb-10 px-6 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left — balanced to phone height */}
                    <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                        <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>

                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-5">
                            {/* Case Study Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E92E2E]/30 bg-[#E92E2E]/8">
                                <span className="text-[13px] font-black tracking-[0.05em] text-[#E92E2E]">0 → 1 Product Case Study</span>
                            </div>

                            {/* upGrad Logo */}
                            <h1 className="space-y-0 leading-none">
                                <div className="flex items-baseline gap-0 leading-none">
                                    <span className="text-[52px] md:text-[68px] font-black tracking-[-0.03em] leading-none" style={{ color: "#E92E2E" }}>up</span>
                                    <span className="text-[52px] md:text-[68px] font-black tracking-[-0.03em] leading-none" style={{ color: "#E92E2E" }}>Grad</span>
                                </div>
                                <div className="flex items-center gap-0 mt-2">
                                    <span
                                        className="text-[38px] md:text-[50px] font-black tracking-[0.05em]"
                                        style={{
                                            color: "#1a1a1a",
                                            WebkitTextStroke: "0px",
                                            borderBottom: "3px solid #E92E2E",
                                            paddingBottom: "2px",
                                            display: "inline-block",
                                            lineHeight: 1.05,
                                        }}
                                    >Nano Skills</span>
                                </div>
                            </h1>

                            {/* Subheading */}
                            <p className="text-base leading-relaxed font-medium text-black/70 max-w-lg">
                                Identified the product opportunity and defined the go-to-market strategy for a micro-learning feature — enabling upGrad to shift from Sales-Led to Product-Led Growth.
                            </p>

                            {/* PM Contributions */}
                            <div className="space-y-3 pt-1">
                                <p className="text-[11px] font-black tracking-widest text-black/40">My PM Contributions</p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { icon: "🎯", label: "Defined product vision & success metrics", section: "KPIs" },
                                        { icon: "🗺️", label: "Built 3-phase go-to-market strategy", section: "GTM" },
                                        { icon: "🔁", label: "Engineered viral acquisition loop", section: "Strategy" },
                                        { icon: "📊", label: "Modelled unit economics & pipeline value", section: "Economics" },
                                    ].map(item => (
                                        <div key={item.label} className="flex items-start gap-3 px-4 py-3.5 rounded-xl bg-gray-50 border border-gray-100">
                                            <span className="text-xl leading-none mt-0.5 flex-shrink-0">{item.icon}</span>
                                            <div>
                                                <p className="text-sm font-bold text-black/80 leading-snug">{item.label}</p>
                                                <p className="text-[10px] font-black tracking-widest text-[#E92E2E] mt-1">{item.section}</p>
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
                                src="/projects/upgrad_full_hero.png"
                                alt="upGrad App Interface"
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── PROBLEM + STRATEGY (full width, 2-col) ── */}
            <section className="px-6 pb-10 max-w-[1400px] mx-auto border-t border-gray-100">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">

                    {/* Problem Statement */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4">
                        <div className="space-y-1">
                            <p className="text-[9px] font-bold tracking-[0.2em] opacity-60">Problem Statement</p>
                            <h2 className="text-2xl font-black tracking-tighter">The Gap</h2>
                        </div>
                        <p className="text-base leading-relaxed text-black/80">
                            The ed-tech landscape suffers from a <span className="text-[#E92E2E] font-bold">massive gap</span>: mid-career professionals need bite-sized, immediate upskilling but upGrad only sells 6-month, ₹2 lakh marathons — creating high user anxiety and an unsustainable CAC.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-[#E92E2E]/10 flex items-center justify-center"><Zap size={12} className="text-[#E92E2E]" /></div>
                                    <p className="text-[10px] font-black tracking-widest">User Perspective</p>
                                </div>
                                <p className="text-sm text-black/75 leading-relaxed">"AI Anxiety" + FOMO. No time or budget for a degree to learn a tool released last month.</p>
                            </div>
                            <div className="space-y-1.5">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-[#E92E2E]/10 flex items-center justify-center"><Rocket size={12} className="text-[#E92E2E]" /></div>
                                    <p className="text-[10px] font-black tracking-widest">Business Perspective</p>
                                </div>
                                <p className="text-sm text-black/75 leading-relaxed">Weak top-of-funnel. High CAC. Aggressive outbound sales creates spam perception.</p>
                            </div>
                        </div>

                        {/* The Shift Visual */}
                        <div className="pt-6">
                            <div className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden">
                                <div className="px-5 py-3 border-b border-gray-100 bg-[#E92E2E]/[0.03] flex items-center justify-between">
                                    <p className="text-[10px] font-black tracking-widest text-[#E92E2E]">The Strategic Shift</p>
                                    <div className="flex gap-1">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#E92E2E]/20" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#E92E2E]/40" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#E92E2E]" />
                                    </div>
                                </div>
                                <div className="p-5 grid grid-cols-2 gap-8 relative">
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-12 bg-gray-100" />

                                    <div className="space-y-3">
                                        <div className="space-y-1">
                                            <p className="text-[9px] font-black tracking-tighter text-black/40">Legacy Model</p>
                                            <p className="text-sm font-black text-black/90 tracking-tight leading-none">High Friction</p>
                                        </div>
                                        <ul className="space-y-2">
                                            {['6-Month Commits', '₹2 Lakh Barrier', 'Sales-Heavy Enrollment'].map(item => (
                                                <li key={item} className="flex items-center gap-2 text-[11px] font-medium text-black/50">
                                                    <div className="w-1 h-1 rounded-full bg-black/20" /> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="space-y-1">
                                            <p className="text-[9px] font-black tracking-tighter text-[#E92E2E]/60">Nano Skills</p>
                                            <p className="text-sm font-black text-[#E92E2E] tracking-tight leading-none">High Velocity</p>
                                        </div>
                                        <ul className="space-y-2">
                                            {['30-Min Sprints', 'Zero-Cost Entry', 'Product-Led Growth'].map(item => (
                                                <li key={item} className="flex items-center gap-2 text-[11px] font-bold text-[#E92E2E]">
                                                    <div className="w-1 h-1 rounded-full bg-[#E92E2E]/40" /> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Why Build It */}
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="space-y-4">
                        <div className="space-y-1">
                            <p className="text-[9px] font-bold tracking-[0.2em] opacity-60">Strategy</p>
                            <h2 className="text-2xl font-black tracking-tighter">Why build it?</h2>
                            <p className="text-sm text-black/70">Pivot from Sales-Led Growth → <span className="text-[#E92E2E] font-bold">Product-Led Growth</span> via 3 levers:</p>
                        </div>
                        {[
                            { key: "A", color: "#E92E2E", title: "Borrow Audiences", body: "Partner with niche creators. Host their sprint free. Acquire their pre-qualified audience at near-zero cost vs. Google/Meta ads.", stat: "~15% ↓ blended CAC", statDetail: "Free micro-learning as top-of-funnel lead magnet." },
                            { key: "B", color: "#E92E2E", title: "Engineer Virality", body: "A Nano-Skill Badge triggers professional vanity. Users share to LinkedIn → free high-trust impressions → compounding organic traffic.", stat: "10–12% ↑ WAU", statDetail: "Bite-sized sprints create a higher-frequency habit loop." },
                            { key: "C", color: "#E92E2E", title: "Micro-Commitments", body: "15 min in guest mode = the 'first date'. Serve the ₹5,000 upsell at peak pride — when intent is highest.", stat: "2–3% → high-ticket MQLs", statDetail: "Completions signal proven intent for premium upsell." },
                        ].map((lever) => (
                            <div key={lever.key} className="grid grid-cols-12 gap-4 items-center py-5 border-b border-gray-100 last:border-0">
                                <span className="col-span-1 text-[11px] font-black opacity-20 pt-1">{lever.key}.</span>
                                <div className="col-span-6 space-y-1">
                                    <p className="text-base font-black" style={{ color: lever.color }}>{lever.title}</p>
                                    <p className="text-sm text-black/70 leading-relaxed">{lever.body}</p>
                                </div>
                                <div className="col-span-5 rounded-xl border px-5 py-4 space-y-2" style={{ borderColor: `${lever.color}30`, backgroundColor: `${lever.color}08` }}>
                                    <p className="text-xl font-black leading-tight" style={{ color: lever.color }}>📊 {lever.stat}</p>
                                    <p className="text-sm text-black/55 leading-snug font-medium">{lever.statDetail}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </section>
            {/* ── GTM STRATEGY ── */}
            <section className="bg-white border-t border-gray-100 text-[#1a1a1a]">
                <div className="max-w-[1400px] mx-auto px-6 py-10">
                    <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-6">

                        {/* Header */}
                        <div className="space-y-3">
                            <div className="space-y-1">
                                <p className="text-[9px] font-bold tracking-[0.2em] opacity-60">GTM Strategy</p>
                                <h2 className="text-2xl font-black tracking-tighter">Go-to-market plan</h2>
                            </div>
                            {/* Objective — sits below title */}
                            <div className="max-w-2xl px-4 py-2.5 rounded-xl bg-gray-200/50 border border-gray-300 text-sm text-black/70 leading-relaxed">
                                <span className="text-black font-bold">Objective: </span>Drive immediate awareness and rapid adoption among existing upGrad users, while using Nano Skills as an acquisition funnel for busy mid-career professionals.
                            </div>
                        </div>

                        {/* 3-Phase Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                {
                                    phase: "Phase 1",
                                    timeline: "Weeks 1–2",
                                    title: "Pre-Launch & Teaser",
                                    color: "#E92E2E",
                                    bullets: [
                                        { label: "Closed Beta", body: "Roll out to top-percentile active users. Gather baseline VCR data and refine UI via click heatmaps." },
                                        { label: "In-App Teaser", body: "\"Got 30 minutes? Something new is coming.\" — Low-friction dashboard banners to build anticipation." },
                                    ],
                                },
                                {
                                    phase: "Phase 2",
                                    timeline: "Weeks 3–6",
                                    title: "Launch & Activation",
                                    color: "#E92E2E",
                                    bullets: [
                                        { label: "Re-engagement", body: "\"Don't have time for a full program? Master trending AI tools in 30 minutes.\" — Email + push to dormant users." },
                                        { label: "Performance Mktg", body: "LinkedIn & YouTube ads targeting mid-level tech and business professionals. Creative: skill sprints for commutes." },
                                        { label: "B2B", body: "Pitch to corporate partners as a lightweight upskilling tool for workforces — no billable hours sacrificed." },
                                    ],
                                },
                                {
                                    phase: "Phase 2", // Wait, Phase 3...
                                    timeline: "Ongoing",
                                    title: "Growth Loops",
                                    color: "#E92E2E",
                                    bullets: [
                                        { label: "\"Brag\" Loop", body: "One-click LinkedIn share on completion. Auto-formatted post: \"I just leveled up my Prompt Engineering skills in 30 minutes with upGrad.\"" },
                                        { label: "Cross-Sell", body: "3 Nano Skills on Data Analytics → auto-trigger a personalised upGrad Data Science program recommendation." },
                                        { label: "Data Iteration", body: "Monitor drop-off at the 10-min and 20-min marks to inform content team production guidelines." },
                                    ],
                                },
                            ].map((p, idx) => (
                                <div key={p.phase + idx} className="rounded-xl bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                                    {/* Phase header */}
                                    <div className="px-5 py-3 flex items-center justify-between border-b border-gray-100" style={{ backgroundColor: `${p.color}08` }}>
                                        <div>
                                            <p className="text-[9px] font-black tracking-widest text-black/30">{p.phase === "Phase 2" && idx === 2 ? "Phase 3" : p.phase}</p>
                                            <p className="text-sm font-black">{p.title}</p>
                                        </div>
                                        <span className="text-[9px] font-bold px-2 py-1 rounded-full" style={{ backgroundColor: `${p.color}15`, color: p.color }}>{p.timeline}</span>
                                    </div>
                                    {/* Bullets */}
                                    <div className="px-5 py-4 space-y-3.5">
                                        {p.bullets.map(b => (
                                            <div key={b.label} className="space-y-0.5">
                                                <p className="text-xs font-black text-[#E92E2E]">→ {b.label}</p>
                                                <p className="text-xs text-black/60 leading-relaxed font-medium">{b.body}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                    </motion.div>
                </div>
            </section>

            {/* ── VALUE EXCHANGE ── */}
            <section className="px-6 py-10 max-w-[1400px] mx-auto border-t border-gray-100">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-6">
                    <div className="space-y-1">
                        <p className="text-[9px] font-bold tracking-[0.2em] opacity-60">Value Exchange</p>
                        <h2 className="text-2xl font-black tracking-tighter">Who wins & how</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { label: "Users", bg: "bg-white text-[#1a1a1a]", accent: "text-black/75", points: ["Frictionless 15-min sprint (no signup)", "Verifiable LinkedIn badge on completion", "Instant skill signal to peers & recruiters"] },
                            { label: "Creators", bg: "bg-white text-[#1a1a1a]", accent: "text-black/75", points: ["Co-branded credibility with upGrad", "Deeper audience engagement", "Revenue share tied to completions"] },
                            { label: "upGrad", bg: "bg-[#E92E2E] text-white", accent: "text-white/90", points: ["Zero-CAC user acquisition via creator audiences", "Viral loop: each badge share = free impressions", "Warm leads for the ₹50k+ program upsell"] },
                        ].map((card) => (
                            <div key={card.label} className={`${card.bg} rounded-xl p-6 space-y-4`}>
                                <p className="text-sm font-black tracking-widest">{card.label}</p>
                                <ul className="space-y-2">
                                    {card.points.map(p => (
                                        <li key={p} className={`text-sm ${card.accent} font-medium flex gap-2`}>
                                            <span className="mt-1 flex-shrink-0">→</span>{p}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>
            {/* ── PROJECTED UNIT ECONOMICS ── */}
            <section className="bg-white border-t border-gray-100 text-[#1a1a1a]">
                <div className="max-w-[1400px] mx-auto px-6 py-10">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6"
                    >
                        {/* Header */}
                        <div className="space-y-1">
                            <p className="text-[9px] font-bold tracking-[0.2em] opacity-60">Economics</p>
                            <h2 className="text-2xl font-black tracking-tighter">Projected unit economics</h2>
                            <p className="text-[10px] font-bold text-black/30 tracking-widest">— Hypothetical 10k Cohort</p>
                        </div>

                        {/* Funnel */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                            {[
                                {
                                    step: "01",
                                    label: "Top of Funnel",
                                    metric: "10,000",
                                    unit: "Sprint Views",
                                    detail: "via Creator Distribution",
                                    accent: "#E92E2E",
                                    note: null,
                                },
                                {
                                    step: "02",
                                    label: "Activation",
                                    metric: "4,000",
                                    unit: "Completions",
                                    detail: "40% Target Completion Rate",
                                    accent: "#E92E2E",
                                    note: null,
                                },
                                {
                                    step: "03",
                                    label: "Viral Loop",
                                    metric: "400",
                                    unit: "LinkedIn Shares",
                                    detail: "10% Share Rate → 1,200 organic clicks (K-factor 3)",
                                    accent: "#E92E2E",
                                    note: null,
                                },
                                {
                                    step: "04",
                                    label: "Revenue Impact",
                                    metric: "₹80L",
                                    unit: "Pipeline Value",
                                    detail: "40 enrollments × ₹2,00,000 avg. ticket · 1% Conv. Rate",
                                    accent: "#E92E2E",
                                    note: "at ₹0 CAC",
                                },
                            ].map((item, i) => (
                                <div key={item.step} className="relative rounded-xl bg-white border border-gray-200 p-5 space-y-3 overflow-hidden group hover:shadow-md transition-shadow">
                                    {/* Top accent line */}
                                    <div className="absolute top-0 left-0 w-full h-[2px]" style={{ backgroundColor: item.accent }} />

                                    <div className="flex items-start justify-between">
                                        <p className="text-[9px] font-black tracking-widest opacity-25">{item.step}</p>
                                        {item.note && (
                                            <span className="px-2 py-0.5 rounded-full text-[8px] font-black tracking-widest" style={{ backgroundColor: `${item.accent}20`, color: item.accent }}>
                                                {item.note}
                                            </span>
                                        )}
                                    </div>

                                    <div>
                                        <p className="text-[10px] font-bold tracking-widest opacity-40">{item.label}</p>
                                        <p className="text-3xl font-black leading-none mt-1" style={{ color: item.accent }}>{item.metric}</p>
                                        <p className="text-sm font-bold text-black mt-0.5">{item.unit}</p>
                                    </div>

                                    <p className="text-xs text-black/55 leading-relaxed font-medium">{item.detail}</p>

                                    {/* Connector arrow (not on last) */}
                                    {i < 3 && (
                                        <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-gray-100 items-center justify-center text-black/30 text-[10px]">→</div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Summary bar */}
                        <div className="flex flex-col md:flex-row items-start md:items-center gap-3 px-5 py-4 rounded-xl border border-gray-200 bg-white shadow-sm">
                            <span className="text-[9px] font-black tracking-widest text-black/30">Bottom line</span>
                            <div className="w-px h-4 bg-gray-200 hidden md:block" />
                            <p className="text-sm font-medium text-black/70 leading-relaxed">
                                A single 10,000-user creator sprint can generate{" "}
                                <span className="text-[#E92E2E] font-black">₹80 Lakhs in pipeline value</span>{" "}
                                with{" "}
                                <span className="text-black font-black">₹0 in ad spend</span>{" "}
                                — purely through product-led, creator-distributed acquisition.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── USER JOURNEY MAP ── */}
            <section className="bg-white border-t border-gray-200">
                <div className="max-w-[1400px] mx-auto px-6 py-12">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-8">
                        <div className="space-y-1">
                            <p className="text-[9px] font-bold tracking-[0.2em] opacity-60 text-[#1a1a1a]">User Journey</p>
                            <h2 className="text-2xl font-black tracking-tighter text-[#1a1a1a]">Creator Discovery → High-ticket pipeline</h2>
                        </div>

                        {/* Table */}
                        <div className="border border-gray-200 rounded-xl overflow-hidden">
                            <div className="grid grid-cols-12 gap-4 px-5 py-3 bg-gray-200/60 border-b border-gray-300">
                                {["Stage", "User Action", "Touchpoint", "Business Goal"].map((col, i) => (
                                    <p key={col} className={`text-[9px] font-black tracking-widest text-[#1a1a1a]/50 ${i === 0 ? "col-span-2" : "col-span-3"}`}>{col}</p>
                                ))}
                            </div>
                            {[
                                { n: "1", stage: "Discovery", action: "Encounters a creator's content (social, YouTube, newsletter, etc.).", touch: "Nano-Skills Landing Page", goal: "Traffic Acquisition", accent: "#E92E2E" },
                                { n: "2", stage: "Engagement", action: "Clicks 'Start for Free', watches sprint.", touch: "Video Player (Guest Mode)", goal: "Immediate Value Delivery", accent: "#E92E2E" },
                                { n: "3", stage: "Reward", action: "Clicks 'Get Badge' on completion.", touch: "Badge Generation Screen", goal: "Validate User Effort", accent: "#E92E2E" },
                                { n: "4", stage: "Viral Loop", action: "Shares badge to LinkedIn.", touch: "Sharing API / Download", goal: "Earned Media (Zero CAC)", accent: "#E92E2E" },
                                { n: "5", stage: "Conversion", action: "Views scholarship pop-up, clicks Enroll.", touch: "Intent-triggered Modal", goal: "Lead Gen & Revenue", accent: "#E92E2E" },
                            ].map((row, idx) => (
                                <div key={row.stage} className={`grid grid-cols-12 gap-4 px-5 py-5 border-b border-gray-200 last:border-0 transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-[#fff8f8]`}>
                                    <div className="col-span-2 flex items-center gap-2">
                                        <span className="text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${row.accent}20`, color: row.accent }}>{row.n}</span>
                                        <span className="text-base font-black text-[#1a1a1a]">{row.stage}</span>
                                    </div>
                                    <p className="col-span-3 text-sm text-[#1a1a1a]/75 font-medium leading-relaxed">{row.action}</p>
                                    <p className="col-span-3 text-sm text-[#1a1a1a]/75 font-medium leading-relaxed">{row.touch}</p>
                                    <p className="col-span-4 text-sm font-bold" style={{ color: row.accent }}>{row.goal}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── KEY DESIGN DECISIONS ── */}
            <section className="px-6 py-10 max-w-[1400px] mx-auto border-t border-gray-100">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-8">
                    <div className="flex items-baseline gap-4">
                        <p className="text-[9px] font-bold tracking-[0.2em] opacity-60">Design</p>
                        <h2 className="text-2xl font-black tracking-tighter">Key design decisions</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {[
                            {
                                n: "01",
                                title: "Frictionless Entry",
                                sub: "Guest Mode",
                                accent: "#E92E2E",
                                bg: "bg-[#E92E2E]/5",
                                choice: "Removed the 5-step signup wall. Users start immediately → faster Time-to-Value → less top-of-funnel drop-off.",
                                image: "/projects/upgrad_home_snip.png",
                                highlights: [
                                    { top: "68.2%", left: "4.8%", width: "37.5%", height: "3.2%" },
                                    { top: "91.2%", left: "36.8%", width: "7.0%", height: "4.5%" }  // Precisely on icon, clearing text below
                                ]
                            },
                            {
                                n: "02",
                                title: "Content Player",
                                sub: "Completion Trigger",
                                accent: "#E92E2E",
                                bg: "bg-[#E92E2E]/5",
                                choice: "'Get Badge' CTA is gated by a video-completion listener. Ensures consumption before reward — maintaining credential quality.",
                                images: ["/projects/upgrad_player_2.png", "/projects/upgrad_player_1.png"]
                            },
                            { n: "03", title: "Viral Loop", sub: "Social Proof", accent: "#E92E2E", bg: "bg-[#E92E2E]/5", choice: "Immediate visual reward (Nano-Skill Badge) taps professional vanity. Users share to LinkedIn → free high-trust marketing.", image: "/projects/viral_loop_snip.png" },
                            { n: "04", title: "Strategic Upsell", sub: "Intent-Based", accent: "#E92E2E", bg: "bg-[#E92E2E]/5", choice: "₹5,000 scholarship modal fires only on 'Share' or 'Download' click — at peak pride. Highest probability of paid conversion.", image: "/projects/upsell_modal_snip.png" },
                        ].map((item: any) => (
                            <div key={item.n} className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-center py-12 border-b border-gray-100 last:border-0 first:border-0">
                                {/* Text */}
                                <div className="space-y-4 max-w-lg">
                                    <div>
                                        <span className="text-[9px] opacity-20 font-black">{item.n}</span>
                                        <h4 className="text-xl font-black leading-tight">{item.title}</h4>
                                        <p className="text-[10px] font-bold tracking-widest opacity-40">{item.sub}</p>
                                    </div>
                                    <div className={`${item.bg} rounded-lg p-5 space-y-1.5`}>
                                        <p className="text-[10px] font-black tracking-widest" style={{ color: item.accent }}>Design Choice</p>
                                        <p className="text-base leading-relaxed text-black/80 font-medium">{item.choice}</p>
                                    </div>
                                </div>
                                {/* Image/Placeholder */}
                                <div className="flex justify-center lg:justify-end">
                                    <div className={`relative flex flex-row gap-6 ${(item as any).images ? "w-auto" : "w-[260px]"} aspect-square md:aspect-auto group`}>
                                        {(item as any).images ? (
                                            <>
                                                {(item as any).images.map((img: string, idx: number) => (
                                                    <motion.div
                                                        key={img}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.2 + idx * 0.2, duration: 0.6 }}
                                                        className="relative w-[260px] aspect-[9/19] rounded-[32px] bg-white border-[5px] border-[#1a1a1a] shadow-[0_20px_45px_rgba(0,0,0,0.12)] overflow-hidden shrink-0"
                                                    >
                                                        <Image
                                                            src={img}
                                                            alt={item.title}
                                                            fill
                                                            className="object-cover object-top"
                                                        />
                                                    </motion.div>
                                                ))}
                                            </>
                                        ) : (item as any).image ? (
                                            <div className="relative w-[260px] aspect-[9/19] rounded-[32px] bg-white border-[5px] border-[#1a1a1a] shadow-[0_20px_45px_rgba(0,0,0,0.12)] overflow-hidden">
                                                <Image
                                                    src={(item as any).image}
                                                    alt={item.title}
                                                    fill
                                                    className="object-cover object-top opacity-100 transition-opacity"
                                                />
                                                {(item as any).highlights?.map((h: any, i: number) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.6 + i * 0.3, duration: 0.5, ease: "easeOut" }}
                                                        className="absolute z-10 pointer-events-none"
                                                        style={{
                                                            top: h.top,
                                                            left: h.left,
                                                            width: h.width,
                                                            height: h.height
                                                        }}
                                                    >
                                                        {/* The Box */}
                                                        <div className="absolute inset-0 border-[1.5px] border-[#E92E2E] rounded-lg shadow-[0_0_15px_rgba(233,46,46,0.3)]">
                                                            <motion.div
                                                                animate={{ opacity: [0.1, 0.25, 0.1] }}
                                                                transition={{ repeat: Infinity, duration: 2 }}
                                                                className="absolute inset-0 bg-[#E92E2E] rounded-[inherit]"
                                                            />
                                                        </div>

                                                        {/* The Dot & Sonar */}
                                                        <div className="absolute -top-1 -right-1 w-2.5 h-2.5">
                                                            <div className="absolute inset-0 bg-[#E92E2E] rounded-full z-20" />
                                                            <motion.div
                                                                animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
                                                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut" }}
                                                                className="absolute inset-0 bg-[#E92E2E] rounded-full z-10"
                                                            />
                                                            <motion.div
                                                                animate={{ scale: [1, 4], opacity: [0.4, 0] }}
                                                                transition={{ repeat: Infinity, duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                                                className="absolute inset-0 bg-[#E92E2E] rounded-full z-0"
                                                            />
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="relative w-[260px] aspect-[9/19] flex flex-col items-center justify-center gap-2 bg-white rounded-[32px] border-[5px] border-[#1a1a1a] shadow-[0_20px_45px_rgba(0,0,0,0.12)]">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                                                <p className="text-[10px] font-bold tracking-widest text-gray-400">Mockup Coming</p>
                                                <p className="text-[9px] text-gray-400/60 text-center px-6 leading-snug">{item.placeholder}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>


            {/* ── KPIs + TRADE-OFFS (side by side) ── */}
            <section className="bg-white border-t border-gray-100">
                <div className="max-w-[1400px] mx-auto px-6 py-12">
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                        {/* KPIs */}
                        <div className="space-y-6">
                            <div className="flex items-baseline gap-3">
                                <p className="text-[9px] font-bold tracking-[0.4em] opacity-60">Measurement</p>
                                <h2 className="text-2xl font-black tracking-tighter">KPIs</h2>
                            </div>
                            <div className="space-y-3">
                                {[
                                    { type: "🌟 North Star", label: "Weekly Active Learners (WAL)", color: "#E92E2E", target: "Target: 10,000 WALs", desc: "The ultimate measure of product-market fit. Tracks users completing at least one Nano Skill per week, fueling the top-of-funnel retargeting pool." },
                                    { type: "🚀 Engagement", label: "Sprint Completion Rate", color: "#E92E2E", target: "Target: 45% (vs. 30% EdTech avg.)", desc: "Validates the thesis that low-friction, 5-minute sprints reduce drop-offs compared to traditional long-form video lectures." },
                                    { type: "💰 Revenue", label: "High-Ticket Upsell Rate", color: "#E92E2E", target: "Target: 2–3%", desc: "Measures direct pipeline generation. Tracks users who transition from free Nano Skills into premium upGrad cohorts within 30 days." },
                                ].map((kpi) => (
                                    <div key={kpi.label} className="bg-white rounded-xl p-5 space-y-2 border border-gray-100 relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-full h-0.5" style={{ backgroundColor: kpi.color }} />
                                        <p className="text-[9px] font-black tracking-widest" style={{ color: kpi.color }}>{kpi.type}</p>
                                        <p className="text-base font-black leading-tight">{kpi.label}</p>
                                        <p className="text-xs font-black px-2 py-1 rounded-md inline-block" style={{ backgroundColor: `${kpi.color}15`, color: kpi.color }}>{kpi.target}</p>
                                        <p className="text-sm text-black/75 leading-relaxed">{kpi.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Trade-offs */}
                        <div className="space-y-6">
                            <div className="flex items-baseline gap-3">
                                <p className="text-[9px] font-bold tracking-[0.4em] opacity-60">Reflection</p>
                                <h2 className="text-2xl font-black tracking-tighter">Trade-offs &amp; Scope</h2>
                            </div>

                            <div className="bg-white rounded-xl p-6 space-y-4 border border-gray-100">
                                <div className="flex items-center gap-2">
                                    <div className="px-2 py-0.5 rounded-full bg-gray-100 text-[9px] font-black tracking-widest text-black/40">V1 · MVP</div>
                                </div>
                                <p className="text-base text-black/75 leading-relaxed">
                                    Scoped out an interactive prompt simulator in favour of video-completion to get to market faster and test the core assumption first:
                                </p>
                                <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#1a1a1a]">
                                    <p className="text-base font-bold italic text-black/85">"Will users share micro-credentials — and does sharing drive cheaper leads?"</p>
                                </div>
                            </div>

                            <div className="bg-white text-[#1a1a1a] rounded-xl p-6 space-y-4 relative overflow-hidden border border-gray-200 shadow-sm">
                                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#E92E2E]/10 blur-[40px] rounded-full" />
                                <div className="relative flex items-center gap-2">
                                    <div className="px-2 py-0.5 rounded-full bg-gray-100 text-[9px] font-black tracking-widest text-black/40">V2 · Future</div>
                                </div>
                                <div className="relative space-y-2">
                                    {[
                                        { l: "Prompt Simulator", d: "Live hands-on workspace below the video." },
                                        { l: "AI Feedback Loop", d: "Personalised next Nano Skill based on output." },
                                        { l: "Creator Leaderboard", d: "Ranked by completion rate → quality flywheel." },
                                    ].map(item => (
                                        <div key={item.l} className="flex gap-3 py-2 border-b border-gray-100 last:border-0">
                                            <span className="text-[#E92E2E] text-xs mt-0.5">→</span>
                                            <div>
                                                <p className="text-sm font-bold">{item.l}</p>
                                                <p className="text-sm text-black/70">{item.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 text-center border-t border-gray-100">
                <p className="text-gray-400 text-xs font-medium">upGrad · Nano Skills Feature — Product Design Case Study</p>
            </footer>

            <style jsx global>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </main >
    );
}
