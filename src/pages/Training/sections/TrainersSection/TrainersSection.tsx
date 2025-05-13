import type { FC } from "react";
import styles from "./TrainersSection.module.css";
import { useEffect, useState } from "react";

const TrainersSection: FC = () => {
  const [trainerImages, setTrainerImages] = useState<string[]>([]);

  useEffect(() => {
    setTrainerImages([
      "/api/placeholder/400/400",
      "/api/placeholder/400/400",
      "/api/placeholder/400/400"
    ]);
  }, []);

  const trainers = [
    {
      id: 1,
      name: "Səadət Hüseynova",
      title: "Product Owner",
      description: "Startap və korporativ layihələrdə liderlik təcrübəsi.",
      image: trainerImages[0],
    },
    {
      id: 2,
      name: "Məhəmməd Qasımov",
      title: "Scrum Master və Agile Coach",
      description: "8+ il real komanda təcrübəsi.",
      image: trainerImages[1],
    },
    {
      id: 3,
      name: "Tofiq İsayev",
      title: "Agile Facilitator",
      description: "Retrospektiv və planlama təlimçisi",
      image: trainerImages[2],
    },
  ];
  
  const testimonials = [
    {
      id: 1,
      name: "Nigar Məmmədova",
      quote: "Agile təlimi mənim üçün tam bir geri dönüş nöqtəsi oldu. Məzmun real iş həyatına uyğun qurulmuşdu.",
      date: "15.01.2025"
    },
    {
      id: 2,
      name: "Elvin Quliyev",
      quote: "Platforma çox peşəkar formada hazırlanıb. Təlimin sonunda Agile metodologiyasını rahatlıqla tətbiq edə bilirəm.",
      date: "03.04.2025"
    }
  ];

  return (
    <div className={styles.trainersContainer}>
      <div className={styles.trainersSection}>
        <div className={styles.texts}>
          <h2>Təlimçilər</h2>
          <p>Agile sahəsində illərin təcrübəsinə sahib mütəxəssislər bu yolda səninlədir.</p>
        </div>
        <div className={styles.cards}>
          {trainers.map((trainer) => (
            <div className={styles.card} key={trainer.id}>
              <div className={styles.imageWrapper}>
                <img src={trainer.image} alt={trainer.name} className={styles.trainerImage} />
              </div>
              <div className={styles.description}>
                <h3>{trainer.name}</h3>
                <h4>{trainer.title}</h4>
                <p>{trainer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.testimonialsSection}>
        <h2>İştirakçıların Təlim Təcrübələri</h2>
        <p>AgilePulse platformasında təlim keçmiş iştirakçılarımızın real fikirləri. Onların təcrübələri sizin yolunuzu aydınlada bilər.</p>
        
        <div className={styles.testimonials}>
          <button className={`${styles.navArrow} ${styles.prevArrow}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <div className={styles.quoteIcon}>"</div>
                <p>{testimonial.quote}</p>
                <div className={styles.testimonialFooter}>
                  <span className={styles.testimonialName}>{testimonial.name}</span>
                  <span className={styles.testimonialDate}>{testimonial.date}</span>
                </div>
              </div>
            </div>
          ))}
          
          <button className={`${styles.navArrow} ${styles.nextArrow}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
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
                    <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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