import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900" id="about">
    <div className="relative flex">
        <div className="min-h-screen lg:w-1/3"></div>
        <div className="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

        <div
            className="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
            <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl xl:text-5xl dark:text-white">
                About <span className="text-blue-500">me</span>
            </h1>

            <div className="mt-10 lg:mt-20 lg:flex lg:items-center">
                <Image className="object-contain object-center w-full lg:w-[32rem] rounded-lg h-96" src={"https://github.com/foxy4096.png"} alt="" width={240} height={240}/>

                <div className="mt-8 lg:px-10 lg:mt-0">
                    <h1 className="text-6xl font-semibold text-gray-800 dark:text-white lg:w-72">
                        Aditya Priyadarshi
                    </h1>

                    <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                        “A Dumb Web Developer Who Loves Django”
                    </p>

                    <h3 className="mt-6 text-lg font-medium text-gray-500">Backend Developer</h3>
                    <p className="text-sky-600 dark:text-sky-300"><a href="https://visualway.xyz">@Visualway</a></p>
                </div>
            </div>

            
        </div>
    </div>
</section>
  );
};

export default About;
