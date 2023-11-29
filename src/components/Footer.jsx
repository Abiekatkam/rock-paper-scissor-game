import React from "react";
import Links from "./Links";
import GithubProfileImage from "../assets/breathe.jpg";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="w-full h-fit min-h-[300px] mb-4 flex lg:flex-row flex-col items-center justify-around gap-10 bg-black rounded-lg lg:p-2 p-4 text-white shadow-2xl">
      <div className="flex flex-col justify-center items-center gap-0">
        <img
          src={GithubProfileImage}
          alt="githubprofieimage"
          className="lg:w-32 lg:h-32 w-[150px] h-[150px] rounded-full object-cover object-center border-4 border-white shadow-lg"
        />
        <p className="lg:text-[2rem] text-[1.5rem] font-bold capitalize">
          Abie Katkam
        </p>
        <span className="lg:text-[0.9rem] text-[0.7rem] opacity-50">
          All rights reserved {year}
        </span>
      </div>
      <div className="flex flex-col justify-center items-center gap-0">
        <p className="lg:text-[1.5rem] text-[1.2rem] font-bold uppercase">
          Follow me on
        </p>
        <div className="flex flex-row gap-2 justify-center items-center  transition-all ease-in">
          <Links
            link={"https://github.com/Abiekatkam"}
            iconUrl={"fa-brands fa-github"}
          />
          <Links
            link={"https://www.linkedin.com/in/abhishek-katkam-988744231/"}
            iconUrl={"fa-brands fa-linkedin"}
          />
          <Links
            link={"https://www.instagram.com/_abie._/"}
            iconUrl={"fa-brands fa-instagram"}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-0">
        <p className="lg:text-[1.5rem] text-[1.2rem] font-bold uppercase">
          Source Code
        </p>
        <div className="flex flex-row gap-2 justify-center items-center  transition-all ease-in">
          <Links
            link={"https://github.com/Abiekatkam/rock-paper-scissor-game"}
            iconUrl={"fa-solid fa-link"}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
