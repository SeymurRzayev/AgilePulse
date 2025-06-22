import { useNavigate } from "react-router-dom";
import userImg from "../../assets/images/user.png";


const SECTIONS = [
    {
        label: 'Kitabxana',
        path: 'library'
    },
    {
        label: 'Məqalələr',
        path: 'articles'
    },
    {
        label: 'İştirakçıların təlim təcrübələri',
        path: ''
    },
    {
        label: 'Partnyorlar',
        path: ''
    },
    {
        label: 'Sitat sətri',
        path: ''
    },
]

const AdminMainPage = () => {

    const navigate = useNavigate()

    return (
        <div className=' w-full h-full '>
            <div className="flex gap-3 items-center">
                {/* Name */}
                <div className="">
                    {/* Must be dynamic */}
                    <span className="block text-[#000000DE] text-sm font-bold font-[Corbel]">Seymur Rzayev</span>
                    <span className=" text-[#000000DE] text-[12px] font-normal font-[Corbel]">Boss admin</span>
                </div>
                {/* Img */}
                <div className="w-[46px] h-[46px]">
                    <img src={userImg} alt="" />
                </div>
            </div>
            <div className='max-w-[1059pxpx] mt-[43px] pr-2'>
                <ul className="space-y-4">
                    {
                        SECTIONS.map((section, index) => (
                            <li
                                key={index}
                                style={{ boxShadow: '4px 4px 3px 3px #5756561F' }}
                                onClick={() => navigate(section.path)}
                                className="rounded-[30px] pl-8 py-2 bg-[#EAEDF5] font-bold text-[#000000DE] text-2xl leading-8 cursor-pointer"
                            >
                                {section.label}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default AdminMainPage
