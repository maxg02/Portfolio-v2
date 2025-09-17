import { VscGithub } from "react-icons/vsc";
import type { project } from "../assets/projectsList";
import { FiExternalLink } from "react-icons/fi";

function StarredProject({ project }: { project: project }) {
    const ProjectTitle = () => (
        <>
            <h3 className="md:hidden">{project.title}</h3>
            <h4 className="hidden mb-3 md:block">{project.title}</h4>
            <div className="flex items-center gap-2.5 mb-6 md:mb-3">
                {project.linkRepo && (
                    <a href={project.linkRepo} target="_blank" rel="noreferrer">
                        <VscGithub className="text-neutral-600 text-3xl hover:text-custom-red" />
                    </a>
                )}
                {project.linkWeb && (
                    <a href={project.linkWeb} target="_blank" rel="noreferrer">
                        <FiExternalLink className="text-neutral-600 text-3xl hover:text-custom-red" />
                    </a>
                )}
            </div>
        </>
    );

    return (
        <div className="flex flex-col starred-project">
            <div className="flex justify-between items-center md:hidden">
                <ProjectTitle />
            </div>
            <div className="gap-3 flex flex-col info-container md:items-center xl:gap-7">
                <div className="md:w-[50%] project-image-container">
                    <div className="relative">
                        <img className="w-full aspect-video relative z-10" src={project.image} />
                        <div className="bg-custom-dotted"></div>
                    </div>
                </div>
                <div className="md:w-[50%]">
                    <div className="justify-between items-center hidden md:flex md-title-container">
                        <ProjectTitle />
                    </div>
                    <p className="text-justify">{project.description}</p>
                    <div className="flex flex-wrap justify-center gap-x-3 text-custom-red mt-3">
                        {project.stack.map((tech, key) => (
                            <span key={key}>{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StarredProject;
