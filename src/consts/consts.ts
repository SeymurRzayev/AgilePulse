export const sxWhitePagination = {
  "& .MuiPaginationItem-root": {
    color: "white",
    borderColor: "white",
  },
  "& .Mui-selected": {
    backgroundColor: "white" + " !important",
    color: "#000",
  },
  "& .MuiPaginationItem-ellipsis": {
    color: "white",
  },
  "& .Mui-selected:hover": {
    backgroundColor: "white",
  },
  "& .MuiPaginationItem-previousNext": {
    borderRadius: "50%", // rounded
    backdropFilter: "blur(6px)", // blur effect
    backgroundColor: "rgba(255, 255, 255, 0.1)", // for visible blur
    color: "white",
  },
  "& .MuiPaginationItem-previousNext:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
  "& .Mui-disabled.MuiPaginationItem-previousNext": {
    opacity: 0.3,
    color: "white",
  },
};

export const examSample = [
  { title: "PSM 1 | imtahan", questionsCount: 60, duration: 60 },
  { title: "PSM 2 | imtahan", questionsCount: 60, duration: 60 },
  { title: "PSM 3 | imtahan", questionsCount: 60, duration: 60 },
  { title: "PSM 4 | imtahan", questionsCount: 60, duration: 60 },
  { title: "PSM 5 | imtahan", questionsCount: 60, duration: 60 },
  { title: "PSM 6 | imtahan", questionsCount: 60, duration: 60 },
  { title: "PSM 7 | imtahan", questionsCount: 60, duration: 60 },
  { title: "PSM 8 | imtahan", questionsCount: 60, duration: 60 },
  { title: "PSM 9 | imtahan", questionsCount: 60, duration: 60 },
  { title: "PSM 10 | imtahan", questionsCount: 60, duration: 60 },
  { title: "PSM 11 | imtahan", questionsCount: 60, duration: 60 },
  { title: "PSM 12 | imtahan", questionsCount: 60, duration: 60 },
  { title: "PSM 13 | imtahan", questionsCount: 60, duration: 60 },
  { title: "PSM 14 | imtahan", questionsCount: 60, duration: 60 },
  // add more data...
];

export const TEAM_POSITIONS = [
  { value: "FRONTEND_LEADER", label: "Frontend Team Leader" },
  { value: "FRONTEND_DEVELOPER", label: "Frontend Developer" },
  { value: "BACKEND_LEADER", label: "Backend Team Leader" },
  { value: "BACKEND_DEVELOPER", label: "Backend Devoloper" },
  { value: "PROJECT_MANAGER", label: "Project Manager" },
  { value: "DESIGNER_LEADER", label: "Designer Team Leader" },
  { value: "DESIGNER", label: "Designer" },
  { value: "QA_LEADER", label: "QA Team Leader" },
  { value: "QA_DEVELOPER", label: "QA Developer" },
  { value: "ADILE_COACH", label: "Agile Coach" },
  { value: "SCRUM_MASTER", label: "Scrum Master" },
  { value: "PRODUCT_OWNER", label: "Product Owner" },
  { value: "DEVOPS", label: "DevOps" },
  { value: "INFOSEC", label: "Information and Communication Engineering" },
  { value: "SYSTEM_ADMIN", label: "System Admin" },
  { value: "KANBAN_MASTER", label: "Kanban Master" },
  { value: "AGILE_DELIVERY_MANAGER", label: "Agile Delivery Manager" },
  { value: "BUSINESS_ANALYTIC", label: "Busines Analytic" },
  { value: "IT_BUSNINESS_ANALYTIC", label: "IT Business Analytic" },
  { value: "DATA_ANALYTIC", label: "Data Analytic" },

  // Yeni position-ları buraya əlavə et!
];

export function getPositionLabel(value: string) {
  const found = TEAM_POSITIONS.find((pos) => pos.value === value);
  return found ? found.label : value;
}
