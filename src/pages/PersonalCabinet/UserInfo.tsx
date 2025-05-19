import styles from '../../pages/PersonalCabinet/personalCabinet.module.css'
import Image from '../../components/ImageComponent'
import leftArrow from "../../assets/icons/left-arrow.svg";
import user from "../../assets/images/user.png";
import addIcon from "../../assets/icons/pencil.svg";
import { type Dispatch, type SetStateAction } from 'react';

interface UserInfoProps {
  setEditMode: Dispatch<SetStateAction<boolean>>,
  isEditMode: boolean
}

const UserInfo = ({ setEditMode, isEditMode }: UserInfoProps) => {

  const goBack = () => {
    window.history.back()
  }

  return (
    <div className={`${styles.userCard}  mt-[28px] ${isEditMode ? 'ml-[50px]' : 'ml-[25px]'} `}>
      <div className={styles.profileImage}>
        <Image onClick={goBack} src={leftArrow} width={60} height={60} className={styles.arrow} />
        <Image src={user} alt="Emin Huseynov" className={styles.userImg} />
      </div>

      <div className={styles.profileContent}>
        <div className={styles.userInfo}>
          <div className={styles.titleCard}>
            <h2>Emin Hüseynov</h2>
            <p className={styles.title}>Biznes analitik</p>
          </div>

          <p className={styles.description}>
            10 ildən artıqdır ki, biznes analitikası sahəsində fəaliyyət
            göstərirəm. Müxtəlif sənaye sahələrində — bankçılıq, retail,
            texnologiya və startap ekosistemlərində — proseslərin təhlili,
            data əsaslı qərarların verilməsi və rəqəmsal transformasiya
            layihələrində iştirak etmişəm...
          </p>
        </div>
        <button
          onClick={() => setEditMode(!isEditMode)}
          title=""
          className="py-3 rounded-3xl cursor-pointer gap-2
            flex items-center justify-center
            border-[#4A00E0] border-2
            hover:bg-gradient-to-r hover:from-[#4A00E0] hover:to-[#8E2DE2]
            text-[#2C4B9B] hover:text-white font-semibold
            "
        >
          <Image src={addIcon} alt="" />
          Məlumatları düzənlə
        </button>
      </div>
    </div>
  )
}

export default UserInfo