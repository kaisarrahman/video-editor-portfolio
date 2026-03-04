"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Play, Menu, X } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

// Magnetic Button Component for premium feel
function MagneticElement({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        x.set(middleX * 0.3);
        y.set(middleY * 0.3);
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            style={{ x: springX, y: springY }}
            className="relative"
        >
            {children}
        </motion.div>
    );
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent scrolling when mobile menu is active
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleNavClick = (id: string) => {
        setIsOpen(false);
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 300); // slight delay to allow menu to close smoothly before jump
    };

    // Mobile menu animations
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const menuVars: any = {
        initial: { scaleY: 0 },
        animate: {
            scaleY: 1,
            transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] }
        },
        exit: {
            scaleY: 0,
            transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const containerVars: any = {
        initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
        open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const linkVars: any = {
        initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] } },
        open: { y: 0, transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] } }
    };

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1], // Cinematic Easing
            }}
            // Render the whole block fixed to the top
            className="fixed top-6 md:top-8 left-0 right-0 z-[100] flex justify-center px-4"
        >
            {/* The primary pill-shaped navbar */}
            <div className="relative z-[110] flex items-center justify-between w-full max-w-6xl bg-[#050505]/60 backdrop-blur-2xl border border-white/[0.08] shadow-2xl rounded-full px-6 md:px-8 py-3 w-full group transition-all duration-300">

                {/* Logo */}
                <MagneticElement>
                    <a href="#" className="flex items-center gap-3 cursor-none">
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black">
                            <Play className="w-4 h-4 ml-0.5" fill="currentColor" />
                        </div>
                        <span className="font-outfit font-bold text-lg tracking-wide hidden sm:block text-white">
                            Kaisar.
                        </span>
                    </a>
                </MagneticElement>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-10 text-sm font-medium text-white/60 font-outfit">
                    <MagneticElement>
                        <a
                            href="#work"
                            onClick={(e) => { e.preventDefault(); handleNavClick('work'); }}
                            className="hover:text-white transition-colors py-2 cursor-none"
                        >
                            Work
                        </a>
                    </MagneticElement>
                    <MagneticElement>
                        <a
                            href="#services"
                            onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}
                            className="hover:text-white transition-colors py-2 cursor-none"
                        >
                            Process
                        </a>
                    </MagneticElement>
                    <MagneticElement>
                        <a
                            href="#impact"
                            onClick={(e) => { e.preventDefault(); handleNavClick('impact'); }}
                            className="hover:text-white transition-colors py-2 cursor-none"
                        >
                            Impact
                        </a>
                    </MagneticElement>
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <MagneticElement>
                        <a
                            href="#contact"
                            onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                            className="relative cursor-none group/btn bg-white text-black px-6 py-2.5 rounded-full text-sm font-bold font-outfit hover:scale-105 transition-transform duration-300 overflow-hidden flex items-center justify-center"
                        >
                            <div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
                            <span className="relative z-10">Let&apos;s Talk</span>
                        </a>
                    </MagneticElement>
                </div>

                {/* Mobile Hamburger Toggle */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-2 focus:outline-none cursor-none relative z-[120]"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Full Screen Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed inset-[-100px] h-[120vh] w-[120vw] bg-[#050505] origin-top text-white z-[90] flex flex-col justify-center items-center"
                    >
                        {/* Decorative Background for menu to match site theme */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-white/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

                        <motion.div
                            variants={containerVars}
                            initial="initial"
                            animate="open"
                            exit="initial"
                            className="flex flex-col items-center gap-10 text-center relative z-[100]"
                        >
                            <div className="overflow-hidden">
                                <motion.div variants={linkVars}>
                                    <a
                                        href="#work"
                                        onClick={(e) => { e.preventDefault(); handleNavClick('work'); }}
                                        className="text-5xl font-instrument hover:italic transition-all duration-300"
                                    >
                                        Select Works
                                    </a>
                                </motion.div>
                            </div>

                            <div className="overflow-hidden">
                                <motion.div variants={linkVars}>
                                    <a
                                        href="#services"
                                        onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}
                                        className="text-5xl font-instrument hover:italic transition-all duration-300"
                                    >
                                        The Process
                                    </a>
                                </motion.div>
                            </div>

                            <div className="overflow-hidden">
                                <motion.div variants={linkVars}>
                                    <a
                                        href="#impact"
                                        onClick={(e) => { e.preventDefault(); handleNavClick('impact'); }}
                                        className="text-5xl font-instrument hover:italic transition-all duration-300"
                                    >
                                        Client Impact
                                    </a>
                                </motion.div>
                            </div>

                            <div className="overflow-hidden mt-6">
                                <motion.div variants={linkVars}>
                                    <a
                                        href="#contact"
                                        onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
                                        className="bg-white text-black px-10 py-5 rounded-[2rem] text-lg font-bold font-outfit tracking-wide shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:scale-105 transition-all duration-500"
                                    >
                                        Let&apos;s Talk
                                    </a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
