import { useMemo, useState } from 'react'
import Logo from '../../assets/icons/logo.svg'
/* import training1 from "../../assets/images/training1.jpg";
import training2 from "../../assets/images/training2.jpg";
import training3 from "../../assets/images/training3.jpg";
import avatar1 from "../../assets/images/podcast1.webp"; */
import Slider from 'react-slick';
import TrainingCard from '../../components/Trainings/TrainingCard';
import CabinetCertificates from './CabinetCertificates';
import { useNavigate } from 'react-router-dom';
import { useGetAllSavedTrainingsOfUserQuery } from '../../services/features/trainingPage/savedTrainingsApi';
import { useAppSelector } from '../../redux/hooks/Hooks';
import LoadingSpinner from '../../components/General/LoadingSpinner';

const navLink = ['Davam eden', 'Tamamlanan', 'Qeyd olunan']


const PersonalCabinetTrainings = () => {

    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState(0)
    const userId = useAppSelector(state => state.auth.user?.id)


    const {
        data: favoriteCourses = [],
        isLoading: isFavoritesLoading,
        // error: favoritesError,
    } = useGetAllSavedTrainingsOfUserQuery(userId!, {
        skip: activeTab !== 2,
    });

    const currentCourses = useMemo(() => {
        // if (activeTab === 0) return   Davam edən
        // if (activeTab === 1) return  Tamamlanan
        return favoriteCourses; // Qeyd olunan
    }, [activeTab, favoriteCourses]);

    console.log(currentCourses)

   /*  const courses = [
        {
            id: 1,
            imgUrl: training1,
            title: "Scrum nədir? Praktik Başlanğıc",
            time: "4 modul : 16 blok",
            avatar: avatar1,
            user: "Səadət Hüseynova",
            date: "12.04.2025",
            href: "/trainings/scrum",
        },
        {
            id: 2,
            imgUrl: training2,
            title: "Agile Manifesto və 12 Prinsip",
            time: "4 modul : 16 blok",
            avatar: avatar1,
            user: "Məhəmməd Qasımov",
            date: "16.01.2025",
        },
        {
            id: 3,
            imgUrl: training3,
            title: "Kanban ilə İş Axınını Optimallaşdır",
            time: "4 modul : 16 blok",
            avatar: avatar1,
            user: "Tofiq İsayev",
            date: "20.02.2025",
        },
        {
            id: 4,
            imgUrl: training1,
            title: "Scrum nədir? Praktik Başlanğıc",
            time: "4 modul : 16 blok",
            avatar: avatar1,
            user: "Səadət Hüseynova",
            date: "12.04.2025",
        },
        {
            id: 5,
            imgUrl: training2,
            title: "Agile Manifesto və 12 Prinsip",
            time: "4 modul : 16 blok",
            avatar: avatar1,
            user: "Məhəmməd Qasımov",
            date: "16.01.2025",
        },
        {
            id: 6,
            imgUrl: training3,
            title: "Kanban ilə İş Axınını Optimallaşdır",
            time: "4 modul : 16 blok",
            avatar: avatar1,
            user: "Tofiq İsayev",
            date: "20.02.2025",
        },
    ]; */

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 1281,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    }

    return (
        <div className='w-full ml-0 sm:ml-5 max-h-fit sm:max-w-[calc(100%-390px)] mx-auto mt-4  '>
            <div className='flex mt-4 items-center justify-between w-[95%]'>
                <p className='font-semibold pl-5 sm:pl-0 text-2xl'>Şəxsi Kabinet</p>
                <span
                    onClick={() => navigate('/')}
                    style={{ fontFamily: 'Raleway' }}
                    className='cursor-pointer gap-2 text-base items-center font-semibold text-[#1e3a8a] hidden md:flex' >
                    <img src={Logo} alt=""
                    /> Agile Pulse
                </span>
            </div>
            <div className='mt-3'>
                <p className='text-[#000000DE] pl-5 sm:pl-0 text-xl font-semibold'>Təlimlərim</p>
                <div className='w-full'>
                    <div>
                        <ul className="flex pl-5 sm:pl-0 py-6 gap-2 font-semibold text-[#000000DE] font-[Corbel] sm:text-xl text-base ">
                            {
                                navLink.map((linkName, index) => (
                                    <li
                                        key={index}
                                        onClick={() => setActiveTab(index)}
                                        className={`cursor-pointer
                                            ${activeTab === index
                                                ? 'text-[#2C4B9B] border-[#2C4B9B]'
                                                : 'border-[#DEDEDE]'
                                            }
                                            border-b-2 `}
                                    >
                                        {linkName}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='!w-full max-h-[639px] overflow-hidden gap-3]'>
                        {/* Card */}
                        {
                            isFavoritesLoading
                                ? <LoadingSpinner />
                                : (currentCourses.length === 0
                                    ? <p className='text-center text-[#000000DE] font-semibold text-xl'>Heç bir təlim yoxdur</p>
                                    : (
                                        <Slider {...settings} className={"sliderPersonalCab ml-2"}>
                                            {
                                                currentCourses.map(course => (
                                                    <TrainingCard
                                                        className="w-[325px] md:w-[381px]"
                                                        isCurveBig={true}
                                                        key={course.id}
                                                        id={course.id}
                                                        imgUrl={course.imageUrl}
                                                        title={course.title}
                                                        time={course.modules?.length} //modul sayi
                                                        lessonCount={course.modules?.reduce((total, mod) => total + mod.lessons.length, 0)} //lesson sayi
                                                        avatar={course.authorAvatarUrl}
                                                        user={course.authorName}
                                                        date={course.publishedAt}
                                                        isCourse={true}
                                                    />
                                                ))
                                            }
                                        </Slider>
                                    )
                                )
                        }

                    </div>
                </div>
            </div>
            <div>
                {/* Certificate */}
                <CabinetCertificates userId={+userId!}/>
            </div>
        </div>

    )
}

export default PersonalCabinetTrainings