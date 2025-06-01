import lineteamsvg from "../../assets/images/lineteam.svg";
import arrowlinesvg from "../../assets/images/arrowlineteam.svg";
import longsideline from "../../assets/images/longsideline.svg";
import shortsideline from "../../assets/images/shortsideline.svg";
import shortlineteam from "../../assets/images/shortlineteam.svg";
import arrowline152 from "../../assets/images/arrowline152.svg";
import arrowteam273 from "../../assets/images/arrowteam273.svg";
import arrowline221 from "../../assets/images/arrowline221.svg";
import arrshortteam from "../../assets/images/arrshortteam.svg";

function Lines() {
  return (
    <>
      {/* up left line */}
      <img
        className="absolute  hidden  md:max-2xl:block lg:block  w-[30.2%]  top-[4%] left-[20%] "
        src={lineteamsvg}
        alt=""
      />
      {/* up right line */}
      <img
        className="absolute  hidden  md:max-2xl:block lg:block w-[30.2%] top-[4%] right-[20%] "
        src={lineteamsvg}
        alt="line"
      />
      {/* out right line */}
      <img
        className="absolute  hidden  md:max-2xl:block lg:block h-[19.4%]  top-[4%] right-[19.5%] "
        src={arrowlinesvg}
        alt="line"
      />
      {/* out left line */}
      <img
        className="absolute  hidden  md:max-2xl:block lg:block h-[19.4%]   top-[4%] left-[19.9%] "
        src={arrowlinesvg}
        alt="line"
      />
      {/* inner up downward arrow */}
      <img
        className="absolute hidden  md:max-2xl:block lg:block h-[3.6%] top-[4%] right-[50%] "
        src={arrshortteam}
        alt="line"
      />
      {/* inner up line */}
      <img
        className="absolute  hidden  md:max-2xl:block lg:block  w-[30.2%]  top-[5.5%] right-[35.4%] "
        src={lineteamsvg}
        alt="line"
      />
      {/* inner left line */}
      <img
        className="absolute  hidden  md:max-2xl:block lg:block h-[19.68%]  top-[5.5%] left-[34.8%] "
        src={shortsideline}
        alt="line"
      />
      {/* inner right line */}
      <img
        className="absolute  hidden  md:max-2xl:block lg:block h-[42%]  top-[5.5%] right-[35.4%] "
        src={longsideline}
        alt="line"
      />
      {/* inner bottom line */}
      <img
        className="absolute  hidden  md:max-2xl:block lg:block w-[15%] top-[24.9%] left-[34.8%] "
        src={shortlineteam}
        alt="line"
      />
      {/* inner downward arrow */}
      <img
        className="absolute hidden  md:max-2xl:block lg:block h-[5%] top-[24.9%] left-[48.7%] "
        src={arrowline152}
        alt="line"
      />
      {/* second bottom line */}
      <img
        className="absolute hidden  md:max-2xl:block lg:block w-[14.8%]  top-[47.1%] right-[34.9%] "
        src={shortlineteam}
        alt="line"
      />
      {/* long downward line */}
      <img
        className="absolute hidden  md:max-2xl:block lg:block h-[9.4%]  top-[47.09%] right-[49.5%] "
        src={arrowteam273}
        alt="line"
      />
      {/* small downward arrow */}
      <img
        className="absolute  hidden  md:max-2xl:block lg:block h-[3.5%]  top-[56.4%] right-[49%] "
        src={arrshortteam}
        alt="line"
      />
      {/* down left line */}
      <img
        className="absolute  hidden  md:max-2xl:block lg:block w-[30.2%]   top-[58%] left-[20%] "
        src={lineteamsvg}
        alt="line"
      />
      {/* down right line */}
      <img
        className="absolute  hidden  md:max-2xl:block lg:block w-[30.2%]  top-[58%] right-[20%] "
        src={lineteamsvg}
        alt="line"
      />
      {/* down right downward line */}
      <img
        className="absolute  hidden  md:max-2xl:block lg:block   top-[58%] right-[19.5%] "
        src={arrowline152}
        alt="line"
      />
      {/* down left downward line */}
      <img
        className="absolute  hidden  md:max-2xl:block lg:block   top-[58%] left-[19.9%] "
        src={arrowline152}
        alt="line"
      />
    </>
  );
}

export default Lines;
