import React from "react";
import styles from "../../assets/styles/Trainings.module.css";
import timeIcon from "../../assets/icons/time.svg";
import bookmarkIcon from "../../assets/icons/bookmark.svg";
import bookmarkCheckIcon from "../../assets/icons/bookmarkCheck.svg";
import { Link } from "react-router-dom";
import MainButton from "../Butttons/MainButton";

type TrainingCardProps = {
  id?: number;
  imgUrl: string;
  title: string;
  time?: string;
  avatar?: string;
  user?: string;
  date?: string;
  content?: string;
  isArticle?: boolean;
  isCourse?: boolean;
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
  id,
  isCourse,
}: TrainingCardProps) => {
  const [isBookmarked, setIsBookmarked] = React.useState(false);
  return (
    <div
      className={`${isCourse ? 'w-[325px]' : 'w-[325px] sm:w-[381px]'} ${isArticle && 'min-h-[595px]'} bg-[#FFFFFF] hover:translate-y-[-5px] transition-all duration-300 shadow-[4px_4px_12px_5px_#0000000D] rounded-br-[100px] rounded-bl-xl rounded-tl-[50px] rounded-tr-[50px]`}
    >
      <div className={`h-[391px] relative flex items-center justify-center overflow-hidden`}>
        <img
          src={imgUrl}
          style={{
            clipPath: isCourse
              ? "path('M 0,0 L325,0 L328,286 Q 319.74,307 300.43,316 Q 291.98,319 274.56,321 L215.71,321 Q 158.3,317 150,354 Q 141.39,344 142,355 Q 83.27,399 157,300 Q 158.06,391 97.76,391 L0,391 Z')"
              : "path('M 0,0 L381,0 L381,280 Q 375,307 347,316 Q 338,318 335,318 L240,320 Q 221,320 207,332 Q 202,336 198,346 Q 196,356 196,357 Q 190,387 158,391 L0,391 Z')"
          }}
          className={`${styles.curveImg}
           `} />
        <div className="absolute bottom-0 right-0 flex justify-end items-end z-20">
          <div className={`${styles.infoButton}`}>
            <Link to={isArticle ? `/articles/details/${id}` : "/trainings/scrum"}>
              {isArticle
                ? <MainButton buttonClassName="py-6" className="w-[162px] h-[55px] pr-1" text="Daha çox" />
                : <button className={`${styles.start_btn} min-w-[140px] h-[55px] sm:w-[162px] sm:h-[55px] `}>
                  Kursa başla
                </button>}
            </Link>
          </div>
        </div>
      </div>
      <div className={
        `pt-[28px] 
        ${isCourse && 'px-4 md:px-[26px] py-[29px]'} 
        ${isArticle ? 'max-w-[355px] px-3 sm:px-0' : 'max-w-[339px] sm:px-0'} mx-auto`
      }>
        <div className="flex items-start justify-between">
          <div>
            <h3 className={` ${!isArticle && 'max-w-[221px]'}  font-[Corbel] font-bold text-[22px] text-[#000000DE]`}>{title}</h3>
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
          {content && <p className="mt-[12px] min-h-[96px] font-normal text-base md:text-lg font-[Corbel] text-[#00000099] max-w-[343px]">{content}</p>}
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
