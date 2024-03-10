"use client";
import React from "react";

// components
import Card from "./Card";

// data
import projectData from "./projectData.json";

const Projects = () => {
  return (
    <section id="projects" className="bg-lightBlue/30">
      <div className="container mx-auto px-12 lg:px-48 pt-32 pb-52">
        <p className="heading font-baskerville text-5xl text-black text-center mx-auto">
          Projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-64 my-20 justify-center mx-auto">
          {projectData.map((project, pId) => {
            return (
              <Card
                key={pId}
                id={`${project.id}`}
                img={`${project.image}`}
                pName={`${project.name}`}
                pDescription={`${project.description}`}
                pSkills={project.skills.map((skill, sId) => {
                  return (
                    <div
                      key={sId}
                      className="bg-white/50 text-black font-nunito font-bold px-2 py-1 mt-3 rounded-xl"
                    >
                      {skill}
                    </div>
                  );
                })}
                icon1={`${project.icon1}`}
                iconLink1={`${project.icon1Link}`}
                icon2={`${project.icon2}`}
                iconLink2={`${project.icon2Link}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
