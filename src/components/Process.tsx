"use client";

import { motion } from "framer-motion";
import { FolderUp, Wand2, MessageSquareCheck, Rocket } from "lucide-react";

export default function Process() {
    const steps = [
        {
            icon: <FolderUp className="w-6 h-6" />,
            title: "Upload",
            description: "Send over your raw footage and assets via a secure, organized portal."
        },
        {
            icon: <Wand2 className="w-6 h-6" />,
            title: "The Edit",
            description: "I get to work pacing, cutting, and adding high-retention visual hooks."
        },
        {
            icon: <MessageSquareCheck className="w-6 h-6" />,
            title: "Review",
            description: "You receive the first draft via Frame.io for precise, timestamped feedback."
        },
        {
            icon: <Rocket className="w-6 h-6" />,
            title: "Delivery",
            description: "Final files are delivered in all necessary formats, ready for viral distribution."
        }
    ];

    return (
        <section id="services" className="py-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-24 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
                    className="text-5xl md:text-[5rem] leading-[0.9] font-instrument text-white mb-6 tracking-[-0.02em]"
                >
                    The Methodology.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
                    className="text-white/50 text-lg max-w-2xl mx-auto font-outfit font-light tracking-wide leading-relaxed"
                >
                    A frictionless, elite workflow designed to save you time and manufacture viral, retention-heavy content consistently.
                </motion.p>
            </div>

            <div className="relative z-10">
                {/* Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute top-[68px] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent z-0" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.9, delay: index * 0.15, ease: [0.25, 1, 0.5, 1] }}
                            className="bg-white/[0.02] rounded-[2rem] p-8 border border-white/[0.05] shadow-[0_0_30px_rgba(255,255,255,0.01)] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 relative overflow-hidden group cursor-none"
                        >
                            {/* Premium outlined numbering background */}
                            <div
                                className="absolute -right-2 -bottom-4 text-[160px] leading-none font-instrument font-black z-0 pointer-events-none select-none opacity-[0.15] group-hover:opacity-30 group-hover:scale-110 transition-all duration-700 ease-[0.25,1,0.5,1]"
                                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)", color: "transparent" }}
                            >
                                0{index + 1}
                            </div>

                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-full bg-[#050505] border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-500 ease-[0.25,1,0.5,1]">
                                    {step.icon}
                                </div>
                                <h3 className="text-3xl font-instrument text-white mb-4 tracking-tight">
                                    {step.title}
                                </h3>
                                <p className="text-white/50 font-outfit font-light leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-white/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
        </section>
    );
}
