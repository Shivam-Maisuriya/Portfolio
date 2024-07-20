import React from "react";
import AmericanBiocare from "./Cards/AmericanBiocare";
import HandDetection from "./Cards/HandDetection";
import VideoChat from "./Cards/VideoChat";

function ProjectData() {
  return (
    <>
      <div className="max-w-screen md:min-h-screen mx-auto md:px-24 px-7 flex justify-center flex-col md:flex-col pb-10 ">
        <div className=" pt-12 md:pt-20 pb-8">
          <h3 className="text-3xl font-bold text-purple-600">Projects</h3>
        </div>

        <div className="space-y-20">
          <AmericanBiocare />
          <HandDetection />
          <VideoChat />
        </div>
      </div>
    </>
  );
}

export default ProjectData;
