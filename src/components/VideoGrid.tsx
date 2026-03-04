"use client";

import { useVideo } from "@/context/VideoContext";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import videosData from "../data/videos.json";

interface Video {
    id: string;
    title: string;
    category: string;
    views?: string;
}

const videos: Video[] = videosData.longForm;

export default function VideoGrid() {
    const { activeVideoId, setActiveVideoId } = useVideo();

    return (
        <section id="work" className="py-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
            <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <h2 className="text-5xl md:text-[5rem] leading-[0.9] font-instrument text-white mb-6 tracking-[-0.02em]">
                        Select Works.
                    </h2>
                    <p className="text-white/50 text-lg max-w-xl font-outfit font-light leading-relaxed tracking-wide">
                        High-retention, algorithm-friendly edits designed exclusively for top-tier creators and commercial platforms.
                    </p>
                </div>
            </div>

            {/* Editorial Asymmetrical Grid layout (Strict 16:9 via 12-col grid) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 group/grid">
                {videos.map((video, index) => {
                    const isPlaying = activeVideoId === video.id;
                    const colSpan = (index === 0 || index === 3) ? "md:col-span-8" : "md:col-span-4";

                    return (
                        <motion.div
                            key={video.id + index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
                            className={`group/card relative bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-4 flex flex-col transition-all duration-700 hover:!opacity-100 group-hover/grid:opacity-40 group-hover/grid:blur-sm hover:!blur-none ${colSpan}`}
                        >
                            {/* Strict 16:9 Aspect Ratio Wrapper */}
                            <div className="relative w-full aspect-video bg-[#020202] rounded-3xl overflow-hidden mb-6 shadow-[0_0_40px_rgba(255,255,255,0.02)] border border-white/5 video-hover-target" onClick={() => setActiveVideoId(video.id)}>

                                {!isPlaying ? (
                                    <>
                                        <Image
                                            src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                            alt={video.title}
                                            fill
                                            className="object-cover opacity-60 group-hover/card:opacity-100 transition-opacity duration-700 ease-[0.25,1,0.5,1]"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                        {/* Overlay Content */}
                                        <div className="absolute inset-0 bg-black/10 group-hover/card:bg-black/40 transition-colors duration-500 cursor-none" />

                                        {/* View Count Overlay on Thumbnail */}
                                        {video.views && (
                                            <div className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 pointer-events-none">
                                                <Play className="w-3 h-3 text-white fill-white" />
                                                <span className="text-xs font-medium text-white tracking-widest font-outfit">{video.views}</span>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    /* Active Player */
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

                            <div className="px-4 flex-grow flex flex-col justify-end">
                                <div className="flex items-center justify-between mb-3 text-sm">
                                    <div className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#EFECE6]/40 shadow-[0_0_10px_rgba(239,236,230,0.5)]" />
                                        <span className="text-xs font-semibold text-[#EFECE6]/50 uppercase tracking-[0.2em] font-outfit">
                                            {video.category}
                                        </span>
                                    </div>
                                </div>
                                <h3 className={`font-instrument text-[#EFECE6]/90 group-hover/card:text-white transition-colors cursor-none ${index === 0 || index === 3 ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"}`} onClick={() => setActiveVideoId(video.id)}>
                                    {video.title}
                                </h3>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section >
    );
}
