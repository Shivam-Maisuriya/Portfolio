import React from "react";
import image from "../../images/VideoChat.png";
import react from "../../images/react.svg";
import node from "../../images/node.svg";
import socket from "../../images/socket.svg";
import tailwind from "../../images/tailwind.svg";
import express from "../../images/express.svg";
import vite from "../../images/vite.svg";

function VideoChat() {
  return (
    <>
      <div className="">
        <div className="flex justify-around items-center w-full shadow-3xl dark:shadow-purple-500 rounded-xl px-8 lg:py-16 py-8 lg:flex-row flex-col lg:space-y-0 space-y-8 ">
          {/* image */}
          <div className="rounded-xl shadow-lg dark:shadow-purple-500 bg-white ">
            <img src={image} alt="image" className="h-60 w-96 rounded-xl" />
          </div>

          {/* content */}
          <div className="lg:w-1/2 p-6 rounded-xl shadow-xl space-y-2 ">
            {/* title */}
            <div>
              <h1 className="text-2xl font-semibold">VideoChat</h1>
            </div>

            {/* data */}
            <div className="text-lg text-slate-400 font-semibold text-justify">
            This is a dynamic website made using MERN stack, tailwind, webRTC and socket.io. This website is use for video calling using peer to peer connection
            </div>

            {/* icons */}
            <div className="flex space-x-3 mb-2 overflow-hidden">
              <img src={vite} className="w-8 " />
              <img src={react} className="w-8 " />
              <img src={express} className="w-8 " />
              <img src={node} className="w-8 " />
              <img src={tailwind} className="w-8 " />
              <img src={socket} className="w-8 " />
            </div>

            {/* Buttons */}
            <div className="hover:text-purple-800 hover:scale-110 duration-500">
              <a
                href="https://github.com/Shivam-Maisuriya/VideoChatt"
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

export default VideoChat;
