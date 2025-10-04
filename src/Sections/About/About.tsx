import Card from "@/Components/Card";
import { IconContext } from "react-icons";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { BiCodeBlock } from "react-icons/bi";
import { AiOutlinePython } from "react-icons/ai";
import { DiMsqlServer } from "react-icons/di";
import { PiFileCSharp } from "react-icons/pi";
import laptopimg from "./assets/LaptopNoBG.png";
import cupimg from "./assets/CupNoBG.png";
import mouseimg from "./assets/MouseNoBG.png";
import "./styles.css";
import PaperPlane from "@/Components/PaperPlane";

function About() {
    return (
        <div className="app-container relative flex flex-col gap-10 mb-16 xl:gap-14 xl:mb-32">
            <div className="flex flex-col gap-10 items-center md:flex-row-reverse xl:gap-24">
                <div className="w-48 h-auto aspect-square bg-custom-lined rounded-full mx-auto flex items-center justify-center md:w-auto md:basis-[45%] md:mx-8 xl:mx-12">
                    <div className="aspect-square h-[80%] relative animate-[spin_reverse_12s_linear_infinite] ">
                        <img
                            src={laptopimg}
                            className="absolute left-0 top-1/2 -translate-1/2 h-[65%] animate-[spin_12s_linear_infinite]"
                        />
                        <img
                            src={cupimg}
                            className="absolute right-0 bottom-0 h-[32%] animate-[spin_12s_linear_infinite]"
                        />
                        <img
                            src={mouseimg}
                            className="absolute right-0 top-0 h-[31%] animate-[spin_12s_linear_infinite]"
                        />
                    </div>
                </div>
                <div className="md:basis-[55%]">
                    <h2 className="max-md:text-center mb-1.5">About Me</h2>
                    <p className="text-justify mb-3">
                        I'm a &nbsp;
                        <span className="text-custom-red pretty-text text-2xl">Web Developer</span>&nbsp;
                        based in Dominican Republic. I hold a technical degree in Cybersecurity and I'm
                        currently pursuing a degree in Software Engineering.
                    </p>
                    <p className="text-justify">
                        I started as a self-taught developer a few years ago and since then I've been
                        passionate about building efficient, scalable and visually appealing websites
                        using modern technologies.
                    </p>
                </div>
            </div>
            <div>
                <h3>Skills</h3>
                <div className="flex mb-9 md:items-center md:mb-14">
                    <Card className="w-full md:w-[40%]">
                        <div className="flex justify-between items-center">
                            <h4>Frontend</h4>
                            <CgWebsite className="text-4xl" />
                        </div>
                        <ul className="list-disc list-inside">
                            <li>
                                <span>React</span>
                            </li>
                            <li>
                                <span>TypeScript</span>
                            </li>
                            <li>
                                <span>TailwindCSS</span>
                            </li>
                            <li>
                                <span>Redux</span>
                            </li>
                            <li>
                                <span>React-Router</span>
                            </li>
                            <li>
                                <span>Bootstrap</span>
                            </li>
                        </ul>
                    </Card>
                    <div className="flex flex-col justify-evenly mx-6 md:flex-row md:w-[60%] md:mx-0">
                        <IconContext.Provider
                            value={{
                                className:
                                    "text-custom-red text-5xl md:text-8xl floating-icon xl:text-[min(9vw,8rem)]",
                            }}
                        >
                            <TbBrandJavascript />
                            <TbBrandCss3 />
                            <TbBrandHtml5 />
                        </IconContext.Provider>
                    </div>
                </div>
                <div className="flex md:items-center">
                    <div className="flex flex-col justify-evenly mx-6 md:flex-row md:w-[60%] md:mx-0">
                        <IconContext.Provider
                            value={{
                                className:
                                    "text-custom-red text-5xl md:text-8xl floating-icon xl:text-[min(9vw,8rem)]",
                            }}
                        >
                            <AiOutlinePython />
                            <DiMsqlServer />
                            <PiFileCSharp />
                        </IconContext.Provider>
                    </div>
                    <Card className="w-full md:w-[40%]">
                        <div className="flex justify-between items-center">
                            <h4>Backend</h4>
                            <BiCodeBlock className="text-4xl" />
                        </div>
                        <ul className="list-disc list-inside">
                            <li>
                                <span>C#</span>
                            </li>
                            <li>
                                <span>Asp.Net</span>
                            </li>
                            <li>
                                <span>Entity Framework</span>
                            </li>
                            <li>
                                <span>Sql Server</span>
                            </li>
                            <li>
                                <span>Python</span>
                            </li>
                            <li>
                                <span>Django</span>
                            </li>
                        </ul>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default About;
