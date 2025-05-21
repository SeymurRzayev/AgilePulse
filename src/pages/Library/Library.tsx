import Navbar from "../../layout/Navbar/Navbar"
import backgroundImage from '../../assets/images/library-bg.jpg'
import LibraryBookCard from "../../components/LibraryCards/LibraryBookCard"
import Footer from "../../layout/Footer/Footer";
import { useState } from "react";
import ShowMoreBtn from "../../components/Butttons/ShowMoreBtn";

const Library = () => {

    const [visibility, setVisibility] = useState<number>(6)

    const bookImages = [
        {
            imageUrl: "https://agilekrc.com/agile-training-course/agile-project-management.jpg",
            title: "Agile Changee Managemet",
            author: "Melanie Franklin",
        },
        {
            imageUrl: "https://m.media-amazon.com/images/I/81ZgVTKyyiL.UF1000,1000_QL80.jpg",
            title: "Agile Changee Managemet",
            author: "Melanie Franklin",
        },
        {
            imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1556410005i/45318151.jpg",
            title: "Agile Changee Managemet",
            author: "Melanie Franklin",
        },
        {
            imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1556410005i/45318151.jpg",
            title: "Agile Changee Managemet",
            author: "Melanie Franklin",
        },
        {
            imageUrl: "https://media.licdn.com/dms/image/C5612AQExDzdX9dzYrA/article-cover_image-shrink_600_2000/0/1644469313843?e=2147483647&v=beta&t=rGwKP6_aXhVMQpAHcJN3HJXlO8AYiRGg2focfzUus_g",
            title: "Agile Changee Managemet",
            author: "Melanie Franklin",
        },
        {
            imageUrl: "https://agilekrc.com/agile-training-course/agile-project-management.jpg",
            title: "Agile Changee Managemet",
            author: "Melanie Franklin",
        },
        {
            imageUrl: "https://agilekrc.com/agile-training-course/agile-project-management.jpg",
            title: "Agile Changee Managemet",
            author: "Melanie Franklin",
        },
        {
            imageUrl: "https://m.media-amazon.com/images/I/81ZgVTKyyiL.UF1000,1000_QL80.jpg",
            title: "Agile Changee Managemet",
            author: "Melanie Franklin",
        },
        {
            imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1556410005i/45318151.jpg",
            title: "Agile Changee Managemet",
            author: "Melanie Franklin",
        },
        {
            imageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1556410005i/45318151.jpg",
            title: "Agile Changee Managemet",
            author: "Melanie Franklin",
        },
        {
            imageUrl: "https://media.licdn.com/dms/image/C5612AQExDzdX9dzYrA/article-cover_image-shrink_600_2000/0/1644469313843?e=2147483647&v=beta&t=rGwKP6_aXhVMQpAHcJN3HJXlO8AYiRGg2focfzUus_g",
            title: "Agile Changee Managemet",
            author: "Melanie Franklin",
        },
        {
            imageUrl: "https://agilekrc.com/agile-training-course/agile-project-management.jpg",
            title: "Agile Changee Managemet",
            author: "Melanie Franklin",
        },
    ];

    const slicesBooks = bookImages.slice(0, visibility)


    return (
        <div>
            <div className="relative left-0 w-full flex items-center justify-center">
                <Navbar />
            </div>
            <div
                style={{ backgroundImage: `url(${backgroundImage})` }}
                className="w-full relative -z-10 h-[357px] bg-no-repeat bg-cover bg-center"
            >
                <div className="absolute z-10 flex items-center justify-center bg-[#00000099]  w-full h-full bg-">
                    <h2 className="text-4xl font-bold text-[#FFFFFF] w-[700px] text-center mt-6">İlham almaq üçün Agile Pulse kitabxanasını kəşf et!</h2>
                </div>
            </div>
            <h3 className="text-[#000000DE] text-xl font-medium text-center mt-[43px]">Təcrübəni zənginləşdirəcək materiallar burada!</h3>
            <div className="w-[90%] flex flex-wrap gap-y-10 mt-[55px] mb-[137px] justify-between mx-auto">

                {
                    slicesBooks.map((item, i) =>
                        <LibraryBookCard
                            author={item.author}
                            imgUrls={item.imageUrl}
                            title={item.title}
                            key={i}
                        />
                    )
                }

                {
                    slicesBooks.length >= bookImages.length
                        ? (
                            <div className="w-full text-center">
                                <ShowMoreBtn text='Daha az göstər' onClick={() => setVisibility(6)} />
                            </div>
                        )
                        : (
                            <div className="w-full text-center">
                                <ShowMoreBtn text='Daha çox göstər' onClick={() => setVisibility(visibility + 6)} />
                            </div>
                        )
                }
            </div>
            <Footer />
        </div>
    )
}

export default Library