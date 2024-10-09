"use client"
import Image from 'next/image'
import Typewriter from "typewriter-effect";
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div id='project'>
      <section className="text-gray-600 body-font ">
  <div className="container px-5 py-24 mx-auto ">
    <div className="flex flex-col text-center w-full mb-20 mt-5 ">
      <h1 className=" title-font sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900">
        <Typewriter
                options={{
                  strings: ["My Project"],
                  autoStart: true,
                  loop: true,
                }}
              />
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
       Im exicted to share the projects i developed using Next.js, HTML, CSS, and Tailwand CSS. It was a rewarding journey, and i d love to walk you through the process, challanges i faced, and how i addressesd them. Im proud of the final outcome and look forward to sharing it with you.
      </p>
    </div>
    <div className="flex flex-wrap -m-5 -mt-[3rem]">
        {/* project */}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer">
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src="/pic.jpg"
            width={100}
            height={100}
            />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-purple-600 mb-1">
              Facebook Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Facebook Login Page
            </h1>
            <p className="leading-relaxed">
             I made this facebook log in page with HTML, CSS, and NEXT.JS 
            </p>
            <Link target='-blank' href={""}>
            <p className="leading-relaxed text-purple-600 hover:underline">
              View Project...
            </p>
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>

    </div>
  )
}

export default Project
