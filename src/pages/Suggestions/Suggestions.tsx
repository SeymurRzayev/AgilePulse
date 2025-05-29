import { useState } from "react";

const Suggestions = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    repeatPassword: "",
    emailAddress: ""
  });
  
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    repeatPassword: "",
    emailAddress: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [field]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      username: "",
      password: "",
      repeatPassword: "",
      emailAddress: ""
    };

    if (!formData.username.trim()) {
      newErrors.username = "İstifadəçi adı tələb olunur";
    } else if (formData.username.length < 3) {
      newErrors.username = "İstifadəçi adı ən azı 3 simvol olmalıdır";
    }

    if (!formData.password) {
      newErrors.password = "Şifrə tələb olunur";
    } else if (formData.password.length < 6) {
      newErrors.password = "Şifrə ən azı 6 simvol olmalıdır";
    }

    if (!formData.repeatPassword) {
      newErrors.repeatPassword = "Şifrə təkrarı tələb olunur";
    } else if (formData.password !== formData.repeatPassword) {
      newErrors.repeatPassword = "Şifrələr uyğun gəlmir";
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "E-mail ünvanı tələb olunur";
    } else if (!emailRegex.test(formData.emailAddress)) {
      newErrors.emailAddress = "Düzgün e-mail formatı daxil edin";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== "");
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      alert("Qeydiyyatınız uğurla tamamlandı!");
      setFormData({
        username: "",
        password: "",
        repeatPassword: "",
        emailAddress: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center p-4 relative">
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

          <div className="bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 rounded-lg shadow-2xl p-6 sm:p-8 transform hover:scale-105 transition-transform duration-300 relative border border-gray-300">
            
            <div className="absolute -right-10 top-1/4 hidden md:flex flex-col gap-4">
              <button className="bg-gray-800 hover:bg-gray-700 text-white border-none w-10 h-32 rounded-md cursor-pointer flex items-center justify-center transition-colors duration-300 p-0 shadow-lg">
                <span className="transform -rotate-90 whitespace-nowrap text-xs font-bold tracking-wider">
                  NEW FEATURES
                </span>
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white border-none w-10 h-32 rounded-md cursor-pointer flex items-center justify-center transition-colors duration-300 p-0 shadow-lg">
                <span className="transform -rotate-90 whitespace-nowrap text-xs font-bold tracking-wider">
                  TERMS & CONDITIONS
                </span>
              </button>
            </div>

            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Register Now!</h1>
              <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto rounded-full shadow-sm"></div>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => handleInputChange("username", e.target.value)}
                    className={`w-full px-3 sm:px-4 py-3 sm:py-4 bg-gradient-to-r from-pink-600 to-pink-700 text-white placeholder-pink-200 rounded-md font-semibold tracking-wide focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300 text-sm sm:text-base shadow-lg ${errors.username ? 'ring-2 ring-red-400' : ''}`}
                    placeholder="USERNAME *"
                  />
                </div>
                {errors.username && (
                  <p className="text-red-600 text-xs sm:text-sm mt-1 ml-1">{errors.username}</p>
                )}
              </div>

              <div>
                <div className="relative">
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className={`w-full px-3 sm:px-4 py-3 sm:py-4 bg-gradient-to-r from-pink-600 to-pink-700 text-white placeholder-pink-200 rounded-md font-semibold tracking-wide focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300 text-sm sm:text-base shadow-lg ${errors.password ? 'ring-2 ring-red-400' : ''}`}
                    placeholder="PASSWORD *"
                  />
                </div>
                {errors.password && (
                  <p className="text-red-600 text-xs sm:text-sm mt-1 ml-1">{errors.password}</p>
                )}
              </div>

              <div>
                <div className="relative">
                  <input
                    type="password"
                    value={formData.repeatPassword}
                    onChange={(e) => handleInputChange("repeatPassword", e.target.value)}
                    className={`w-full px-3 sm:px-4 py-3 sm:py-4 bg-gradient-to-r from-pink-600 to-pink-700 text-white placeholder-pink-200 rounded-md font-semibold tracking-wide focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300 text-sm sm:text-base shadow-lg ${errors.repeatPassword ? 'ring-2 ring-red-400' : ''}`}
                    placeholder="REPEAT PASSWORD *"
                  />
                </div>
                {errors.repeatPassword && (
                  <p className="text-red-600 text-xs sm:text-sm mt-1 ml-1">{errors.repeatPassword}</p>
                )}
              </div>

              <div>
                <div className="relative">
                  <input
                    type="email"
                    value={formData.emailAddress}
                    onChange={(e) => handleInputChange("emailAddress", e.target.value)}
                    className={`w-full px-3 sm:px-4 py-3 sm:py-4 bg-gradient-to-r from-pink-600 to-pink-700 text-white placeholder-pink-200 rounded-md font-semibold tracking-wide focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300 text-sm sm:text-base shadow-lg ${errors.emailAddress ? 'ring-2 ring-red-400' : ''}`}
                    placeholder="EMAIL ADDRESS *"
                  />
                </div>
                {errors.emailAddress && (
                  <p className="text-red-600 text-xs sm:text-sm mt-1 ml-1">{errors.emailAddress}</p>
                )}
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-base sm:text-lg rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transform hover:scale-105 transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none border border-blue-500"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>GÖNDƏRİLİR...</span>
                  </div>
                ) : (
                  "REGISTER NOW"
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 sm:mt-8">
          <p className="text-gray-400 text-xs sm:text-sm">
            Artıq hesabınız var? 
            <span className="text-pink-400 hover:text-pink-300 cursor-pointer ml-1 font-semibold transition-colors duration-200">
              Daxil olun
            </span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Suggestions;