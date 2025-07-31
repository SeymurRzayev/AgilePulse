import Footer from "../../layout/Footer/Footer"
import Navbar from "../../layout/Navbar/Navbar"
import backgroundImage from '../../assets/images/articles-bg.jpg'
import { useState } from "react";
import TrainingCard from "../../components/Trainings/TrainingCard";
import { useGetAllArticleQuery } from "../../services/features/mainPage/articleApi";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import { PaginationCss } from "../../consts/consts";

const Articles = () => {

    const [page, setPage] = useState<number>(1);
    const countPerPage = 6;

    const { data: allArticlesResponse, isLoading } = useGetAllArticleQuery({
        page: page - 1,
        count: countPerPage
    })

    const allArticles = allArticlesResponse?.data.data
    const totalCount = allArticlesResponse?.data.totalElements || 0;
    const totalPages = Math.ceil(totalCount / countPerPage);


    if (isLoading) return <div className="text-center mt-10">Yüklənir...</div>;
    if (!allArticlesResponse) return <div className="text-center mt-10">Kitab tapılmadı.</div>;

    const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        window.scrollTo({ top: 300, behavior: 'smooth' });
    };

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
            <div className="w-[90%] flex flex-wrap gap-y-10 mt-[55px] mb-[74px] justify-center gap-x-6 mx-auto">

                {
                    allArticles?.map(item =>
                        <TrainingCard
                            className='w-[325px] md:w-[381px]'
                            isCurveBig={true}
                            isArticle={true}
                            title={item.title}
                            imgUrl={item.imageUrl}
                            content={item.content}
                            key={item.id}
                            id={item.id}
                        />
                    )
                }

            </div>
            <div className="flex justify-center mb-[40px] md:mb-[50px] lg:mb-[74px]">
                <Stack spacing={2}>
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={handleChange}
                        color="primary"
                        sx={PaginationCss}
                    />
                </Stack>
            </div>
            <Footer />
        </div>
    )
}

export default Articles