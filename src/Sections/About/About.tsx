import { IconContext } from "react-icons";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";

function About() {
    return (
        <div className="app-container flex flex-col gap-10">
            <div className="h-48 w-auto aspect-square bg-custom-lined rounded-full mx-auto"></div>
            <div>
                <h2>About Me</h2>
                <p className="text-justify">
                    I’m a web developer based in Dominican Republic. I started my journey programming with
                    Python 2 years ago, currently I’m working with JavaScript to make simple and useful
                    web applications.
                </p>
            </div>
            {/* <div className="flex gap-x-16">
                <div>
                    <h3>Frontend Dev</h3>
                    <p>
                        On the frontend side i have worked with HTML, CSS (including frameworks like
                        Tailwind and Bootstrap) and JavaScript (mainly with React framework).
                    </p>
                </div>
                <div className="flex flex-col justify-evenly">
                    <IconContext.Provider value={{ className: "text-custom-red text-4xl" }}>
                        <TbBrandJavascript />
                        <TbBrandCss3 />
                        <TbBrandHtml5 />
                    </IconContext.Provider>
                </div>
            </div>
            <div>
                <div>
                    <h3 className="text-end">Backend Dev</h3>
                    <p>
                        On backend i’ve been using C# (Asp.Net) lately although I have also worked with
                        Python (Django) in some projects.
                    </p>
                </div>
                <div></div>
            </div> */}
        </div>
    );
}

export default About;
