import { useNavigate } from "react-router-dom";
import Article1 from "../../../assets/images/Article.webp";
import Article2 from "../../../assets/images/Article2.webp";
import Article3 from "../../../assets/images/Article3.webp";
import styles from "../../../assets/styles/Trainings.module.css";

import TrainingCard from "../../../components/Trainings/TrainingCard";
const ArticlesSection = () => {

  const navigate = useNavigate()

  const data = [
    {
      id: 1,
      img: Article1,
      title: "Agile metodologiyası nədir?",
      content:
        "Son dövrlərdə tez-tez eşitdiyimiz “agile”, “agile management” və ya “agile project management” layihə idarəetməsinin bir metodologiyası olaraq tanınır.",
    },
    {
      id: 2,
      img: Article2,
      title: "Təşkilatlarda çevik idarəetmə",
      content:
        "Son dövrlərdə tez-tez eşitdiyimiz “agile”, “agile management” və ya “agile project management” layihə idarəetməsinin ...",
    },
    {
      id: 3,
      img: Article3,
      title: "Agile gündəlik həyatımızda necə tətbiq edə bilərik?",
      content:
        "Son dövrlərdə tez-tez eşitdiyimiz “agile”, “agile management” və ya “agile project management” layihə idarəetməsinin ...",
    },
  ];

  return (
    <div className="my-15">
      <div className="mt-10 flex flex-col items-center gap-4">
        <h2 className="text-center w-full font-[Corbel] font-bold text-[46px] ">Məqalələr</h2>
        <p className="text-lg text-[#000000DE] font-[Corbel] font-normal text-center">
          Agile metodologiyası haqqında ən son məqalələr, praktik yanaşmalar və
          mütəxəssis fikirləri ilə tanış olun.
        </p>
      </div>
      <div className="w-full flex px-1 flex-wrap mt-15 justify-center gap-6">
        {data.map((item) => (
          <TrainingCard
            isArticle={true}
            title={item.title}
            imgUrl={item.img}
            content={item.content}
            key={item.id}
          />
        ))}
      </div>
      <div className={styles.viewAllContainer}>
        <button onClick={() => navigate('/articles')} className={styles.viewAllBtn}>Hamısına bax</button>
      </div>
    </div>
  );
};

export default ArticlesSection;