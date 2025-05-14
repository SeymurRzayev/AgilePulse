import Slider from "react-slick";
import ExpCard from "../../../components/TrainingExperienceCard/ExpCard";

import type { CustomArrowProps } from "react-slick";

const CustomNextArrow = ({ className, style, onClick }: CustomArrowProps) => {
    return (
        <div
            className={className}
            onClick={onClick}
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#eee",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                zIndex: 1,
            }}
        >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M8 5l8 7-8 7" stroke="#000" strokeWidth="2" />
            </svg>
        </div>
    );
};


const CustomPrevArrow = ({ className, style, onClick }: CustomArrowProps) => {
    return (
        <div
            className={className}
            onClick={onClick}
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#eee",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                zIndex: 1,
            }}
        >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M16 5l-8 7 8 7" stroke="#000" strokeWidth="2" />
            </svg>
        </div>
    );
};

const TrainingExperiences = () => {
    const long = [1, 2, 3, 4]
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />
    };
    return (
        <div className="w-full flex flex-col gap-5 justify-center items-center">
            <div className="w-1/2 flex flex-col items-center gap-3">
                <h2 className="text-center text-2xl w-full font-mbold">İştirakçıların Təlim Təcrübələri</h2>
                <p className="text-sm w-2/3 font-normal text-center">AgilePulse platformasında təlim keçmiş iştirakçılarımızın real fikirlərini oxuyun. Onların təcrübələri sizin yolunuzu aydınlada bilər.</p>
            </div>

            <div className="w-[90%] mx-auto mt-10 flex justify-center ">
                <Slider  {...settings} className="w-full flex justify-center items-center">
                    {
                        long.map((item) => (
                            <ExpCard key={item} />
                        ))
                    }
                </Slider>
            </div>
        </div>
    )
}

export default TrainingExperiences


