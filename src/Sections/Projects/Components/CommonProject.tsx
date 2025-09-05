import type { project } from "../assets/projectsList";
import { VscGithub } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";
import Card from "@/Components/Card";

function CommonProject({ project }: { project: project }) {
    return (
        <Card>
            <div className="flex justify-end items-center gap-2.5">
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
            <h4>{project.title}</h4>
            <p className="text-justify">{project.description}</p>
            <div className="flex flex-wrap justify-center gap-x-3 text-custom-red mt-auto">
                {project.stack.map((tech, key) => (
                    <span key={key}>{tech}</span>
                ))}
            </div>
        </Card>
    );
}

export default CommonProject;
