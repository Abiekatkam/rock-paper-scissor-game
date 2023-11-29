import React from "react";

const BackBtn = ({ link }) => {
  return (
    <a
      href={link}
      className="flex gap-2 w-fit items-center text-[1rem] text-slate-600 hover:text-gray-900 transition-all ease-in cursor-pointer"
    >
      <i className="fa-solid fa-reply"></i>
      Back
    </a>
  );
};

export default BackBtn;
