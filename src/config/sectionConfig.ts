export const AdminPageType = {
    Main: "main",
    Trainings: "trainings",
    Exams: "exams",
    AboutUs: "aboutUs",
    Academy: "academy",
    HeaderAndFooter: "headerAndFooter",
} as const;

export type AdminPageType = (typeof AdminPageType)[keyof typeof AdminPageType];

type Section = {
    label: string;
    path: string;
};

export const AdminPageSections: Record<AdminPageType, Section[]> = {
    [AdminPageType.Main]: [
        { label: "Kitabxana", path: "library" },
        { label: "Məqalələr", path: "articles" },
        { label: "İştirakçıların təlim təcrübələri", path: "" },
        { label: "Partnyorlar", path: "partners" },
        { label: "Sitat sətri", path: "quotes" },
    ],
    [AdminPageType.Trainings]: [
        { label: "Kategoriyalar", path: "categories" },
        { label: "Kurslar", path: "courses" },
        { label: "Podcastlar", path: "podcasts" },
        { label: "Təlimçilər", path: "trainers" },
        { label: "Quiz", path: "quizs" },
    ],
    [AdminPageType.AboutUs]: [],
    [AdminPageType.Academy]: [],
    [AdminPageType.Exams]: [],
    [AdminPageType.HeaderAndFooter]: [
        { label: "FAQ", path: "faq" },
    ],
};
