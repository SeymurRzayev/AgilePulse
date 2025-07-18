import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface DropDownProps {
    title: string
}

const DropDown = ({ title }: DropDownProps) => {
    const [openDropDown, setOpenDropDown] = useState<boolean>(false)
    return (
        <div className="flex border rounded-[8px] border-[#000000] flex-col items-center relative min-w-[100px]">

            <button
                onClick={() => setOpenDropDown(prev => !prev)}
                className="  py-2 px-3 flex items-center gap-1 cursor-pointer"
            >
                <span className="bg-white ">
                    {title}
                </span>
                {
                    <span
                        className={`transition-transform duration-300 ${openDropDown ? 'rotate-180' : ''}`}
                    >
                        <IoIosArrowDown color="#000000" size={20} />
                    </span>
                }

            </button>

            <ul
                className={`
                      absolute top-[40px] -right-0.5 px-3 space-y-2 py-3 rounded-lg bg-[#EAEDF5] w-[105px]
                      transition-all duration-300 ease-in-out
                      transform  z-20
                      ${openDropDown ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}
                `}
            >
                <li className="flex items-center gap-3 text-lg text-[#122041] font-[Corbel] cursor-pointer font-normal">
                    Modul
                </li>
                <li className="flex items-center gap-3 text-lg text-[#122041] font-[Corbel] cursor-pointer font-normal">
                    Ders
                </li>
            </ul>
        </div>
    )
}

export default DropDown