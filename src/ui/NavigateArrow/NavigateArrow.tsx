import { useNavigate } from "react-router-dom";
import defaultArrowIcon from "../../assets/images/arrow.svg";

interface NavigateArrowProps {
  className?: string;
  iconSrc?: string;
}

const NavigateArrow = ({
  className = "",
  iconSrc = defaultArrowIcon,
}: NavigateArrowProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className={`absolute w-[60px] h-[60px] `}>
      <img
        src={iconSrc}
        onClick={handleBack}
        alt="əvvəlki səhifəyə qayıt"
        className={`w-[19px] h-[20px] cursor-pointer ${className}`}
      />
    </div>
  );
};

export default NavigateArrow;
