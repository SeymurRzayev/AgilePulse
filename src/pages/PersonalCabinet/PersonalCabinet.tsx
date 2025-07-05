import styles from '../../pages/PersonalCabinet/personalCabinet.module.css'
import Image from '../../components/ImageComponent'
import leftArrow from "../../assets/icons/left-arrow.svg";
import userImg from "../../assets/images/user.png";
import addIcon from "../../assets/icons/pencil.svg";
import { useState } from 'react';
import EditUserProfile from './EditUserProfile';
import PersonalCabinetTrainings from './PersonalCabinetTrainings';
import { useAppSelector } from '../../redux/hooks/Hooks';



const PersonalCabinet = () => {

  const [isEditMode, setisEditMode] = useState(false)
  const user = useAppSelector(state => state.auth.user);

  const goBack = () => {
    window.history.back()
  }

  return (
    <div className='flex min-w-full overflow-x-hidden flex-col sm:flex-row'>
      {/* Left side */}
      <div className={`max-h-fit mx-auto w-full flex flex-col sm:max-w-fit mt-[28px] ml-0 sm:ml-[50px] md:items-start items-center `}>
        <div className={styles.profileImage}>
          <Image onClick={goBack} src={leftArrow} width={60} height={60} className={`${styles.arrow} left-0`} />
          <Image src={user?.profileImage ? user?.profileImage : userImg} alt="Emin Huseynov" className={styles.userImg} />
        </div>

        <div className={styles.profileContent}>
          <div className={styles.userInfo}>
            <div className={styles.titleCard}>
              <h2>{user?.fullName}</h2>
              <p className={styles.title}>{user?.position}</p>
            </div>

            <p className={styles.description}>{user?.description}</p>
          </div>
          <button
            onClick={() => setisEditMode(prev => !prev)}
            title=""
            className={`py-3 rounded-3xl cursor-pointer gap-2
            flex items-center justify-center
            ${isEditMode ? 'text-[#182955] bg-[#BEC7E0] border-[#182955]' : 'text-[#2C4B9B] border-[#4A00E0] '}
            border-1
            hover:border-[#1F356E] hover:text-[#1F356E] hover:bg-[#EAEDF5]
            active:border-[#182955] active:text-[#182955] active:bg-[#BEC7E0]
            font-semibold font-[Lexend]
            transition-all duration-300
            `}
          >
            <Image src={addIcon} alt="" />
            Məlumatları düzənlə
          </button>
        </div>
      </div>
      {/* Right side */}
      {
        isEditMode
          ? <EditUserProfile />
          : <PersonalCabinetTrainings />
      }
    </div>
  )
}

export default PersonalCabinet