import React from "react";

const Hero = () => {
  return (
    <div className="text-center pt-6 pb-80 h-full w-full">
      <div className="container pt-6">
        <h1 className="text-9xl font-black">
          <p className="text-white">Hello</p>
        </h1>
        <p className="text-gray-300 text-3xl my-6">
          My name is <em className="font-serif text-emerald-300 dec decoration-white underline underline-offset-8 decoration-dashed" title="Fake Name">Aditya Priyadarshi</em>
        </p>
        <div className="flex justify-center space-x-6">
        <a className="btn-primary"
        href="#about">
          About Me
        </a>
        <a className="btn-secondary"
        href="#work">
            My work
        </a>
            </div>
      </div>
    </div>
  );
};

export default Hero;
