import Slider from "react-slick"
import { useGetCACertificatesQuery } from "../../services/features/trainingPage/certificateApi"
import { useNavigate } from "react-router-dom"

type CabinetCertificatesProps = {
  userId: number
}

const CabinetCertificates = ({ userId }: CabinetCertificatesProps) => {
  const navigate = useNavigate()
  if (!userId) navigate('/sign-in')
  const { data: certificateData } = useGetCACertificatesQuery(userId)

  const settings = {
    dots: false,
    infinite: false,
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
      <p className='text-[#2C4B9B] w-fit border-b-2 border-[#2C4B9B] text-xl ml-5 sm:ml-0 font-semibold'>Sertifikatlar</p>
      <div className='!w-full overflow-x-hidden mt-[36px] flex flex-col gap-3'>
        {/* Card */}
        <Slider {...settings} className="w-full ml-[-24px] lg:ml-0">
          {
            certificateData?.map(course => (
              <div className=' px-5'>
                <img src={course.pdfUrl} alt="course" className='object-center w-full rounded-tl-[100px] rounded-br-[100px]' />
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  )
}

export default CabinetCertificates