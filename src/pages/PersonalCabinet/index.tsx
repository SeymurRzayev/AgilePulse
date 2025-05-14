import styles from "./index.module.css";
import leftArrow from "../../assets/icons/left-arrow.svg";
import user from "../../assets/images/user.png";
import Button from "../../ui/Button/Button";
import addIcon from "../../assets/icons/pencil.svg";
import certificate from "../../assets/images/certificate.png";
import save from "../../assets/icons/save.svg";
import time from "../../assets/icons/oclock.svg"
import userPhoto from "../../assets/icons/userPhoto.svg"
import certificate1 from "../../assets/images/certificate1.png"
import certificate2 from "../../assets/images/certificate2.png"
import choose from "../../assets/images/choose.png"
import Image from "../../components/ImageComponent"
import PersonalCabinetCard from "../../components/PersonalCabinetCard"
import { useState } from "react";


const Cabinet = () => {

  const [check, SetCheck] = useState<boolean>(false)



  if (check) {


    return (
      <div className={styles.container}>
        <div className={styles.userCard}>
          <div className={styles.profileImage}>
            <img src={leftArrow} width={60} height={60} />
            <img src={user} alt="Emin Huseynov" />
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
              style={{
                width: 237,
                height: 40,
                color: "#2C4B9B",
                border: "1px solid #621DAC",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
              onClick={() => SetCheck(true)}
            >
              <img src={addIcon} alt="" />
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
            <Button children={"Yadda saxla"}
            style={{
              width: 344,
              height: 48,
              color: "#fff"
            }}
            />
          </form>



        </div>

        <div className={styles.editPhotoSection}>
            <h2>Photo</h2>
            <Image src={choose} />
            <Button children="Qalereyadan seç" 
            style={{
              width: 200,
              height: 48,
              color: "#fff"
            }}
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
          <img src={leftArrow} width={60} height={60} />
          <img src={user} alt="Emin Huseynov" />
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
            style={{
              width: 237,
              height: 40,
              color: "#2C4B9B",
              border: "1px solid #621DAC",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
            onClick={() => SetCheck(true)}
          >
            <img src={addIcon} alt="" />
            Məlumatları düzənlə
          </Button>
        </div>
      </div>

      {/* telimler ve sertifikatlar */}

      <div className={styles.box}>
        {/* telimler */}
        <div className={styles.myTrainings}>
          <h2>Şəxsi Cabinet</h2>
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
          <div className={styles.boxes}></div>
        </div>

        {/* cards */}
        <div className={styles.cardContainer}>
          <PersonalCabinetCard
            className={styles.card}
            certificate={certificate}
            save={save}
            timeIcon={time}
            userPhoto={userPhoto} />
          <PersonalCabinetCard
            className={styles.card}
            certificate={certificate}
            save={save}
            timeIcon={time}
            userPhoto={userPhoto} />
          <PersonalCabinetCard
            className={styles.card}
            certificate={certificate}
            save={save}
            timeIcon={time}
            userPhoto={userPhoto} />
          <PersonalCabinetCard
            className={styles.card}
            certificate={certificate}
            save={save}
            timeIcon={time}
            userPhoto={userPhoto} />
        </div>


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
