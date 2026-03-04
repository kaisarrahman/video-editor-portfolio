"use client";

import React from "react";
import Image from "next/image";
import { useVideo } from "@/context/VideoContext";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Instagram, Youtube, Play } from "lucide-react";

export default function Hero() {
  const showcaseVideoId = "jQ8bPTCuRbg";
  const { activeVideoId, setActiveVideoId } = useVideo();
  const isPlaying = activeVideoId === showcaseVideoId;

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);

  // Premium staggering
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wordVars: any = {
    hidden: { opacity: 0, y: 50, filter: "blur(4px)", rotateX: -20 },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      rotateX: 0,
      transition: { duration: 0.9, ease: [0.25, 1, 0.5, 1] }
    },
  };

  return (
    <section className="relative min-h-screen pt-40 pb-24 flex items-center overflow-hidden px-6 lg:px-12">
      {/* Immersive Cinematic Backdrops with subtle scroll parallax */}
      <motion.div style={{ y: y1 }} className="absolute top-[10%] left-[15%] w-[45vw] h-[45vw] bg-zinc-600/10 blur-[140px] rounded-full pointer-events-none mix-blend-screen" />
      <motion.div style={{ y: y2 }} className="absolute bottom-[5%] right-[10%] w-[35vw] h-[35vw] bg-white/5 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      {/* Grid Container: strict sizing for perfect symmetry */}
      <div className="max-w-[1240px] mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12 relative z-10 mt-12 lg:mt-0">

        {/* LEFT COLUMN: Typography (flex-1 forces it to naturally fill left side) */}
        <div className="w-full lg:w-auto flex-1 flex flex-col items-start xl:max-w-2xl">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="inline-flex items-center gap-3 mb-10 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-[0_0_20px_rgba(255,255,255,0.02)]"
          >
            <div className="relative flex items-center justify-center w-2 h-2">
              <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-50" />
              <div className="relative w-1.5 h-1.5 bg-white rounded-full" />
            </div>
            <span className="text-[11px] font-medium tracking-[0.25em] uppercase text-white/80 font-outfit">Accepting 2026 Clients</span>
          </motion.div>

          <motion.h1
            variants={containerVars}
            initial="hidden"
            animate="show"
            className="text-6xl sm:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-instrument leading-[0.9] tracking-[-0.02em] text-white flex flex-col"
            style={{ perspective: "1000px" }}
          >
            <motion.span variants={wordVars} className="origin-bottom">Pure cinematic</motion.span>
            <motion.span variants={wordVars} className="italic text-white/70 origin-bottom pr-4">storytelling</motion.span>
            <motion.span variants={wordVars} className="origin-bottom">for brands.</motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="text-lg md:text-xl text-white/40 mt-8 mb-12 max-w-md leading-relaxed font-outfit font-light"
          >
            We transform raw footage into high-retention, viral content that commands attention and drives premium engagement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col sm:flex-row items-center gap-10"
          >
            <a
              href="#work"
              className="group flex flex-row items-center justify-center gap-4 cursor-none"
            >
              <div className="w-14 h-14 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-white group-hover:scale-105 transition-all duration-500 ease-[0.76,0,0.24,1] relative overflow-hidden">
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
                <ArrowUpRight className="w-5 h-5 text-white group-hover:text-black transition-colors duration-500 relative z-10" />
              </div>
              <span className="text-sm font-semibold tracking-widest uppercase font-outfit text-white/90 group-hover:text-white transition-colors">See Work</span>
            </a>

            <div className="flex gap-6 items-center w-full sm:w-auto justify-center sm:justify-start">
              <a href="https://instagram.com/thekaisarrahman" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-300 cursor-none">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com/@thekaisarrahman" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 transition-all duration-300 cursor-none">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Video (strictly constrained to specific widths to guard layout balance) */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
          style={{ perspective: "1200px" }}
          className="relative w-full max-w-[340px] xl:max-w-[400px] shrink-0"
        >
          {/* Aesthetic Backglow */}
          <div className="absolute inset-0 bg-white/5 blur-[100px] rounded-full scale-[1.2] pointer-events-none" />

          {/* Video Device/Frame Wrapper */}
          <div className="relative aspect-[9/16] w-full rounded-[2rem] bg-[#050505] p-2 shadow-[0_0_80px_rgba(255,255,255,0.03),inset_0_1px_1px_rgba(255,255,255,0.1)] border border-white/5 group video-hover-target overflow-hidden">

            <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-black cursor-none" onClick={() => !isPlaying && setActiveVideoId(showcaseVideoId)}>
              {!isPlaying ? (
                <>
                  <Image
                    src={`https://img.youtube.com/vi/${showcaseVideoId}/maxresdefault.jpg`}
                    alt="Hero Showreel Thumbnail"
                    fill
                    priority
                    className="object-cover transition-transform duration-[1.5s] ease-[0.76,0,0.24,1] group-hover/video:scale-[1.03] opacity-80"
                  />
                  {/* Play Button Overlay for playstate */}
                  < div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent flex flex-col justify-end p-8 opacity-100 transition-opacity duration-500" >
                    <div className="flex flex-col gap-4 items-start transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-[0.25,1,0.5,1]">
                      <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center border border-white/20 shadow-2xl group-hover:scale-110 group-hover:bg-white transition-all duration-500 text-white group-hover:text-black">
                        <Play className="w-5 h-5 ml-1" fill="currentColor" />
                      </div>
                      <div>
                        <h3 className="text-white font-outfit font-semibold tracking-wide text-lg leading-tight mb-1 drop-shadow-md">Current Showreel</h3>
                        <p className="text-white/60 text-xs font-outfit uppercase tracking-[0.2em]">2026 Edition</p>
                      </div>
                    </div>
                  </div >
                </>
              ) : (
                <div className="absolute inset-0 w-full h-full">
                  <iframe
                    src={`https://www.youtube.com/embed/${showcaseVideoId}?rel=0&modestbranding=1&autoplay=1&mute=0&loop=1&playlist=${showcaseVideoId}&controls=0&showinfo=0&disablekb=1&iv_load_policy=3&playsinline=1`}
                    title="Current Showreel"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="absolute top-0 left-0 w-full h-full border-0 scale-[1.01]"
                  />
                </div>
              )}
            </div >
          </div >
        </motion.div >

      </div >
    </section >
  );
}
