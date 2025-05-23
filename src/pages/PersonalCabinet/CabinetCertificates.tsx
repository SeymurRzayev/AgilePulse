import Slider from "react-slick"
import certificate1 from "../../assets/images/certificate1.png"
import certificate2 from "../../assets/images/certificate1.png"

const CabinetCertificates = () => {

  const certificates = [`${certificate1}`, `${certificate2}`]

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 2,
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
    <div className="mt-[42px]">
      <p className='text-[#2C4B9B] w-fit border-b-2 border-[#2C4B9B] text-xl font-semibold'>Sertifikatlar</p>
      <div className='!w-full overflow-x-hidden mt-[36px] flex flex-col gap-3'>
        {/* Card */}
        <Slider {...settings} className="w-full ml-[-24px] lg:ml-0">
          {
            certificates.map(course => (
              <div className=' px-5'>
                <img src={course} alt="course" className='object-center w-full rounded-tl-[100px] rounded-br-[100px]' />
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  )
}

export default CabinetCertificates