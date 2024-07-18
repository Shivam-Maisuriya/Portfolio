import React from "react";
import project from "../images/p1.svg";
import css from '../images/css.svg'
import html from '../images/html.svg'
import js from '../images/js.svg'
import php from '../images/php.svg'
import tailwind from '../images/tailwind.svg'

function ProjectCard() {
  return (
    <>
      <div className="">
        <div className="flex justify-around items-center w-full shadow-lg dark:shadow-purple-500 rounded-xl px-8 md:py-16 py-8 md:flex-row flex-col md:space-y-0 space-y-8">
          {/* image */}
          <div className="rounded-xl shadow-lg  bg-white">
            <img
              src={project}
              alt="image"
              className="h-72 w-96"
            />
          </div>

          {/* content */}
          <div className="md:w-1/2 p-8 rounded-xl shadow-xl  space-y-2 ">
            {/* title */}
            <div>
              <h1 className="text-2xl font-semibold">Title</h1>
            </div>

            {/* data */}
            <div className="text-md text-slate-400 font-semibold text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              necessitatibus earum officia rem ullam asperiores eos laudantium
              quis expedita sequi, reprehenderit sit tempore distinctio!
              Consectetur tempora velit culpa illum porro?
            </div>

            {/* icons */}
            <div className="flex w-8 space-x-2 h-8">
              <img src={html} alt="" className="abcd" />
              <img src={css} alt="" className="abcd" />
              <img src={js} alt="" className="abcd" />
              <img src={php} alt="" className="abcd" />
              <img src={tailwind} alt="" className="abcd" />
            </div>

            {/* Buttons */}
            <div className="flex justify-center items-center space-x-2  hover:text-purple-800 hover:scale-110 duration-500">
              <i className="fa-brands fa-github text-2xl"></i>
              <p className="font-bold">Code</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;