import { useState } from "react"

type AccordionItemProps = {
  content: string
}
const AccordionItem = ({ content }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)


  return (
    <div >

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
      <div
        className={`transition-[max-height] px-[20px] duration-700 ease-in-out overflow-hidden
    ${isOpen ? "max-h-[1000px]" : "max-h-0"}
  `}
      >
        <div className="mt-5">
          <h2 className="text-2xl font-bold !text-[#2C4B9B]">Scrum-un 5 Əsas Dəyəri</h2>
          <h3 className="text-2xl font-bold">
            Scrum-un mərkəzində beş əsas dəyər dayanır. Bu dəyərlər komandada əməkdaşlıq, şəffaflıq və məsuliyyət hissini gücləndirir:
          </h3>
          <ul className="px-7 list-disc text-xl space-y-4">
            <li className="">
              Cəsarət (Courage)
              <p className="pl-6">Komanda üzvləri doğru olanı etmək və çətinliklərə qarşı durmaq üçün cəsarətli olmalıdır.</p>
            </li>
            <li className="">
              Fəxr (Focus)
              <p className="pl-6">Komanda yalnız sprint məqsədlərinə fokuslanır. Əlavə işlər və yayındırıcı faktorlar uzaq tutulur.</p>
            </li>
            <li className="">
              Əməkdaşlıq (Commitment)
              <p className="pl-6">Hər bir üzv öz öhdəliklərinə və komanda məqsədinə sadiq qalır.</p>
            </li>
            <li className="">

              Açıqfikirlilik (Openness)
              <p className="pl-6">Komanda üzvləri öz işləri, problemləri və irəliləyişləri barədə açıq şəkildə ünsiyyət qururlar.</p>
            </li>
            <li className="">
              Hörmət (Respect)
              <p className="pl-6">Hər kəs bir-birinin biliklərinə, bacarıqlarına və töhfələrinə hörmətlə yanaşır.</p>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl py-4 !text-[#2C4B9B]">Scrum-un Əsas Prinsipləri</h2>
          <h3 className="text-2xl font-bold">
            Scrum, Agile Manifestindən qaynaqlanan bir neçə əsas prinsipə söykənir:
          </h3>
          <ul className="!list-disc text-xl !list-inside px-2 space-y-2">
            <li className="">
              İterativ və İnkremental İnkişaf
              <p className="pl-6">Layihə kiçik sprintlərə bölünür və hər sprintdə işlək bir məhsul hissəsi təqdim olunur.</p>
            </li>
            <li className="">
              Müştəriyə Dəyər Yaratmaq
              <p className="pl-6">Məqsəd, hər mərhələdə istifadəçiyə real dəyər təqdim etməkdir.</p>
            </li>
            <li className="">
              Mürəkkəbliyi Azaltmaq və Sadelik
              <p className="pl-6">Sadəlik və daha az bürokratiya, daha çevik qərarlar almağa imkan verir.</p>
            </li>
            <li className="">
              Gündəlik Scrum Görüşləri
              <p className="pl-6">Komanda hər gün qısa görüş keçirərək vəziyyəti müzakirə edir və maneələri paylaşır.</p>
            </li>
            <li className="">
              Görünürlük və Şəffaflıq
              <p className="pl-6">Layihə irəliləyişi hamı üçün görünəndir (məsələn, burndown chart vasitəsilə).</p>
            </li>
            <li className="">
              Müntəzəm Retrospektivlər
              <p className="pl-6">
                Sprint sonunda komanda retrospektiv keçirərək öyrəndiklərini müzakirə edir və gələcəkdə necə yaxşılaşa biləcəklərini müəyyən edir.
              </p>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default AccordionItem