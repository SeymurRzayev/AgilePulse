import Pagination from '@mui/material/Pagination';
import ExamCard from './ExamCard';
import { examSample, sxWhitePagination } from '../../consts/consts';
import { useEffect, useState } from 'react';
interface ExamsProps {
    selectedExamType: 'standard' | 'premium';
}

const Exams: React.FC<ExamsProps> = ({ selectedExamType }) => {
    const [page, setPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 1000) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(2);
            }
        };

        handleResize(); // page load-da yoxlayırıq
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        event.preventDefault();
    };

    const totalPages = Math.ceil(examSample.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const currentExams = examSample.slice(startIndex, startIndex + itemsPerPage);

    return (

        <div className='h-full flex flex-col  w-full justify-start items-center gap-[47px]'>
            <div className='md:max-w-[1143px] grid grid-cols-1 lg:grid-cols-2  gap-28 px-2 mx-auto '>
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
