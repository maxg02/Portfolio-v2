import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function HeroBanner() {
    return (
        <div className="app-container">
            <div className="h-dvh flex flex-col justify-center items-center gap-8">
                <div className="text-center">
                    <h1 className="text-[13vw]/8">Max García</h1>
                    <span className="pretty-text text-[8.5vw] text-custom-red">Web Developer</span>
                </div>
                <nav className="flex w-full justify-evenly">
                    <div className="flex flex-col items-center gap-y-1">
                        <p>Home</p>
                        <FontAwesomeIcon icon={faCircle} className="opacity-25" />
                    </div>
                    <div>
                        <p>About</p>
                        <FontAwesomeIcon icon={faCircle} className="opacity-25" />
                    </div>
                    <div>
                        <p>Projects</p>
                        <FontAwesomeIcon icon={faCircle} className="opacity-25" />
                    </div>
                    <div>
                        <p>Contact</p>
                        <FontAwesomeIcon icon={faCircle} className="opacity-25" />
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default HeroBanner;
