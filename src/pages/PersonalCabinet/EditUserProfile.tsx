import styles from '../../pages/PersonalCabinet/personalCabinet.module.css'
import Button from '../../ui/Button/Button'
import Image from "../../components/ImageComponent"
import choose from "../../assets/images/choose.png"
import { useRef, useState } from 'react'

const EditUserProfile = () => {

    const [userDescription, setUserDescription] = useState<string>("10 ildən artıqdır ki, biznes analitikası sahəsində fəaliyyət göstərirəm. Müxtəlif sənaye sahələrində — bankçılıq, retail, texnologiya və startap ekosistemlərində — proseslərin təhlili, data əsaslı qərarların verilməsi və rəqəmsal transformasiya layihələrində iştirak etmişəm. Analitik düşüncə, güclü kommunikasiya və Agile çərçivəsində iş təcrübəm mənə komandalarla effektiv əməkdaşlıq qurmağa və biznes məqsədlərini texniki həllərlə birləşdirməyə imkan verir.")
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    return (
        <div className='w-full mt-[53px] flex justify-center px-4 gap-5'>
            <div className={styles.editSection}>
                <h2 style={{fontFamily: 'Corbel'}} className='text-[#000000DE] font-semibold text-3xl cursor-default'>Şəxsi məlumatlar</h2>
                <form action="" className='w-4/5 mx-auto edit-profile'>
                    <input className='placeholder-[#000000DE]' type="text" placeholder="Emin Huseynov" />
                    <input className='placeholder-[#000000DE]' type="email" placeholder="Biznes Analitik" />
                    <input className='placeholder-[#000000DE]' type="password" placeholder="example@gmail.com" />
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
            <div className={styles.editPhotoSection}>
                <h2 style={{fontFamily: 'Corbel'}} className='text-[#000000DE] font-semibold text-3xl cursor-default'>Photo</h2>
                <Image src={choose} />
                <input type="file" ref={fileInputRef} hidden />
                <Button title="Qalareyadan seç"
                    className="w-[200px] h-[48px]"
                    onClick={() => fileInputRef.current?.click()}
                />
            </div>
        </div>
    )
}

export default EditUserProfile