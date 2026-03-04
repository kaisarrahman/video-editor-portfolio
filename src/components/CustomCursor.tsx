"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHoveringVideo, setIsHoveringVideo] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovering over a video container
            if (target.closest(".video-hover-target")) {
                setIsHoveringVideo(true);
            } else {
                setIsHoveringVideo(false);
            }
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 z-[9999] flex items-center justify-center pointer-events-none mix-blend-difference"
            animate={{
                x: mousePosition.x - (isHoveringVideo ? 40 : 8),
                y: mousePosition.y - (isHoveringVideo ? 40 : 8),
                width: isHoveringVideo ? 80 : 16,
                height: isHoveringVideo ? 80 : 16,
            }}
            transition={{
                type: "spring",
                stiffness: 700,
                damping: 40,
                mass: 0.5,
            }}
        >
            <div
                className={`w-full h-full rounded-full bg-white transition-opacity duration-300 flex items-center justify-center ${isHoveringVideo ? "opacity-100 mix-blend-normal text-black" : "opacity-100"
                    }`}
            >
                {isHoveringVideo && (
                    <span className="text-xs font-bold tracking-widest uppercase ml-[2px]">
                        Play
                    </span>
                )}
            </div>
        </motion.div>
    );
}
