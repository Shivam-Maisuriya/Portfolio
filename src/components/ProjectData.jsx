import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectData() {
  return (
    <>
      <div className="max-w-screen md:min-h-screen container mx-auto md:px-12 px-6 flex justify-center flex-col md:flex-col pb-10 ">
        <div className=" pt-12 md:pt-24 pb-8">
          <h3 className="text-3xl font-bold text-purple-800">Projects</h3>
        </div>
        <div>
          <ProjectCard />
        </div>
      </div>
    </>
  );
}

export default ProjectData;
