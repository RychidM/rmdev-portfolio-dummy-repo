export interface Project {
    projectInfo: ProjectHeroInfo;
    description: string;
    role: string;
    client: string;
    year: string;
    banner1: string;
    banner2: string;
    screenshots: string[];
    about: string;
    techStack: string[];
    lesson: string;
}

export interface StoreLinks {
    ios: string;
    android: string;
}

export interface MiniInfo {
    title: string;
    content: string;
}

export interface ProjectHeroInfo {
    title: string;
    banner: string;
    category: string;
    info: MiniInfo[],
}
