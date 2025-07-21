import Pagination from '@mui/material/Pagination';
import ExamCard from './ExamCard';
import { examSample, sxWhitePagination } from '../../consts/consts';
import { useState } from 'react';


const Exams = () => {



    const [page, setPage] = useState(1);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        event.preventDefault();
    };
    const itemsPerPage = 2
    const totalPages = Math.ceil(examSample.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const currentExams = examSample.slice(startIndex, startIndex + itemsPerPage);

    return (

        <div className='flex flex-col items-center gap-8 w-full'>
            <div className='md:max-w-[996px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-28 px-2 mx-auto '>
                {currentExams.map((exam, index) => (
                    <ExamCard
                        key={index}
                        examTitle={exam.title}
                        examDescription={exam.description}
                        price={exam.price}
                        passScore={exam.passScore}
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


    )
}

export default Exams
