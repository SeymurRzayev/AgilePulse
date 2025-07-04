import { useState, useEffect, useRef, useCallback } from "react";
import type { FC } from "react";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import styles from "./BookSection.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { useGetAllBookQuery } from "../../../../services/features/mainPage/bookApi";

const BookSection: FC = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<Slider>(null);
  const autoplayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(
    null
  );

  const { data, isLoading, isError } = useGetAllBookQuery()

  const allBook = data?.data?.data

  const startAutoplay = useCallback(() => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
    }

    autoplayIntervalRef.current = setInterval(() => {
      if (sliderRef.current && !isPaused) {
        sliderRef.current.slickNext();
      }
    }, 3000);
  }, [isPaused]);

  useEffect(() => {
    startAutoplay();

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
    };
  }, [isPaused, startAutoplay]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    initialSlide: activeIndex,
    beforeChange: (_current: number, next: number) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className={styles.bookSection}>
      <div className={styles.textContainer}>
        <p className={styles.description}>
          Agile metodologiyası haqqında daha ətraflı məlumat almaq üçün
          kitabxanamızda olan bir çox kitabı <b>ödənişsiz</b> oxuya bilərsiniz.
        </p>
      </div>
      <div className={styles.sliderContainer}>
        {isLoading ? (
          <div>Yüklənir...</div>
        ) : isError ? (
          <div>Xəta baş verdi!</div>
        ) : (
          <Slider ref={sliderRef} {...settings} className={styles.sliderWrapper}>
            {allBook?.map((book, index) => (
              <div
                key={index}
                className={`${styles.slideItem} ${index === activeIndex ? styles.activeSlide : styles.blurredSlide
                  } `}
                onClick={togglePause}
                title={
                  isPaused
                    ? "Davam etdirmək üçün kliklə"
                    : "Dayandırmaq üçün kliklə"
                }
                tabIndex={-1}
              >
                <img
                  onClick={() => navigate(`/library/detail/${book.id}`)}
                  src={book.imageUrl}
                  alt={`Agile book ${index + 1}`}
                  className={` ${styles.bookImage}`}
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
        )}
        <div className={styles.buttonContainer}>
          <button
            onClick={() => navigate("/library")}
            className={styles.moreButton}
          >
            Daha çox
          </button>
        </div>
      </div>

    </div>
  );
};

export default BookSection;
