import { VscGithub } from "react-icons/vsc";
import type { project } from "../assets/projectsList";
import { FiExternalLink } from "react-icons/fi";

function StarredProject({ project }: { project: project }) {
    const ProjectTitle = () => (
        <>
            <h3>{project.title}</h3>
            <div className="flex items-center gap-2.5 mb-6">
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
        <div className="flex flex-col">
            <div className="flex justify-between items-center md:hidden">
                <ProjectTitle />
            </div>
            <div className="gap-3 flex flex-col md:flex-row">
                <div className="pr-3 pb-3">
                    <div className="relative">
                        <img className="w-full aspect-video relative z-10" src={project.image} />
                        <div className="bg-custom-dotted w-full h-full aspect-video absolute -bottom-3 -right-3"></div>
                    </div>
                </div>
                <div>
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
