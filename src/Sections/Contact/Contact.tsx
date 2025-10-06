import { HiOutlineMail } from "react-icons/hi";
import { VscGithub } from "react-icons/vsc";
import { PiLinkedinLogoBold } from "react-icons/pi";
import "./styles.css";
import { IconContext } from "react-icons";

function Contact() {
    return (
        <div className="app-container h-dvh flex items-center justify-center flex-col gap-y-9 relative">
            <div className="grid grid-cols-2 grid-rows-2 text-[max(3rem, 7.5vw)] gap-4 rotate-45 aspect-square w-[max(13rem,30vw)] xl:w-[max(10rem,20vw)]">
                <IconContext.Provider value={{ className: "-rotate-45 text-inherit", size: "50%" }}>
                    <a href="mailto:maxdanielgs@hotmail.com" target="_blank" rel="noreferrer">
                        <div className="contact-button hover:-translate-2 bg-custom-red xl:hover:bg-custom-red!">
                            <HiOutlineMail />
                        </div>
                    </a>
                    <a href="https://github.com/maxg02" target="_blank" rel="noreferrer">
                        <div className="contact-button hover:-translate-y-2 hover:translate-x-2 bg-custom-red xl:hover:bg-custom-red!">
                            <VscGithub />
                        </div>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/max-daniel-garcia-sanchez-b9658a224"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="contact-button hover:translate-y-2 hover:-translate-x-2 bg-custom-red xl:hover:bg-custom-red!">
                            <PiLinkedinLogoBold />
                        </div>
                    </a>
                </IconContext.Provider>
            </div>
            <h1 className="text-[11vw] leading-2 xl:text-[5vw]">Contact Me!</h1>
            <footer className="py-4 text-center justify-self-end absolute bottom-0">
                <p>Design and Built by Max García</p>
            </footer>
        </div>
    );
}

export default Contact;
