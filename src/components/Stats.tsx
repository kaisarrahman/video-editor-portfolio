"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import videosData from "../data/videos.json";

export default function Stats() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const metrics = videosData.metrics;

    return (
        <section id="metrics" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-7xl mx-auto relative z-10 w-full">

                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.02)]"
                    >
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-white/80 font-outfit">Track Record</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
                        className="text-5xl md:text-[5rem] leading-[0.9] font-instrument text-white mb-6 tracking-[-0.02em]"
                    >
                        Quantifiable <span className="italic text-white/50">Impact.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
                        className="text-white/40 text-lg md:text-xl max-w-2xl font-outfit font-light tracking-wide leading-relaxed"
                    >
                        I don&apos;t just assemble footage. I engineer retention mechanics wrapped in cinematic aesthetics. Here is the data.
                    </motion.p>
                </div>

                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Main Large Stat Card (Spans 2 columns on lg) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="lg:col-span-2 bg-white/[0.02] border border-white/[0.05] rounded-[2.5rem] p-8 md:p-14 flex flex-col justify-between relative overflow-hidden group cursor-none hover:bg-white/[0.04] transition-colors duration-700"
                    >
                        {/* Background Accent */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] blur-[100px] rounded-full group-hover:bg-white/[0.04] transition-colors duration-1000" />

                        {/* Decorative Background Chart */}
                        <div className="absolute inset-x-0 bottom-0 h-[60%] z-0 opacity-10 group-hover:opacity-30 transition-opacity duration-1000 pointer-events-none">
                            <svg viewBox="0 0 1000 400" preserveAspectRatio="none" className="w-full h-full">
                                <path
                                    d="M0,400 L0,300 C200,300 300,200 500,150 C700,100 850,50 1000,0 L1000,400 Z"
                                    fill="url(#gradient)"
                                />
                                <defs>
                                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                                        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>

                        <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                            <div>
                                <p className="text-white/40 font-outfit font-bold uppercase tracking-[0.2em] text-xs mb-4 flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                                    Primary Metric
                                </p>
                                <h3 className="text-white/90 font-outfit text-2xl md:text-3xl font-light w-full max-w-sm leading-snug">
                                    Generated <span className="font-instrument italic text-white font-bold">{metrics[0].label.toLowerCase()}</span> globally across all major platforms.
                                </h3>
                            </div>

                            <div className="text-[7rem] md:text-[11rem] leading-[0.8] font-instrument text-white tracking-tighter mt-auto text-left lg:text-right">
                                {inView ? (
                                    <CountUp
                                        end={metrics[0].value}
                                        duration={3}
                                        useEasing={true}
                                    />
                                ) : "0"}
                                <span className="text-white/50">{metrics[0].suffix}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Tools & Workflow Box */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                        className="bg-zinc-900 border border-white/[0.05] rounded-[2.5rem] p-8 md:p-10 text-white flex flex-col justify-between cursor-none hover:border-white/10 transition-colors duration-700"
                    >
                        <div className="mb-10">
                            <h3 className="font-instrument text-4xl mb-3">The Stack.</h3>
                            <p className="text-white/40 text-sm font-outfit leading-relaxed">Industry standard software augmented by cutting edge AI generation.</p>
                        </div>

                        <div className="flex flex-col gap-3 font-outfit">
                            <div className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.02] p-4 rounded-2xl group hover:bg-white/[0.06] transition-colors">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center p-2 group-hover:scale-110 transition-transform relative">
                                    <Image src="/img/Premiere_pro.avif" alt="Premiere Pro" fill className="object-contain" />
                                </div>
                                <span className="font-medium tracking-wide">Premiere Pro</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.02] p-4 rounded-2xl group hover:bg-white/[0.06] transition-colors">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center p-2 group-hover:scale-110 transition-transform relative">
                                    <Image src="/img/After_effect.avif" alt="After Effects" fill className="object-contain" />
                                </div>
                                <span className="font-medium tracking-wide">After Effects</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.02] p-4 rounded-2xl group hover:bg-white/[0.06] transition-colors">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center p-2 group-hover:scale-110 transition-transform relative">
                                    <Image src="/img/Davici.avif" alt="DaVinci Resolve" fill className="object-contain" />
                                </div>
                                <span className="font-medium tracking-wide">DaVinci Resolve</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.02] p-4 rounded-2xl group hover:bg-white/[0.06] transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                <span className="font-medium tracking-wide">Generative AI</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Smaller Metric Cards */}
                    {metrics.slice(1, 4).map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            transition={{ duration: 0.8, delay: 0.2 + (index * 0.1), ease: [0.76, 0, 0.24, 1] }}
                            className="bg-white/[0.02] border border-white/[0.05] rounded-[2.5rem] p-10 flex flex-col justify-between cursor-none hover:bg-white/[0.04] transition-colors duration-700"
                        >
                            <p className="text-white/40 font-outfit font-bold uppercase tracking-[0.2em] text-xs mb-8">{metric.label}</p>
                            <div className="text-6xl md:text-7xl font-instrument text-white tracking-tighter">
                                {inView ? (
                                    <CountUp
                                        end={metric.value}
                                        duration={3}
                                        decimals={metric.value % 1 !== 0 ? 1 : 0}
                                        useEasing={true}
                                    />
                                ) : "0"}
                                <span className="text-white/50">{metric.suffix}</span>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}
