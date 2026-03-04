"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import videosData from "../data/videos.json";

interface ShortVideo {
    id: string;
    title: string;
    views: string;
}

const reels: ShortVideo[] = videosData.shortForm;

export default function ReelsGrid() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
            <div className="text-center mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    Viral <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Short-Form</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-zinc-400 text-lg max-w-2xl mx-auto"
                >
                    Scroll-stopping content optimized for the algorithm and user psychology.
                </motion.p>
            </div>

            <div className="flex flex-nowrap md:grid md:grid-cols-4 gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
                {reels.map((video, index) => (
                    <motion.div
                        key={video.id + index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex-none w-[280px] md:w-auto snap-center group relative rounded-[2rem] overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl"
                    >
                        {/* Phone Mockup Wrapper for 9:16 aspect ratio */}
                        <div className="relative w-full pt-[177.77%] bg-black">
                            <iframe
                                src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1&playsinline=1`}
                                title={video.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="absolute top-0 left-0 w-full h-full border-0"
                            />

                            {/* Overlay Content */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none flex flex-col justify-end p-6">
                                <div className="flex items-center gap-2 mb-2 text-white/90">
                                    <Play fill="currentColor" className="w-4 h-4" />
                                    <span className="font-bold text-sm">{video.views} Views</span>
                                </div>
                                <h3 className="text-white font-semibold line-clamp-2 text-sm">
                                    {video.title}
                                </h3>
                            </div>
                        </div>

                        {/* Phone Notch/Dynamic Island mockup for aesthetic */}
                        <div className="absolute top-0 inset-x-0 h-7 flex justify-center pointer-events-none">
                            <div className="w-32 h-6 bg-black rounded-b-3xl"></div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
