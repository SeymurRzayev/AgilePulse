import ScrumModule from "../../../components/ScrumModule/ScrumModule";
import styles from "./ScrumSection.module.css";
import backgroundImage from '../../../assets/images/scrum-bg.jpg'
import Navbar from "../../../layout/Navbar/Navbar";
import Footer from "../../../layout/Footer/Footer";

const ScrumSection = () => {
  return (
    <>
      <div className="relative w-full flex items-center justify-center">
        <Navbar />
      </div>
      <div
        style={{ backgroundImage: `url(${backgroundImage})` }}
        className="w-full h-[357px] brightness-50 bg-cover bg-no-repeat bg-center">
      </div>
      <div className={`${styles.ScrumContainer} bg-cover bg-center`}>
        <h2 className="w-[80%] mx-auto">Scrum nədir? Praktik Başlanğıc</h2>
        <ScrumModule />
      </div>
      <Footer/>
    </>
  );
};

export default ScrumSection;
