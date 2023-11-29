import React from "react";

const Links = ({ link, iconUrl, iconColor }) => {
  return (
    <a
      href={link}
      target="_blank"
      className="text-white lg:w-[50px] w-[40px] lg:h-[50px] h-[40px] flex items-center justify-center lg:text-[2.3rem] text-[1.8rem] opacity-50 hover:opacity-100 cursor-pointer hover:scale-105"
    >
      <i className={iconUrl}></i>
    </a>
  );
};

export default Links;
