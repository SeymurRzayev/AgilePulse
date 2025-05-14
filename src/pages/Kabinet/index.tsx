import React from "react";
import styles from "./index.module.css";
import leftArrow from "../../assets/icons/left-arrow.svg";
import user from "../../assets/images/user.png";
import Button from "../../ui/Button/Button";
import addIcon from "../../assets/icons/pencil.svg";
import certificate from "../../assets/images/certificate.png";
import save from "../../assets/icons/save.svg";
import time from "../../assets/icons/oclock.svg"
import userPhoto from "../../assets/icons/userPhoto.svg"
import cerficate1 from "../../assets/images/certificate1.png"
import cerficate2 from "../../assets/images/certificate2.png"
const Kabinet = () => {
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
          >
            <img src={addIcon} alt="" /> Məlumatları düzənlə
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
          <div className={styles.boxes}></div>
        </div>

      {/* cards */}
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.BtnImg}>
              <img src={certificate} alt="" />
              <Button
                children="Kursa basla"
                style={{
                  position: "relative",
                  display: "flex",
                  width: 163,
                  justifyContent: "center",
                  alignItems: "center",
                  bottom: 55,
                  right: 10,
                  color: "#FFF",
                  backgroundColor: "#621DAC",
                  alignSelf: "flex-end",
                }}
              />
            </div>
            <div className={styles.certificateInfoBox}>

              <div className={styles.certificateInfo}>
                <p>Kanban ilə İş Axınını Optimallaşdır</p>
                <img src={save}  width={48} height={48} />
              </div>
              <div className={styles.certificateInfoDate}>
                <img src={time} alt="" />
                <p>4 modul</p>
                <p>16 blok</p>
              </div>
              <div className={styles.certificateUserInfo}>
                <img src={userPhoto} width={40} height={40}/>
                <h3>Tofiq Isayev</h3>
                <p>20.02.2025</p>
              </div>
            </div>
            
          </div>
          <div className={styles.card}>
            <div className={styles.BtnImg}>
              <img src={certificate} alt="" />
              <Button
                children="Kursa basla"
                style={{
                  position: "relative",
                  display: "flex",
                  width: 163,
                  justifyContent: "center",
                  alignItems: "center",
                  bottom: 55,
                  right: 10,
                  color: "#FFF",
                  backgroundColor: "#621DAC",
                  alignSelf: "flex-end",
                }}
              />
            </div>
            <div className={styles.certificateInfoBox}>

              <div className={styles.certificateInfo}>
                <p>Kanban ilə İş Axınını Optimallaşdır</p>
                <img src={save}  width={48} height={48} />
              </div>
              <div className={styles.certificateInfoDate}>
                <img src={time} alt="" />
                <p>4 modul</p>
                <p>16 blok</p>
              </div>
              <div className={styles.certificateUserInfo}>
                <img src={userPhoto} width={40} height={40}/>
                <h3>Tofiq Isayev</h3>
                <p>20.02.2025</p>
              </div>
            </div>
            
          </div>
          <div className={styles.card}>
            <div className={styles.BtnImg}>
              <img src={certificate} alt="" />
              <Button
                children="Kursa basla"
                style={{
                  position: "relative",
                  display: "flex",
                  width: 163,
                  justifyContent: "center",
                  alignItems: "center",
                  bottom: 55,
                  right: 10,
                  color: "#FFF",
                  backgroundColor: "#621DAC",
                  alignSelf: "flex-end",
                }}
              />
            </div>
            <div className={styles.certificateInfoBox}>

              <div className={styles.certificateInfo}>
                <p>Kanban ilə İş Axınını Optimallaşdır</p>
                <img src={save}  width={48} height={48} />
              </div>
              <div className={styles.certificateInfoDate}>
                <img src={time} alt="" />
                <p>4 modul</p>
                <p>16 blok</p>
              </div>
              <div className={styles.certificateUserInfo}>
                <img src={userPhoto} width={40} height={40}/>
                <h3>Tofiq Isayev</h3>
                <p>20.02.2025</p>
              </div>
            </div>
            
          </div>
          <div className={styles.card}>
            <div className={styles.BtnImg}>
              <img src={certificate} alt="" />
              <Button
                children="Kursa basla"
                style={{
                  position: "relative",
                  display: "flex",
                  width: 163,
                  justifyContent: "center",
                  alignItems: "center",
                  bottom: 55,
                  right: 10,
                  color: "#FFF",
                  backgroundColor: "#621DAC",
                  alignSelf: "flex-end",
                }}
              />
            </div>
            <div className={styles.certificateInfoBox}>

              <div className={styles.certificateInfo}>
                <p>Kanban ilə İş Axınını Optimallaşdır</p>
                <img src={save}  width={48} height={48} />
              </div>
              <div className={styles.certificateInfoDate}>
                <img src={time} alt="" />
                <p>4 modul</p>
                <p>16 blok</p>
              </div>
              <div className={styles.certificateUserInfo}>
                <img src={userPhoto} width={40} height={40}/>
                <h3>Tofiq Isayev</h3>
                <p>20.02.2025</p>
              </div>
            </div>
            
          </div>
        </div>


{/* sertifikatlar */}

                <div className={styles.lastBox}>
                  <h2>Sertifikatlar</h2>
                  <div className={styles.imgCertificateBox}>
                  <img src={cerficate1} alt="" />
                  <img src={cerficate2} alt="" />
                  </div>
                 

                </div>
      </div>
    </div>
  );
};

export default Kabinet;
