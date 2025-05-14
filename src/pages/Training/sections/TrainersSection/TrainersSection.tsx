import { useState } from "react";
import type { FC } from "react";
import styles from "./TrainersSection.module.css";

interface Trainer {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
}

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  date: string;
  image: string;
}

const TrainersSection: FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const trainers: Trainer[] = [
    {
      id: 1,
      name: "Səadət Hüseynova",
      title: "Product Owner",
      description: "Startap və korporativ layihələrdə liderlik təcrübəsi.",
      image: "/assets/images/nigar photo.png",
    },
    {
      id: 2,
      name: "Məhəmməd Qasımov",
      title: "Scrum Master və Agile Coach",
      description: "8+ il real komanda təcrübəsi.",
      image: "/assets/images/trainer2.png",
    },
    {
      id: 3,
      name: "Tofiq İsayev",
      title: "Agile Facilitator",
      description: "Retrospektiv və planlama təlimçisi",
      image: "/assets/images/trainer3.png",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Nigar Məmmədova",
      quote: "Agile təlimi mənim üçün tam bir geri dönüş nöqtəsi oldu. Məzmun real iş həyatına uyğun qurulmuşdu.",
      date: "15.03.2025",
      image: "/assets/images/testimonial1.png",
    },
    {
      id: 2,
      name: "Elvin Quliyev",
      quote: "Platforma çox peşəkar formada hazırlanıb. Təlimin sonunda Agile metodologiyasını rahatlıqla tətbiq edə bilirəm.",
      date: "02.04.2025",
      image: "/assets/images/testimonial2.png",
    },
  ];

  const handlePrevTestimonial = () => {
    setCurrentTestimonial(prev =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial(prev =>
      (prev + 1) % testimonials.length
    );
  };

  return (
    <div className={styles.trainersContainer}>
      {/* Trainers Section */}
      <div className={styles.trainersSection}>
        <div className={styles.sectionHeader}>
          <h2>Təlimçilər</h2>
          <p>Agile sahəsində illərin təcrübəsinə sahib mütəxəssislər bu yolda səninlədir.</p>
        </div>

        <div className={styles.trainersGrid}>
          {trainers.map(trainer => (
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
        </div>
      </div>

      {/* Testimonials Section */}
      <div className={styles.testimonialsSection}>
        <h2>İştirakçıların Təlim Təcrübələri</h2>
        <p>AgilePulse platformasında təlim keçmiş iştirakçılarımızın real fikirləri. Onların təcrübələri sizin yolunuzu aydınlada bilər.</p>

        <div className={styles.testimonialSlider}>
          <button
            className={styles.navArrow}
            onClick={handlePrevTestimonial}
            aria-label="Previous testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className={styles.testimonialCardsContainer}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`${styles.testimonialCard} ${index === currentTestimonial ? styles.active : ''}`}
              >
                <div className={styles.testimonialImageContainer}>
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className={styles.testimonialContent}>
                  <span className={styles.quoteIcon}>"</span>
                  <div className={styles.testimonialText}>
                    <p>{testimonial.quote}</p>
                    <div className={styles.testimonialFooter}>
                      <span className={styles.testimonialName}>{testimonial.name}</span>
                      <span className={styles.testimonialDate}>{testimonial.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className={styles.navArrow}
            onClick={handleNextTestimonial}
            aria-label="Next testimonial"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Contact Section */}
      <div className={styles.contactSection}>
        <h2>Bizə Yaz</h2>
        <p>"Sualın var? Bizimlə əlaqə saxla – komandamız sənə kömək etməyə hazırdır!"</p>

        <div className={styles.contactForm}>
          <div className={styles.formWrapper}>
            <div className={styles.messageWrapper}>
              <div className={styles.messageArea}>
                <textarea placeholder="Bizə yaz"></textarea>
                <button className={styles.sendButton}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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