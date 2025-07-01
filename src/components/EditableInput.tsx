import { useState, useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import EditIcon from "../assets/icons/edit_icon.svg";

interface EditableInputProps {
    value: string;
    onChange: (newValue: string) => void;
}

const EditableInput: React.FC<EditableInputProps> = ({ value, onChange }) => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [localValue, setLocalValue] = useState(value);

    // update local value when prop changes
    useEffect(() => {
        setLocalValue(value);
    }, [value]);

    const handleConfirm = () => {
        if (localValue !== value) {
            onChange(localValue); // send to parent
        }
        setIsEditMode(false);
    };

    return (
        <div className="flex gap-x-2">
            <input
                type="text"
                className="outline-none"
                readOnly={!isEditMode}
                autoFocus={isEditMode}
                value={localValue}
                onChange={(e) => setLocalValue(e.target.value)} // change local state only
                onBlur={handleConfirm} // confirm on blur
            />
            {!isEditMode ? (
                <img
                    onClick={() => {
                        setIsEditMode(true);
                        setLocalValue(value); // reset to current prop value
                    }}
                    src={EditIcon}
                    alt="Edit"
                    className="cursor-pointer"
                />
            ) : (
                <AiOutlineCheck
                    size={27}
                    color="#44A15E"
                    className="cursor-pointer"
                    onClick={handleConfirm} // confirm on check click
                />
            )}
        </div>
    );
};

export default EditableInput;
