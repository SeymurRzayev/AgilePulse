import Navbar from '../../layout/Navbar/Navbar'
import ExamBgImg from "../../assets/images/ExamBgImg.png";
import Footer from '../../layout/Footer/Footer';

import Pagination from '@mui/material/Pagination';
import ExamCard from './ExamCard';
import { examSample, sxWhitePagination } from '../../consts/consts';
import { useState, useEffect } from 'react';


const Exams = () => {
    const getItemsPerPage = () => {
        const width = window.innerWidth;

        if (width >= 1024) return 6; // lg
        if (width >= 600) return 4;  // md
        return 2;                    // sm or less
    };
    const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

    useEffect(() => {
        const handleResize = () => {
            setItemsPerPage(getItemsPerPage());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

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

                    <div className='md:max-w-[996px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-28 px-2 mx-auto '>
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
                        defaultPage={6}
                        siblingCount={0}

                    />

                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Exams
