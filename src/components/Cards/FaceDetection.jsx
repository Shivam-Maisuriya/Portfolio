import React from "react";
import image from "../../images/FaceDetection.jpeg";
import python from "../../images/python.svg";
import opencv from "../../images/opencv.svg";

function FaceDetection() {
  return (
    <>
      <div className="">
        <div className="flex justify-around items-center w-full shadow-3xl dark:shadow-purple-500 rounded-xl px-8 lg:py-16 py-8 lg:flex-row flex-col lg:space-y-0 space-y-8">
          {/* image */}
          <div className="rounded-xl shadow-lg dark:shadow-purple-500 bg-white">
            <img src={image} alt="image" className="h-60 w-96 rounded-xl" />
          </div>

          {/* content */}
          <div className="lg:w-1/2 p-6 rounded-xl shadow-xl  space-y-2 ">
            {/* title */}
            <div>
              <h1 className="text-2xl font-semibold">Face Detection System</h1>
            </div>

            {/* data */}
            <div className="text-lg text-slate-400 font-semibold text-justify">
            This python Project is made for detecting face of a person it maches face points using openCV and if matches then it will show face with border of green color
            </div>

            {/* icons */}
            <div className="flex space-x-3 mb-2">
              <img src={python} className="w-8 " />
              <img src={opencv} className="w-8 " />
            </div>

            {/* Buttons */}
            <div className="hover:text-purple-800 hover:scale-110 duration-500">
              <a
                href="https://github.com/Shivam-Maisuriya/Face_Detection_System"
                target="_blank"
                className="flex justify-center items-center space-x-1 "
              >
                <i className="fa-brands fa-github text-2xl"></i>
                <p className="font-bold">Code</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FaceDetection;
