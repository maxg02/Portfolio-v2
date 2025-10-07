import { useLayoutEffect, useRef, useState } from "react";

const sections = ["Home", "About", "Projects", "Contact"] as const;
type Section = (typeof sections)[number];

function NavBar() {
    const navRef = useRef<HTMLDivElement | null>(null);
    const [currentSection, setCurrentSection] = useState<Section>("Home");
    const sectionRefsRef = useRef<Record<Section, HTMLElement | null>>(
        {} as Record<Section, HTMLElement | null>
    );

    useLayoutEffect(() => {
        if (!navRef.current) return;

        const navbar = navRef.current;

        const observer = new IntersectionObserver(
            ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
            { threshold: [1] }
        );

        observer.observe(navbar);

        // Cache section refs
        sections.forEach((section) => {
            sectionRefsRef.current[section] = document.getElementById(section);
        });

        // Get adjusted scroll position for a section
        const getAdjustedPosition = (section: Section) => {
            const element = sectionRefsRef.current[section];
            const navbarHeight = navbar?.offsetHeight || 0;
            if (!element) return 0;
            return section === "Contact" ? element.offsetTop : element.offsetTop - navbarHeight + 2;
        };

        // Optimized scroll handler
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            let selected: Section = "Home";

            for (const section of sections) {
                const adjustedPosition = getAdjustedPosition(section);
                if (scrollPosition >= adjustedPosition - 5) {
                    // Small threshold for better detection
                    selected = section;
                }
            }
            setCurrentSection(selected);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
    }, []);

    const scrollToSection = (section: Section) => {
        const element = sectionRefsRef.current[section];
        const navbar = navRef.current;
        if (element && navbar) {
            const targetPosition =
                section === "Contact" ? element.offsetTop : element.offsetTop - navbar.offsetHeight + 2;

            window.scroll({
                top: targetPosition,
                behavior: "smooth",
            });

            // Update current section immediately
            setCurrentSection(section);
        }
    };

    return (
        <nav ref={navRef} className="sticky top-[-1px] w-full py-2 bg-[#242424]">
            <div className="flex w-full mx-auto justify-evenly max-w-[30rem] xl:max-w-[36rem]">
                {sections.map((section) => (
                    <a
                        onClick={() => scrollToSection(section)}
                        className="flex flex-col items-center gap-y-1 px-6 cursor-pointer"
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
