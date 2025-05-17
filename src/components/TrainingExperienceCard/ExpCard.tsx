import quotes from '../../assets/icons/double-quotes.png'

interface ExpCardProps {
    img: string;
    title: string;
    subtitle: string;
    date: string;
}

const ExpCard = ({ date, img, subtitle, title }: ExpCardProps) => {
    return (
        <div className=" px-15">
            <div className="relative w-full bg-[#FFFFFF]  border rounded-bl-lg rounded-tr-lg rounded-br-[100px] rounded-tl-[100px] py-5 md:py-9">

                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                    <img
                        src={img}
                        className="rounded-bl-md rounded-tr-md rounded-br-[50px] w-[120px] h-[100px] md:w-[120px] md:h-[120px] rounded-tl-[50px] bg-center object-cover"
                    />
                </div>

                <div className="absolute top-0 w-full right-0 flex justify-end">
                    <img className="w-[42px]" src={quotes} alt="" />
                </div>

                <div className="flex flex-col ml-6 justify-between pl-[15%]">
                    <h3 className="text-base md:text-2xl font-bold">{title}</h3>
                    <p className="font-medium-regular py-1 leading-relaxed line-clamp-3  md:min-h-[4.5em]">{subtitle}</p>
                    <span className="text-sm mt-[4%] text-gray-500">{date}</span>
                </div>
            </div>
        </div>
    )
}

export default ExpCard