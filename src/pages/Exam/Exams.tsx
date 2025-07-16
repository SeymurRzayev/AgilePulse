import Navbar from '../../layout/Navbar/Navbar'
import ExamBgImg from "../../assets/images/ExamBgImg.png";
import Footer from '../../layout/Footer/Footer';

import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import ExamCard from './ExamCard';
import { examSample, sxWhitePagination } from '../../consts/consts';
const Exams = () => {

    const itemsPerPage = 6;
    const [page, setPage] = useState(1);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        event.preventDefault();
    };

    const totalPages = Math.ceil(examSample.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const currentExams = examSample.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="min-h-screen flex flex-col items-center w-full">
            <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
                <Navbar />
            </div>
            <div
                style={{ backgroundImage: `url(${ExamBgImg})` }}
                className="w-full relative  h-[1154px]  bg-no-repeat bg-cover bg-center"
            >

                <div className="absolute  top-[155px] flex flex-col  items-center w-full h-full gap-[67px]">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-[Corbel] font-bold text-[#FFFFFF] w-[90%] md:w-[600px] lg:w-[1007px] leading-normal text-center ">Scrum, Kanban, Product Owner və digər Agile sahələrində biliklərinizi yoxlamaq və sertifikat əldə etmək üçün imtahanlara buradan başlayın</h2>

                    <div className=' w-[996px] h-[572px] text-white flex flex-wrap justify-between gap-5   '>
                        {currentExams.map((exam, index) => (
                            <ExamCard
                                key={index}
                                title={exam.title}
                                questionsCount={exam.questionsCount}
                                duration={exam.duration}
                                onClick={() => console.log(`Starting ${exam.title}`)}
                            />
                        ))}
                    </div>

                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={handleChange}
                        sx={sxWhitePagination}
                        hidePrevButton={page === 1}
                        hideNextButton={page === totalPages}
                    />

                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Exams
