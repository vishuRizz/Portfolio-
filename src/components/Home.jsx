import React from "react";
import no_background from "../assets/no_background.png";
import Button from "./Button";

function Home() {
  return (
    <div
      name="home"
      className="w-full h-screen text-black bg-gradient-to-br from-pink-300 to-white"
    >
      <div className="items-center justify-between h-full pt-20 mx-auto space-y-4 md:flex">
        <div className="flex flex-col p-4 max-md:items-center">
          <h2 className="text-5xl font-bold md:text-4xl lg:text-6xl max-md:text-2xl">
            I'm a Software Developer
          </h2>
          <p className="text-base md:text-sm lg:text-xl max-md:hidden max-md:text-center">
            Love to work on web development using technologies like React.js,
            Express, MongoDB, Tailwind. <br />
            1'st year UnderGraduate at Bennett University || Mern Stack
            Development
          </p>
          <div>
            <Button />
          </div>
        </div>

        <div className="p-4 mt-8 max-md:ml-20">
          <img src={no_background} alt="my profile" height={400} width={400} />
        </div>
      </div>
    </div>
  );
}

export default Home;
