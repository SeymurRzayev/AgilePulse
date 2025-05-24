import navigateArrow from "../../assets/images/arrow.svg";
import { useNavigate } from "react-router-dom";

const NavigateArrow = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div
      className="absolute w-[60px] h-[60px] "
      onClick={handleBack}
    >
      <img
        src={navigateArrow}
        alt="əvvəlki səhifəyə qayıt"
        className="w-[19px] h-[20px]"
      />
    </div>
  );
};

export default NavigateArrow;
