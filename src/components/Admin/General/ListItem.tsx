import EditIcon from '../../../assets/icons/edit_icon.svg'
import DelIcon from '../../../assets/icons/delete_icon.svg'

interface ListItem {
    content: string,
    id: number,
    onEdit?: (id: number) => void;
    onDelete?: (id: number) => void;
}

const ListItem = ({ content, id, onEdit, onDelete }: ListItem) => {
    return (
        <li className="w-full max-h-[72px] fade-in flex justify-between items-center py-3 px-5 bg-[#EAEDF5] rounded-[30px]">
            <div className="font-[Corbel] text-2xl font-bold text-[#000000] leading-8">
                {content}
            </div>
            <div className="flex gap-x-5">
                <span
                     onClick={() => onEdit?.(id)}
                    className="bg-[#44A15E66] cursor-pointer w-[56px] h-[56px]  rounded-2xl p-2.5"
                >
                    <img src={EditIcon} className='mx-auto' alt='edit' />
                </span>
                <span
                    onClick={() => onDelete?.(id)}
                    className="bg-[#DA3D6866] cursor-pointer w-[56px] h-[56px] flex items-center justify-center rounded-2xl p-2.5"
                >
                    <img src={DelIcon} alt='delete' />
                </span>
            </div>
        </li>
    )
}

export default ListItem