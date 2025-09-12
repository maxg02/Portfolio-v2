import { commonProjectsList, starredProjectsList } from "./assets/projectsList";
import CommonProject from "./Components/CommonProject";
import StarredProject from "./Components/StarredProject";
import "./styles.css";

function Projects() {
    const starredProjects = starredProjectsList.map((project, key) => (
        <StarredProject project={project} key={key} />
    ));

    const commonProjects = commonProjectsList.map((project, key) => (
        <CommonProject project={project} key={key} />
    ));

    return (
        <div className="app-container flex flex-col">
            <h2 className="text-center mb-2 md:mb-10">Projects</h2>
            <div className="flex flex-col gap-y-9 mb-9">{starredProjects}</div>
            <h3>Other Projects</h3>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3 w-full">
                {commonProjects}
            </div>
        </div>
    );
}

export default Projects;
