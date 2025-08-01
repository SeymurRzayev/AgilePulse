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

  const countPerPage = 6; // slider-də neçə kitab göstəriləcək
  const [page, setPage] = useState(0); // 0-dan başlayır, API-də də eynidir

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<Slider>(null);
  const autoplayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(
    null
  );

  const { data, isLoading, isError } = useGetAllBookQuery({
    page,
    count: countPerPage,
  });
  const allBook = data?.data?.data ?? [];
  const totalCount = data?.data?.totalElements ?? 0;
  const totalPages = Math.ceil(totalCount / countPerPage);

  // Autoplay
  const startAutoplay = useCallback(() => {
    if (autoplayIntervalRef.current) clearInterval(autoplayIntervalRef.current);

    autoplayIntervalRef.current = setInterval(() => {
      if (sliderRef.current && !isPaused) {
        if (activeIndex === allBook.length - 1) {
          // Əgər cari səhifənin son kitabındadırsa
          if (page < totalPages - 1) {
            // Əgər başqa səhifə varsa, növbəti səhifəyə keç
            setPage((p) => p + 1);
            setActiveIndex(0);
          } else {
            // Əgər son səhifədədirsə, birinci səhifəyə qayıt
            setPage(0);
            setActiveIndex(0);
          }
        } else {
          // Normal halda - növbəti slayda keç
          sliderRef.current.slickNext();
          setActiveIndex((prev) => prev + 1);
        }
      }
    }, 3000);
  }, [isPaused, activeIndex, allBook.length, page, totalPages]);

  const beforeChangeHandler = (_current: number, next: number) => {
    // Əl ilə naviqasiya üçün
    if (next >= allBook.length) {
      if (page < totalPages - 1) {
        // Növbəti səhifəyə keç
        setPage((p) => p + 1);
        setActiveIndex(0);
      } else {
        // Son səhifədədirsə, birinci səhifəyə qayıt
        setPage(0);
        setActiveIndex(0);
      }
    } else if (next < 0) {
      if (page > 0) {
        // Əvvəlki səhifəyə keç
        setPage((p) => p - 1);
        setActiveIndex(countPerPage - 1);
      } else {
        // Birinci səhifədədirsə, son səhifəyə keç
        setPage(totalPages - 1);
        setActiveIndex(countPerPage - 1);
      }
    } else {
      // Normal halda - sadəcə aktiv indeksi yenilə
      setActiveIndex(next);
    }
  };

  // Səhifə dəyişəndə slideri sıfırla
  useEffect(() => {
    if (allBook.length > 0) {
      sliderRef.current?.slickGoTo(0);
      setActiveIndex(0);
    }
  }, [page, allBook.length]);

  useEffect(() => {
    startAutoplay();

    return () => {
      if (autoplayIntervalRef.current)
        clearInterval(autoplayIntervalRef.current);
    };
  }, [startAutoplay]);

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
    beforeChange: beforeChangeHandler,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
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

  if (isLoading) return <div>Yüklənir...</div>;
  if (isError) return <div>Xəta baş verdi!</div>;

  return (
    <div className={styles.bookSection}>
      <div className={styles.textContainer}>
        <p className={styles.description}>
          Agile metodologiyası haqqında daha ətraflı məlumat almaq üçün
          kitabxanamızda olan bir çox kitabı <b>ödənişsiz</b> oxuya bilərsiniz.
        </p>
      </div>
      <div className={styles.sliderContainer}>
        <Slider
          ref={sliderRef}
          {...settings}
          className={`${styles.sliderWrapper} `}
        >
          {allBook.map((book, index) => (
            <div
              key={book.id}
              className={`${styles.slideItem} ${
                index === activeIndex ? styles.activeSlide : styles.blurredSlide
              }`}
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
                className={` ${styles.bookImage} `}
                loading="lazy"
              />
            </div>
          ))}
        </Slider>
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
