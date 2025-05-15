import styles from "./ScrumList.module.css";

const ScrumList = () => {
  return (
    <div>
      <ul className={styles.ScrumList}>
        <li className={styles.ScrumItem}>
          <h2>Modul 1. Scrum-a giriş</h2>
          <ul className={styles.ScrumListInside}>
            <li>
              <p>Agile nədir? (Agile Manifesto və prinsipləri)</p>
            </li>
            <li>
              <p>Scrum nədir və nə üçün istifadə olunur?</p>
            </li>
            <li>
              <p>
                Scrum və digər Ağile metodologiyalar (Kanban, XP ilə müqayisə)
              </p>
            </li>
            <li>
              <p>Scrum-un əsas dəyərləri və prinsipləri</p>
            </li>
          </ul>
        </li>
        <li className={styles.ScrumItem}>
          <h2>Modul 2. Scrum Rolları</h2>
          <ul className={styles.ScrumListInside}>
            <li>
              <p>Product Owner (Məhsul Sahibi): vəzifə və məsuliyyətlər</p>
            </li>
            <li>
              <p>Scrum Master: fasilitator rolu və qarşılıqlı əlaqələr</p>
            </li>
            <li>
              <p>Development Team: funksiyalar, xüsusiyyətlər və özünüidarə</p>
            </li>
          </ul>
        </li>
        <li className={styles.ScrumItem}>
          <h2>Modul 3. Scrum Artifacts (Əsas sənədlər)</h2>
          <ul className={styles.ScrumListInside}>
            <li>
              <p>Product Backlog (Məhsul Siyahısı)</p>
            </li>
            <li>
              <p>Sprint Backlog (Sprint Siyahısı)</p>
            </li>
            <li>
              <p>Increment (Artım)</p>
            </li>
            <li>
              <p>Definition of Done (Tamamlanma tərifi)</p>
            </li>
          </ul>
        </li>
        <li className={styles.ScrumItem}>
          <h2>Modul 4. Scrum Hadisələri (Events)</h2>
          <ul className={styles.ScrumListInside}>
            <li>
              <p>Sprint: zaman çərçivəsi və planlama</p>
            </li>
            <li>
              <p>
                Sprint Planning: məqsdin və tapşırıqların müəyyənləşdirilməsi
              </p>
            </li>
            <li>
              <p>Daily Scrum (Gündəlik görüşlər): gündəlik koordinasiya</p>
            </li>
            <li>
              <p>Sprint Review: geribildirim və uyğunlaşdırma</p>
            </li>
            <li>
              <p>Sprint Retrospective: təkmilləşdirmə fürsətləri</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default ScrumList;
