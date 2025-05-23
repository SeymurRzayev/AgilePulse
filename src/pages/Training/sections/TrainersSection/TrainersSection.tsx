import type { FC } from "react";
import styles from "./TrainersSection.module.css";
import trainerFirst from "../../../../assets/images/trainer1.jpg";
import trainerSecond from "../../../../assets/images/trainer2.jpg";
import trainerThird from "../../../../assets/images/trainer3.jpg";
import Slider from "react-slick";


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
    
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
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
     {
      id: 4,
      name: "Tofiq İsayev",
      title: "Agile Facilitator",
      description: "Retrospektiv və planlama təlimçisi",
      image: trainerThird,
    },
    {
      id: 5,
      name: "Məhəmməd Qasımov",
      title: "Scrum Master və Agile Coach",
      description: "8+ il real komanda təcrübəsi.",
      image: trainerSecond,
    },
     {
      id: 6,
      name: "Səadət Hüseynova",
      title: "Product Owner",
      description: "Startap və korporativ layihələrdə liderlik təcrübəsi.",
      image: trainerFirst,
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

      

      {/* Contact Section */}
    </div>
  );
};

export default TrainersSection;
