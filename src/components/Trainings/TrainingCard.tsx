import React from "react";
import styles from "../../assets/styles/Trainings.module.css";
import timeIcon from "../../assets/icons/time.svg";
import bookmarkIcon from "../../assets/icons/bookmark.svg";
import bookmarkCheckIcon from "../../assets/icons/bookmarkCheck.svg";
import { Link } from "react-router-dom";
import MainButton from "../Butttons/MainButton";

type TrainingCardProps = {
  imgUrl: string;
  title: string;
  time?: string;
  avatar?: string;
  user?: string;
  date?: string;
  content?: string;
  isArticle?: boolean;
};

const TrainingCard: React.FC<TrainingCardProps> = ({
  imgUrl,
  title,
  time,
  avatar,
  user,
  date,
  content,
  isArticle,
}: TrainingCardProps) => {
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  return (
    <div className='w-[381px] pb-[46px] bg-[#FFFFFF] hover:translate-y-[-5px] transition-all duration-300 shadow-[4px_4px_12px_5px_#0000000D] rounded-br-[100px] rounded-bl-xl rounded-tl-[50px] rounded-tr-[50px]'>
      <div className='h-[391px] relative flex items-center justify-center overflow-hidden'>
        <img src={imgUrl} className={styles.curveImg} />
        <div className="absolute bottom-0 right-0 flex justify-end items-end z-40">
          <div className={`${styles.infoButton}`}>
            <Link to={isArticle ? "/articles/details" : "/trainings/scrum"}>
              {isArticle
                ? <MainButton buttonClassName="py-6"  className="w-[162px] h-[55px]" text="Daha çox" />
                : <button className={styles.start_btn}>
                  Kursa başla
                </button>}
            </Link>
          </div>
        </div>
      </div>
      <div className={`pt-[32px] ${isArticle ? 'max-w-[355px]' : 'max-w-[339px]'} mx-auto`}>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="max-w-[221px] font-[Corbel] font-bold text-[22px] text-[#000000DE]">{title}</h3>
            {!isArticle && (
              <div className="flex gap-4 mt-[8px] items-center">
                <img src={timeIcon} className="w-[20.44px] h-[20.44px] rounded-full " alt="time_icon" />
                <span className="text-base font-[Corbel] font-normal text-[#00000099]">{time}</span>
              </div>
            )}
          </div>
          {!isArticle && (
            <img
              className='cursor-pointer'
              src={isBookmarked ? bookmarkCheckIcon : bookmarkIcon}
              alt="bookmark"
              onClick={() => setIsBookmarked((prev) => !prev)}
              loading="lazy"
            />
          )}
        </div>
        <div className=''>
          {content && <p className="mt-[12px] font-normal text-lg font-[Corbel] text-[#00000099] max-w-[343px]">{content}</p>}
        </div>

        {!isArticle && (
          <div className='flex mt-[32px] gap-x-7 items-center max-w-[339px]'>
            <div className='flex items-center gap-1'>
              <img className="w-[40px] h-[40px] object-cover rounded-full" src={avatar} alt={user} loading="lazy" />
              <span className="text-[#566FAF] font-[Corbel] text-base font-bold">{user}</span>
            </div>
            <span className='text-base font-[Corbel] font-normal text-[#00000099]'>{date}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainingCard;
