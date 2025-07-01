import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavigateArrow from "../../ui/NavigateArrow/NavigateArrow";
import { useCreateComplaintMutation, useCreateSuggestionMutation } from "../../services/features/mainPage/suggestionsApi";
import Swal from 'sweetalert2'

const Suggestions = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const [createSuggestion, { isLoading: sugLoading }] = useCreateSuggestionMutation()
  const [createComplaint, { isLoading: comLoading }] = useCreateComplaintMutation()

  const isSuggestions = location.pathname === "/suggestions";

  const [data, setData] = useState<{
    email: string;
    message: string;
  }>({
    email: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setData(prev => ({
      ...prev,
      [field]: value,
    }))

  };

  const handleSubmit = async () => {
    if (isSuggestions) {
      try {
        await createSuggestion(data).unwrap()
        Swal.fire("Uğurlu", "Təklifiniz uğurla göndərildi!", "success")
        setData({ email: '', message: '' })
      } catch (error) {
        console.log(error)
        Swal.fire("Xəta baş verdi", "Zəhmət olmasa yenidən cəhd edin", "error")
      }
    } else {
      try {
        await createComplaint(data).unwrap()
        Swal.fire("Uğurlu", "Şikayətiniz uğurla göndərildi!", "success")
        setData({ email: '', message: '' })
      } catch (error) {
        console.log(error)
        Swal.fire("Xəta baş verdi", "Zəhmət olmasa yenidən cəhd edin", "error")
      }
    }
  };

  return (
    <>
      <div
        className="z-10 absolute top-10 left-8 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <NavigateArrow />
      </div>

      <div className="min-h-screen z-0 bg-gradient-to-br from-[#E19BA6] via-30% via-[#FAF3EF] to-[#D8AFC1] flex items-center justify-center p-1 sm:p-2 md:p-3 lg:p-4 xl:p-5 relative">
        <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl relative px-6 sm:px-3 md:px-4 lg:px-5 xl:px-6">
          <div className="relative">
            <div className="flex justify-center mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 relative">
              <div className="relative">
                <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full bg-gradient-to-br from-gray-300 via-gray-400 to-gray-600 shadow-xl flex items-center justify-center border border-gray-500 z-50 relative -mt-1 sm:-mt-2 md:-mt-3 lg:-mt-4 xl:-mt-5">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 rounded-full bg-gradient-to-br from-gray-500 to-gray-700 shadow-inner border border-gray-600"></div>
                </div>

                <div className="absolute top-4 sm:top-5 md:top-6 lg:top-7 xl:top-8 -left-12 sm:-left-16 md:-left-20 lg:-left-24 xl:-left-28 w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-600 rounded-full shadow-lg transform -rotate-20 z-0"></div>

                <div className="absolute top-4 sm:top-5 md:top-6 lg:top-7 xl:top-8 -right-12 sm:-right-16 md:-right-20 lg:-right-24 xl:-right-28 w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700 rounded-full shadow-lg transform rotate-20 z-0"></div>
              </div>
            </div>
          </div>

          <div className="z-20 bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 rounded-lg shadow-2xl p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 transition-transform duration-300 relative border border-gray-300 mt-2 sm:mt-3 md:mt-4 lg:mt-5 xl:mt-6">
            <div className="absolute -right-6 sm:-right-6 md:-right-8 lg:-right-10 xl:-right-12 top-1/6 flex flex-col gap-1 sm:gap-2 md:gap-3">
              <button
                onClick={() => navigate("/suggestions")}
                className="bg-gradient-to-b from-[#4B4193] via-[#DA3D68] to-[#E99826] hover:from-[#E99826] hover:via-[#DA3D68] hover:to-[#4B4193] text-white border-none w-4 sm:w-6 md:w-8 lg:w-10 xl:w-12 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 rounded-md cursor-pointer flex items-center justify-center transition-colors duration-300 p-3 shadow-lg"
              >
                <span className="transform -rotate-90 whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-[corbel] font-medium tracking-wider">
                  Təkliflər
                </span>
              </button>
              <button
                onClick={() => navigate("/complaint")}
                className="bg-gradient-to-b from-[#4B4193] via-[#DA3D68] to-[#E99826] hover:from-[#E99826] hover:via-[#DA3D68] hover:to-[#4B4193] text-white border-none w-4 sm:w-6 md:w-8 lg:w-10 xl:w-12 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 rounded-md cursor-pointer flex items-center justify-center transition-colors duration-300 p-3 shadow-lg"
              >
                <span className="transform -rotate-90 whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-[corbel] font-medium tracking-wider">
                  Şikayətlər
                </span>
              </button>
            </div>

            <div className="text-center mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6">
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-1 font-[corbel]">
                {isSuggestions ? 'Təklifiniz' : 'Şikayətiniz'}
              </h1>
              <div className="w-60 sm:w-60 md:w-80 lg:w-80 xl:w-96 h-1 sm:h-1 md:h-1 lg:h-1 xl:h-1 bg-gradient-to-r from-[#4B4193] via-[#DA3D68] to-[#E99826] mx-auto rounded-full shadow-sm"></div>
            </div>

            <div className="space-y-1 sm:space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-5 flex flex-col gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 justify-center">
              <div>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) =>
                    handleInputChange("email", e.target.value)
                  }
                  className={`w-full px-1.5 sm:px-2 md:px-3 lg:px-4 xl:px-5 py-1 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3 bg-[#F2F2F2] rounded-md font-medium tracking-wide focus:outline-none focus:border-1 border-[#4E61EC] transition-all duration-300 text-sm sm:text-base md:text-lg lg:text-[16px] xl:text-lg shadow-lg placeholder-gray-400 placeholder:font-[corbel] placeholder:text-[16px]`}
                  placeholder="Email adress"
                />
                {/* {errors.emailAddress && (
                  <p className="text-red-600 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-1 ml-1">
                    {errors.emailAddress}
                  </p>
                )} */}
              </div>

              <div>
                <textarea
                  name="textarea"
                  value={data.message}
                  onChange={(e) =>
                    handleInputChange("message", e.target.value)
                  }
                  className={`w-full px-1.5 sm:px-2 md:px-3 lg:px-4 xl:px-5 py-1 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3 bg-[#F2F2F2] focus:border-1 border-[#4E61EC] rounded-md font-medium tracking-wide focus:outline-none transition-all duration-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-[18px] shadow-lg placeholder-gray-400 placeholder:font-[corbel] placeholder:text-[16px]`}
                  placeholder={`${isSuggestions ? "Sizin təklifiniz..." : "Sizin şikayətiniz..."}`}
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                disabled={sugLoading || comLoading}
                className="w-full py-1 cursor-pointer sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3 bg-gradient-to-r from-[#401795] via-[#621DAC] to-[#4E61EC] hover:from-[#4E61EC] hover:via-[#621DAC] hover:to-[#401795] text-white font-[lexend] text-sm sm:text-base md:text-lg lg:text-xl xl:text-[18px] rounded-md focus:outline-none focus:ring-2 focus:ring-[#621DAC] transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border border-[#621DAC]"
              >
                {sugLoading || comLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Göndərilir...</span>
                  </div>
                ) : (
                  "Göndər"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Suggestions;
