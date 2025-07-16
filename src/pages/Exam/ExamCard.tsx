import React from 'react';
import MainButton from '../../components/Butttons/MainButton';

interface ExamCardProps {
    title: string;
    questionsCount: number;
    duration: number;
    onClick?: () => void;
}

const ExamCard: React.FC<ExamCardProps> = ({ title, questionsCount, duration, onClick }) => {
    return (
        <div className="w-[252px] h-[234px] backdrop-blur-2xl bg-white/30 rounded-2xl text-white flex justify-center items-center ">
            <div className='w-[166px] h-[152px] flex flex-col justify-between gap-3.5'>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <ul className="text-sm space-y-1">
                    <li> {questionsCount} sual</li>
                    <li> {duration} dəqiqə</li>
                </ul>

                <MainButton
                    text={"Başla"}
                    className="w-full h-10  md:h-12"
                    onClick={onClick}
                    buttonClassName="text-sm md:text-[16px]  "
                />
            </div>
        </div>
    );
};

export default ExamCard;
