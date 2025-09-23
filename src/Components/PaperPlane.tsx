import React, { useLayoutEffect, useRef } from "react";
import planeSvg from "../assets/plane.svg";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);

function PaperPlane({ pathRef }: { pathRef: React.RefObject<SVGPathElement | null> }) {
    const planeRef = useRef<HTMLImageElement | null>(null);

    useLayoutEffect(() => {
        if (!planeRef.current || !pathRef.current) return;

        gsap.to(planeRef.current, {
            duration: 6, // seconds per loop
            repeat: -1, // infinite
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
        <div className="absolute w-[40px] h-[40px] top-0 left-0 z-10" ref={planeRef}>
            <img src={planeSvg} className="rotate-90 drop-shadow-[15px_5px_3px_rgba(30,30,30,0.6)]" />
        </div>
    );
}

export default PaperPlane;
