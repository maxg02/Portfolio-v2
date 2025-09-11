import { useLayoutEffect, useRef } from "react";

function NavBar() {
    const navRef = useRef<HTMLDivElement | null>(null);

    const sections = ["Home", "About", "Projects", "Contact"];

    useLayoutEffect(() => {
        if (!navRef) return;

        const navbar = navRef.current;

        const observer = new IntersectionObserver(
            ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
            { threshold: [1] }
        );

        observer.observe(navbar!);
    }, []);

    return (
        <nav ref={navRef} className="sticky top-[-1px] w-full py-2 z-50 bg-[#242424]">
            <div className="flex w-full mx-auto justify-evenly max-w-[30rem]">
                {sections.map((section) => (
                    <div className="flex flex-col items-center gap-y-1" key={section}>
                        <p>{section}</p>
                        <div className="nav-dot"></div>
                    </div>
                ))}
            </div>
        </nav>
    );
}

export default NavBar;
