import Button from "../../../ui/Button/Button";
import AccordionItem from "../../AccordionItem";


const ScrumList = () => {
  return (
    <div className="flex flex-col gap-[60px] font-corbel mx-auto">
      <div className="flex flex-col">
        <h2 className="">Modul 1. Scrum-a giriş</h2>
        <AccordionItem content="Agile nədir? (Agile Manifesto və prinsipləri)" />
        <AccordionItem content="Scrum nədir və nə üçün istifadə olunur?" />
        <AccordionItem content="Scrum və digər Ağile metodologiyalar (Kanban, XP ilə müqayisə)" />
        <AccordionItem content="Scrum-un əsas dəyərləri və prinsipləri" />
      </div>
      <div className="flex flex-col">
        <h2>Modul 2. Scrum Rolları</h2>
        <AccordionItem content="Product Owner (Məhsul Sahibi): vəzifə və məsuliyyətlər" />
        <AccordionItem content="Scrum Master: fasilitator rolu və qarşılıqlı əlaqələr" />
        <AccordionItem content="Development Team: funksiyalar, xüsusiyyətlər və özünüidarə" />
      </div>
      <div className="flex flex-col">
        <h2>Modul 3. Scrum Artifacts (Əsas sənədlər)</h2>
        <AccordionItem content="Product Backlog (Məhsul Siyahısı)" /> 
        <AccordionItem content="Sprint Backlog (Sprint Siyahısı)" />
        <AccordionItem content="Increment (Artım)" />
        <AccordionItem content="Definition of Done (Tamamlanma tərifi)" />


      </div>
      <div className="flex flex-col">
        <h2>Modul 4. Scrum Hadisələri (Events)</h2>
        <AccordionItem content="Sprint: zaman çərçivəsi və planlama" /> 
        <AccordionItem content="Sprint Planning: məqsdin və tapşırıqların müəyyənləşdirilməsi" />
        <AccordionItem content="Daily Scrum (Gündəlik görüşlər): gündəlik koordinasiya" />
        <AccordionItem content="Sprint Review: geribildirim və uyğunlaşdırma" />
        <AccordionItem content="Sprint Retrospective: təkmilləşdirmə fürsətləri" />
      </div>
      <Button title="Tapşırıq və quiz" className="self-center bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2]"/>
    </div>
  );
};

export default ScrumList;
