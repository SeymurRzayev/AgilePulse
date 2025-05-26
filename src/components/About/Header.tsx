import type { FC } from "react";

type Props = {
  image: string;
  text: string;
};

const Header: FC<Props> = ({ image, text }) => {
  return (
    <div
      className="w-full h-[150px] md:h-[240px]  lg:h-[360px] relative bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 backdrop-brightness-50 flex justify-center items-center  ">
        <h1 className="text-white font-bold text-lg md:text-xl lg:text-[34px] leading-[22px] lg:leading-[44px]  tracking-normal font-corbel max-w-[1080px] text-center">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default Header;
