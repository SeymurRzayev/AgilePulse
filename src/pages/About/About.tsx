import type { FC } from "react";
import Header from "../../components/About/Header";
import headerImage from "../../assets/images/aboutHero.webp";
import Hero from "../../components/About/Hero";
import Missions from "../../components/About/Missions";
import Navbar from "../../layout/Navbar/Navbar";
import Footer from "../../layout/Footer/Footer";
import Team from "../../components/About/Team";

const About: FC = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        {/* Navbar */}
        <Navbar />
      </div>
      <Header
        image={headerImage}
        text={
          "Agile Pulse — çevik yanaşma və texnologiyanın gücü ilə fərdi və korporativ inkişafı sürətləndirən mərkəzdir"
        }
      />
      <Hero />
      <Missions />
      <Team />

      {/* footer */}
      <Footer />
    </>
  );
};

export default About;
