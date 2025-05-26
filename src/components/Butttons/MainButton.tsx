
interface ButtonProps {
    text: string;
    className?: string;
    onClick?: () => void;
    buttonClassName?: string;
    disabled?: boolean;
}


const MainButton = ({ text, className, onClick, buttonClassName, disabled }: ButtonProps) => {
    return (
        <div className={className}>
            <button
                onClick={onClick}
                className={`bg-[#2C4B9B]
                font-normal text-base font-[Lexend] text-[#FFFFFF]
                w-full h-full rounded-4xl px-2 flex items-center justify-center
                cursor-pointer !hover:bg-[#1F356E] transition-all duration-300 active:bg-[#182955]
                ${buttonClassName}
                `}
                disabled={disabled}
            >
                {text}
            </button>
        </div>
    )
}

export default MainButton