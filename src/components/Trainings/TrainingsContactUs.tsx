import { type FC, useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};
const TrainingsContactUs: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = () => {
    console.log(formData);
    if (!formData.name || !formData.email || !formData.message) {
      alert("Bütün sahələri doldurun.");
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Email formatı yanlışdır.");
      return;
    }
  };
  return (
    <div className=" h-auto md:h-[380px] max-w-[851px] mx-auto flex flex-col gap-10 my-20 ">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold">
          Bizə Yaz
        </h2>
        <p className="text-sm md:text-lg text-[#000000DE]">
          “Sualın var? Bizimlə əlaqə saxla – komandamız sənə kömək etməyə
          hazırdır!”
        </p>
      </div>

      <div
        style={{ border: "1.5px solid rgba(217, 217, 217, 0.5)" }}
        className=" w-full h-auto rounded-[40px] bg-white flex shadow-2xl "
      >
        <div className="form-center w-full flex flex-col-reverse md:flex-row gap-12 m-14 h-auto md:max-h-[123px]">
          <div className="text-area relative  h-[123px] flex flex-col ">
            <textarea
              className="!w-full h-full !rounded-[20px] !border-0 bg-[#EAEDF5] md:min-w-[344px] p-2 "
              name="message"
              id=""
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            ></textarea>
            <button
              className="absolute bottom-3 right-3 cursor-pointer"
              onClick={handleSubmit}
            >
              <svg
                width="32"
                height="31"
                viewBox="0 0 32 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_3763_106)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.94813 5.74716C4.56995 2.41288 8.06523 -0.0356957 11.1532 1.40145L28.5263 9.4843C31.8543 11.0314 31.8543 15.6829 28.5263 17.23L11.1532 25.3143C8.06523 26.7514 4.57141 24.3029 4.94813 20.9686L5.64632 14.7857H17.4543C17.8401 14.7857 18.2101 14.6352 18.4828 14.3673C18.7556 14.0994 18.9089 13.736 18.9089 13.3572C18.9089 12.9783 18.7556 12.6149 18.4828 12.347C18.2101 12.0791 17.8401 11.9286 17.4543 11.9286H5.64777L4.94813 5.74716Z"
                    fill="url(#paint0_linear_3763_106)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_3763_106"
                    x1="24.6154"
                    y1="-8.30088"
                    x2="-0.227229"
                    y2="-0.027874"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4E61EC" />
                    <stop offset="0.504808" stopColor="#621DAC" />
                    <stop offset="1" stopColor="#401795" />
                  </linearGradient>
                  <clipPath id="clip0_3763_106">
                    <rect
                      width="32"
                      height="30"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
          <div className="text-inputs flex flex-col gap-6 w-full">
            <input
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              type="text"
              className=" w-full rounded-[30px] py-[12px] px-[16px] !text-[#00000061]"
              placeholder="Ad/Soyad"
            />
            <input
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="text"
              placeholder="E-mail adresi"
              className=" w-full rounded-[30px] py-[12px] px-[16px] !text-[#00000061]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingsContactUs;
