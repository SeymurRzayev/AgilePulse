import { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import EditIcon from '../assets/icons/edit_icon.svg'


interface EditableInputProps {
    value: string;
    onChange: (newValue: string) => void;
}


const EditableInput: React.FC<EditableInputProps> = ({ value, onChange }) => {
    const [isEditMode, setIsEditMode] = useState<boolean>(false)

    return (
        <div className="flex items-center gap-y-2">
            <input
                type="text"
                className="outline-none"
                readOnly={!isEditMode}
                autoFocus={isEditMode}
                value={value}
                onChange={(e) => {
                    if (isEditMode) {
                        onChange(e.target.value);
                    }
                }}
                onBlur={() => setIsEditMode(false)}
            />
            {
                !isEditMode
                    ? <img
                        onClick={() => setIsEditMode(true)}
                        src={EditIcon}
                        alt="Edit"
                        className="cursor-pointer"
                    />
                    : <AiOutlineCheck
                        size={27} color="#44A15E"
                        className="cursor-pointer"
                        onClick={() => setIsEditMode(false)}
                    />
            }
        </div>
    )
}


export default EditableInput