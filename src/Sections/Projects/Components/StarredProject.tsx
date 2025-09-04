import type { project } from "../assets/projectsList";

function StarredProject({ project }: { project: project }) {
    return (
        <div className="gap-3 flex flex-col">
            <h3>{project.title}</h3>
            <div className="pr-3 pb-3">
                <div className="relative">
                    <img className="w-full aspect-video relative z-10" src={project.image} />
                    <div className="bg-custom-dotted w-full h-full aspect-video absolute -bottom-3 -right-3"></div>
                </div>
            </div>
            <p className="text-justify">{project.description}</p>
            <div className="flex flex-wrap justify-center gap-x-3 text-custom-red">
                {project.stack.map((tech, key) => (
                    <span key={key}>{tech}</span>
                ))}
            </div>
        </div>
    );
}

export default StarredProject;
