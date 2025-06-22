import { Link, useNavigate } from "react-router-dom"
import Logo from '../../assets/icons/logo.svg'
import dasboardIconAdmin from '../../assets/icons/dashboard-icon-admin.svg'


const NAVIGATION = [
    {
        title: 'Dashboard',
        path: 'dashboard',
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
        path: 'tasks',
        icon: dasboardIconAdmin
    },
    {
        title: 'Komandalar',
        path: 'groups',
        icon: dasboardIconAdmin
    },
    {
        title: 'Bildirişlər sistemi',
        path: 'notificationSystem',
        icon: dasboardIconAdmin
    }
];


const AdminMenu = () => {
    const navigate = useNavigate()

    return (
        <div className="bg-transparent flex flex-col justify-between w-1/5 ml-[19px] mt-[41px] mb-[33px] ">
            <div>
                <span
                    onClick={() => navigate('/')}
                    style={{ fontFamily: 'Raleway' }}
                    className='cursor-pointer gap-2 text-base items-center font-semibold text-[#EAEDF5] hidden md:flex border-b border-[#566FAF] w-fit py-4 px-2.5 mb-[17px]' >
                    <img src={Logo} alt="logo"
                    /> Agile Pulse
                </span>
                <ul>
                    {NAVIGATION.map((navItem, index) => (
                        <li key={index} className='flex items-center gap-3 p-2.5  opacity-60'>
                            <img src={navItem.icon} alt="" className='w-8' />
                            <Link to={`/admin/${navItem.path}`} className='text-white'>{navItem.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex flex-col justify-between '>
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
    )
}

export default AdminMenu