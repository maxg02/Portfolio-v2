import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar({ className = "" }: { className?: string }) {
    const sections = ["Home", "About", "Projects", "Contact"];

    const navBar = sections.map((section) => (
        <div className="text-center" key={section}>
            <p>{section}</p>
            <FontAwesomeIcon icon={faCircle} className="opacity-25" />
        </div>
    ));

    return <nav className={"flex w-screen justify-evenly" + className}>{navBar}</nav>;
}

export default NavBar;
