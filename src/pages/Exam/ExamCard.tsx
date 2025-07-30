import React from 'react';
import MainButton from '../../components/Butttons/MainButton';
import examPriceIcon from '../../assets/icons/examPrice.svg';
import examQuestionsIcon from '../../assets/icons/examQuestions.svg';
import passScoreIcon from '../../assets/icons/passScore.svg';
import examTime from '../../assets/icons/examTime.svg';

// import passScoreIcon from '../../assets/icons/passScore.svg';
interface ExamCardProps {
    examTitle: string;
    examDescription: string;
    questionsCount: number;
    duration: number;
    passScore?: number;
    price: number;
    examType: 'standard' | 'premium';
    onClick?: () => void;
}


const ExamCard: React.FC<ExamCardProps> = ({ examTitle, examDescription, questionsCount, duration, passScore, price, onClick, examType }) => {

    const examInfoItems = [
        {
            icon: examQuestionsIcon,
            title: "Sual sayı:",
            value: `${questionsCount} sual`,
            description: "Suallar seçimli (multiple choice), doğru/yanlış (true/false) formatındadır. Bəziləri bir neçə düzgün cavab tələb edə bilər."
        },
        {
            icon: examTime,
            title: "Müddət:",
            value: `${duration} dəqiqə`,
            description: "İmtahan bir saat davam edir və bu müddətdə bütün sualları cavablandırmalısınız. Geri qayıtmaq mümkündür, amma vaxtın idarəsi vacibdir."
        },
        {
            icon: passScoreIcon,
            title: "Keçid balı:",
            value: `${passScore}%`,
            description: "Sertifikatı əldə etmək üçün ən azı 68 düzgün cavab toplamalısınız. Yüksək keçid balı, konseptləri dərin başa düşməyinizi tələb edir."
        },
        ...(examType === 'premium'
            ? [{
                icon: examPriceIcon,
                title: "Qiymət:",
                value: `${price} manat`,
                description: "İmtahan ödənişi yalnız bir dəfə üçün keçərlidir. Nəticədən asılı olmayaraq yenidən vermək istəyirsinizsə, təkrar ödəniş tələb olunur."
            }]
            : [])
    ];

    return (
        <div className={`w-[330px] sm:w-[558px]  ${examType === 'premium' ? "h-[580px] sm:h-[727px]" : " h-[500px] sm:h-[662px]"} backdrop-blur-[25px] bg-[#F4F6FABF] rounded-[20px]  flex justify-center items-center `}>
            <div className='w-[300px] sm:w-[483px]  flex flex-col justify-center items-center  gap-6 '>
                <div className='flex flex-col  gap-4 w-[300px] sm:w-[483px] '>
                    <div className='w-[300px]  sm:w-[483px] flex flex-col gap-4' >
                        <span className="text-[18px] sm:text-[22px]  font-bold text-transparent bg-clip-text bg-[linear-gradient(252.47deg,_#4E61EC_9.65%,_#621DAC_50.22%,_#401795_90.01%)]">{examTitle}</span>
                        <ul>
                            {examDescription?.split('.')
                                .map((sentence, index) => {
                                    const trimmed = sentence.trim();
                                    return trimmed ? <li key={index} className='text-[12px] sm:text-[16px]  font-normal w-[300px] sm:w-[483px]  text-[#00000099] '>- {trimmed}.</li> : null;
                                })}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-3">
                        {examInfoItems.map((item, index) => (
                            <div key={index} className="flex flex-col gap-0.5">
                                <div className="flex justify-between items-center rounded-[20px] bg-[#9EACD1] h-[30px] sm:h-[36px] py-1 px-5">
                                    <span className="flex gap-2 items-center text-sm sm:text-lg text-[#00000099]">
                                        <img src={item.icon} alt="icon" className="w-[22px] h-[28px]" />
                                        {item.title}
                                    </span>
                                    <span className="font-bold text-[16px] sm:text-[22px] text-[#000000DE] w-[70px] sm:w-[94.5px] text-left">{item.value}</span>
                                </div>
                                <p className="text-xs sm:text-sm text-[#2C4B9B]">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <MainButton
                    text={"Imtahana başla"}
                    className="w-full h-8 sm:h-10"
                    onClick={onClick}
                    buttonClassName={`text-sm md:text-[16px] ${examType === 'premium' ? "bg-[radial-gradient(47.12%_309%_at_47.12%_40.18%,_rgba(254,255,134,0.7)_0%,_rgba(251,206,61,0.7)_50.48%,_rgba(132,77,32,0.7)_100%)] !text-[#844D20]" : "!bg-[linear-gradient(252.47deg,_#4E61EC_9.65%,_#621DAC_50.22%,_#401795_90.01%)]"} `}
                />
            </div>
        </div>
    );
};

export default ExamCard;
