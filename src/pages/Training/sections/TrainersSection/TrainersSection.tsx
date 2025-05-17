import type { FC } from "react";
import styles from "./TrainersSection.module.css";
import trainerFirst from "../../../../assets/images/trainer1.jpg";
import trainerSecond from "../../../../assets/images/trainer2.jpg";
import trainerThird from "../../../../assets/images/trainer3.jpg";
import Slider from "react-slick";

import TrainingExperiences from "../../../Home/sections/TrainingExperiences";

interface Trainer {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
}

const TrainersSection: FC = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
   responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      }
    
    ]
  };
  const trainers: Trainer[] = [
    {
      id: 1,
      name: "Səadət Hüseynova",
      title: "Product Owner",
      description: "Startap və korporativ layihələrdə liderlik təcrübəsi.",
      image: trainerFirst,
    },
    {
      id: 2,
      name: "Məhəmməd Qasımov",
      title: "Scrum Master və Agile Coach",
      description: "8+ il real komanda təcrübəsi.",
      image: trainerSecond,
    },
    {
      id: 3,
      name: "Tofiq İsayev",
      title: "Agile Facilitator",
      description: "Retrospektiv və planlama təlimçisi",
      image: trainerThird,
    },
  ];

  return (
    <div className={styles.trainersContainer}>
      {/* Trainers Section */}
      <div className={styles.trainersSection}>
        <div className={styles.sectionHeader}>
          <h2>Təlimçilər</h2>
          <p>
            Agile sahəsində illərin təcrübəsinə sahib mütəxəssislər bu yolda
            səninlədir.
          </p>
        </div>

       
          <div className="slider-container py-4">
            <Slider {...settings}>

{trainers.map((trainer) => (
            <div key={trainer.id} className={styles.trainerCard}>
              <div className={styles.trainerImageContainer}>
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className={styles.trainerImage}
                />
              </div>
              <div className={styles.trainerInfo}>
                <h3>{trainer.name}</h3>
                <h4>{trainer.title}</h4>
                <p>{trainer.description}</p>
              </div>
            </div>
          ))}
            </Slider>

          </div>
          
      
      </div>

      <TrainingExperiences />

      {/* Contact Section */}
      <div className={styles.contactSection}>
        <h2>Bizə Yaz</h2>
        <p>
          "Sualın var? Bizimlə əlaqə saxla – komandamız sənə kömək etməyə
          hazırdır!"
        </p>

        <div className={styles.contactForm}>
          <div className={styles.formWrapper}>
            <div className={styles.messageWrapper}>
              <div className={styles.messageArea}>
                <textarea placeholder="Bizə yaz"></textarea>
                <button className={styles.sendButton}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles.inputFields}>
              <input type="text" placeholder="Ad Soyad" />
              <input type="email" placeholder="E-mail adress" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainersSection;
