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

            <PaperPlane pathD="M 1200 -30 C 700 700 300 500 -35 900" className="h-screen!" duration={4} />

            <section id="About">
                <About />
                <PaperPlane pathD="M -30 70 C 1300 300 1200 900 2035 900" />
            </section>
            <section id="Projects">
                <Projects />
                <PaperPlane pathD="M 2035 50 C 800 80 1000 670 -35 700" />
            </section>
            <section id="Contact">
                <Contact />
                <PaperPlane pathD="M 2035 600 C 1200 1700 1000 500 -35 400" />
            </section>
        </div>
    );
}

export default App;
