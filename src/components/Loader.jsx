import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen ease-in transition-all">
      <p className="text-[2.2rem] lg:text-[1.8rem] uppercase font-extrabold mb-2 lg:mb-1">
        Loading...
      </p>
      <div className="w-[300px] lg:w-[350px] h-4 bg-[#122c34] rounded-full overflow-hidden">
        <div className="w-60% h-full bg-yellow-300 rounded-full animate-loading_animation"></div>
      </div>
    </div>
  );
};

export default Loader;
