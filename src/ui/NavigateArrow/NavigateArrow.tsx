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
    >
      <img
        src={navigateArrow}
        onClick={handleBack}
        alt="əvvəlki səhifəyə qayıt"
        className="w-[19px] h-[20px] cursor-pointer"
      />
    </div>
  );
};

export default NavigateArrow;
