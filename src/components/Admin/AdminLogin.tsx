import { useAppSelector } from "../../redux/hooks/Hooks";
import loginAvatar from '../../assets/icons/loginAvatar.svg'

const AdminLogin = () => {

    const user = useAppSelector(state => state.auth.user)
    console.log("user", user);
    return (
        <div>

            <div className="flex gap-3 items-center">
                {/* Name */}
                <div className="">
                    {/* Must be dynamic */}
                    <span className="block text-[#000000DE] text-sm font-bold font-[Corbel]">{user?.fullName}</span>
                    <span className=" text-[#000000DE] text-[12px] font-normal font-[Corbel]">Boss admin</span>
                </div>
                {/* Img */}
                <div className="w-[46px] h-[46px]">
                    <img src={user?.profileImage ? user?.profileImage : loginAvatar} alt="loginAvatar" />
                </div>
            </div>

        </div>
    )
}

export default AdminLogin
