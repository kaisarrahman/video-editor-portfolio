"use client";

import { useVideo } from "@/context/VideoContext";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import videosData from "../data/videos.json";

interface ShortVideo {
    id: string;
    title: string;
    views: string;
}

const reels: ShortVideo[] = videosData.shortForm;

export default function ReelsGrid() {
    const { activeVideoId, setActiveVideoId } = useVideo();

    return (
        <section className="py-32 overflow-hidden relative z-10">
            <div className="text-center mb-24 px-4 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    className="text-5xl md:text-7xl font-instrument text-white mb-6 tracking-tight"
                >
                    Short-Form. High Impact.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                    className="text-white/50 text-lg max-w-2xl mx-auto font-outfit"
                >
                    Scroll-stopping vertical content optimized for the algorithm, designed to keep viewers hooked from the first frame.
                </motion.p>
            </div>

            <div className="relative z-10 w-full group/reels">
                {/* Horizontal scroll native implementation for premium tracking */}
                <div className="flex gap-6 md:gap-10 px-6 md:px-12 pb-12 overflow-x-auto snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden items-center justify-start xl:justify-center">
                    {reels.map((video, index) => {
                        const currentId = `reel-${video.id}`;
                        const isPlaying = activeVideoId === currentId;

                        return (
                            <motion.div
                                key={currentId}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
                                className="flex-none w-[280px] sm:w-[320px] md:w-[340px] aspect-[9/16] snap-center group/card relative rounded-[2rem] overflow-hidden bg-black shadow-2xl border border-white/10 video-hover-target cursor-none transition-all duration-700 ease-[0.76,0,0.24,1] group-hover/reels:opacity-40 hover:!opacity-100 hover:scale-[1.02]"
                                onClick={() => setActiveVideoId(currentId)}
                            >
                                <div className="relative w-full h-full bg-zinc-900">
                                    {!isPlaying ? (
                                        <>
                                            <Image
                                                src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                                alt={video.title}
                                                fill
                                                className="object-cover opacity-70 group-hover/card:opacity-100 transition-opacity duration-700 ease-[0.76,0,0.24,1]"
                                                sizes="(max-width: 768px) 100vw, 340px"
                                            />
                                            {/* Overlay Content */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent flex flex-col justify-end p-8 z-10 transition-colors duration-700 ease-[0.76,0,0.24,1] group-hover/card:from-[#050505]/80">

                                                <div className="transform transition-transform duration-700 ease-[0.76,0,0.24,1] translate-y-4 group-hover/card:translate-y-0">
                                                    <div className="flex items-center gap-4 mb-5 text-white/90">
                                                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover/card:bg-white group-hover/card:text-black transition-colors duration-500">
                                                            <Play fill="currentColor" className="w-5 h-5 ml-1 transition-colors duration-500" />
                                                        </div>
                                                        <span className="font-semibold text-xs tracking-[0.2em] font-outfit uppercase text-white/70 group-hover/card:text-white transition-colors duration-500">{video.views} Views</span>
                                                    </div>
                                                    <h3 className="text-white font-instrument text-2xl sm:text-3xl leading-[1.1]">
                                                        {video.title}
                                                    </h3>
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <div className="absolute inset-0 w-full h-full">
                                            <iframe
                                                src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&autoplay=1&mute=0&loop=1&playlist=${video.id}&controls=0&showinfo=0&disablekb=1&iv_load_policy=3&playsinline=1`}
                                                title={video.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                className="absolute top-0 left-0 w-full h-full border-0"
                                                loading="lazy"
                                            />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[70vw] h-[30vw] bg-white/5 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
        </section>
    );
}
