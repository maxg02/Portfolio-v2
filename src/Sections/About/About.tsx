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

function About() {
    return (
        <div className="app-container flex flex-col gap-10">
            <div className="h-48 w-auto aspect-square bg-custom-lined rounded-full mx-auto flex items-center justify-center">
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
            <div>
                <h2>About Me</h2>
                <p className="text-justify">
                    I’m a web developer based in Dominican Republic. I started my journey programming with
                    Python 2 years ago, currently I’m working with JavaScript to make simple and useful
                    web applications.
                </p>
            </div>

            <div>
                <h3>Skills</h3>
                <div className="flex mb-9">
                    <Card className="w-full">
                        <div className="flex justify-between items-center">
                            <h4>Frontend</h4>
                            <CgWebsite className=" text-4xl" />
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
                    <div className="flex flex-col justify-evenly mx-6">
                        <IconContext.Provider value={{ className: "text-custom-red text-5xl" }}>
                            <TbBrandJavascript />
                            <TbBrandCss3 />
                            <TbBrandHtml5 />
                        </IconContext.Provider>
                    </div>
                </div>
                <div className="flex mb-9">
                    <div className="flex flex-col justify-evenly mx-6">
                        <IconContext.Provider value={{ className: "text-custom-red text-5xl" }}>
                            <AiOutlinePython />
                            <DiMsqlServer />
                            <PiFileCSharp />
                        </IconContext.Provider>
                    </div>
                    <Card className="w-full">
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
