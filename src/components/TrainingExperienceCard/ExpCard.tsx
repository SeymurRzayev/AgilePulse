import quotes from '../../assets/icons/double-quotes.png'

interface ExpCardProps {
    img: string;
    title: string;
    subtitle: string;
    date: string;
}

const ExpCard = ({ date, img, subtitle, title }: ExpCardProps) => {
    return (
        <div className="relative mx-auto max-w-[524px] max-h-[240px]">

            <div className="absolute left-0 top-1/2  md:top-1/2  -translate-y-1/2 z-10">
                <img
                    src={img}
                    className="rounded-bl-md rounded-tr-md rounded-br-[30px] md:rounded-br-[50px] w-[80px] h-[100px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] rounded-tl-[30px] md:rounded-tl-[50px] bg-center object-cover"
                    alt="testimonial"
                    loading='lazy'
                />
            </div>

            <div className="relative flex items-center w-[92%] md:w-[90%] sm:w-[95%] ml-auto bg-[#FFFFFF] shadow-lg rounded-bl-lg rounded-tr-lg rounded-br-[100px] rounded-tl-[100px] h-[240px]">

                <div className="absolute top-[24px] right-[23px] flex justify-end">
                    <img className="w-[45px] h-[32px] object-cover" src={quotes} alt="testimonial" loading='lazy' />
                </div>

                <div className="flex flex-col ml-20 max-w-[339px] max-h-[240px]">
                    <h3 className="text-base font-[Corbel] z-10 sm:text-xl lg:text-2xl font-bold">{title}</h3>
                    <p className="md:font-medium-regular mt-[8px] font-normal text-lg font-[Corbel] leading-relaxed line-clamp-3 md:min-h-[5rem]">{subtitle}</p>
                    <span className="text-lg font-normal font-[Corbel] mt-[24px] text-gray-500">{date}</span>
                </div>
            </div>
        </div>
    )
}

export default ExpCard