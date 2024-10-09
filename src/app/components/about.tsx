"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";
const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 bnody-font bg-purple-100  ml-4 mr-4 rounded-3xl">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 ">
              {/* <span className="text-purple-600">ABOUT</span> ME */}
           
            <Typewriter 
                options={{
                  strings: [ "ABOUT ME"],
                  autoStart: true,
                  loop: true,
                }}
              />
               </h1>
            <div className="w-[100px] h-[2px] bg-purple-700"></div>
            <p className="mb-8 leading-relaxed">
              im a BSCS student with a robust foundation in
              front-end-development, specializing in HTML, CSS, TYPE SCRIPT.
              Driven by a passion for desiging intutive and responsive user
              experiences, im now expanding my expertise into
              back-end-development and in NEXT.JS. As an adept learner, i
              countinuously seek out new technologies, striving to deepen my
              knowledge and enhance my skill set.
            </p>
            <div className="flex justify-center">
              <Link href={"mailto:sidrafaheem75@gmail.com"}>
              <button className="inline-flex text-white bg-purple-600 border-0 py-2 px-6 focus:outline-none hover:bg-purple-400 rounded text-lg">
                HIRE ME
              </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded-full "
              alt="hero"
              src="/pic.jpg1.gif"
              width={200}
              height={200}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
