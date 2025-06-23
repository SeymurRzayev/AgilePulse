import { useParams } from 'react-router-dom';
import backgroundImage from '../../assets/images/articles-bg.jpg'
import ShowMoreText from '../../components/Butttons/ShowMoreText';
import TrainingCard from '../../components/Trainings/TrainingCard';
import { useGetAllArticleQuery, useGetArticleByIdQuery } from '../../services/features/articleApi';
import dayjs from 'dayjs';

const ArticleDetails = () => {

    const params = useParams()
    const { data: allArticlesResponse } = useGetAllArticleQuery()
    const { data: articleRes } = useGetArticleByIdQuery(Number(params.id))

    const article = articleRes?.data
    const allArticles = allArticlesResponse?.data.data

    const rawDate = "2025-06-23T08:35:35.501008";
    const cleanedDate = rawDate.split('.')[0]; // "2025-06-23T08:35:35"

    const formattedDate = dayjs(cleanedDate).format('DD.MM.YYYY, HH:mm');

    console.log(formattedDate); // Çıxış: 23.06.2025, 08:35
    console.log(allArticles)

    const goBack = () => {
        window.history.back()
    }

    return (
        <div className='flex flex-col gap-y-[74px]'>
            <div
                style={{ backgroundImage: `url(${backgroundImage})` }}
                className="w-full relative h-[282px] bg-no-repeat bg-cover bg-center"
            >
                <span className='absolute cursor-pointer z-20 w-[60px] h-[60px]  flex items-center justify-center top-[30px] left-[19px]'>
                    <svg onClick={goBack} className='absolute z-50 cursor-pointer' width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.7071 4.29289C12.0976 4.68342 12.0976 5.31658 11.7071 5.70711L6.41421 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H6.41421L11.7071 18.2929C12.0976 18.6834 12.0976 19.3166 11.7071 19.7071C11.3166 20.0976 10.6834 20.0976 10.2929 19.7071L3.29289 12.7071C3.10536 12.5196 3 12.2652 3 12C3 11.7348 3.10536 11.4804 3.29289 11.2929L10.2929 4.29289C10.6834 3.90237 11.3166 3.90237 11.7071 4.29289Z" fill="#FFFFFF" />
                    </svg>
                </span>
                <div className="absolute z-10 flex items-center justify-center bg-[#00000099]  w-full h-full bg-">
                    <h2 className="text-[34px] font-[Corbel] font-bold text-[#FFFFFF] w-[832px] text-center mt-6">Agile metodları və tətbiq sahələri üzrə peşəkar məqalələr </h2>
                </div>
            </div>
            {/* Article details (Left side) */}
            <div className='w-[95%] flex flex-wrap gap-6 mx-auto'>
                <div className='flex-1 min-w-[300px] lg:min-w-[400px]'>
                    <div className='max-w-[725px] lg:max-w-[850px] h-auto mx-auto mb-6'>
                        <h1 className='text-[#000000DE] text-center font-[Corbel] font-bold text-[34px] sm:text-[28px] leading-tight'>{article?.title}</h1>
                        <h5 className='text-[#00000099] font-bold text-base font-[Corbel] text-right mt-4'>{article?.author}</h5>
                        <span className='text-[#00000061] block font-bold text-base font-[Corbel] text-right'>
                            {
                                article?.createdAt
                                    ? dayjs(article.createdAt.split('.')[0]).format('DD.MM.YYYY')
                                    : ''
                            }
                        </span>
                    </div>
                    {/* Text */}
                    <ShowMoreText text={article?.text ?? ''} maxLength={1700} className='max-w-[725px] lg:max-w-[850px] mx-auto text-justify text-[#000000DE] font-[Corbel] text-base font-normal px-4 lg:px-0' />
                </div>
                {/* Other articles (Right side) */}
                <div className='flex-1 min-w-[300px] lg:max-w-[391px] flex flex-col gap-6 items-center'>
                    <h4 className='max-w-[391px] mx-auto font-[Corbel] font-bold text-[46px] sm:text-[36px] text-[#000000DE] text-center mb-[22px]'>Digər məqalələr</h4>
                    {/* Cards */}
                    {
                        allArticles?.map(article =>
                            <TrainingCard
                                isArticle={true}
                                title={article.title}
                                imgUrl={article.imageUrl}
                                content={article.content}
                                key={article.id}
                                id={article.id}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ArticleDetails;