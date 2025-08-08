import { Project } from "../app/shared/interfaces/project";
import photos from "./photos";

const projects: Record<string, Project> = {
    "blue-palette": {
        projectInfo: {
            banner: photos.bpMain,
            title: "Blue Palette",
            category: "E-Commerce",
            info: [
                {
                    title: "Client",
                    content: "Bridge BluePrint Solutions",
                },
                {
                    title: "Role",
                    content: "Mobile Developer",
                },
                {
                    title: "Year",
                    content: "2023",
                },
                {
                    title: "Download",
                    content: "Coming Soon",
                },
            ]
        },
        description: "",
        role: "Mobile Developer",
        client: "Bridge BluePrint Solutions",
        year: "2022",
        banner1: photos.bp1,
        banner2: photos.bp2,
        screenshots: [photos.bpSc1, photos.bpScreenRec, photos.bpSc2],
        about: "",
        techStack: [],
        lesson: "",
    },
    "bluepos": {
        projectInfo: {
            banner: photos.bPosMain,
            title: "BluePOS",
            category: "Finance",info: [
                {
                    title: "Client",
                    content: "Bridge BluePrint Solutions",
                },
                {
                    title: "Role",
                    content: "Mobile Developer",
                },
                {
                    title: "Year",
                    content: "2023",
                },
                {
                    title: "Download",
                    content: "Coming Soon",
                },
            ]
        },
        description: "",
        role: "Mobile Developer",
        client: "Bridge BluePrint Solutions",
        year: "2021",
        banner1: photos.bp1,
        banner2: photos.bp2,
        screenshots: [photos.bpSc1, photos.bpScreenRec, photos.bpSc2],
        about: "",
        techStack: [],
        lesson: "",
    },
    "bracket-buddy": {
        projectInfo: {
            banner: photos.bbMain,
            title: "Bracket Buddy",
            category: "People",
            info: [
                {
                    title: "Client",
                    content: "My Self",
                },
                {
                    title: "Role",
                    content: "Mobile Developer",
                },
                {
                    title: "Year",
                    content: "2023",
                },
                {
                    title: "Download",
                    content: "Coming Soon",
                },
            ]
        },
        description: "",
        role: "Mobile Developer",
        client: "Bridge BluePrint Solutions",
        year: "2023",
        banner1: photos.bb1,
        banner2: photos.bb2,
        screenshots: [photos.bpSc1, photos.bpScreenRec, photos.bpSc2],
        about: "",
        techStack: [],
        lesson: "",
    }
}

export default projects;
