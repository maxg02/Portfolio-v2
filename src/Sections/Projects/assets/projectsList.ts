import testImg from "../assets/projectimgs/testproj.jpg";

export type project = {
    title: string;
    image?: string;
    description: string;
    stack: string[];
    linkWeb?: string;
    linkRepo?: string;
};

export const starredProjectsList: project[] = [
    {
        title: "Project 1",
        image: testImg,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapienlam quis imperdiet augue. Vestibulum auctorentum sit amet. Pellentesque commodo lacus at sodale",
        stack: ["React", "Tailwind", "Asp.Net", "C#", "Sql Server", "Redux", "React-Router"],
        linkWeb: "testLink",
        linkRepo: "testLink",
    },
    {
        title: "Project 2",
        image: testImg,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapienlam quis imperdiet augue. Vestibulum auctorentum sit amet. Pellentesque commodo lacus at sodale",
        stack: ["React", "Tailwind", "Asp.Net", "C#", "Sql Server", "Redux", "React-Router"],
        linkWeb: "testLink",
    },
];

export const commonProjectsList: project[] = [
    {
        title: "Project 1",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapienlam quis imperdiet augue.",
        stack: ["Technology", "Technology", "Technology", "Technology", "Technology"],
        linkWeb: "testLink",
        linkRepo: "testLink",
    },
    {
        title: "Project 2",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapienlam quis imperdiet augue.",
        stack: ["Technology2", "Technology2", "Technology2", "Technology2"],
        linkWeb: "testLink",
    },
    {
        title: "Project 3",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapienlam quis imperdiet augue.",
        stack: ["Technology3", "Technology3", "Technology3", "Technology3", "Technology3"],
        linkWeb: "testLink",
        linkRepo: "testLink",
    },
    {
        title: "Project 4",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapienlam quis imperdiet augue.",
        stack: ["Technology4", "Technology4", "Technology4", "Technology4"],
        linkWeb: "testLink",
        linkRepo: "testLink",
    },
];
