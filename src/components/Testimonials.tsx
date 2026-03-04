"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import videosData from "../data/videos.json";
import { useState } from "react";

export default function Testimonials() {
    const testimonials = videosData.testimonials;

    return (
        <section id="impact" className="py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden z-10">
            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <div className="text-center mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        className="inline-flex items-center gap-3 mb-8 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.02)]"
                    >
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-white/80 font-outfit">Verified Impact</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
                        className="text-5xl md:text-[5rem] lg:text-[6rem] leading-[0.9] font-instrument text-white mb-8 tracking-[-0.02em]"
                    >
                        Don&apos;t just take <br className="hidden md:block" /> my <span className="italic text-white/50">word</span> for it.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
                        className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-outfit font-light tracking-wide leading-relaxed"
                    >
                        Real scalable results from top-tier creators and brands who trusted me with their visual identity.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-20">
                    {testimonials.map((t, index) => (
                        <TestimonialCard key={index} t={t} index={index} />
                    ))}
                </div>
            </div>

            {/* Ambient Lighting */}
            <div className="absolute top-1/4 left-0 w-[40vw] h-[40vw] bg-white/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen -translate-x-1/2" />
            <div className="absolute bottom-1/4 right-0 w-[50vw] h-[50vw] bg-white/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen translate-x-1/2" />
        </section>
    );
}

function TestimonialCard({ t, index }: { t: { quote: string, author: string, role: string }, index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, delay: index * 0.15, ease: [0.25, 1, 0.5, 1] }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative h-full flex flex-col p-10 md:p-14 rounded-[3rem] bg-white/[0.01] border border-white/[0.03] backdrop-blur-3xl overflow-hidden cursor-none hover:-translate-y-4 transition-transform duration-700 ease-[0.25,1,0.5,1]"
        >
            {/* Hover Glow Effect */}
            <div
                className={`absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent transition-opacity duration-700 ease-[0.25,1,0.5,1] ${isHovered ? "opacity-100" : "opacity-0"}`}
            />

            <Quote className="w-12 h-12 text-white/10 mb-8 relative z-10 group-hover:text-white/30 group-hover:scale-110 transition-all duration-700 ease-[0.25,1,0.5,1]" />

            <div className="flex gap-1.5 mb-10 relative z-10 items-center">
                {[...Array(5)].map((_, i) => (
                    <motion.svg
                        key={i}
                        animate={isHovered ? { scale: [1, 1.2, 1], rotate: [0, 10, 0] } : { scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className="w-4 h-4 text-white glow-star drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                ))}
                <span className="text-white/20 text-xs font-outfit font-bold tracking-widest ml-3">5.0</span>
            </div>

            <p className="text-white/80 text-[1.25rem] md:text-2xl leading-[1.6] mb-14 font-instrument flex-grow relative z-10 group-hover:text-white transition-colors duration-500">
                &quot;{t.quote}&quot;
            </p>

            <div className="flex items-center gap-5 mt-auto relative z-10 pt-8 border-t border-white/5">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-instrument text-2xl relative overflow-hidden group-hover:border-white/30 transition-colors duration-500 shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <span className="relative z-10">{t.author.charAt(0).toUpperCase()}</span>
                </div>
                <div className="flex flex-col">
                    <h4 className="font-bold text-white text-lg font-outfit tracking-wide">{t.author}</h4>
                    <p className="text-xs text-white/40 font-outfit uppercase tracking-[0.2em] mt-1">{t.role}</p>
                </div>
            </div>
        </motion.div>
    );
}
