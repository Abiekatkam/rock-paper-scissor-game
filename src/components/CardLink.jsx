import React, { useState } from "react";
import Game from "../assets/game.png";

const CardLink = ({ text, link }) => {
  return (
    <a href={link} className="group cursor-pointer transition-all ease-in">
      <div className="w-full lg:h-[150px] h-[120px] rounded-lg lg:p-4 px-2 hover:shadow-2xl shadow-xl border-2 group-hover:border-indigo-600 lg:border-slate-300 border-slate-600 flex flex-row items-center lg:gap-3 gap-2 ">
        <div className="lg:w-24 lg:h-24 w-[50px] h-[40px] lg:object-fit object-center lg:p-3 rounded-full border-4 lg:border-slate-300 border-slate-600 group-hover:border-indigo-600 p-1">
          <img
            src={Game}
            className="w-full h-full group-hover:rotate-180 transition-all ease-in duration-300"
            alt="randomimg"
          />
        </div>
        <h2 className="text-3xl font-bold capitalize lg:text-slate-500 text-gray-700 group-hover:text-indigo-900">
          Rock Paper Scissor {text}
        </h2>
      </div>
    </a>
  );
};

export default CardLink;
