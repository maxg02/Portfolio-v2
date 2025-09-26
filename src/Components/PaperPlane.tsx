import React, { useLayoutEffect, useRef } from "react";
import planeSvg from "../assets/plane.svg";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

function PaperPlane({ pathD }: { pathD: string }) {
    const planeRef = useRef<HTMLImageElement | null>(null);
    const pathRef = useRef<SVGPathElement | null>(null);

    useLayoutEffect(() => {
        if (!planeRef.current || !pathRef.current) return;

        gsap.to(planeRef.current, {
            duration: 6, // seconds per loop
            repeat: -1, // infinite
            repeatDelay: 4,
            ease: "none",
            motionPath: {
                path: pathRef.current,
                align: pathRef.current,
                alignOrigin: [0.5, 0.5], // plane center sticks to path
                autoRotate: true, // rotate along curve
            },
        });
    }, [pathRef]);

    return (
        <>
            <div className="absolute top-0 left-0 w-screen h-screen z-10 overflow-hidden bg-amber-200">
                <svg width="100%" height="100%" viewBox="0 0 2000 1000" preserveAspectRatio="none">
                    <path
                        opacity=".5"
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
            <div className="absolute w-[40px] h-[40px] top-0 left-0 z-10" ref={planeRef}>
                <img src={planeSvg} className="rotate-90 drop-shadow-[15px_4px_2px_rgba(30,30,30,0.8)]" />
            </div>
        </>
    );
}

export default PaperPlane;
