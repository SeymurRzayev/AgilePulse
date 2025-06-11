import styles from '../../pages/PersonalCabinet/personalCabinet.module.css'
import Button from '../../ui/Button/Button'
import Image from "../../components/ImageComponent"
import choose from "../../assets/images/choose.png"
import { useRef, useState } from 'react'
import MainButton from '../../components/Butttons/MainButton'
import { useAppSelector } from '../../redux/hooks/Hooks'

const EditUserProfile = () => {
    const user = useAppSelector(state => state.auth.user)

    const [userDescription, setUserDescription] = useState<string>(`${user?.description}`)
    const fileInputRef = useRef<HTMLInputElement | null>(null);


    return (
        <div className='w-full mt-[53px] gap-0 xl:gap-15 flex justify-center pb-5 flex-col-reverse lg:items-start items-center lg:flex-row '>
            <div className={`${styles.editSection} w-full lg `}>
                <h2 style={{ fontFamily: 'Corbel' }} className='text-[#000000DE] font-semibold text-3xl mt-10 lg:mt-0 cursor-default'>Şəxsi məlumatlar</h2>
                <form action="" className='w-full px-9 lg:px-0 lg:w-4/5 mt-10 mx-auto edit-profile'>
                    {/* Value APIden gelende inputlarin ici dolu formada gelecek */}
                    <input className='!text-[#000000DE]' type="text" value={user?.fullName} />
                    <input className='!text-[#000000DE]' type="text" value={user?.position} />
                    <input className='!text-[#000000DE]' type="email" value={user?.email} />
                    <textarea
                        value={userDescription}
                        onChange={(e) => setUserDescription(e.target.value)}
                    />
                    <Button
                        title={"Yadda saxla"}
                        className="w-full py-[12px] px-[24px] bg-[#2C4B9B]"
                    />
                </form>

            </div>
            <div className={`flex flex-col justify-start items-center w-1/2 mr-4 gap-8 `}>
                <h2 style={{ fontFamily: 'Corbel' }} className='text-[#000000DE] font-semibold text-3xl cursor-default'>Photo</h2>
                <Image src={choose} className={' object-contain  rounded-4xl w-[300px]  lg:w-[373px] '} />
                <input type="file" ref={fileInputRef} hidden />
                <MainButton text="Qalereyadan seç"
                    className="w-[200px] h-[48px]"
                    onClick={() => fileInputRef.current?.click()}
                />
            </div>
        </div>
    )
}

export default EditUserProfile