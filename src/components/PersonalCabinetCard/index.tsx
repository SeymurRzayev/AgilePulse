import styles from "./index.module.css"
import Button from '../../ui/Button/Button'
import ImageComponent from '../ImageComponent'

type CabinetProps = {
    userImg?: ImageData,
    certificate: string,
    userPhoto: string,
    timeIcon: string ,
    save: string,
    className: string
}
const personalCabinetCard = ({certificate,userPhoto,timeIcon,save,className}: CabinetProps) => {
  return (
    <div className={className}>
            <div className={styles.BtnImg}>
              <ImageComponent src={certificate} />
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
                <a href=""><ImageComponent src={save}  width={48} height={48} /></a>
              </div>
              <div className={styles.certificateInfoDate}>
                <ImageComponent src={timeIcon}  />
                <p>4 modul</p>
                <p>16 blok</p>
              </div>
              <div className={styles.certificateUserInfo}>
                <ImageComponent src={userPhoto} width={40} height={40}/>
                <h3>Tofiq Isayev</h3>
                <p>20.02.2025</p>
              </div>
            </div>
            
          </div>
  )
}

export default personalCabinetCard