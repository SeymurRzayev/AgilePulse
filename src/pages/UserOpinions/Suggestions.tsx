import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigateArrow from "../../ui/NavigateArrow/NavigateArrow";
const Suggestions = () => {
  const [formData, setFormData] = useState({
    emailAddress: "",
    textarea: "",
  });

  const [errors, setErrors] = useState({
    emailAddress: "",
    textarea: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      emailAddress: "",
      textarea: "",
    };

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "E-mail ünvanı tələb olunur";
    } else if (!emailRegex.test(formData.emailAddress)) {
      newErrors.emailAddress = "Düzgün e-mail formatı daxil edin";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      alert("Mesajınız göndərildi!");
      setFormData({
        textarea: "",
        emailAddress: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };
const navigate = useNavigate();

  return (
    <>
    <div className="z-10 absolute top-10 left-8"><NavigateArrow/></div>
     <div className="min-h-screen bg-gradient-to-br from-[#401795] via-[#621DAC] to-[#4E61EC] flex items-center justify-center p-4 relative">
      <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl relative">
        <div className="relative">
          <div className="flex justify-center mb-6 relative">
            <div className="relative">
              <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600 shadow-xl flex items-center justify-center border border-gray-500">
                <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 shadow-inner border border-gray-600"></div>
              </div>

              <div className="absolute top-4 sm:top-5 lg:top-6 -left-10 sm:-left-12 lg:-left-16 w-10 sm:w-12 lg:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-600 rounded-full shadow-lg transform -rotate-12"></div>

              <div className="absolute top-4 sm:top-5 lg:top-6 -right-10 sm:-right-12 lg:-right-16 w-10 sm:w-12 lg:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700 rounded-full shadow-lg transform rotate-12"></div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 rounded-lg shadow-2xl p-6 sm:p-8 transition-transform duration-300 relative border border-gray-300">
            <div className="absolute -right-10 top-1/6 hidden md:flex flex-col gap-4">
              <button
               onClick={() => navigate("/suggestions")}
              className="bg-gradient-to-b from-[#4B4193] via-[#DA3D68] to-[#E99826] hover:from-[#E99826] hover:via-[#DA3D68] hover:to-[#4B4193] text-white border-none w-10 h-32 rounded-md cursor-pointer flex items-center justify-center transition-colors duration-300 p-0 shadow-lg"
>
                <span className="transform -rotate-90 whitespace-nowrap text-xs font-[corbel] font-medium tracking-wider">
                  Təkliflər
                </span>
              </button>
              <button
               onClick={() => navigate("/complaint")}
              className="bg-gradient-to-b from-[#4B4193] via-[#DA3D68] to-[#E99826] hover:from-[#E99826] hover:via-[#DA3D68] hover:to-[#4B4193] text-white border-none w-10 h-32 rounded-md cursor-pointer flex items-center justify-center transition-colors duration-300 p-0 shadow-lg"
>
                <span className="transform -rotate-90 whitespace-nowrap text-xs font-[corbel] font-medium tracking-wider">
                  Şikayətlər
                </span>
              </button>
            </div>

            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 font-[corbel]">
                Təklifiniz
              </h1>
              <div className="w-14 sm:w-20 lg:w-96 h-1 bg-gradient-to-r from-[#4B4193] via-[#DA3D68] to-[#E99826] mx-auto rounded-full shadow-sm"></div>
            </div>

            <div className="space-y-4 sm:space-y-6 flex flex-col gap-3 justify-center ">
              <div>
                <div className="relative">
                  <input
                    type="email"
                    value={formData.emailAddress}
                    onChange={(e) =>
                      handleInputChange("emailAddress", e.target.value)
                    }
                    className={`w-full px-3 sm:px-4 py-3 sm:py-4 bg-[#F2F2F2] rounded-md font-medium tracking-wide focus:outline-none  focus:border-1 border-[#4E61EC] transition-all duration-300 text-sm sm:text-base shadow-lg  placeholder-gray-400 placeholder:font-[corbel] ${
                      errors.emailAddress ? "ring-2 ring-red-500" : ""
                    }`}
                    placeholder="Email adres"
                  />
                </div>
                {errors.emailAddress && (
                  <p className="text-red-600 text-xs sm:text-sm mt-1 ml-1">
                    {errors.emailAddress}
                  </p>
                )}
              </div>
              <div>
                <div className="relative">
                  <textarea
                    name="textarea"
                    className={`w-full px-3 sm:px-4 py-3 sm:py-4  bg-[#F2F2F2] focus:border-1 border-[#4E61EC] rounded-md font-medium tracking-wide focus:outline-none  transition-all duration-300 text-sm sm:text-base shadow-lg placeholder-gray-400 placeholder:font-[corbel] ${
                      errors.textarea ? "ring-2 ring-red-500" : ""
                    }`}
                    placeholder="Sizin təklifiniz..."
                  ></textarea>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
          className="w-full py-3 sm:py-4 bg-gradient-to-r from-[#401795] via-[#621DAC] to-[#4E61EC] hover:from-[#4E61EC] hover:via-[#621DAC] hover:to-[#401795] text-white font-[lexend] text-base sm:text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-[#621DAC] transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border border-[#621DAC]"

              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>GÖNDƏRİLİR...</span>
                  </div>
                ) : (
                  "Göndər"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default Suggestions;
