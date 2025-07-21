import Pagination from '@mui/material/Pagination';
import ExamCard from './ExamCard';
import { examSample, sxWhitePagination } from '../../consts/consts';
import { useState } from 'react';
interface ExamsProps {
    selectedExamType: 'standard' | 'premium';
}

const Exams: React.FC<ExamsProps> = ({ selectedExamType }) => {
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

        <div className='h-full min-h-[1100px] flex flex-col  w-full justify-start items-center gap-60'>
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
                        examType={selectedExamType}  // pass the type
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
