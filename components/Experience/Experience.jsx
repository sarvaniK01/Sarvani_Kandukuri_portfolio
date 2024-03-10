import React from "react";
import Link from "next/link";

// data
import expData from "./experience.json";

const Experience = () => {
  return (
    <section id="experience" className="bg-white">
      <div className="container mx-auto px-12 xl:px-20 2xl:px-32 py-32">
        <p className="heading font-baskerville text-5xl text-black text-center mx-auto">
          Experience
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 relative justify-center mx-auto mt-20">
          {expData.map((card) => {
            return (
              <div
                key={card.id}
                className={`${
                  card.id == 3
                    ? "lg:col-start-[1] lg:col-end-[-1] lg:mx-auto xl:mx-0 xl:col-start-3 "
                    : ""
                }  border-2 border-black/10 drop-shadow-sm hover:drop-shadow-xl pb-12 flex flex-col scale-x-[1.1] md:scale-x-100 md:w-[65%] lg:w-[408px] xl:scale-[0.85] 2xl:scale-100 mx-0 md:mx-auto xl:mx-0 bg-white rounded-3xl`}
              >
                <Link
                  href={`${card.companyLink}`}
                  target="_blank"
                  aria-label="company link"
                >
                  {/* logo */}
                  <div
                    className={`${
                      (card.id === 1 ? "bg-pRed" : "") ||
                      (card.id === 2 ? "bg-wss" : "") ||
                      (card.id === 3 ? "bg-ec" : "")
                    } relative rounded-t-3xl w-full h-20`}
                  >
                    <img
                      src={card.logo}
                      alt="company-logo"
                      aria-label="company-logo"
                      className="absolute left-[50%] top-[40%] -translate-x-1/2"
                    />
                  </div>
                  {/* company and designation */}
                  <div className="mt-20">
                    <p className="text-center font-baskerville font-bold text-2xl">
                      {card.companyName}
                    </p>
                    <p className="text-center font-baskerville font-bold text-lg pt-1">
                      {card.designation}
                    </p>
                  </div>
                  {/* technologies */}
                  <div className="px-10 w-fit grid grid-cols-2 md:flex md:flex-row w-full justify-center mx-auto mt-5 font-nunito font-bold gap-4">
                    {card.skills.map((skill) => {
                      return (
                        <div
                          key={skill.id}
                          className={`text-white text-center ${
                            (card.id === 1 ? "bg-pRed/80" : "") ||
                            (card.id === 2 ? "bg-wss/80" : "") ||
                            (card.id === 3 ? "bg-ec/80" : "")
                          } px-2 py-1 rounded-xl`}
                        >
                          {skill}
                        </div>
                      );
                    })}
                  </div>
                  {/* description */}
                  <div className="mt-8 lg:mt-16 mx-auto w-52 md:w-60 lg:w-72">
                    <ol className="list-decimal">
                      {card.description.map((listItem, i) => {
                        return (
                          <li key={i} className="font-nunito text-l">
                            {listItem}
                          </li>
                        );
                      })}
                    </ol>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
