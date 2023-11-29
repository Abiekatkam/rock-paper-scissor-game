import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import CardLink from "./components/CardLink";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Loader from "./components/Loader";
import ModeDescription from "./components/ModeDescription";
import DescriptionOneRules from "./assets/images/image-rules.svg";
import DescriptionTwoRules from "./assets/images/image-rules-bonus.svg";
import Mode1 from "./components/Mode1";
import Mode2 from "./components/Mode2";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Router>
      <main className="bg-gray-50 w-full min-h-screen h-fit flex flex-col items-center lg:px-10 lg:space-y-18 space-y-10 p-4">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <div className="w-full lg:h-[500px] h-fit flex lg:flex-row flex-col items-center lg:justify-around justify-between">
                    <div className="relative w-full lg:max-w-[600px]">
                      <div className="absolute lg:top-8 lg:left-16 lg:w-[310px] lg:h-[310px] w-[190px] h-[190px] top-48 left-4 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob_animation"></div>
                      <div className="absolute lg:top-10 lg:right-24 lg:w-[310px] lg:h-[310px] w-[190px] h-[190px] top-52 right-10 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob_animation animation-delay-2000"></div>
                      <div className="absolute lg:-bottom-4 lg:left-36 lg:w-[310px] lg:h-[310px] w-[190px] h-[190px] top-24 right-20 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-75 animate-blob_animation animation-delay-4000"></div>

                      <div className="relative w-full lg:h-[350px] h-[200px] text-center flex items-center justify-center gap-4">
                        <h1 className="lg:text-[5rem] text-[3rem] font-bold text-gray-900 lg:leading-[4rem] leading-[2rem] border-t-2 border-b-2 border-slate-700">
                          Select the game
                        </h1>
                      </div>
                    </div>

                    <div className="relative z-30 lg:w-[550px] w-full h-fit flex flex-col justify-center items-center gap-4">
                      <CardLink
                        text={"mode 1"}
                        link={"/mode-one-description"}
                      />
                      <CardLink
                        text={"mode 2"}
                        link={"/mode-two-description"}
                      />
                    </div>
                  </div>
                }
              />
              <Route
                exact
                path="mode-one-description"
                element={
                  <ModeDescription
                    title={"Rock, Paper, Scissor Game"}
                    paragraph={`In the immersive world of the Rock, Paper, Scissors game, you find
                yourself engaged in a thrilling duel with the computer. Every round is
                a strategic dance of choices — will you choose the sturdy Rock, the
                swift Paper, or the elusive Scissors? The computer, ever
                unpredictable, makes its move in tandem. Victory rewards you with a
                well-earned point, boosting your confidence, while defeat nudges you
                to refine your strategy. Each round is a chance to outsmart the
                machine and prove your prowess in this timeless game of wits and luck.
                Let the battle begin, and may the best strategist emerge triumphant!`}
                    imgUrl={DescriptionOneRules}
                    gameLink={"/rock-paper-scissor"}
                  />
                }
              />
              <Route
                exact
                path="mode-two-description"
                element={
                  <ModeDescription
                    title={"Rock, Paper, Scissor, Lizard, Spock Game"}
                    paragraph={`Embark on a dynamic journey in the Rock, Paper, Scissors, Lizard, Spock arena, where classic meets complexity. Engaging the computer in this expanded version adds an extra layer of challenge and excitement. Will you select the robust Rock, the versatile Paper, the cunning Scissors, the enigmatic Lizard, or the logical Spock? With each move, you vie for supremacy against the computer's unpredictable choices. Victorious clashes earn you valuable points, fueling your determination to outsmart the digital adversary. However, defeat teaches resilience and sparks the drive to refine your tactics for the next encounter. Enter this multifaceted battle of wit, chance, and strategy, where triumph and setback intertwine in a thrilling game of Rock, Paper, Scissors, Lizard, Spock. May your decisions be sharp, and may victory be your constant companion!`}
                    imgUrl={DescriptionTwoRules}
                    gameLink={"/rock-paper-scissor-bonus"}
                  />
                }
              />
              <Route exact path="/rock-paper-scissor" element={<Mode1 />} />
              <Route
                exact
                path="/rock-paper-scissor-bonus"
                element={<Mode2 />}
              />
            </Routes>
            <Footer />
          </>
        )}
      </main>
    </Router>
  );
};

export default App;
