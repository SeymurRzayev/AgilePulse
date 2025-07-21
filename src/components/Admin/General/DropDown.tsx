import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

interface DropDownProps {
    title: string,
    className: string,
    list: string[],
    onSelect?: (value: string) => void;
    selectedValue?: string;
}

const DropDown = ({ title, className, list, onSelect }: DropDownProps) => {
    const [openDropDown, setOpenDropDown] = useState<boolean>(false)
    return (
        <div className={`flex text-[#fff] rounded-[8px] ${className} ${openDropDown ? 'scale-95 z-20' : ''}  transition-all duration-300 flex-col items-center relative min-w-[100px]`}>

            <button
                onClick={() => setOpenDropDown(prev => !prev)}
                className="  py-2 px-3 flex items-center gap-1 cursor-pointer"
            >
                <span className="bg-transparent ">
                    {title}
                </span>
                {
                    <span
                        className={`transition-transform duration-300 ${openDropDown ? 'rotate-180' : ''}`}
                    >
                        <IoIosArrowDown color="#fff" size={20} />
                    </span>
                }

            </button>

            <ul

                className={`
                      absolute top-[40px] -right-0.5  space-y-2 py-3 rounded-lg bg-[#EAEDF5] w-[150px] 
                      transition-all duration-300 ease-in-out
                      transform  z-20
                      ${openDropDown ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}
                `}
            >
                {
                    list.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                onSelect?.(item);
                                setOpenDropDown(false);
                            }}
                            className="flex items-center gap-3 px-3 py-1 !w-full hover:bg-[#0067FF26] text-sm text-[#122041] font-[Corbel] cursor-pointer font-normal transition-all duration-300 ease-in-out"
                        >
                            {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DropDown