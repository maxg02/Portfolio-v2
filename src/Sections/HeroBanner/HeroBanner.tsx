import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faCircle } from "@fortawesome/free-solid-svg-icons";

function HeroBanner() {
    const sections = ["Home", "About", "Projects", "Contact"];

    const navBar = sections.map((section) => (
        <div className="text-center" key={section}>
            <p>{section}</p>
            <FontAwesomeIcon icon={faCircle} className="opacity-25" />
        </div>
    ));

    return (
        <div className="app-container h-dvh">
            <div className="flex flex-col justify-center items-center gap-8 h-full">
                <div className="text-center">
                    <h1 className="text-[13vw] leading-none">Max García</h1>
                    <span className="pretty-text text-[8.5vw] text-custom-red leading-none">
                        Web Developer
                    </span>
                </div>
                <nav className="flex w-screen justify-evenly sticky top-0">{navBar}</nav>
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
            </div>
        </div>
    );
}

export default HeroBanner;
