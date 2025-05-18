import { useState } from "react"

type AccordionItemProps = {
    content: string
}
const AccordionItem =  ({content}:AccordionItemProps) => {
    const [isOpen,setIsOpen] = useState<boolean>(false)

        console.log(isOpen);
        
  return (
    <div>
    
    <button className={`text-2xl font-normal leading-[32px] text-left outline-none ease-in
    py-[10px] px-[25px] 
    border  border-blue-100
     ${isOpen ? 'bg-[#a6b1d1]' : ''}
     cursor-pointer w-[100%] 
     after:content-['+'] after:text-[#777] rounded-[20px]
    after:font-bold after:float-right after:ml-[5px]
     ${isOpen ? "after:content-['-']" : ''}`}
    onClick={() => setIsOpen(!isOpen)}
    >
        {content}
    </button>
    <div   className={`
    px-[18px] 
    bg-white 
    overflow-hidden 
    flex flex-col
    transition-[max-height] 
    duration-200 
    ease-out 
    text-black
    ${isOpen ? "max-h-[851px]" : "max-h-0"}
  `}>
    
       <section>
        <h2 className="!text-2xl font-bold mb-4 !text-blue-600">Scrum-un 5 Əsas Dəyəri</h2>
        <ul className="list-disc list-inside  space-y-4">
          <li>
            <h3 className="font-semibold text-lg ">Cəsarət (Courage)</h3>
            <p>Komanda üzvləri doğru olanı etmək və çətinliklərə qarşı durmaq üçün cəsarətli olmalıdır.</p>
          </li>
          <li>
            <h3 className="font-semibold text-lg ">Fəxr (Focus)</h3>
            <p>Komanda yalnız sprint məqsədlərinə fokuslanır. Əlavə işlər və yayındırıcı faktorlar uzaq tutulur.</p>
          </li>
          <li>
            <h3 className="font-semibold text-lg ">Əməkdaşlıq (Commitment)</h3>
            <p>Hər bir üzv öz öhdəliklərinə və komanda məqsədinə sadiq qalır.</p>
          </li>
          <li>
            <h3 className="font-semibold text-lg ">Açıqfikirlilik (Openness)</h3>
            <p>Komanda üzvləri öz işləri, problemləri və irəliləyişləri barədə açıq şəkildə ünsiyyət qururlar.</p>
          </li>
          <li>
            <h3 className="font-semibold text-lg ">Hörmət (Respect)</h3>
            <p>Hər kəs bir-birinin biliklərinə, bacarıqlarına və töhfələrinə hörmətlə yanaşır.</p>
          </li>
        </ul>
      </section>

      <section>
        <h2 className=" !text-2xl mb-4 !text-blue-600">Scrum-un Əsas Prinsipləri</h2>
        <ul className="list-disc list-inside space-y-4">
          <li>
            <h3 className="font-semibold text-lg text-teal-700">İterativ və İnkremental İnkişaf</h3>
            <p>Layihə kiçik sprintlərə bölünür və hər sprintdə işlək bir məhsul hissəsi təqdim olunur.</p>
          </li>
          <li>
            <h3 className="font-semibold text-lg text-teal-700">Müştəriyə Dəyər Yaratmaq</h3>
            <p>Məqsəd, hər mərhələdə istifadəçiyə real dəyər təqdim etməkdir.</p>
          </li>
          <li>
            <h3 className="font-semibold text-lg text-teal-700">Mürəkkəbliyi Azaltmaq və Sadelik</h3>
            <p>Sadəlik və daha az bürokratiya, daha çevik qərarlar almağa imkan verir.</p>
          </li>
          <li>
            <h3 className="font-semibold text-lg text-teal-700">Gündəlik Scrum Görüşləri</h3>
            <p>Komanda hər gün qısa görüş keçirərək vəziyyəti müzakirə edir və maneələri paylaşır.</p>
          </li>
          <li>
            <h3 className="font-semibold text-lg text-teal-700">Görünürlük və Şəffaflıq</h3>
            <p>Layihə irəliləyişi hamı üçün görünəndir (məsələn, burndown chart vasitəsilə).</p>
          </li>
          <li>
            <h3 className="font-semibold text-lg text-teal-700">Müntəzəm Retrospektivlər</h3>
            <p>
              Sprint sonunda komanda retrospektiv keçirərək öyrəndiklərini müzakirə edir və gələcəkdə necə yaxşılaşa biləcəklərini müəyyən edir.
            </p>
          </li>
        </ul>
      </section>

    </div>
    </div>
  );
}

export default AccordionItem