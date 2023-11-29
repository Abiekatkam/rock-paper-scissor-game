import React, { useEffect, useState } from "react";
import UserLogo from "../assets/student.png";
import BotLogo from "../assets/hacker.png";
import RulesImage from "../assets/images/image-rules.svg";
import RockIcon from "../assets/images/icon-rock.svg";
import PaperIcon from "../assets/images/icon-paper.svg";
import ScissorIcon from "../assets/images/icon-scissors.svg";
import BgTriangle from "../assets/images/bg-triangle.svg";
import MiniLoaderSvg from "../assets/Miniloader.svg";

const Mode1 = () => {
  const [userSelection, setUserSelection] = useState(null);
  const [botSelection, setBotSelection] = useState(null);
  const [declareResult, setDeclareResult] = useState("");
  const [score, setScore] = useState(0);
  const [winStack, setWinStack] = useState([]);

  const [showHideRules, setShowHideRules] = useState(false);
  const [resultPanel, setResultPanel] = useState(false);

  const choices = ["rock", "paper", "scissor"];

  const getRandomChoice = () =>
    choices[Math.floor(Math.random() * choices.length)];

  const handleUserSelection = (e) => {
    const target = e.target.dataset.target;
    setUserSelection(target);
    setTimeout(() => {
      setBotSelection(getRandomChoice());
    }, 1000);
    setResultPanel(true);
  };

  const handleDeclareResult = (user, bot) => {
    let result = "";
    if (user == bot) {
      result = "draw";
    } else if (
      (user == "rock" && bot == "scissor") ||
      (user == "paper" && bot == "rock") ||
      (user == "scissor" && bot == "paper")
    ) {
      setScore((prev) => prev + 1);
      result = "win";
    } else {
      if (score > 0) {
        setScore((prev) => prev - 1);
      }
      result = "lose";
    }
    const gameResult = {
      user: user,
      bot: bot,
      result: result,
    };
    setWinStack((prev) => [gameResult, ...prev]);
    return result;
  };

  const handlePlayAgain = () => {
    setResultPanel(false);
    setUserSelection(null);
    setBotSelection(null);
    setDeclareResult("");
  };

  const handleRestartGame = () => {
    setResultPanel(false);
    setUserSelection(null);
    setBotSelection(null);
    setDeclareResult("");
    setScore(0);
    setWinStack([]);
  };

  useEffect(() => {
    if (botSelection) {
      setDeclareResult(handleDeclareResult(userSelection, botSelection));
    }
  }, [botSelection]);

  useEffect(() => {
    if (winStack.length > 0) {
      setShowHideRules(true);
    } else {
      setShowHideRules(false);
    }
  }, [winStack]);

  return (
    <div className="w-full h-fit flex lg:justify-center flex-col lg:p-4 gap-2">
      <div className="lg:w-[44%] w-full">
        <div className="w-full flex justify-between items-center">
          <p className="text-slate-500 lg:text-[1.2rem] text-[0.9rem] font-bold capitalize">
            <a
              href="/"
              className="text-slate-700 hover:text-indigo-700 transition-all ease-in"
            >
              home
            </a>{" "}
            / rock-paper-scissor
          </p>

          {winStack.length > 0 && (
            <button
              className="lg:text-[1.5rem] text-[1rem] text-slate-300 bg-gray-700 rounded-full lg:p-2 p-1 h-full flex items-center gap-2 hover:rotate-180 transition-all ease-in"
              onClick={handleRestartGame}
            >
              <i className="fa-solid fa-rotate-right"></i>
            </button>
          )}
        </div>
      </div>
      <div className="w-full h-fit flex lg:justify-center lg:flex-row flex-col-reverse lg:gap-6 gap-4 ">
        {/* Left Side */}
        <div className="lg:w-[45%] flex flex-col gap-4">
          {/* Score Display */}
          <div className="w-full min-h-[540px] flex flex-col gap-3">
            <div className="w-full max-h-[540px] h-fit p-4 rounded-lg bg-gray-800 shadow-xl flex flex-col gap-3">
              <h1 className="lg:text-3xl text-xl font-bold text-slate-300">
                Rock Paper Scissor
              </h1>

              <div className="w-full lg:h-[130px] rounded-lg bg-slate-200 flex lg:flex-col items-center lg:items-start gap-3 p-4">
                <span className="w-fit text-[1.1rem] capitalize text-slate-600 font-bold">
                  Current score
                </span>
                <p className="text-5xl mx-auto text-slate-600">{score}</p>
              </div>

              {/* win stack */}
              <div
                className={` w-full max-h-[310px] h-fit ${
                  showHideRules ? "flex" : "hidden"
                } flex-col gap-4 overflow-y-scroll`}
              >
                {winStack.map((item, index) => (
                  <div
                    className="w-full lg:h-[65px] h-[50px] flex flex-row justify-between items-center"
                    key={index}
                  >
                    <div className="w-[40%] flex flex-row justify-start items-center gap-1">
                      <img
                        src={UserLogo}
                        alt="user"
                        className="lg:w-[60px] lg:h-[60px] w-[50px] h-[50px] object-center rounded-full border-4 bg-slate-300 border-indigo-600"
                      />
                      <div className="flex flex-col justify-center gap-0">
                        <p className="lg:text-[1.2rem] text-[1.1rem] font-bold text-slate-300">
                          You
                        </p>
                        <span className="lg:text-[0.9rem] text-[0.8rem] font-bold text-slate-400 uppercase">
                          {item.user}
                        </span>
                      </div>
                    </div>

                    <p className="lg:text-[1.5rem] text-[1.2rem] uppercase font-bold text-slate-300">
                      {item.result}
                    </p>

                    <div className="w-[40%] flex flex-row justify-end items-center gap-1">
                      <div className="flex flex-col justify-center gap-0">
                        <p className="lg:text-[1.2rem] text-[1.1rem] font-bold text-slate-300">
                          Bot
                        </p>
                        <span className="lg:text-[0.9rem] text-[0.8rem] font-bold text-slate-400 uppercase">
                          {item.bot}
                        </span>
                      </div>
                      <img
                        src={BotLogo}
                        alt="user"
                        className="lg:w-[60px] lg:h-[60px] w-[50px] h-[50px] object-center rounded-full bg-slate-300 border-4 border-red-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules Display */}
            <div
              className={`${
                showHideRules ? "hidden" : "flex"
              } w-full flex flex-col items-center justify-center`}
            >
              <p className="w-fit ml-4 mr-auto text-[1.2rem] uppercase font-bold text-slate-600">
                Rules
              </p>
              <img src={RulesImage} alt="rules image" />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-[55%] lg:p-4 flex items-center justify-center">
          <div
            className={`relative w-full lg:h-[550px] h-[400px] ${
              !resultPanel ? "flex" : "hidden"
            } items-center justify-center`}
          >
            {/* Background Triangle */}
            <div className="absolute lg:top-[20%] rotate-180 lg:w-[400px] lg:h-[300px] w-[270px] flex items-center justify-center">
              <img src={BgTriangle} alt="rock" className="w-full h-full" />
            </div>

            {/* Rock */}
            <div
              className="absolute lg:top-[15%] top-[10%] lg:w-[160px] lg:h-[160px] w-[120px] h-[120px] flex items-center justify-center rounded-full bg-slate-300 lg:border-[1rem] border-[0.8rem]
              border-red-400 cursor-pointer hover:scale-105 transition-all ease-in hover:border-red-600 hover:shadow-2xl"
              data-target="rock"
              onClick={handleUserSelection}
            >
              <img
                src={RockIcon}
                alt="rock"
                className="lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]"
                data-target="rock"
              />
            </div>

            {/* Paper */}
            <div
              className="absolute lg:bottom-[15%] lg:right-[18%] bottom-[8%] right-2 lg:w-[160px] lg:h-[160px] w-[120px] h-[120px] flex items-center justify-center rounded-full bg-slate-300 lg:border-[1rem] border-[0.8rem] border-indigo-400 cursor-pointer hover:scale-105 transition-all ease-in hover:border-indigo-600 hover:shadow-2xl"
              data-target="paper"
              onClick={handleUserSelection}
            >
              <img
                src={PaperIcon}
                alt="paper"
                className="lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]"
                data-target="paper"
              />
            </div>

            {/* Scissor */}
            <div
              className="absolute lg:bottom-[15%] lg:left-[18%] bottom-[8%] left-2 lg:w-[160px] lg:h-[160px] w-[120px] h-[120px] flex items-center justify-center rounded-full bg-slate-300 lg:border-[1rem] border-[0.8rem] border-yellow-400 cursor-pointer hover:scale-105 transition-all ease-in hover:border-yellow-600 hover:shadow-2xl"
              data-target="scissor"
              onClick={handleUserSelection}
            >
              <img
                src={ScissorIcon}
                alt="scissor"
                className="lg:w-[80px] lg:h-[80px] w-[60px] h-[60px]"
                data-target="scissor"
              />
            </div>
          </div>

          {/* result container */}
          <div
            className={`w-full lg:h-[310px] bg-gray-800 p-4 px-6 rounded-lg ${
              resultPanel ? "flex" : "hidden"
            } flex-row items-center justify-between shadow-xl`}
          >
            <div className="w-[30%] flex flex-col justify-center items-center gap-4">
              <div className="w-full lg:h-[50px] flex flex-row items-center justify-center gap-3">
                <img
                  src={UserLogo}
                  alt="user"
                  className="lg:w-[50px] w-[40px] rounded-full border-4 border-indigo-600 bg-slate-300"
                />
                <p className="lg:text-2xl text-[1.2rem] font-bold text-slate-300 uppercase">
                  You
                </p>
              </div>
              <div
                className={`lg:w-[160px] lg:h-[160px] w-[90px] h-[90px] flex items-center justify-center rounded-full bg-slate-300 lg:border-[1rem] border-[0.8rem] ${
                  userSelection == "rock"
                    ? "border-red-600"
                    : userSelection == "paper"
                    ? "border-indigo-600"
                    : "border-yellow-600"
                }`}
              >
                <img
                  src={
                    userSelection == "rock"
                      ? RockIcon
                      : userSelection == "paper"
                      ? PaperIcon
                      : ScissorIcon
                  }
                  alt="rock"
                  className="lg:w-[80px] lg:h-[80px] w-[50px] h-[50px]"
                />
              </div>
            </div>

            {declareResult && (
              <div className="w-[30%] flex flex-col gap-2 justify-center items-center">
                <p className="lg:text-5xl text-[1.3rem] font-bold text-slate-300 uppercase">
                  {declareResult}
                </p>
                <button
                  type="button"
                  className="bg-indigo-500 lg:p-4 p-2 rounded-full shadow-2xl lg:text-xl text-[0.8rem] text-slate-300 capitalize hover:scale-105 hover:bg-transparent border-2 hover:border-indigo-600 border-indigo-500 hover:text-indigo-500"
                  onClick={handlePlayAgain}
                >
                  play again
                </button>
              </div>
            )}

            <div className="w-[30%] flex flex-col justify-center items-center gap-4">
              <div className="w-full lg:h-[50px] flex flex-row items-center justify-center gap-3">
                <img
                  src={BotLogo}
                  alt="user"
                  className="lg:w-[50px] w-[40px] rounded-full border-4 border-indigo-600 bg-slate-300"
                />
                <p className="lg:text-2xl text-[1.2rem] font-bold text-slate-300 uppercase">
                  Bot
                </p>
              </div>
              <div
                className={`lg:w-[160px] w-[90px] lg:h-[160px] h-[90px] flex items-center justify-center rounded-full bg-slate-300 lg:border-[1rem] border-[0.8rem] 
              ${
                botSelection == "rock"
                  ? "border-red-600"
                  : botSelection == "paper"
                  ? "border-indigo-600"
                  : botSelection == "scissor"
                  ? "border-yellow-600"
                  : "border-slate-600"
              }`}
              >
                <img
                  src={
                    botSelection == "rock"
                      ? RockIcon
                      : botSelection == "paper"
                      ? PaperIcon
                      : botSelection == "scissor"
                      ? ScissorIcon
                      : MiniLoaderSvg
                  }
                  alt={botSelection}
                  className="lg:w-[80px] lg:h-[80px] w-[50px] h-[50px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mode1;
