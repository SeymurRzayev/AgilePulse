import { useState } from "react"

type AccordionItemProps = {
  moduleTitle: string,
  lessonTitle: string,
  contentHtml: string;
}
const AccordionItem = ({ lessonTitle, contentHtml }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div >

      <button className={`text-base md:text-xl font-normal leading-[24px] text-left outline-none ease-in
            py-[10px] px-[25px] 
            border  border-blue-100
            ${isOpen ? 'bg-[#a6b1d1]' : ''}
            cursor-pointer w-[100%] 
            after:content-['+'] after:text-[#777] rounded-[20px]
            after:font-bold after:float-right after:ml-[5px]
             ${isOpen ? "after:content-['-']" : ''}
     `}
        onClick={() => setIsOpen(!isOpen)}
      >
        {lessonTitle}
      </button>
      <div
        className={`transition-[max-height] px-[20px] duration-700 ease-in-out overflow-hidden
    ${isOpen ? "max-h-[1000px]" : "max-h-0"}
  `}
      >
        <div className="mt-5">
          <h2 className="text-lg md:text-2xl leading-8 md:leading-12 font-bold !text-[#2C4B9B]">{lessonTitle}</h2>

          <ul className="px-7 list-disc text-lg space-y-4">
            <li className="">
              <div dangerouslySetInnerHTML={{ __html: contentHtml }} className="text-sm md:text-lg font-normal" />
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default AccordionItem