import quotes from '../../assets/icons/double-quotes.png'

interface ExpCardProps {
    img: string;
    title: string;
    subtitle: string;
    date: string;
}

const ExpCard = ({ date, img, subtitle, title }: ExpCardProps) => {
    return (
        <div className="relative py-3">

            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                <img
                    src={img}
                    className="rounded-bl-md rounded-tr-md rounded-br-[30px] md:rounded-br-[50px] w-[80px] h-[100px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] rounded-tl-[30px] md:rounded-tl-[50px] bg-center object-cover"
                />
            </div>

            <div className="relative w-[92%] md:w-[90%] sm:w-[95%] ml-auto bg-[#FFFFFF] shadow-lg rounded-bl-lg rounded-tr-lg rounded-br-[100px] rounded-tl-[100px] py-5 md:py-9">

                <div className="absolute top-0 w-full right-0 flex justify-end">
                    <img className="w-[42px]" src={quotes} alt="" />
                </div>

                <div className="flex flex-col ml-20 justify-between">
                    <h3 className="text-base md:text-2xl font-bold">{title}</h3>
                    <p className="md:font-medium-regular text-md leading-relaxed line-clamp-3 md:min-h-[5rem]">{subtitle}</p>
                    <span className="text-sm mt-[4%] text-gray-500">{date}</span>
                </div>
            </div>
        </div>
    )
}

export default ExpCard