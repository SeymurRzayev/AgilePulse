import EditableInput from "../EditableInput";
import DowmloadIcon from "../../assets/icons/mynaui_download.svg";
import CamIcon from "../../assets/icons/camera_icon.svg";
import DelIcon from "../../assets/icons/delete_icon.svg";
import { useRef } from "react";
import type { ArticleRes, Book } from "../../types/types";

interface BookListItemProps {
    data: Book | ArticleRes;
    editableFields: Array<keyof Book> | Array<keyof ArticleRes>;
    onFieldChange: (id: number, field: keyof Book | keyof ArticleRes, value: string | number) => void;
    onFileUpload: (
        e: React.ChangeEvent<HTMLInputElement>,
        id: number,
        field: "image" | "pdfFile"
    ) => void;
    onDelete: (id: number) => void;
    isLibraryMode: boolean;
}

const ListItem = ({
    data,
    editableFields,
    onFieldChange,
    onFileUpload,
    onDelete,
    isLibraryMode
}: BookListItemProps) => {
    const pdfInp = useRef<HTMLInputElement>(null);
    const imgInp = useRef<HTMLInputElement>(null);

    return (
        <li className="w-full fade-in flex justify-between items-center py-2 pr-5 pl-2 bg-[#EAEDF5] rounded-[30px]">
            <div className="flex items-center max-w-[388px] gap-x-10">
                <div className="w-[106px] h-[143px] p-2.5">
                    <img
                        src={data.imageUrl}
                        alt={isLibraryMode ? (data as Book).name : (data as ArticleRes).author}
                        className="w-[86px] h-[123px] rounded-[3.77px]"
                        style={{ boxShadow: "0px 0px 4.9px 1.89px #0000003B" }}
                    />
                </div>
                <div>
                    {editableFields.map((field) => (
                        <EditableInput
                            key={field}
                            value={(data as any)[field]}
                            // value={isLibraryMode ? (data as Book)[field] as string : (data as ArticleRes)[field] as string}
                            onChange={(val) => onFieldChange(data.id, field, val)}
                        />
                    ))}
                </div>
            </div>
            <div className="flex gap-x-5">
                <input
                    type="file"
                    ref={pdfInp}
                    hidden
                    accept=".pdf"
                    onChange={(e) => onFileUpload(e, data.id, "pdfFile")}
                />
                <input
                    type="file"
                    ref={imgInp}
                    hidden
                    accept="image/*"
                    onChange={(e) => onFileUpload(e, data.id, "image")}
                />
                <span
                    onClick={() => pdfInp.current?.click()}
                    className="bg-[#E9982666] cursor-pointer w-[60px] h-[48px] flex items-center justify-center rounded-[30px] p-2.5"
                >
                    <img src={DowmloadIcon} />
                </span>
                <span
                    onClick={() => imgInp.current?.click()}
                    className="bg-[#44A15E66] cursor-pointer w-[60px] h-[48px] flex items-center justify-center rounded-[30px] p-2.5"
                >
                    <img src={CamIcon} />
                </span>
                <span
                    onClick={() => onDelete(data.id)}
                    className="bg-[#DA3D6866] cursor-pointer w-[60px] h-[48px] flex items-center justify-center rounded-[30px] p-2.5"
                >
                    <img src={DelIcon} />
                </span>
            </div>
        </li>
    );
};

export default ListItem;
