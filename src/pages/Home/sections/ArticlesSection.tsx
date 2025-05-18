import Article1 from "../../../assets/images/Article.jpg";
import Article2 from "../../../assets/images/Article2.png";
import Article3 from "../../../assets/images/Article3.png";
import styles from "../../../assets/styles/Trainings.module.css";

import  TrainingCard  from "../../../components/Trainings/TrainingCard";
const ArticlesSection = () => {
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
      <div className="mt-10 flex flex-col items-center gap-3">
        <h2 className="text-center text-2xl w-full font-mbold">Məqalələr</h2>
        <p className="text-sm w-2/3 font-normal text-center">
          Agile metodologiyası haqqında ən son məqalələr, praktik yanaşmalar və
          mütəxəssis fikirləri ilə tanış olun.
        </p>
      </div>
      <div className="flex flex-wrap mt-15 justify-center gap-5">
        {data.map((item) => (
          <div key={item.id} className="w-[100%] sm:w-[40%] md:w-[30%]">
            <TrainingCard
              isArticle={true}
              title={item.title}
              imgUrl={item.img}
              content={item.content}
            />
          </div>
        ))}
      </div>
      <div className={styles.viewAllContainer}>
        <button className={styles.viewAllBtn}>Hamısına bax</button>
      </div>
    </div>
  );
};

export default ArticlesSection;