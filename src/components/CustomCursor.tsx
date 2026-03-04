"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHoveringVideo, setIsHoveringVideo] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        // Strict check to disable custom cursor entirely on mobile/touch devices
        if (typeof window !== "undefined") {
            const hasTouch = window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window || navigator.maxTouchPoints > 0;
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsTouchDevice(hasTouch);
            if (hasTouch) return;
        }

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target && target.closest(".video-hover-target")) {
                setIsHoveringVideo(true);
            } else {
                setIsHoveringVideo(false);
            }
        };

        // If the user clicks into an iframe (like standard Youtube player), the window loses focus.
        // We must hide the cursor so it doesn't get permanently stuck over the video.
        const handleBlur = () => {
            setIsVisible(false);
            setIsHoveringVideo(false);
        };

        // Reset when user clicks
        const handleClick = () => {
            setIsHoveringVideo(false);
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("blur", handleBlur);
        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("blur", handleBlur);
            window.removeEventListener("click", handleClick);
        };
    }, [isVisible]);

    // Do not render anything at all on mobile devices
    if (isTouchDevice || !isVisible) return null;

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
