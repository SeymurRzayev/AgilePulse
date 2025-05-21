import { useState, useEffect, useRef, useCallback } from "react";
import type { FC } from "react";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import styles from "./BookSection.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const bookImages = [
  "https://as2.ftcdn.net/v2/jpg/00/34/26/61/1000_F_34266135_Cki3pgen1JRdEuthnW3YXgrvHGhjlAqn.jpg",
  "https://m.media-amazon.com/images/I/81ZgVTKyyiL.UF1000,1000_QL80.jpg",
  "https://www.un.org/sites/un2.un.org/files/styles/large-article-image-style-16-9/public/2021/12/human-rights-exhibits.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1556410005i/45318151.jpg",
  "https://media.licdn.com/dms/image/C5612AQExDzdX9dzYrA/article-cover_image-shrink_600_2000/0/1644469313843?e=2147483647&v=beta&t=rGwKP6_aXhVMQpAHcJN3HJXlO8AYiRGg2focfzUus_g",
  "https://agilekrc.com/agile-training-course/agile-project-management.jpg",
  "https://m.media-amazon.com/images/I/81ZgVTKyyiL.UF1000,1000_QL80.jpg",
  "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1556410005i/45318151.jpg",
  "https://media.licdn.com/dms/image/C5612AQExDzdX9dzYrA/article-cover_image-shrink_600_2000/0/1644469313843?e=2147483647&v=beta&t=rGwKP6_aXhVMQpAHcJN3HJXlO8AYiRGg2focfzUus_g",
  "https://agilekrc.com/agile-training-course/agile-project-management.jpg",
];


const BookSection: FC = () => {
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<Slider>(null);
  const autoplayIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);


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
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className={styles.bookSection}>
      <div className={styles.textContainer}>
        <p className={styles.description}>
          {" "}
          Agile metodologiyası haqqında daha ətraflı məlumat almaq üçün
          kitabxanamızda olan bir çox kitabı <b>ödənişsiz</b> oxuya bilərsiniz.
        </p>
      </div>

      <Slider ref={sliderRef} {...settings} className={styles.sliderWrapper}>
        {bookImages.map((image, index) => (
          <div
            key={index}
            className={`${styles.slideItem} ${index === activeIndex ? styles.activeSlide : styles.blurredSlide
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
              src={image}
              alt={`Agile book ${index + 1}`}
              className={styles.bookImage}
              loading="lazy"
            />
          </div>
        ))}
      </Slider>

      <div className={styles.buttonContainer}>
        <button onClick={() => navigate('/library')} className={styles.moreButton}>Daha çox</button>
      </div>
    </div>
  );
};

export default BookSection;
