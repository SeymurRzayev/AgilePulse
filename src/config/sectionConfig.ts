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
        { label: "Sitat sətri", path: "" },
    ],
    [AdminPageType.Trainings]: [
        { label: "Kategoriyalar", path: "" },
        { label: "Kurslar", path: "" },
        { label: "Podcastlar", path: "" },
        { label: "Təlimçilər", path: "" },
        { label: "Quiz", path: "" },
    ],
    [AdminPageType.AboutUs]: [],
    [AdminPageType.Academy]: [],
    [AdminPageType.Exams]: [],
    [AdminPageType.HeaderAndFooter]: [],
};
