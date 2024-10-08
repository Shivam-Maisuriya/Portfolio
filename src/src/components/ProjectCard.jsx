import React from "react";
import project from "../images/languages/p1.svg";
import css from "../images/languages/css.svg";
import html from "../images/languages/html.svg";
import js from "../images/languages/js.svg";
import php from "../images/languages/php.svg";
import tailwind from "../images/languages/tailwind.svg";

function ProjectCard() {
  return (
    <>
      <div className="">
        <div className="flex justify-around items-center w-full shadow-3xl dark:shadow-purple-500 rounded-xl px-8 lg:py-16 py-8 lg:flex-row flex-col lg:space-y-0 space-y-8">
          {/* image */}
          <div className="rounded-xl shadow-lg  bg-white">
            <img src={project} alt="image" className="h-72 w-96" />
          </div>

          {/* content */}
          <div className="lg:w-1/2 p-8 rounded-xl shadow-xl  space-y-2 ">
            {/* title */}
            <div>
              <h1 className="text-2xl font-semibold">Title</h1>
            </div>

            {/* data */}
            <div className="text-lg text-slate-400 font-semibold text-justify">
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
            <a href="">
              <div className="flex justify-center items-center space-x-2  hover:text-purple-800 hover:scale-110 duration-500">
                <i className="fa-brands fa-github text-2xl"></i>
                <p className="font-bold">Code</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
