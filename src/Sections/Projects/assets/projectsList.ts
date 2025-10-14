import tulumProjectImg from "../assets/projectimgs/tulumProject.webp";

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
        title: "Tulum",
        image: tulumProjectImg,
        description:
            "A web app to manage your personal finances, it helps you to keep track of your daily income and expenses, allowing you to detect the categories where you spend the most, manage budget limits for every category and the creation of saving goals with a simple and intuitive interface and a dashboard to centralize all your information.",
        stack: [
            "React",
            "Vite",
            "Tailwind",
            "Asp.Net",
            "C#",
            "Sql Server",
            "Entity-Framework",
            "Redux",
            "React-Router",
        ],
        linkWeb: "testLink",
        linkRepo: "testLink",
    },
    // {
    //     title: "Project 2",
    //     image: testImg,
    //     description:
    //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapienlam quis imperdiet augue.",
    //     stack: ["React", "Tailwind", "Asp.Net", "C#", "Sql Server", "Redux", "React-Router"],
    //     linkWeb: "testLink",
    // },
];

export const commonProjectsList: project[] = [
    {
        title: "Portfolio V1",
        description:
            "First version of my portfolio showcasing my skills and projects, and some dynamic elements like vertical and horizontal animated carrousels.",
        stack: ["React", "Bootstrap", "SASS"],
        linkWeb: "https://maxg02.github.io/Portfolio-v1/",
        linkRepo: "https://github.com/maxg02/Portfolio-v1",
    },
    {
        title: "Max Arcade",
        description:
            "A simple CLI arcade game collection featuring classic games like Tic-Tac-Toe, Hangman, and a Number Guessing game.",
        stack: ["C#", ".NET"],
        linkWeb: "https://github.com/maxg02/CSharp-Max-Arcade",
    },
    {
        title: "Fitness Calculator",
        description:
            "A simple calculator to compute Body Mass Index (BMI) and Basal Metabolic Rate (BMR) based on user inputs.",
        stack: ["Bootstrap", "SCSS"],
        linkWeb: "https://maxg02.github.io/Fitness-Calculator/",
        linkRepo: "https://github.com/maxg02/Fitness-Calculator",
    },
    {
        title: "Python AddressBook",
        description:
            "A desktop GUI application for managing contacts, allowing users to add, view, search, and delete contacts.",
        stack: ["Python", "SQLite", "Tkinter"],
        linkRepo: "https://github.com/maxg02/GUI-AddressBook-Python",
    },
];
