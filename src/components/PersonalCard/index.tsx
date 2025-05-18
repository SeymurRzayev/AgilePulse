import styles from "./index.module.css"
import Button from '../../ui/Button/Button'
import ImageComponent from '../ImageComponent'

export type CabinetProps = {
    userImg?: ImageData,
    certificate: string,
    userPhoto: string,
    timeIcon: string ,
    save: string,
    className?: string,
    description?: string,
    title?:string,
    author?:string,
    date?: number,
    id?: number
}
const PersonalCard = ({
  certificate,userPhoto,
  timeIcon,save,className,
  title,
  description,
  date,
  author
}: CabinetProps) => {
  return (
    <div className={className}>
            <div className={styles.BtnImg}>
              <ImageComponent src={certificate}/>
              <Button
                title="Kursa basla"
                className=" relative bottom-[60px]
                bg-[#621DAC] self-end  mr-[10px]
                bg-gradient-to-r from-[#4A00E0] to-[#8E2DE2]
                md:max-[1008px]:right-0
                "
              />
            </div>
            <div className={styles.certificateInfoBox}>

              <div className={styles.certificateInfo}>
                <p>{title}</p>
                <a href=""><ImageComponent src={save}  width={48} height={48} /></a>
              </div>
              <div className={styles.certificateInfoDate}>
                <ImageComponent src={timeIcon}  />
                <p>{description}</p>
              </div>
              <div className={styles.certificateUserInfo}>
                <ImageComponent src={userPhoto} width={40} height={40}/>
                <h3>{author}</h3>
                <p>{date}</p>
              </div>
            </div>
            
          </div>
  )
}

export default PersonalCard