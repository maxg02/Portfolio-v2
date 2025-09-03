import React from "react";
import testImg from "./assets/testproj.jpg";

function Projects() {
    type project = {
        title: string;
        image?: string;
        description: string;
        stack: string[];
        linkWeb?: string;
        linkRepo?: string;
    };

    const starredProjects: project[] = [
        {
            title: "Project 1",
            image: testImg,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapienlam quis imperdiet augue. Vestibulum auctorentum sit amet. Pellentesque commodo lacus at sodale",
            stack: [
                "Technology",
                "Technology",
                "Technology",
                "Technology",
                "Technology",
                "Technology",
                "Technology",
            ],
            linkWeb: "testLink",
            linkRepo: "testLink",
        },
        {
            title: "Project 1",
            image: testImg,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapienlam quis imperdiet augue. Vestibulum auctorentum sit amet. Pellentesque commodo lacus at sodale",
            stack: [
                "Technology2",
                "Technology2",
                "Technology2",
                "Technology2",
                "Technology2",
                "Technology2",
                "Technology2",
            ],
            linkWeb: "testLink",
        },
    ];

    return (
        <div className="app-container flex flex-col gap-10">
            <h2>Projects</h2>
        </div>
    );
}

export default Projects;
