import "./App.css";
import About from "./Sections/About/About";
import Contact from "./Sections/Contact/Contact";
import Projects from "./Sections/Projects/Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./Components/NavBar";
import { useLayoutEffect, useRef } from "react";
import PaperPlane from "./Components/PaperPlane";

function App() {
    const banner = useRef<HTMLDivElement | null>(null);
    const scrollArrow = useRef<HTMLDivElement | null>(null);
    const pathRef = useRef<SVGPathElement | null>(null);

    useLayoutEffect(() => {
        const navBar = document.querySelector("nav");
        if (!banner.current || !navBar || !scrollArrow) return;

        const update = () => {
            const bannerNavHeight = banner.current!.offsetHeight + navBar.offsetHeight;

            banner.current!.style.marginTop = `calc(50dvh - ${bannerNavHeight / 2}px)`;
            scrollArrow.current!.style.marginTop = `calc(50dvh - ${
                bannerNavHeight / 2 + scrollArrow.current!.offsetHeight
            }px)`;
        };
        update();

        window.addEventListener("resize", update);
    }, []);

    return (
        <div id="Home" className="flex flex-col items-center relative">
            <div ref={banner} className="text-center pb-8 md:pb-28 xl:pb-8 2xl:pb-20">
                <h1 className="text-[13vw] leading-none xl:text-[10vw]">Max García</h1>
                <span className="pretty-text text-[8.5vw] text-custom-red leading-none xl:text-[4.5vw]">
                    Web Developer
                </span>
            </div>
            <NavBar />
            <div ref={scrollArrow} className="text-center py-4 mb-6">
                <p className="opacity-50 mb-5 leading-5 text-center">
                    Let's know each
                    <br /> other
                </p>
                <FontAwesomeIcon
                    icon={faArrowDown}
                    className="text-custom-red animate-bounce"
                    size={"3x"}
                />
            </div>
            <div className="absolute top-0 left-0 w-screen h-screen z-10 overflow-hidden">
                <svg width="100%" height="100%" viewBox="0 0 2000 1000" preserveAspectRatio="none">
                    <path
                        opacity=".5"
                        d="M 1200 0 C 700 600 300 500 0 900"
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

            <PaperPlane pathRef={pathRef} />

            <section id="About">
                <About />
            </section>
            <section id="Projects">
                <Projects />
            </section>
            <section id="Contact">
                <Contact />
            </section>
        </div>
    );
}

export default App;
