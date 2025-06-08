
interface ButtonProps {
    text: string;
    className?: string;
    onClick?: () => void;
    buttonClassName?: string;
    size: number, //width
}


const OutlineBtn = ({ text, onClick, size, buttonClassName }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`
                        w-[${size}px] h-full px-2
                        flex items-center justify-center
                        font-normal text-base font-[Lexend] text-[#2C4B9B] border border-indigo-700
                        rounded-[30px]
                        cursor-pointer
                        transition-all duration-300
                        hover:bg-[#EAEDF5] hover:text-[#1F356E] hover:border-[#1F356E]
                        active:bg-[#BEC7E0] active:text-[#182955] active:border-[#182955]
        ${buttonClassName}
    `}
        >
            {text}
        </button>

    )
}

export default OutlineBtn