import { Outlet } from 'react-router-dom';
import AdminMenu from '../../components/Admin/AdminMenu';
import NavigateArrow from '../../ui/NavigateArrow/NavigateArrow';
import backArrowBlack from '../../assets/images/backArrowBlack.svg';
import AdminLogin from '../../components/Admin/AdminLogin';

const AdminPanel = () => {
    return (
        <div className="bg-[linear-gradient(252.47deg,_#4E61EC_9.65%,_#621DAC_50.22%,_#401795_90.01%)] h-screen  w-full flex justify-between gap-[23px] rounded-[50px]">
            <AdminMenu />
            <div className="bg-[#FBF9F7] w-4/5 mt-2.5 mb-2.5 mr-2.5 pl-[36px] pt-[36px] pr-[33px] rounded-[50px]">
                <div className='w-full flex justify-between items-center mb-6'>
                    <div className="relative ">
                        <NavigateArrow iconSrc={backArrowBlack} className='w-[25px] h-[25px]' />
                    </div>
                    <AdminLogin />
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default AdminPanel