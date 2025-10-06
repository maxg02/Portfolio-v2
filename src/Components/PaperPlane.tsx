import React, { useLayoutEffect, useRef } from "react";
import planeSvg from "../assets/plane.svg";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

interface PaperPlaneProps {
    pathD: string;
    className?: string;
    duration?: number; // optional, control speed
}

function PaperPlane({ pathD, className = "", duration = 6 }: PaperPlaneProps) {
    const planeRef = useRef<HTMLImageElement | null>(null);
    const pathRef = useRef<SVGPathElement | null>(null);

    useLayoutEffect(() => {
        if (!planeRef.current || !pathRef.current) return;

        let anim: gsap.core.Tween;

        // Delay creation of animation to ensure DOM is ready
        const initAnimation = () => {
            // Create GSAP animation
            anim = gsap.to(planeRef.current!, {
                duration,
                repeat: -1,
                ease: "none",
                motionPath: {
                    path: pathRef.current!,
                    align: pathRef.current!,
                    alignOrigin: [0.5, 0.5],
                    autoRotate: true,
                },
                lazy: false,
            });

            // Force recalculation to ensure proper alignment
            anim.invalidate();
            anim.restart();
        };

        // Initialize after a short delay to ensure proper rendering
        const initTimeout = setTimeout(initAnimation, 100);

        // Recalculate on window resize with debounce
        let resizeTimeout: ReturnType<typeof setTimeout>;
        const handleResize = () => {
            if (resizeTimeout) {
                clearTimeout(resizeTimeout);
            }
            resizeTimeout = setTimeout(() => {
                if (anim) {
                    anim.invalidate();
                    anim.restart();
                }
            }, 100);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            clearTimeout(initTimeout);
            if (resizeTimeout) {
                clearTimeout(resizeTimeout);
            }
            window.removeEventListener("resize", handleResize);
            if (anim) {
                anim.kill();
            }
        };
    }, [pathRef, duration]);

    return (
        <>
            <div
                className={`absolute top-0 left-0 w-screen h-full z-10 overflow-hidden pointer-events-none ${className}`}
            >
                <svg width="100%" height="100%" viewBox="0 0 2000 1000" preserveAspectRatio="none">
                    <path
                        opacity=".1"
                        d={pathD}
                        stroke="#BE3C45"
                        stroke-width="4"
                        stroke-dasharray="23 23"
                        id="route1"
                        fill="none"
                        vectorEffect={"non-scaling-stroke"}
                        ref={pathRef}
                    />
                </svg>
            </div>
            <div
                className="absolute w-[40px] h-[40px] top-0 left-0 z-10 origin-center transform"
                ref={planeRef}
            >
                <img
                    src={planeSvg}
                    className="rotate-90 drop-shadow-[15px_4px_2px_rgba(30,30,30,0.8)] transform origin-center"
                />
            </div>
        </>
    );
}

export default PaperPlane;
