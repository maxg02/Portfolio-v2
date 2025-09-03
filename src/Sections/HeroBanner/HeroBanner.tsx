import React from "react";
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
        <div className="app-container">
            <div className="h-dvh flex flex-col justify-center items-center gap-8">
                <div className="text-center">
                    <h1 className="text-[13vw]/8">Max García</h1>
                    <span className="pretty-text text-[8.5vw] text-custom-red">Web Developer</span>
                </div>
                <nav className="flex w-screen justify-evenly sticky top-0">{navBar}</nav>
                <div className="absolute bottom-4 text-center">
                    <p className="opacity-50 mb-4 leading-5">
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
