import "./App.css";
import About from "./Sections/About/About";
import Contact from "./Sections/Contact/Contact";
import HeroBanner from "./Sections/HeroBanner/HeroBanner";
import Projects from "./Sections/Projects/Projects";

function App() {
    return (
        <div className="overflow-x-hidden">
            <div>
                <HeroBanner />
            </div>
            <div>
                <About />
            </div>
            <div>
                <Projects />
            </div>
            <div>
                <Contact />
            </div>
            <footer className="py-4 text-center">
                <p>Design and Built by Max García</p>
            </footer>
        </div>
    );
}

export default App;
