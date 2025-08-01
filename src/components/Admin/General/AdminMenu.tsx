import { Link, useLocation, useNavigate } from "react-router-dom"
import Logo from '../../../assets/icons/logo.svg'
import dasboardIconAdmin from '../../../assets/icons/dashboard-icon-admin.svg'
import team from '../../../assets/icons/team.svg'
import users from '../../../assets/icons/users.svg'
import projects from '../../../assets/icons/projects.svg'
import tasks from '../../../assets/icons/tasks.svg'
import notification from '../../../assets/icons/notification.svg'
import Image from '../../../components/ImageComponent'
import arrow from '../../../assets/images/arrow.svg'
import styles from '../../../pages/PersonalCabinet/personalCabinet.module.css'
import { RiArrowGoBackFill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import Swal from "sweetalert2"
import { useAppDispatch } from "../../../redux/hooks/Hooks"
import { userLogout } from "../../../redux/slices/authSlice"

const NAVIGATION = [
    {
        title: 'Dashboard',
        path: 'dashboard',
        icon: dasboardIconAdmin
    },
    {
        title: 'İstifadəçilər',
        path: 'users',
        icon: users
    },
    {
        title: 'Layihələr',
        path: 'projects',
        icon: projects
    },
    {
        title: 'Tapşırıqlar',
        path: 'tasks',
        icon: tasks
    },
    {
        title: 'Komandalar',
        path: 'groups',
        icon: team
    },
    {
        title: 'Bildirişlər sistemi',
        path: 'notificationSystem',
        icon: notification
    }
];
const goBack = () => {
    window.history.back()
}



const AdminMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();


    const handleLogOut = () => {
        Swal.fire({
            title: 'Çıxış etmək istədiyinizə əminsiniz?',
            text: "Sessiyanız bağlanacaq.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Bəli, çıxış et',
            cancelButtonText: 'İmtina'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(userLogout());
                navigate('/');
            }
        });
    };

    return (
        <div className="bg-transparent flex flex-col justify-between ml-[19px] mt-[41px] mb-[33px] w-[285px] ">
            <div className='w-[60px] h-[60px] flex items-center justify-center absolute top-0 left-[16px]'>
                <Image onClick={goBack} src={arrow} width={19.78} height={20.86} className={`${styles.arrow}  hidden sm:block`} />
            </div>
            <div>
                <span
                    onClick={() => navigate('/admin/dashboard')}
                    style={{ fontFamily: 'Raleway' }}
                    className='cursor-pointer gap-2 text-base items-center font-semibold text-[#EAEDF5] hidden md:flex border-b border-[#566FAF] w-fit py-4 px-2.5 mb-[17px]' >
                    <img src={Logo} alt="logo"
                    /> Agile Pulse
                </span>
                <ul>
                    {NAVIGATION.map((navItem, index) => (
                        <li key={index} className={`flex items-center gap-3 p-2.5  ${location.pathname.includes(navItem.path) ? " opacity-100" : " opacity-60"}`}>
                            <img src={navItem.icon} alt="" className='w-8' />
                            <Link to={`/admin/${navItem.path}`} className='text-white'>{navItem.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex flex-col justify-between '>
                <ul >
                    <li
                        className={`flex items-center gap-3 p-2.5 cursor-pointer hover:opacity-100 opacity-60`}
                    >
                        <RiArrowGoBackFill size={32} className="text-white/60" />
                        <Link to={'/'} className='text-white'>Əsas səhifəyə keç</Link>
                    </li>
                    <li
                        onClick={handleLogOut}
                        className={`flex items-center gap-3 p-2.5 cursor-pointer hover:opacity-100 opacity-60`}
                    >
                        <FiLogOut size={32} className="text-white/60 rotate-[-180deg]" color="white/60" rotate={90} />
                        <span className='text-white'>Çıxış</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AdminMenu