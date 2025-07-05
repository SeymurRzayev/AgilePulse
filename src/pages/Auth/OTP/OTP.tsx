import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useVerifyMutation } from '../../../services/features/auth/verifyApi';
import Swal from 'sweetalert2';

const OTP = () => {
  const navigate = useNavigate();
  const params = useParams()
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(300);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [sendOtp] = useVerifyMutation()
  const email: string = params.email ?? '';

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsResendDisabled(false);
    }
  }, [timeLeft]);

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    const newOtp = [...otp];

    for (let i = 0; i < pastedData.length && i < 6; i++) {
      newOtp[i] = pastedData[i];
    }
    setOtp(newOtp);

    const lastIndex = Math.min(pastedData.length, 5);
    inputRefs.current[lastIndex]?.focus();
  };

  const handleFocus = (index: number) => {
    // Mobil cihazlarda klaviatura aktivləşməsi üçün
    if (inputRefs.current[index]) {
      inputRefs.current[index]?.click();
      inputRefs.current[index]?.focus();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleVerify = async () => {
    const otpCode = otp.join('');
    try {
      await sendOtp({ email, otp: otpCode }).unwrap()
      Swal.fire('Uğurlu!', 'Qeydiyyat uğurla tamamlandı', 'success')
      navigate('/sign-in', { replace: true })
    } catch (error: unknown) {
      const err = error as { status?: number };
      err?.status === 401
        ? Swal.fire('Xəta baş verdi!', 'Təsdiq kodu yanlışdır!', 'error')
        : Swal.fire('Xəta baş verdi!', 'Xəta baş verdi!', 'error')
    }
  };

  const handleResend = () => {
    setTimeLeft(120);
    setIsResendDisabled(true);
    setOtp(['', '', '', '', '', '']);
    inputRefs.current[0]?.focus();
    alert('Yeni kod göndərildi');
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center text-[#2C4B9B] hover:text-[#5a77be] transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        
        </button>

        <div className="w-[95%] bg-white rounded-3xl shadow-xl p-8 border border-[#E5E7EB]">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Təsdiq kodu</h1>
            <p className="text-gray-600 text-sm">
              {email} ünvanına göndərilən 6 rəqəmli kodu daxil edin
            </p>
          </div>

          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center bg-[#F3F4F6] rounded-full px-4 py-2 border border-[#E5E7EB]">
              <svg className="w-5 h-5 text-[#2C4B9B] mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-[#2C4B9B] font-semibold text-lg">
                {formatTime(timeLeft)}
              </span>
            </div>
          </div>

          <div className="w-full flex justify-center gap-1 md:gap-2 mb-8">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => { inputRefs.current[index] = el; }}
                type="text"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
                onFocus={() => handleFocus(index)}
                onTouchStart={() => handleFocus(index)}
                className="w-8 h-10 md:w-12 md:h-14 text-center text-xl font-bold border-2 border-gray-200 rounded-xl focus:border-[#2C4B9B] focus:ring-2 focus:ring-[#4e71c7] transition-all duration-200 outline-none bg-gray-50 focus:bg-white"
                maxLength={1}
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete="one-time-code"
                autoFocus={index === 0}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
              />
            ))}
          </div>

          <div className="space-y-4 flex flex-col justify-center items-center">
            <button
              onClick={handleVerify}
              className="w-[95%] md:w-full bg-gradient-to-r from-[#2C4B9B] to-[#2C4B9B] hover:from-[#2C4B9B] hover:to-[#2C4B9B] text-white font-semibold  py-4 px-6 rounded-2xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
            >
              Təsdiqlə
            </button>

            <button
              onClick={handleResend}
              disabled={isResendDisabled}
              className={`w-[95%] md:w-full font-semibold py-4 px-6 rounded-2xl transition-all duration-200 ${isResendDisabled
                ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#4B4193] to-[#DA3D68] hover:from-[#4B4193] hover:to-[#E99826] text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]'
                }`}
            >
              Kodu yenidən göndər
            </button>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm">
              Kod gəlmədi? E-poçt qutunuzu və spam qovluğunu yoxlayın
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;