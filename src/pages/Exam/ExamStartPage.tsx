import Navbar from '../../layout/Navbar/Navbar'
import ExamBgImg from "../../assets/images/ExamBgImg.png";
import Footer from '../../layout/Footer/Footer';
import { Outlet, useNavigate } from 'react-router-dom';

const ExamStartPage
    = () => {
        const navigate = useNavigate();
        return (
            <div className="flex flex-col items-center w-full min-h-screen relative">
                <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
                    <Navbar />
                </div>

                <div className="relative w-full">
                    <div
                        style={{ backgroundImage: `url(${ExamBgImg})` }}
                        className="w-full h-full bg-no-repeat bg-cover bg-center absolute top-0 left-0 -z-10"
                    />

                    {/* Content */}
                    <div className="flex flex-col items-center w-full gap-[67px] pt-40 pb-20 px-4">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-[Corbel] font-bold text-[#FFFFFF] w-[90%] md:w-[700px] lg:w-[1007px] leading-normal text-center">
                            Scrum, Kanban, Product Owner və digər Agile sahələrində biliklərinizi yoxlamaq və sertifikat əldə etmək üçün imtahanlara buradan başlayın
                        </h2>
                        <Outlet />
                        {!location.pathname.includes('standard') && !location.pathname.includes('premium') && (
                            <div className="w-[920px] flex flex-col lg:flex-row justify-between items-center gap-6">
                                <button
                                    className="rounded-[20px] w-[300px] sm:w-[400px] h-[234px] bg-[linear-gradient(229.72deg,_rgba(231,145,43,0.8)_5.45%,_rgba(216,61,105,0.8)_54.04%,_rgba(44,75,155,0.8)_101.69%)] text-white font-bold text-3xl"
                                    onClick={() => navigate('standard')}
                                >
                                    Standart İmtahanlar
                                </button>
                                <button
                                    className="rounded-[20px] w-[300px] sm:w-[400px] h-[234px] bg-[radial-gradient(47.12%_309%_at_47.12%_40.18%,_rgba(254,255,134,0.7)_0%,_rgba(251,206,61,0.7)_50.48%,_rgba(132,77,32,0.7)_100%)] text-white font-bold text-3xl"
                                    onClick={() => navigate('premium')}
                                >
                                    Premium İmtahanlar
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                <Footer />
            </div>

        )
    }

export default ExamStartPage

