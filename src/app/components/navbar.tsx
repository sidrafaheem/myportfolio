  import Link from "next/link";
// // import Image from "next/image";
// // import React from "react";
// // import {  GrCloudDownload } from 'react-icons/gr';

// // const Navbar = () => {
// //   return (
// //     <div className="bg-white z-50 sticky top-0">
// //       <header className="text-gray-600 body-font">
// //         <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
// //           <a className="flex title-font font-medium items-center text-gray-600 mb-4 md:mb-0">
              
// //             <span className="ml-3 text-2xl"> PORTFOLIO </span>
// //           </a>
// //           <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
// //             <Link href={"/"} className="mr-5 hover:text-purple-400">
// //               Home
// //             </Link>
// //             <Link href={"#"} className="mr-5 hover:text-purple-400">
// //               About
// //             </Link>
// //             <Link href={"#"} className="mr-5 hover:text-purple-400">
// //               Skills
// //             </Link>
// //             <Link href={"#Projects"} className="mr-5 hover:text-purple-400">
// //               Projects
// //             </Link>
// //             <Link href={"#Contact"} className="mr-5 hover:text-purple-400">
// //               Contact
// //             </Link>
// //           </nav>
// //           <a href="../../../" >
// //           <button className="inline-flex items-center bg-purple-600 border-0 py-1 px-3 focus:outline-none hover:bg-purple-400 rounded text-white mt-4 md:mt-0">
// //             Download CV 
// //             <GrCloudDownload className=" hover:text-blue-500"  />
// //            </button>
// //            </a>
         
// //         </div>
// //       </header>
// //     </div>
// //   );
// // };

// // export default Navbar;
// import Link from 'next/link'
// import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <span className="ml-3 text-2xl"><big className='text-purple-600'>P</big>ORTFOLIO </span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-purple-400">Home</Link>
      <Link href={"#about"} className="mr-5 hover:text-purple-400">About</Link>
      <Link href={"#skills"} className="mr-5 hover:text-purple-400">Skills </Link>
      < Link href={"#project"} className="mr-5 hover:text-purple-400"> Projects</Link>
      <Link href={"#Contact"} className="mr-5 hover:text-purple-400">Contact </Link>

    </nav>
    {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      Button
      
    </button> */}
  </div>
</header>

    </div>
  )
}

export default Navbar
