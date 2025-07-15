import Navbar from '../../layout/Navbar/Navbar'
import ExamBgImg from "../../assets/images/ExamBgImg.png";
import Footer from '../../layout/Footer/Footer';

const Exams = () => {
    return (
        <div className="min-h-screen flex flex-col items-center w-full">
            <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
                <Navbar />
            </div>
            <div
                style={{ backgroundImage: `url(${ExamBgImg})` }}
                className="w-full relative -z-10 h-[1154px]  bg-no-repeat bg-cover bg-center"
            >

                <div className="absolute top-[155px] flex flex-col  items-center w-full h-full gap-[67px]">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-[Corbel] font-bold text-[#FFFFFF] w-[90%] md:w-[600px] lg:w-[1007px] leading-normal text-center ">Scrum, Kanban, Product Owner və digər Agile sahələrində biliklərinizi yoxlamaq və sertifikat əldə etmək üçün imtahanlara buradan başlayın</h2>

                    <div className='border w-[996px] h-[300px] text-white'>test</div>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Exams
