import styles from "./personalCabinet.module.css";
import leftArrow from "../../assets/icons/left-arrow.svg";
import user from "../../assets/images/user.png";
import Button from "../../ui/Button/Button";
import addIcon from "../../assets/icons/pencil.svg";
import save from "../../assets/icons/save.svg";
import timeIcon from "../../assets/icons/oclock.svg"
import certificate1 from "../../assets/images/certificate1.png"
import certificate2 from "../../assets/images/certificate2.png"
import choose from "../../assets/images/choose.png"
import Image from "../../components/ImageComponent"
import PersonalCard from "../../components/PersonalCard";
import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react"
import { dummyMock } from "../../dummyMock";


const Cabinet = () => {

  const [check, SetCheck] = useState<boolean>(false)
  const [emblaRef] = useEmblaCarousel()

  if (check) {


    return (
      <div className={styles.container}>
        <div className={styles.userCard}>
          <div className={styles.profileImage}>
            <Button title="" onClick={() => SetCheck(false)} className="display-block">

              <Image src={leftArrow} width={60} height={60} className={styles.arrow} />
            </Button>
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
            <Button
              title=""
              className="w-[237px] h-[40px]
            flex items-center justify-center
            bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2]
            border-none
            "
              onClick={() => SetCheck(true)}
            >
              <Image src={addIcon} alt="" />
              Məlumatları düzənlə
            </Button>
          </div>
        </div>
        <div className={styles.editSection}>
          <h2>Şəxsi məlumatlar</h2>
          <form action="">
            <input type="text" placeholder="Emin Huseynov" />
            <input type="email" placeholder="Biznes Analitik" />
            <input type="password" placeholder="example@gmail.com" />
            <textarea name="" id="" readOnly value={"10 ildən artıqdır ki, biznes analitikası sahəsində fəaliyyət göstərirəm. Müxtəlif sənaye sahələrində — bankçılıq, retail, texnologiya və startap ekosistemlərində — proseslərin təhlili, data əsaslı qərarların verilməsi və rəqəmsal transformasiya layihələrində iştirak etmişəm. Analitik düşüncə, güclü kommunikasiya və Agile çərçivəsində iş təcrübəm mənə komandalarla effektiv əməkdaşlıq qurmağa və biznes məqsədlərini texniki həllərlə birləşdirməyə imkan verir."}>

            </textarea>

            <Button title={"Yadda saxla"}

              className="w-[344px] h=[48px]
              
              py-[12px]
              px-[24px]
              bg-[#2C4B9B]
              "

            />
          </form>



        </div>

        <div className={styles.editPhotoSection}>
          <h2>Photo</h2>
          <Image src={choose} />
          <Button title="Qalareyadan seç"
            className="w-[200px] h-[48px]"
          />
        </div>

      </div>
    )

  }




  return (
    <div className={styles.container}>

      {/* istifadeci melumatlari */}

      <div className={styles.userCard}>
        <div className={styles.profileImage}>
          <Image src={leftArrow} width={60} height={60} className={styles.arrow} />
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
          <Button
            title="Məlumatları düzənlə"
            className="w-[237px] h-[40px] 
          bg-white
          !border
          !border-blue-500
          !text-blue-500
          flex-row-reverse
          gap-[7px]
          "
            onClick={() => SetCheck(true)}
          >
            <Image src={addIcon} alt="" />

          </Button>
        </div>
      </div>

      {/* telimler ve sertifikatlar */}

      <div className={styles.box}>

        {/* telimler */}
        <div className={styles.myTrainings}>
          <h2>Şəxsi Kabinet</h2>
          <h4>Təlimlərim</h4>
          <ul className={styles.category}>
            <li>
              <a href="">Davam eden</a>
            </li>
            <li>
              <a href="">Tamamlanan</a>
            </li>
            <li>
              <a href="">Qeyd olunan</a>
            </li>
          </ul>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-8 mx-auto pt-2 justify-start items-center flex-col md:flex-row" >
              {
              dummyMock.map(({ certificate, userPhoto, id,title,description,author }) => {
                return <PersonalCard 
                certificate={certificate}
                  id={id}
                  author={author}
                  description={description}
                  title={title}
                  userPhoto={userPhoto}
                  timeIcon={timeIcon}
                  save={save}
                  className="flex flex-col relative pb-5 flex-[0_0_48%] min-w-0
 shadow-[4px_4px_12px_5px_rgba(0,0,0,0.05)] border border-[#dedede]
 rounded-tl-[100px] rounded-tr-[100px] rounded-br-[100px] rounded-bl-[10px] box-border"/>

              })
            }
            </div>
          </div>
        </div>

        {/* cards */}



        {/* sertifikatlar */}

        <div className={styles.lastBox}>
          <h2>Sertifikatlar</h2>
          <div className={styles.imgCertificateBox}>
            <Image src={certificate1} />
            <Image src={certificate2} />
          </div>


        </div>
      </div>
    </div>
  );


};

export default Cabinet;
