import React from "react";
import Image from "next/image";
import Link from "next/link";

// images
import img1 from "../../public/about/img1.png";

const About = () => {
  return (
    <section id="about" className="bg-lightBlue/30">
      <div className="container gap-20 xl:gap-32 2xl:gap-72 justify-center mx-auto flex flex-col flex-col-reverse xl:flex-row px-12 xl:px-20 py-32">
        <Image
          src={img1}
          alt="about-img"
          aria-label="about image"
          className="mx-auto xl:h-fit"
        />
        <div className="my-auto xl:basis-[70%] flex flex-col justify-center xl:justify-self-end w-full">
          <p className="heading font-baskerville text-5xl text-center xl:text-left text-black mx-auto xl:mx-0">
            About
          </p>
          <p className="mt-10 font-nunito font-medium text-2xl text-center lg:w-[70%] lg:mx-auto xl:w-auto xl:text-left xl:self-center">
            Welcome to my frontend developer portfolio! I&apos;m dedicated to
            seamlessly blending creativity and functionality. With a strong
            foundation in front-end technologies, I transform design concepts
            into pixel-perfect, responsive websites. Beyond technical expertise,
            my effective communication and collaboration skills amplify my
            development prowess. Explore my portfolio for the perfect fusion of
            aesthetics and code &#x2010; let&apos;s embark on a journey where
            pixels meet purpose!
          </p>
          <Link
            href="sarvani_kandukuri_resume.pdf"
            target="_blank"
            className="self-center xl:self-start"
          >
            <button
              type="button"
              className="hover:scale-105 transition-scale duration-300 portfolioButton mt-16 bg-blue rounded-3xl py-5 px-10 font-baskerville text-xl text-white"
            >
              View Resume
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
