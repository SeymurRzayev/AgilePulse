import Xicon from '../../../assets/icons/Modalcloseicon.svg';

interface ModalProps {
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

const CustomModal = ({ onClose, title = "Əlavə et", children }: ModalProps) => {
    return (
        <div className="fixed z-50 inset-0 flex justify-center items-center bg-black/50 p-4 overflow-y-auto">
            <div className="bg-white relative p-8 rounded-xl w-full max-w-2xl shadow-xl">
                <button
                    onClick={onClose}
                    className="absolute cursor-pointer right-4 top-4 text-gray-500 hover:text-gray-800 transition"
                >
                    <img src={Xicon} alt="Bağla" className="w-5 h-5" />
                </button>

                <h2 className="text-2xl font-bold text-center mb-6 text-[#2C4B9B]">{title}</h2>

                {children}

            </div>
        </div>
    );
};

export default CustomModal;
