import React from "react";
import profile from "../images/profile.jpeg";

function Banner() {
  return (
    <>
      <div className="w-screen h-screen container mx-auto md:px-24 px-7 flex justify-between items-center flex-col-reverse md:flex-row md:pb-10 pt-32">
        {/* content section */}
        <div className="md:w-1/2 h-full md:flex items-center ">
        <div className="space-y-3">
            <h1 className="md:text-5xl text-3xl font-bold">
              Hello, my name is
            </h1>
            <h1 className="md:text-4xl text-2xl font-bold">Shivam Maisuriya</h1>

            <h1 className="md:text-4xl text-2xl font-bold ">
              <span className="text-purple-600">
                {" "}
                Full-Stack Web Developer{" "}
              </span>
            </h1>

            {/* Attachment */}
            <div className="space-x-3 text-3xl">
              <a
                href="https://github.com/Shivam-Maisuriya"
                target="_blank"
                className="hover:text-purple-600 "
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/shivam-maisuriya-80a077283/"
                target="_blank"
                className="hover:text-purple-600 "
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>

            <br />
            {/* Resume Button*/}
            <button className="bg-purple-700 text-white text-lg py-2 px-6 rounded-full hover:bg-purple-800 duration-500 hover:scale-95 shadow-lg shadow-purple-500">
              <a href="./Shivam's Resume.pdf" target="_blank">Resume</a>
            </button>
          </div>
        </div>

        {/* Image section */}
        <div className="md:w-1/2 h-full flex justify-center items-center ">
          <div className="p-3 size-fit rounded-full bg-purple-800 shadow-3xl dark:shadow-purple-600">
            <img src={profile} alt="" className="h-80 w-80 rounded-full" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
