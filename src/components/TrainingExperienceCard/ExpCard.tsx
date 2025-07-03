import quotes from '../../assets/icons/double-quotes.png'

interface ExpCardProps {
    img: string;
    title: string;
    subtitle: string;
    date: string;
}

const ExpCard = ({ date, img, subtitle, title }: ExpCardProps) => {
    return (
        <div className="relative mx-1 md:mx-auto max-w-[524px] max-h-[240px]">
            
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                <img
                    src={img}
                    className="rounded-bl-md rounded-tr-md rounded-br-[20px] sm:rounded-br-[30px] md:rounded-br-[50px] w-[60px] h-[80px] sm:w-[80px] sm:h-[100px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] rounded-tl-[20px] sm:rounded-tl-[30px] md:rounded-tl-[50px] bg-center object-cover"
                    alt="testimonial"
                    loading='lazy'
                />
            </div>
            
            <div className="relative flex items-center w-[92%] md:w-[90%] sm:w-[95%] ml-auto bg-[#FFFFFF] shadow-lg rounded-bl-lg rounded-tr-lg rounded-br-[60px] sm:rounded-br-[80px] md:rounded-br-[100px] rounded-tl-[60px] sm:rounded-tl-[80px] md:rounded-tl-[100px] h-[200px] sm:h-[220px] md:h-[240px]">
                
                <div className="absolute top-[16px] sm:top-[20px] md:top-[24px] right-[16px] sm:right-[20px] md:right-[23px] flex justify-end">
                    <img className="w-[32px] h-[24px] sm:w-[38px] sm:h-[28px] md:w-[45px] md:h-[32px] object-cover" src={quotes} alt="testimonial" loading='lazy' />
                </div>
                
                <div className="flex flex-col ml-[75px] sm:ml-[90px] md:ml-20 max-w-[280px] sm:max-w-[320px] md:max-w-[339px] pr-4 sm:pr-6 md:pr-8">
                    <h3 className="text-sm sm:text-base md:text-xl lg:text-2xl font-[Corbel] z-10 font-bold leading-tight">{title}</h3>
                    <p className="mt-[6px] sm:mt-[8px] font-normal text-sm sm:text-base md:text-lg font-[Corbel] leading-relaxed line-clamp-3 md:min-h-[5rem]">{subtitle}</p>
                    <span className="text-sm sm:text-base md:text-lg font-normal font-[Corbel] mt-[16px] sm:mt-[20px] md:mt-[24px] text-gray-500">{date}</span>
                </div>
            </div>
        </div>
    )
}

export default ExpCard