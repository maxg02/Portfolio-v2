import { starredProjectsList } from "./assets/projectsList";
import StarredProject from "./Components/StarredProject";

function Projects() {
    const starredProjects = starredProjectsList.map((project, key) => (
        <StarredProject project={project} key={key} />
    ));

    return (
        <div className="app-container flex flex-col">
            <h2>Projects</h2>
            <div className="flex flex-col gap-y-10">{starredProjects}</div>
        </div>
    );
}

export default Projects;
