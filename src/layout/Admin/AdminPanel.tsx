import { Outlet } from 'react-router-dom';
import AdminMenu from '../../components/Admin/AdminMenu';


const AdminPanel = () => {
    return (
        <div className="bg-[linear-gradient(252.47deg,_#4E61EC_9.65%,_#621DAC_50.22%,_#401795_90.01%)] h-screen  w-full flex justify-between gap-[23px] rounded-[50px]">
            <AdminMenu />
            <div className="bg-[#FBF9F7] w-4/5 mt-2.5 mb-2.5 mr-2.5 pl-[36px] pt-[36px] pr-[33px] rounded-[50px]"><Outlet /></div>
        </div>
    )
}

export default AdminPanel