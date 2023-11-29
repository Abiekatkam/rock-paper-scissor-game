import React from "react";
import BackBtn from "./BackBtn";

const ModeDescription = ({ title, paragraph, imgUrl, gameLink }) => {
  return (
    <div className="w-full min-h-[620px] h-fit flex lg:flex-row flex-col justify-center gap-6 lg:py-8 lg:px-4 p-2">
      <div className="lg:w-[40%] flex flex-col lg:gap-3 gap-1">
        <BackBtn link={"/"} />

        <h1 className="w-fit lg:text-5xl font-bold text-4xl">{title}</h1>

        <p className="w-full lg:text-[1.2rem] text-slate-600">{paragraph}</p>
      </div>
      <div className="lg:w-[35%] flex flex-col justify-center  items-center gap-10">
        <div className="lg:w-[450px] lg:h-[400px] flex justify-center">
          <img
            src={imgUrl}
            className="w-full object-center"
            alt="description"
          />
        </div>

        <a
          href={gameLink}
          className="lg:w-[80%] w-full p-4 cursor-pointer rounded-full text-[1.25rem] font-bold bg-indigo-500 outline-none border-2 text-white hover:shadow-2xl hover:bg-transparent hover:border-indigo-600 hover:text-indigo-600 transition-all ease-in text-center"
        >
          Start Game
        </a>
      </div>
    </div>
  );
};

export default ModeDescription;
