import { type FC, useState } from "react";
import { useCreateContactUsMutation } from "../../services/features/mainPage/contactUsApi";
import { contactUsSchema } from "../../validation/contactUsSchema";
import Swal from "sweetalert2";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type ValidationErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const TrainingsContactUs: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [createContactUs] = useCreateContactUsMutation();

  const validateForm = async (): Promise<boolean> => {
    try {
      await contactUsSchema.validate(formData, { abortEarly: false });
      setValidationErrors({});
      return true;
    } catch (error) {
      const errors: ValidationErrors = {};
      if (error && typeof error === 'object' && 'inner' in error) {
        const validationError = error as { inner: Array<{ path?: string; message: string }> };
        validationError.inner.forEach((err) => {
          if (err.path && err.path in formData) {
            errors[err.path as keyof ValidationErrors] = err.message;
          }
        });
      }
      setValidationErrors(errors);
      return false;
    }
  };

  const handleSubmit = async () => {
    console.log(formData);

    const isValid = await validateForm();
    if (!isValid) {
      return;
    }

    const nameParts = formData.name.trim().split(" ");
    const firstName = nameParts[0];
    const surname = nameParts.slice(1).join(" ") || " ";

    try {
      await createContactUs({
        data: {
          name: firstName,
          surname,
          email: formData.email,
          message: formData.message,
        },
      }).unwrap();

      setFormData({ name: "", email: "", message: "" });
      setValidationErrors({});
      Swal.fire("Uğurlu", "Müracitəniz göndərildi!", "success")
    } catch (error) {
      console.error("Göndərmə zamanı xəta baş verdi", error);
      Swal.fire("Xəta baş verdi!", "Xəta! Yenidən yoxlayın", "error")
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });

    if (validationErrors[field]) {
      setValidationErrors({ ...validationErrors, [field]: undefined });
    }
  };

  return (
    <div className="w-full h-auto lg:h-[380px] mx-auto flex flex-col gap-6 sm:gap-8 md:gap-10 my-10 sm:my-16 md:my-20 px-4 sm:px-6 md:px-8 max-w-[1020px]">
      <div className="flex flex-col justify-center items-center gap-3 sm:gap-4 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] font-semibold px-2">
          Bizə Yaz
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-[#000000DE] px-2 max-w-[600px]">
          "Sualın var? Bizimlə əlaqə saxla – komandamız sənə kömək etməyə
          hazırdır!"
        </p>
      </div>

      <div
        style={{ border: "1.5px solid rgba(217, 217, 217, 0.5)" }}
        className="w-full h-auto rounded-[20px] sm:rounded-[30px] md:rounded-[40px] bg-white flex shadow-2xl max-w-[850px] mx-auto"
      >
        <div className="form-center w-full flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12 m-4 sm:m-6 md:m-10 lg:m-14">
          <div className="text-area relative flex flex-col order-2 lg:order-1 w-full lg:flex-1">
            <textarea
              className={`w-full h-[100px] sm:h-[110px] md:h-[123px] rounded-[15px] sm:rounded-[20px] bg-[#EAEDF5] p-3 sm:p-4 resize-none placeholder:text-start placeholder:text-Lexend outline-none text-sm sm:text-base ${validationErrors.message ? 'border-2 border-red-500' : 'border-0'
                }`}
              name="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              placeholder="Bizə yaz..."
            />
            {validationErrors.message && (
              <span className="text-red-500 text-xs sm:text-sm mt-1 sm:mt-2 block">
                {validationErrors.message}
              </span>
            )}
            <button
              className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 cursor-pointer p-1"
              onClick={handleSubmit}
              style={{ bottom: validationErrors.message ? '20px' : '8px' }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="sm:w-8 sm:h-8"
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

          <div className="text-inputs flex flex-col gap-4 sm:gap-6 md:gap-8 w-full lg:w-auto lg:min-w-[280px] xl:min-w-[300px] order-1 lg:order-2">
            <div className="relative">
              <input
                onChange={(e) => handleInputChange('name', e.target.value)}
                value={formData.name}
                type="text"
                className={`w-full rounded-[20px] sm:rounded-[25px] md:rounded-[30px] py-[10px] sm:py-[12px] px-[14px] sm:px-[16px] border-[1px] placeholder:text-[#B0B0B0] placeholder:text-Lexend outline-none text-sm sm:text-base ${validationErrors.name ? 'border-red-500' : 'border-[#B0B0B0]'
                  }`}
                placeholder="Ad/Soyad"
              />
              {validationErrors.name && (
                <span className="text-red-500 text-xs sm:text-sm mt-1 absolute -bottom-4 sm:-bottom-5 left-0 whitespace-nowrap">
                  {validationErrors.name}
                </span>
              )}
            </div>
            <div className="relative">
              <input
                onChange={(e) => handleInputChange('email', e.target.value)}
                value={formData.email}
                type="email"
                placeholder="E-mail adresi"
                className={`w-full rounded-[20px] sm:rounded-[25px] md:rounded-[30px] py-[10px] sm:py-[12px] px-[14px] sm:px-[16px] border-[1px] placeholder:text-[#B0B0B0] placeholder:text-Lexend outline-none text-sm sm:text-base ${validationErrors.email ? 'border-red-500' : 'border-[#B0B0B0]'
                  }`}
              />
              {validationErrors.email && (
                <span className="text-red-500 text-xs sm:text-sm mt-1 absolute -bottom-4 sm:-bottom-5 left-0 whitespace-nowrap">
                  {validationErrors.email}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingsContactUs;