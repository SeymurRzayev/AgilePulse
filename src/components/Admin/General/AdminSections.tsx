import { useNavigate } from "react-router-dom";
import { AdminPageSections, type AdminPageType } from "../../../config/sectionConfig";

interface AdminMainPageProps {
    pageType: AdminPageType;
}

const AdminSections = ({ pageType }: AdminMainPageProps) => {
    const navigate = useNavigate()
    const sections = AdminPageSections[pageType] || [];

    return (
        <div className=' w-full h-full py-10'>

            <div className='max-w-[1059pxpx] mt-[43px] pr-2'>
                <ul className="space-y-4">
                    {
                        sections.map((section, index) => (
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

export default AdminSections
