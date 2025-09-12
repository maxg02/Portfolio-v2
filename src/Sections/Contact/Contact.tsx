import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { VscGithub } from "react-icons/vsc";
import { PiLinkedinLogoBold } from "react-icons/pi";
import "./styles.css";

function Contact() {
    return (
        <div className="app-container h-dvh flex items-center justify-center flex-col gap-y-9">
            <div className="grid grid-cols-2 grid-rows-2 gap-4 rotate-45 aspect-square w-[max(13rem,30vw)]">
                <a href="mailto:maxdanielgs@hotmail.com" target="_blank" rel="noreferrer">
                    <div className="contact-button hover:-translate-2 bg-custom-red">
                        <HiOutlineMail />
                    </div>
                </a>
                <a href="https://github.com/maxg02" target="_blank" rel="noreferrer">
                    <div className="contact-button hover:-translate-y-2 hover:translate-x-2 bg-custom-red">
                        <VscGithub />
                    </div>
                </a>
                <a
                    href="https://www.linkedin.com/in/max-daniel-garcia-sanchez-b9658a224"
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="contact-button hover:translate-y-2 hover:-translate-x-2 bg-custom-red">
                        <PiLinkedinLogoBold />
                    </div>
                </a>
            </div>
            <h1 className="text-[11vw] leading-2">Contact Me!</h1>
        </div>
    );
}

export default Contact;
