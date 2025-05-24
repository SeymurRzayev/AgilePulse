import { useNavigate } from "react-router-dom"

interface CardProps {
    imgUrls: string,
    title: string,
    author: string,
}

const LibraryBookCard = ({ author, imgUrls, title }: CardProps) => {
    const navigate = useNavigate()
    return (
        <div className="w-full md:w-[32%] bg-transparent">
            <div className="w-fit mx-auto flex items-center flex-col gap-4 px-[36px] py-[31px] rounded-4xl bg-[#EAEDF580]">
                <div style={{ boxShadow: '0px 0px 13px 5px #0000003B' }} className=" object-cover  rounded-xl">
                    <img className="rounded-xl w-[228px] h-[326px]" src={imgUrls} alt="" />
                </div>
                <div className="flex flex-col text-center gap-2">
                    <h5 className="text-lg font-[Corbel] text-[#000000DE]">{title}</h5>
                    <span className="text-xs text-[#00000099]">{author}</span>
                    <button onClick={() => navigate('/library/detail')} className="bg-[#2C4B9B] cursor-pointer px-5 text-[#FFFFFF] text-l rounded-4xl py-2" >
                        Oxu
                    </button>
                </div>
            </div>

        </div>
    )
}

export default LibraryBookCard