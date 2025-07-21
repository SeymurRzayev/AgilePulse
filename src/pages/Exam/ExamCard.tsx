import React from 'react';
import MainButton from '../../components/Butttons/MainButton';
import testIcon from '../../assets/icons/oclock.svg';
interface ExamCardProps {
    examTitle: string;
    examDescription: string;
    questionsCount: number;
    duration: number;
    passScore: number;
    price: number;
    onClick?: () => void;
}

const ExamCard: React.FC<ExamCardProps> = ({ examTitle, examDescription, questionsCount, duration, passScore, price, onClick }) => {
    return (
        <div className="w-[447px] h-[727px] backdrop-blur-[25px] bg-[rgba(255,255,255,0.2)] rounded-[20px] text-[#F4F6FABF] flex justify-center items-center ">
            <div className='flex flex-col justify-start items-start gap-3.5 w-[399px] h-[656px]'>
                <div className='w-[368px] h-[212px] flex flex-col justify-between' >
                    <h3 className="text-[22px] font-bold mb-2 text-transparent bg-clip-text bg-[linear-gradient(252.47deg,_#4E61EC_9.65%,_#621DAC_50.22%,_#401795_90.01%)]">{examTitle}</h3>
                    <ul>
                        {examDescription?.split('.')
                            .map((sentence, index) => {
                                const trimmed = sentence.trim();
                                return trimmed ? <li key={index} >- {trimmed}.</li> : null;
                            })}
                    </ul>
                </div>
                <ul className="text-sm space-y-1 w-[399px]">
                    <li className='w-full h-[78px]'>
                        <p className='flex items-center justify-between rounded-[20px] bg-blue-200 h-[36px] py-1 px-5'>
                            <span className='h-7 flex  gap-2'>
                                <img src={testIcon} alt="test" className='w-[22px] h-[28px]' />
                                <span className='text-lg text-[#00000099]'>Sual sayı:</span>
                            </span>
                            <span className='font-bold text-[22px] text-[#000000DE]'> {questionsCount} sual</span>
                        </p>
                        <p>Suallar seçimli (multiple choice), doğru/yanlış (true/false) formatındadır. Bəziləri bir neçə düzgün cavab tələb edə bilər.</p>
                    </li>
                    <li className='w-full h-[78px]'>
                        <p className='flex items-center justify-between rounded-[20px] bg-blue-200 h-[36px] py-1 px-5'>
                            <span className='flex h-7 gap-2'>
                                <img src={testIcon} alt="test" className='w-[22px] h-[28px]' />
                                <span className='text-lg text-[#00000099]'>Müddət:</span></span>
                            <span className='font-bold text-[22px] text-[#000000DE]'>{duration}</span>
                        </p>
                        <p>İmtahan bir saat davam edir və bu müddətdə bütün sualları cavablandırmalısınız. Geri qayıtmaq mümkündür, amma vaxtın idarəsi vacibdir.</p>
                    </li>
                    <li className='w-full h-[78px]'>
                        <p className='flex items-center justify-between rounded-[20px] bg-blue-200 h-[36px] py-1 px-5'>
                            <span className='flex items-center gap-2'><img src={testIcon} alt="test" className='w-[22px] h-[28px]' />Keçid balı:</span>
                            <span>{passScore}</span>
                        </p>
                        <p>Sertifikatı əldə etmək üçün ən azı 68 düzgün cavab toplamalısınız. Yüksək keçid balı, konseptləri dərin başa düşməyinizi tələb edir.</p>
                    </li>
                    <li className='w-full h-[78px]'>
                        <p className='flex items-center justify-between rounded-[20px] bg-blue-200 h-[36px] py-1 px-5'>
                            <span className='flex items-center gap-2'><img src={testIcon} alt="test" className='w-[22px] h-[28px]' />Qiymət:</span>
                            <span>{price} manat</span>
                        </p>
                        <p>İmtahan ödənişi yalnız bir dəfə üçün keçərlidir. Nəticədən asılı olmayaraq yenidən vermək istəyirsinizsə, təkrar ödəniş tələb olunur.</p>
                    </li>
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
