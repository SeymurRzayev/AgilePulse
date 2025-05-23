import { useState } from 'react'
import Logo from '../../assets/icons/logo.svg'
import training1 from "../../assets/images/training1.jpg";
import training2 from "../../assets/images/training2.jpg";
import training3 from "../../assets/images/training3.jpg";
import avatar1 from "../../assets/images/podcast1.webp";
import Slider from 'react-slick';
import TrainingCard from '../../components/Trainings/TrainingCard';
import CabinetCertificates from './CabinetCertificates';
import { useNavigate } from 'react-router-dom';

const PersonalCabinetTrainings = () => {

    const navigate = useNavigate()
    const [isActive, setIsActive] = useState(0)

    const navLink = ['Davam eden', 'Tamamlanan', 'Qeyd olunan']

    const courses = [
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
    ];

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
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    }

    return (
        <div className='w-[74%] md:w-[50%] xl:w-[74%] mx-auto mt-4  '>
            <div className='flex mt-4 items-center justify-between w-[95%]'>
                <p className='font-semibold text-2xl'>Şəxsi Kabinet</p>
                <span
                    onClick={() => navigate('/')}
                    style={{ fontFamily: 'Raleway' }}
                    className='cursor-pointer gap-2 text-base items-center font-semibold text-[#1e3a8a] hidden md:flex' >
                    <img src={Logo} alt=""
                    /> Agile Pulse
                </span>
            </div>
            <div className='mt-3'>
                <p className='text-[#000000DE] text-xl font-semibold'>Təlimlərim</p>
                <div className='w-full'>
                    <div>
                        <ul className="flex py-6 gap-2 font-semibold text-[#000000DE] font-[Corbel] sm:text-xl text-base ">
                            {
                                navLink.map((linkName, index) => (
                                    <li
                                        key={index}
                                        className={`cursor-pointer
                                            ${isActive === index
                                                ? 'text-[#2C4B9B] border-[#2C4B9B]'
                                                : 'border-[#DEDEDE]'
                                            }
                                            border-b-2 `}
                                        onClick={() => setIsActive(index)}
                                    >{linkName}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='!w-full overflow-x-hidden flex flex-col gap-3'>
                        {/* Card */}
                        <Slider {...settings} className={"sliderPersonalCab"}>
                            {
                                courses.map(course => (
                                    <div className={`px-3 py-3 `}>
                                        <TrainingCard
                                            key={course.id}
                                            imgUrl={course.imgUrl}
                                            title={course.title}
                                            time={course.time}
                                            avatar={course.avatar}
                                            date={course.date}
                                            isArticle={false}
                                        />
                                    </div>
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
            <div>
                {/* Certificate */}
                <CabinetCertificates />
            </div>
        </div>

    )
}

export default PersonalCabinetTrainings