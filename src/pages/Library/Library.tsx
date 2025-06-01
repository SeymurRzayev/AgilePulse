import Navbar from "../../layout/Navbar/Navbar"
import backgroundImage from '../../assets/images/library-bg.jpg'
import LibraryBookCard from "../../components/LibraryCards/LibraryBookCard"
import Footer from "../../layout/Footer/Footer";
import { useState } from "react";
import ShowMoreBtn from "../../components/Butttons/ShowMoreBtn";
import { useGetAllBookQuery } from "../../services/features/bookApi";

const Library = () => {

    const [visibility, setVisibility] = useState<number>(6)


    const { data } = useGetAllBookQuery()

    const allBook = data?.data?.data

    if (!allBook) return null


    const slicesBooks = allBook?.slice(0, visibility)


    return (
        <div>
            <div className="relative left-0 w-full flex items-center justify-center">
                <Navbar className="!shadow-none" />

            </div>
            <div
                style={{ backgroundImage: `url(${backgroundImage})` }}
                className="w-full relative -z-10 h-[300px] md:h-[357px] bg-no-repeat bg-cover bg-center"
            >
                <div className="absolute z-10 flex items-center justify-center bg-[#00000099] w-full h-full">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-[Corbel] font-bold text-[#FFFFFF] w-[90%] md:w-[600px] lg:w-[700px] text-center mt-6 px-4">İlham almaq üçün Agile Pulse kitabxanasını kəşf et!</h2>
                </div>
            </div>
            <h3 className="text-[#000000DE] text-xl md:text-2xl font-[Corbel] font-normal text-center mt-[30px] md:mt-[43px] px-4">Təcrübəni zənginləşdirəcək materiallar burada!</h3>
            <div className="w-[95%] md:w-[90%] flex flex-wrap gap-y-6 md:gap-y-8 lg:gap-y-10 mt-[40px] md:mt-[55px] mb-[80px] md:mb-[100px] lg:mb-[137px] justify-center md:justify-between mx-auto">
                {
                    slicesBooks?.map((item, i) =>
                        <div key={i} className="w-full md:w-1/2 lg:w-1/3 px-2">
                            <LibraryBookCard
                                author={item.author}
                                imgUrls={item.imageUrl}
                                title={item.name}
                                id={item.id}
                                key={i}
                            />
                        </div>
                    )
                }
                {allBook?.length > 6 && (
                    visibility >= allBook?.length
                        ? (
                            <div className="w-full text-center mt-6 md:mt-8">
                                <ShowMoreBtn text='Daha az göstər' onClick={() => setVisibility(6)} />
                            </div>
                        )
                        : (
                            <div className="w-full text-center mt-6 md:mt-8">
                                <ShowMoreBtn text='Daha çox göstər' onClick={() => setVisibility(prev => prev + 6)} />
                            </div>
                        )
                )
                }
            </div>
            <Footer />
        </div >
    )
}

export default Library