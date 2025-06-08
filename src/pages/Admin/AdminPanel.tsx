import dasboardIconAdmin from '../../assets/icons/dashboard-icon-admin.svg'
// import adminUsers from '../../assets/icons/admin_users.svg'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/icons/logo.svg'
const NAVIGATION = [
    {
        title: 'Dashboard',
        path: 'dashbaord',
        icon: dasboardIconAdmin
    },
    {
        title: 'İstifadəçilər',
        path: 'users',
        icon: dasboardIconAdmin
    },
    {
        title: 'Layihələr',
        path: 'projects',
        icon: dasboardIconAdmin
    },
    {
        title: 'Tapşırıqlar',
        path: '/tasks',
        icon: dasboardIconAdmin
    },
    {
        title: 'Komandalar',
        path: '/groups',
        icon: dasboardIconAdmin
    },
    {
        title: 'Bildirişlər sistemi',
        path: '/notificationSystem',
        icon: dasboardIconAdmin
    }
];



const AdminPanel = () => {
    const navigate = useNavigate()
    return (
        <div className="bg-[linear-gradient(252.47deg,_#4E61EC_9.65%,_#621DAC_50.22%,_#401795_90.01%)] w-full flex justify-between gap-[23px] rounded-[50px]">
            <div className="bg-transparent w-1/5 ml-[19px] mt-[61px] mb-[33px] ">
                <span
                    onClick={() => navigate('/')}
                    style={{ fontFamily: 'Raleway' }}
                    className='cursor-pointer gap-2 text-base items-center font-semibold text-[#EAEDF5] hidden md:flex border-b w-fit py-4 px-2.5 mb-[17px]' >
                    <img src={Logo} alt="logo"
                    /> Agile Pulse
                </span> {/**Fermayil beyin kodudur bu span */}
                <div className='flex flex-col justify-between h-[619px]'>
                    <ul>
                        {NAVIGATION.map((navItem) => (
                            <li className='flex items-center gap-3 p-2.5  opacity-60'>
                                <img src={navItem.icon} alt="" className='w-8' />
                                <Link to={navItem.path} className='text-white'>{navItem.title}</Link>
                            </li>
                        ))}
                    </ul>

                    <ul >
                        <li className='flex items-center gap-3 p-2.5  opacity-60'>
                            <img src={dasboardIconAdmin} alt="" className='w-8' />
                            <Link to={dasboardIconAdmin} className='text-white'>Sistem ayarları</Link>
                        </li>
                        <li className='flex items-center gap-3 p-2.5  opacity-60'>
                            <img src={dasboardIconAdmin} alt="" className='w-8' />
                            <Link to={dasboardIconAdmin} className='text-white'>Loglar və hesabatlar</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bg-[#FBF9F7] w-4/5 mt-2.5 mb-2.5 mr-2.5  rounded-[50px]">menucontent</div>
        </div>
    )
}

export default AdminPanel