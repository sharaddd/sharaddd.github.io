"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Zap, Users, ShieldCheck, Smartphone, Target, TrendingUp, BarChart3, AlertCircle, Truck, ShoppingCart, Package, Timer, X, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/Navbar";

export default function BlinkitLaundryPage() {
    return (
        <main className="min-h-screen bg-white text-[#1a1a1a] font-sans">
            <Navbar />

            {/* ── HERO ── */}
            <section className="pt-36 pb-6 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 text-left"
                    >
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F3C100]/10 border border-[#F3C100]/30">
                                <span className="text-[10px] font-black tracking-widest text-[#1a1a1a] uppercase leading-none">Expansion Pilot</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
                                Blinkit <span className="text-[#EBC000] drop-shadow-[0_1px_0_rgba(0,0,0,0.05)]">Laundry</span><br />
                                <span className="text-xl md:text-2xl opacity-60 font-medium tracking-tight">Recuperating prime time for Gurgaon</span>
                            </h1>

                            {/* Compressed Strategic Why */}
                            <div className="border-l-2 border-[#EBC000] pl-4 py-1 max-w-lg">
                                <p className="text-sm md:text-base font-medium leading-relaxed text-black/70 italic">
                                    "Leveraging hyper-local trust to solve the professional quality gap in India's $2.7B laundry desert."
                                </p>
                            </div>
                        </div>

                        {/* Live Demo Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <a
                                href="https://laundry-blinkit-live-demo.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-black text-[#F8E000] px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all group"
                            >
                                View Live Prototype
                                <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        {/* High-fidelity Phone Frame */}
                        <div className="relative w-full max-w-[280px] aspect-[9/19] bg-white rounded-[40px] border-[10px] border-[#1a1a1a] shadow-[0_50px_100px_rgba(0,0,0,0.15)] overflow-hidden">
                            <Image
                                src="/blinkit_home.png"
                                alt="Blinkit Laundry Home Page"
                                fill
                                className="object-cover object-top"
                                priority
                                unoptimized
                            />
                        </div>
                    </motion.div>
                </div>
            </section>
            {/* ── MARKET OPPORTUNITY DASHBOARD ── */}
            <section className="py-14 px-6 bg-[#F8E000]">
                <div className="max-w-7xl mx-auto space-y-10">
                    <div className="space-y-4 text-center">
                        <p className="text-[12px] font-black tracking-widest uppercase text-black/40 italic">Data Narrative</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-black">Quantifying the "Trust Desert"</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Column 1: TAM/SAM/SOM Nested Visualization */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-black/90 rounded-[40px] p-10 text-white space-y-10 relative overflow-hidden shadow-2xl"
                        >
                            <div className="space-y-2 relative z-10">
                                <h3 className="text-2xl font-black tracking-tight leading-none text-[#EBC000]">Market Sizing</h3>
                                <p className="text-xs font-bold text-white/40">Visualizing the $2.7B whitespace.</p>
                            </div>

                            <div className="space-y-6">
                                {/* TAM */}
                                <div className="space-y-2">
                                    <div className="flex justify-between items-end">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">TAM (India Laundry)</p>
                                        <p className="text-sm font-black text-white/60">$2.7B</p>
                                    </div>
                                    <div className="h-4 w-full bg-white/10 border border-white/20 rounded-lg shadow-inner" />
                                </div>

                                {/* SAM */}
                                <div className="space-y-2">
                                    <div className="flex justify-between items-end">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#EBC000]/80">SAM (Serviceable)</p>
                                        <div className="flex items-center gap-2">
                                            <p className="text-xl font-black leading-none text-[#EBC000]">$400M</p>
                                            <p className="text-[8px] font-bold text-[#EBC000]/60 uppercase">Metro Premium Segment</p>
                                        </div>
                                    </div>
                                    <div className="h-8 w-full bg-[#EBC000]/5 border border-[#EBC000]/20 rounded-xl" />
                                </div>

                                {/* SOM */}
                                <div className="space-y-2 relative">
                                    <div className="flex justify-between items-end relative z-10">
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white">SOM (Target)</p>
                                        <div className="flex flex-col items-end">
                                            <p className="text-xl font-black leading-none text-black bg-[#EBC000] px-2 py-0.5 rounded-md">$15M</p>
                                            <p className="text-[8px] font-black text-[#EBC000] uppercase pt-1">Gurgaon Pilot (Y1)</p>
                                        </div>
                                    </div>
                                    <div className="h-10 w-full bg-[#EBC000] rounded-xl shadow-[0_10px_30px_rgba(235,192,0,0.3)]" />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-[#111111] rounded-[40px] p-10 space-y-10 border border-white/5 shadow-2xl"
                        >
                            <div className="space-y-8 text-white">
                                <div className="space-y-1">
                                    <h3 className="text-2xl font-black tracking-tight leading-none text-[#EBC000]">The Efficiency Gap</h3>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-white/30">Organized vs. Unorganized Sector</p>
                                </div>

                                <div className="space-y-6">
                                    {/* Sector Donut Chart Representation */}
                                    <div className="flex items-center gap-8">
                                        <div className="relative w-32 h-32 flex-shrink-0">
                                            <svg className="w-full h-full transform -rotate-90">
                                                <circle cx="64" cy="64" r="54" fill="transparent" stroke="rgba(255,255,255,0.05)" strokeWidth="20" />
                                                <circle cx="64" cy="64" r="54" fill="transparent" stroke="#EBC000" strokeWidth="20" strokeDasharray="340" strokeDashoffset="323" />
                                            </svg>
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <p className="text-xl font-black tracking-tighter leading-none text-white">95%</p>
                                            </div>
                                        </div>
                                        <div className="space-y-6 flex-1">
                                            {/* Legend */}
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-3 h-3 rounded-full bg-white/10 border border-white/10" />
                                                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest italic">Unorganized Sector (95%)</p>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <div className="w-3 h-3 rounded-full bg-[#EBC000] shadow-lg shadow-[#EBC000]/20" />
                                                    <p className="text-xs font-black text-white uppercase tracking-widest">Organized (Target)</p>
                                                </div>
                                            </div>

                                            {/* The Blinkit Edge Checklist */}
                                            <div className="bg-white/5 rounded-2xl p-4 border border-white/5 space-y-3">
                                                <p className="text-[10px] font-black uppercase tracking-widest text-white/30">The Blinkit Edge</p>
                                                <div className="space-y-2">
                                                    {[
                                                        { label: "Local Dhobi", note: "Low Trust, Cash Only", icon: <X className="w-3 h-3 text-white/20" />, status: "fail" },
                                                        { label: "Dry Clean Apps", note: "High CAC, High Fees", icon: <X className="w-3 h-3 text-white/20" />, status: "fail" },
                                                        { label: "Blinkit", note: "Absolute Trust, Zero CAC", icon: <CheckCircle2 className="w-3 h-3 text-emerald-400" />, status: "pass" },
                                                    ].map((item, i) => (
                                                        <div key={i} className="flex items-start gap-3">
                                                            <div className="mt-0.5">{item.icon}</div>
                                                            <div className="space-y-0.5">
                                                                <p className={`text-[11px] font-black leading-none ${item.status === 'pass' ? 'text-white' : 'text-white/40'}`}>{item.label}</p>
                                                                <p className="text-[9px] font-bold text-white/30 leading-none">{item.note}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Metric Callouts */}
                                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5">
                                        <div className="space-y-1 bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                            <p className="text-[10px] font-black text-[#EBC000] uppercase tracking-widest leading-none">CAGR Growth</p>
                                            <h4 className="text-2xl font-black tracking-tighter text-white leading-none">33-41%</h4>
                                            <p className="text-[8px] font-bold text-white/40 italic leading-none pt-1">Online Sector (2025-30)</p>
                                        </div>
                                        <div className="space-y-1 bg-white/[0.03] p-4 rounded-2xl border border-white/5">
                                            <p className="text-[10px] font-black text-[#EBC000] uppercase tracking-widest leading-none">Logistics Efficiency</p>
                                            <h4 className="text-2xl font-black tracking-tighter text-white leading-none">Zero</h4>
                                            <p className="text-[8px] font-bold text-white/40 italic leading-none pt-1">Incremental CAC (Rider Swap)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center pt-10"
                    >
                        <p className="text-lg md:text-xl font-black tracking-tight leading-relaxed text-black italic">
                            "The $400M metro premium segment is currently bottlenecked by reverse-logistics costs. By utilizing empty rider return trips from dark stores, Blinkit achieves near-zero incremental Customer Acquisition and Logistics costs, fundamentally altering the unit economics of doorstep laundry."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── PERSONAS & JOURNEY SPLIT VIEW ── */}
            <section className="py-14 px-6 bg-[#f9fafb]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-[0.35fr_0.65fr] gap-16">

                        {/* Left: Condensed Personas */}
                        <div className="space-y-10">
                            <div className="space-y-2">
                                <p className="text-[10px] font-black tracking-[0.2em] uppercase opacity-30">Target Personas</p>
                                <h2 className="text-3xl font-black tracking-tighter">Who We Build For</h2>
                            </div>

                            <div className="space-y-6">
                                {[
                                    {
                                        name: "Power Professional",
                                        desc: "High-earner, 60+ hr work weeks.",
                                        pain: "Zero trust in local dhobis for luxury linens."
                                    },
                                    {
                                        name: "Young Parent",
                                        desc: "Managing career + toddler.",
                                        pain: "Hygiene anxiety for baby-wear cycles."
                                    },
                                    {
                                        name: "The Bachelor",
                                        desc: "Co-living, no drying space.",
                                        pain: "Hates 'Sunday Chores'; wants flat bulk rates."
                                    }
                                ].map((p, i) => (
                                    <div key={i} className="group p-5 rounded-2xl bg-white border border-black/5 hover:border-[#EBC000] transition-colors">
                                        <h3 className="text-lg font-black tracking-tight">{p.name}</h3>
                                        <p className="text-[13px] font-bold text-black/50 leading-relaxed mb-2">{p.desc}</p>
                                        <div className="flex gap-2 items-start mt-2 pt-2 border-t border-neutral-50">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#EBC000] mt-1 shrink-0" />
                                            <p className="text-[12px] font-bold text-black/70 italic leading-tight">Pain Point: {p.pain}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: User Journey Map */}
                        <div className="space-y-12">
                            <div className="space-y-2 lg:text-right">
                                <p className="text-[10px] font-black tracking-[0.2em] uppercase opacity-30">Strategic Flow</p>
                                <h2 className="text-3xl font-black tracking-tighter">The Frictionless Journey</h2>
                            </div>

                            <div className="relative">
                                {/* Connecting Line (Desktop) */}
                                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-neutral-200 -translate-y-1/2 hidden lg:block" />

                                <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4">
                                    {[
                                        { step: "Accumulate", label: "Dirty Laundry Pileup", icon: <Timer className="w-5 h-5" /> },
                                        { step: "Book", label: "Grocery + Add-on", icon: <ShoppingCart className="w-5 h-5" /> },
                                        { step: "Swap", label: "Rider Swap at Door", icon: <Truck className="w-5 h-5" /> },
                                        { step: "Process", label: "Partner Hub Logic", icon: <Zap className="w-5 h-5" /> },
                                        { step: "Return", label: "Next-Day Delivery", icon: <Package className="w-5 h-5" /> }
                                    ].map((s, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="relative z-10 flex flex-col items-center text-center space-y-4"
                                        >
                                            <div className="w-14 h-14 rounded-full bg-white border-2 border-neutral-100 flex items-center justify-center text-black shadow-sm group-hover:border-[#EBC000] transition-colors bg-white">
                                                {s.icon}
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-xs font-black tracking-widest uppercase text-[#EBC000]">{s.step}</p>
                                                <p className="text-[13px] font-bold text-black/70 max-w-[120px] leading-tight mx-auto">{s.label}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Friction vs. Fix Breakdown */}
                            <div className="pt-8 border-t border-neutral-100 space-y-6">
                                <p className="text-xs font-black tracking-widest uppercase text-black/40">Solving the Core Frictions</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {[
                                        {
                                            title: "Accumulate",
                                            current: "Users pile clothes for 7 days, causing weekend anxiety.",
                                            fix: "The 'Blinkit Blue' bag acts as a physical, daily reminder to offload chores."
                                        },
                                        {
                                            title: "Book",
                                            current: "Standalone laundry apps require separate onboarding and payment friction.",
                                            fix: "1-click add-on during the existing grocery checkout flow."
                                        },
                                        {
                                            title: "Swap",
                                            current: "Coordinating pickup times with local dhobis is a logistical nightmare.",
                                            fix: "Piggybacking on the 10-minute grocery slot guarantees user availability."
                                        },
                                        {
                                            title: "Process",
                                            current: "'Lost item' anxiety prevents luxury fabric handover.",
                                            fix: "AI-powered visual scanning at the doorstep ensures immutable inventory logs."
                                        }
                                    ].map((item, i) => (
                                        <div key={i} className="space-y-4 bg-neutral-50 p-5 rounded-2xl border border-neutral-100 transition-all hover:shadow-md group">
                                            <p className="text-sm font-black uppercase tracking-widest text-[#EBC000] border-b border-neutral-200 pb-2">{item.title}</p>
                                            <div className="space-y-3">
                                                <div className="space-y-1">
                                                    <p className="text-xs font-black uppercase tracking-tighter text-black/40 italic">The Friction</p>
                                                    <p className="text-[13px] leading-relaxed font-bold text-black/80">
                                                        <span className="text-black font-black uppercase mr-1">Current:</span> {item.current}
                                                    </p>
                                                </div>
                                                <div className="space-y-1">
                                                    <p className="text-xs font-black uppercase tracking-tighter text-[#EBC000]/80 italic">The Solution</p>
                                                    <p className="text-[13px] leading-relaxed font-black text-black">
                                                        <span className="text-[#EBC000] font-black uppercase mr-1">Blinkit Fix:</span> {item.fix}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Mobile Journey Divider (Visible only on small screens) */}
                            <p className="text-[9px] font-black tracking-widest uppercase opacity-20 text-center lg:hidden">Vertical Flow Step 1-5</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PRIORITIZATION FRAMEWORK ── */}
            <section className="py-12 px-6 max-w-7xl mx-auto border-t border-neutral-100">
                <div className="space-y-8">
                    <div className="space-y-2">
                        <p className="text-[12px] font-black tracking-widest uppercase opacity-40">Framework</p>
                        <h2 className="text-4xl font-black tracking-tighter">Strategic Prioritization</h2>
                    </div>

                    <div className="overflow-x-auto no-scrollbar">
                        <div className="min-w-[800px] border border-neutral-100 rounded-3xl overflow-hidden bg-white shadow-sm">
                            <div className="grid grid-cols-12 gap-4 px-8 py-6 bg-neutral-50 border-b border-neutral-100 italic">
                                <p className="col-span-4 text-[11px] font-black tracking-widest uppercase opacity-40">Problem Area</p>
                                <p className="col-span-3 text-[11px] font-black tracking-widest uppercase opacity-40">Primary Persona</p>
                                <p className="col-span-2 text-[11px] font-black tracking-widest uppercase opacity-40 text-center">Impact (A)</p>
                                <p className="col-span-2 text-[11px] font-black tracking-widest uppercase opacity-40 text-center">Reach (B)</p>
                                <p className="col-span-1 text-[11px] font-black tracking-widest uppercase opacity-40 text-right">Rank</p>
                            </div>

                            {[
                                {
                                    area: "Trust & Inventory Control",
                                    sub: "(AI Scan / Digital Receipt)",
                                    persona: "The Professional / Parent",
                                    impact: "3 (High)",
                                    reach: "3 (High)",
                                    color: "bg-[#F8E000]",
                                    priority: true
                                },
                                {
                                    area: "Specialized Laundry",
                                    sub: "(Stain Marker / Fragrance)",
                                    persona: "The Premium User",
                                    impact: "3 (High)",
                                    reach: "2 (Med)",
                                    color: "bg-[#F8E000]/60"
                                },
                                {
                                    area: "Operational Integration",
                                    sub: "(Rider Grocery+Laundry Swap)",
                                    persona: "All Users / Blinkit Ops",
                                    impact: "2 (Med)",
                                    reach: "3 (High)",
                                    color: "bg-[#F8E000]/40"
                                },
                                {
                                    area: "Recurring Habit Formation",
                                    sub: "(Sunday Reset Subscription)",
                                    persona: "The Bachelor / Professional",
                                    impact: "2 (Med)",
                                    reach: "2 (Med)",
                                    color: "bg-neutral-100"
                                },
                                {
                                    area: "Niche Value-Adds",
                                    sub: "(Shoe Spa / Bag Restoration)",
                                    persona: "Sneakerheads",
                                    impact: "1 (Low)",
                                    reach: "2 (Med)",
                                    color: "bg-neutral-50"
                                },
                            ].map((row, i) => (
                                <div key={i} className={`grid grid-cols-12 gap-4 px-8 py-6 items-center border-b border-neutral-50 last:border-0 hover:bg-neutral-50/50 transition-colors`}>
                                    <div className="col-span-4 space-y-1">
                                        <p className="text-base font-black tracking-tight">{i + 1}. {row.area}</p>
                                        <p className="text-[11px] italic font-medium opacity-50">{row.sub}</p>
                                    </div>
                                    <p className="col-span-3 text-sm font-bold text-black/70">{row.persona}</p>
                                    <div className="col-span-2 flex justify-center">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${row.impact.includes('High') ? 'bg-[#F8E000] text-black' : row.impact.includes('Med') ? 'bg-[#F8E000]/20 text-black/60' : 'bg-neutral-100 text-black/30'}`}>
                                            {row.impact}
                                        </span>
                                    </div>
                                    <div className="col-span-2 flex justify-center">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${row.reach.includes('High') ? 'bg-black text-white' : row.reach.includes('Med') ? 'bg-black/10 text-black/60' : 'bg-neutral-100 text-black/30'}`}>
                                            {row.reach}
                                        </span>
                                    </div>
                                    <div className="col-span-1 text-right">
                                        <span className="text-xl font-black italic opacity-10">P{i + 1}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Trade-off Rationale - Strategic Depth */}
                    {/* Strategic Decision Support: Unit Economics + Rationale */}
                    <div className="flex flex-col lg:flex-row gap-12 pt-10 border-t border-neutral-50 mt-10">
                        {/* Unit Economics Snapshot */}
                        <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 flex-1 max-w-sm">
                            <p className="text-[10px] font-black tracking-widest uppercase text-black/30 mb-4">Unit Economics (Target)</p>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="font-bold text-black/40">Avg. Order Value (AOV)</span>
                                    <span className="font-black">₹350</span>
                                </div>
                                <div className="flex justify-between items-center text-sm italic">
                                    <span className="font-bold text-black/40">Logistics Cost</span>
                                    <span className="font-black text-[#EBC000]">₹0*</span>
                                </div>
                                <div className="pt-3 border-t border-neutral-200 flex justify-between items-center text-base">
                                    <span className="font-black uppercase tracking-tighter">Gross Margin</span>
                                    <span className="font-black text-2xl tracking-tighter">35%</span>
                                </div>
                                <p className="text-[8px] font-bold text-black/20 italic mt-2">*Absorbed by existing Grocery Rider-Swap loop.</p>
                            </div>
                        </div>

                        {/* Trade-off Rationale */}
                        <div className="flex-1 lg:text-right space-y-2">
                            <p className="text-[10px] font-black tracking-widest uppercase text-black/30">Trade-off Rationale</p>
                            <p className="text-[13px] font-bold text-black/40 leading-relaxed italic">
                                "To maintain the quick-commerce velocity Blinkit is known for, we intentionally deprioritized high-friction niche services (like Shoe Spa and Bag Restoration). While these offer high margins, they require specialized hub routing and introduce unpredictable turnaround times, directly conflicting with our MVP goal of predictable, frictionless habit formation."
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            {/* ── FULL PRODUCT WALKTHROUGH ── */}
            <section className="py-20 bg-white border-t border-neutral-100 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="space-y-2 mb-12">
                        <p className="text-[12px] font-black tracking-widest uppercase opacity-40">End-to-End Execution</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">The User Flow</h2>
                        <p className="text-sm font-bold text-black/40 italic">Swipe to view the 9-step core loop.</p>
                    </div>

                    <div className="relative group">
                        {/* Swipe Hint Overlay */}
                        <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none transition-opacity group-hover:opacity-0" />

                        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-8 -mx-6 px-6">
                            {[
                                {
                                    title: "1. The Entry Point",
                                    action: "Taps the dedicated 'Blinkit Laundry' navigation tab or home banner.",
                                    rationale: "Positioned as a high-visibility, native service without cannibalizing the core 10-minute grocery real estate."
                                },
                                {
                                    title: "2. Service Tiering",
                                    action: "Views the overarching process and selects the primary service category.",
                                    rationale: "Tiered architecture captures both high-frequency (habit-forming) and high-margin (profit-driving) user cohorts."
                                },
                                {
                                    title: "3. Upfront Pricing",
                                    action: "Inputs the estimated weight (e.g., 3 kg) to see the total estimated cost.",
                                    rationale: "Eliminates 'bill shock' by establishing clear price transparency before the rider is even dispatched."
                                },
                                {
                                    title: "4. The Upsell Engine",
                                    action: "Customizes the wash with 'Shoe Spa', 'Premium Fragrance', and opts into 'Blinkit Protect'.",
                                    rationale: "Maximizes AOV through high-margin add-ons and micro-revenue insurance that mitigates operational liability."
                                },
                                {
                                    title: "5. Logistics Sync",
                                    action: "Chooses a pickup time slot and selects the 'Empty Bag Swap' method.",
                                    rationale: "Synchronizes pickup times with off-peak rider hours or existing grocery deliveries to achieve near-zero incremental logistics cost."
                                },
                                {
                                    title: "6. The Ecosystem Loop",
                                    action: "Reviews prep instructions and is prompted to add detergents to their next grocery cart.",
                                    rationale: "Seamlessly converts a service transaction back into the core FMCG retail business, creating a closed-loop ecosystem."
                                },
                                {
                                    title: "7. Order In-Progress",
                                    action: "Monitors the real-time status (Washing stage) with a clear ETA (4:00 PM).",
                                    rationale: "Proactive operational transparency reduces 'Where Is My Order?' (WISMO) customer support tickets by an estimated 40%."
                                },
                                {
                                    title: "8. Trust Verification",
                                    action: "Reviews the AI-generated itemized receipt and confirms 'Blinkit Protect' status.",
                                    rationale: "Eliminates the #1 user anxiety ('lost items') by establishing an immutable, photo-verified digital audit trail."
                                },
                                {
                                    title: "9. Loyalty Subscriptions",
                                    action: "Explores tiered 'Laundry Pass' options to unlock pre-paid bulk weights & priority slots.",
                                    rationale: "Drives long-term retention and high LTV by transforming irregular errands into a predictable, subscription-based household routine."
                                }
                            ].map((step, i) => (
                                <div key={i} className="flex-shrink-0 w-[280px] md:w-[320px] bg-neutral-50 rounded-3xl border border-neutral-100 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                                    {/* iPhone Frame Placeholder */}
                                    <div className="relative aspect-[9/19] w-full bg-white rounded-[32px] border-[6px] border-[#1a1a1a] mb-6 overflow-hidden shadow-inner">
                                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                                            <div className="w-10 h-1 bg-black/5 rounded-full mb-4" />
                                            <div className="text-center">
                                                <p className="text-[10px] font-black uppercase text-black/10 tracking-widest leading-none">Step {i + 1}</p>
                                            </div>
                                        </div>
                                        {i < 9 && (
                                            <Image
                                                src={`/projects/blinkit-laundry/${i + 1}.png`}
                                                alt={step.title}
                                                fill
                                                className="object-cover"
                                                unoptimized
                                            />
                                        )}
                                    </div>

                                    <div className="flex-1 space-y-4">
                                        <h3 className="text-lg font-black tracking-tight leading-none italic">{step.title}</h3>
                                        <div className="space-y-3">
                                            <div>
                                                <p className="text-[11px] leading-snug text-neutral-500 italic">User Action: {step.action}</p>
                                            </div>
                                            <div>
                                                <p className="text-[13px] leading-tight text-neutral-800">
                                                    <span className="font-black">PM Rationale:</span> {step.rationale}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* ── GTM STRATEGY: PHASED ROLLOUT ── */}
            <section className="py-14 px-6 max-w-7xl mx-auto border-t border-neutral-100">
                <div className="space-y-10">
                    <div className="space-y-2 text-center">
                        <p className="text-[12px] font-black tracking-widest uppercase opacity-40">Phased Execution</p>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-none text-[#1a1a1a]">GTM Strategy</h2>
                    </div>

                    <div className="relative max-w-5xl mx-auto px-4">
                        {/* The Roadmap Line (Visible only on Desktop) */}
                        <div className="absolute top-[30px] left-8 right-8 h-1 bg-neutral-50 hidden md:block" />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                            {[
                                {
                                    phase: "Phase 1",
                                    title: "Pilot Hook",
                                    desc: "Blinkit Blue bag drop in DLF Phase 5 societies to establish physical presence & trust."
                                },
                                {
                                    phase: "Phase 2",
                                    title: "Habit Loop",
                                    desc: "20% off laundry when bundled with monthly staples – moving laundry from errand to routine."
                                },
                                {
                                    phase: "Phase 3",
                                    title: "Scale",
                                    desc: "Introduce specialized Eco & Baby care tiers – expanding high-margin ARPU opportunities."
                                }
                            ].map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="space-y-6 text-center md:text-left"
                                >
                                    {/* Node */}
                                    <div className="flex justify-center md:justify-start">
                                        <div className="w-[60px] h-[60px] rounded-full bg-white border-4 border-neutral-50 shadow-sm flex items-center justify-center relative">
                                            <div className="w-3 h-3 rounded-full bg-[#F8E000]" />
                                            <div className="absolute -top-1 -right-1 bg-black text-white text-[8px] font-black px-2 py-1 rounded-full uppercase tracking-tighter">
                                                {step.phase}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="text-xl font-black tracking-tight italic">{step.title}</h3>
                                        <p className="text-[13px] font-bold text-black/40 leading-relaxed max-w-[280px] mx-auto md:mx-0">
                                            {step.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── MASSIVE SUCCESS METRICS ── */}
            <section className="py-20 px-6 bg-black text-white relative overflow-hidden">
                {/* Background Accent */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#F8E000]/10 blur-[160px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto space-y-12 relative z-10">
                    <div className="space-y-4 text-center">
                        <p className="text-[12px] font-black tracking-widest uppercase text-[#EBC000]">Success Scorecard</p>
                        <h2 className="text-5xl md:text-6xl font-black tracking-tighter italic">"Defining the North Star"</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { value: "40%", label: "14-Day Retention", desc: "Trial-to-Habit conversion target for first-time premium users." },
                            { value: "2.5x", label: "Frequency /Mo", desc: "Average monthly usage per active 'Blinkit Laundry' household." },
                            { value: "<0.5%", label: "Rework Rate", desc: "Strict quality control ensuring professional-grade trust and zero damage." },
                            { value: "15%", label: "Cross-Sell", desc: "Conversion from high-frequency grocery buyers to laundry services." },
                        ].map((metric, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="space-y-2 text-center md:text-left"
                            >
                                <h3 className="text-7xl md:text-8xl font-black tracking-tighter text-[#EBC000] leading-none">
                                    {metric.value}
                                </h3>
                                <div className="space-y-1">
                                    <p className="text-xl font-black tracking-tight text-white">{metric.label}</p>
                                    <p className="text-sm text-white/40 font-medium leading-tight max-w-[200px] mx-auto md:mx-0">
                                        {metric.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FOOTER / CRITICAL THINKING ── */}
            <section className="py-12 px-6 border-t border-neutral-100 bg-neutral-50/50">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    <div className="inline-flex items-center gap-2 text-[#EBC000]">
                        <AlertCircle size={20} />
                        <p className="text-[12px] font-black tracking-widest uppercase">Critical Thinking</p>
                    </div>
                    <h2 className="text-3xl font-black tracking-tighter">Mitigating the "Reverse Logistics" Challenge</h2>
                    <p className="text-lg text-black/60 font-medium leading-relaxed italic">
                        "The biggest risk was rider idle time and empty return trips. By implementing the 'Rider Swap' model, we ensured that a rider delivers groceries and picks up laundry in the same visit, effectively reducing incremental logistics cost to nearly zero."
                    </p>

                    <div className="pt-12">
                        <footer className="text-gray-400 text-[10px] font-black tracking-[0.2em] uppercase">
                            Blinkit Laundry
                        </footer>
                    </div>
                </div>
            </section>

        </main>
    );
}
