import "./App.css";
import About from "./Sections/About/About";
import Contact from "./Sections/Contact/Contact";
import Projects from "./Sections/Projects/Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./Components/NavBar";
import { useLayoutEffect, useRef } from "react";

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
        <div id="appContainer">
            <div ref={banner} className="text-center pb-8 md:pb-28 xl:pb-8">
                <h1 className="text-[13vw] leading-none xl:text-[10vw]">Max García</h1>
                <span className="pretty-text text-[8.5vw] text-custom-red leading-none xl:text-[4.5vw]">
                    Web Developer
                </span>
            </div>
            <NavBar />
            <div ref={scrollArrow} className="text-center py-4">
                <p className="opacity-50 mb-5 leading-5 text-center">
                    Let's know each
                    <br /> other
                </p>
                <FontAwesomeIcon icon={faArrowDown} className="text-custom-red" size={"3x"} />
            </div>

            <section>
                <About />
            </section>
            <section>
                <Projects />
            </section>
            <section>
                <Contact />
            </section>
            <footer className="py-4 text-center">
                <p>Design and Built by Max García</p>
            </footer>
        </div>
    );
}

export default App;
