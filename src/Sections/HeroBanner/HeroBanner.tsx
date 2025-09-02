import React from "react";

function HeroBanner() {
    return (
        <div className="app-container">
            <div className="h-dvh flex flex-col justify-center items-center gap-8">
                <div>
                    <h1>Max García</h1>
                    <h2>Web Developer</h2>
                </div>
                <nav>
                    <ul className="flex gap-4 bg-red-300">
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default HeroBanner;
