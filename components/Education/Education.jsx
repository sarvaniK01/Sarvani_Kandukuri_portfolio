import React from "react";

// data
import educationData from "./education.json";

const Education = () => {
  return (
    <section id="education" className="bg-lightBlue/30">
      <div className="container mx-auto px-12 xl:px-20 2xl:px-48 py-32">
        <p className="heading font-baskerville text-5xl text-black text-center mx-auto">
          Education
        </p>
        <div className="flex flex-col gap-y-20 mt-20">
          {educationData.map((item) => {
            return (
              <div
                key={item.id}
                className="cursor-default flex flex-col lg:flex-row gap-x-16 lg:w-[80%] mx-auto"
              >
                <img
                  src={item.image}
                  alt="institute-logo"
                  aria-label="institute logo"
                  className="w-[130px] mx-auto mb-7 lg:mb-0 lg:mx-0 lg:w-auto"
                />
                <div className="my-auto text-black flex flex-col gap-y-2 lg:gap-y-0 text-center lg:text-left">
                  <p className="font-bold font-baskerville text-xl md:text-2xl md:w-[95%] lg:w-full md:mx-auto">
                    {item.college}
                  </p>
                  <p className="font-semibold font-nunito text-lg md:text-xl">
                    {item.degree}
                  </p>
                  <p className="text-lg font-nunito font-medium">
                    {item.years}
                  </p>
                  <p className="font-nunito text-base md:text-lg font-semibold">
                    {item.measure}: {item.score}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
