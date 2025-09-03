import "./App.css";
import About from "./Sections/About/About";
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
        </div>
    );
}

export default App;
