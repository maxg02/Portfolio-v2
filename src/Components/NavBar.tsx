import { useLayoutEffect, useRef, useState } from "react";

function NavBar() {
    const navRef = useRef<HTMLDivElement | null>(null);
    const [currentSection, setCurrentSection] = useState<(typeof sections)[number]>("Home");

    const sections = ["Home", "About", "Projects", "Contact"];

    useLayoutEffect(() => {
        if (!navRef) return;

        const navbar = navRef.current;

        const observer = new IntersectionObserver(
            ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
            { threshold: [1] }
        );

        observer.observe(navbar!);

        // set current section based on scroll position
        const handleScroll = () => {
            const scrollPosition = window.scrollY + (navbar?.offsetHeight || 0) + 1;
            let selected = "Home";
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition) {
                    selected = section;
                }
            }
            setCurrentSection(selected as (typeof sections)[number]);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
    }, []);

    return (
        <nav ref={navRef} className="sticky top-[-1px] w-full py-2 z-50 bg-[#242424]">
            <div className="flex w-full mx-auto justify-evenly max-w-[30rem] xl:max-w-[36rem]">
                {sections.map((section) => (
                    <a
                        href={`#${section}`}
                        className="flex flex-col items-center gap-y-1 px-6"
                        key={section}
                    >
                        <p>{section}</p>
                        <div
                            className={`nav-dot ${currentSection === section && "bg-custom-red!"}`}
                        ></div>
                    </a>
                ))}
            </div>
        </nav>
    );
}

export default NavBar;
