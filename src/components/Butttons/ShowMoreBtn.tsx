
type ShowMoreBtnProps = {
    onClick: () => void;
    text: string;
};
export default function ShowMoreBtn({ onClick, text }: ShowMoreBtnProps) {

    return (
        <div className="flex justify-center mt-4">
            <button
                onClick={() => onClick()}
                className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 text-indigo-600 font-semibold text-base rounded-full border border-indigo-600 transition-all duration-300 overflow-hidden
          hover:bg-gradient-to-r hover:from-indigo-600 hover:via-purple-700 hover:to-purple-900 hover:text-white hover:border-transparent
          sm:w-48 sm:h-12
          max-sm:px-7 max-sm:py-2.5 max-sm:text-sm cursor-pointer"
            >
                {text}
            </button>
        </div>
    );
}
