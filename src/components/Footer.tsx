"use client";

import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">

                <motion.h2
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
                    className="text-[14vw] font-instrument font-bold tracking-[-0.04em] mb-4 leading-[0.8] text-white"
                >
                    Ready to <br className="hidden md:block" />
                    <span className="italic text-white/40 font-light">scale?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
                    className="text-xl md:text-2xl text-white/40 font-outfit font-light tracking-wide max-w-2xl mb-24"
                >
                    Let&apos;s create something unforgettable together.
                </motion.p>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mt-20 mb-8" />

                <div className="w-full flex flex-col md:flex-row justify-between items-center text-white/30 text-sm font-outfit tracking-widest uppercase gap-6">
                    <p>© {new Date().getFullYear()} Kaisar. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="https://twitter.com/thekaisarrahman" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-none">Twitter</a>
                        <a href="https://instagram.com/thekaisarrahman" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-none">Instagram</a>
                        <a href="https://youtube.com/@thekaisarrahman" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-none">YouTube</a>
                        <a href="https://linkedin.com/in/thekaisarrahman" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-none">LinkedIn</a>
                    </div>
                </div>
            </div>

            {/* Massive background glow */}
            <div className="absolute -bottom-[20vh] left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-white/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
        </footer>
    );
}
