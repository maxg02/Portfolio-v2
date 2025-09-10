import "./App.css";
import About from "./Sections/About/About";
import Contact from "./Sections/Contact/Contact";
import Projects from "./Sections/Projects/Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./Components/NavBar";

function App() {
    window.onscroll = () => {
        const nav = document.querySelector("nav");
        if (nav && window.scrollY > nav?.offsetTop) {
            nav?.classList.add("bg-white", "shadow-md", "sticky", "top-0", "z-50");
        } else {
            nav?.style.top = document.getElementById("banner")?.offsetTop! + "px";
            nav?.classList.remove("bg-white", "shadow-md", "sticky", "top-0", "z-50");
        }
    };

    return (
        <div className="relative">
            <NavBar className="absolute w-screen left-0 right-0" />
            <section className="app-container h-dvh flex flex-col justify-center items-center gap-8 ">
                <div className="text-center" id="banner">
                    <h1 className="text-[13vw] leading-none">Max García</h1>
                    <span className="pretty-text text-[8.5vw] text-custom-red leading-none">
                        Web Developer
                    </span>
                </div>
                <div className="absolute bottom-6 text-center">
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
            </section>

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
