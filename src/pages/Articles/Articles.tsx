import Footer from "../../layout/Footer/Footer"
import Navbar from "../../layout/Navbar/Navbar"
import backgroundImage from '../../assets/images/articles-bg.jpg'
import { useState } from "react";
import TrainingCard from "../../components/Trainings/TrainingCard";
import ShowMoreBtn from "../../components/Butttons/ShowMoreBtn";
import { useGetAllArticleQuery } from "../../services/features/articleApi";

const Articles = () => {

    const [visibility, setVisibility] = useState(6)

    const { data: allArticlesResponse } = useGetAllArticleQuery()

    if (!allArticlesResponse) return null;

    const allArticles = allArticlesResponse?.data.data

    const slicesArticles = allArticles.slice(0, visibility)



    return (
        <div>
            <div className="relative left-0 w-full flex items-center justify-center">
                <Navbar />
            </div>
            <div
                style={{ backgroundImage: `url(${backgroundImage})` }}
                className="w-full relative -z-10 h-[357px] bg-no-repeat bg-cover bg-center"
            >
                <div className="absolute z-10 flex items-center justify-center bg-[#00000099]  w-full h-full bg-">
                    <h2 className="text-[34px] font-[Corbel] font-bold text-[#FFFFFF] w-[832px] text-center mt-6">Agile metodları və tətbiq sahələri üzrə peşəkar məqalələr </h2>
                </div>
            </div>
            <h3 className="text-[#000000DE] text-2xl font-[Corbel] font-normal text-center mt-[43px]">Təcrübəni zənginləşdirəcək materiallar burada!</h3>
            <div className="w-[90%] flex flex-wrap gap-y-10 mt-[55px] mb-[137px] justify-center gap-x-6 mx-auto">

                {
                    slicesArticles.map(item =>
                        <TrainingCard
                            isArticle={true}
                            title={item.title}
                            imgUrl={item.imageUrl}
                            content={item.content}
                            key={item.id}
                            id={item.id}
                        />
                    )
                }

                {allArticles?.length > 6 && (
                    visibility >= allArticles.length
                        ? (
                            <div className="w-full text-center">
                                <ShowMoreBtn text='Daha az göstər' onClick={() => setVisibility(6)} />
                            </div>
                        )
                        : (
                            <div className="w-full text-center">
                                <ShowMoreBtn text='Daha çox göstər' onClick={() => setVisibility(prev => prev + 6)} />
                            </div>
                        )
                )
                }
            </div>
            <Footer />
        </div>
    )
}

export default Articles