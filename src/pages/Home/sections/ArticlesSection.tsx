import { useNavigate } from "react-router-dom";
import styles from "../../../assets/styles/Trainings.module.css";

import TrainingCard from "../../../components/Trainings/TrainingCard";
import { useGetAllArticleQuery } from "../../../services/features/mainPage/articleApi";
const ArticlesSection = () => {

  const navigate = useNavigate()

  const { data: allArticlesResponse } = useGetAllArticleQuery()

  if (!allArticlesResponse) return null;;

  const allArticles = allArticlesResponse?.data.data.slice(0, 3)



  return (
    <div className="my-15">
      <div className="mt-10 flex flex-col items-center gap-4">
        <h2 className="text-center w-full font-[Corbel] font-bold text-[46px] ">Məqalələr</h2>
        <p className="text-lg text-[#000000DE] px-2 sm:px-0 font-[Corbel] font-normal text-center">
          Agile metodologiyası haqqında ən son məqalələr, praktik yanaşmalar və
          mütəxəssis fikirləri ilə tanış olun.
        </p>
      </div>
      <div className="w-full flex px-1 flex-wrap mt-15 justify-center gap-6">
        {allArticles.map((item) => (
          <TrainingCard
            className="w-[381px]"
            isCurveBig={true}
            isArticle={true}
            title={item.title}
            imgUrl={item.imageUrl}
            content={item.content}
            key={item.id}
            id={item.id}
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