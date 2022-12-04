import React from "react";
import "./Header-styles.css"

function Header()
{
    return (
    <div id="header" >
        <a className="header-left" href="#Name">HARSHUL</a>
        <a className="header-right" href="#about">About</a>
        <a className="header-right" href="#Skills">Skills</a>
        <a className="header-right" href="#Project">Project</a>
        {/* <a className="header-right" href="#Contact">Contact</a> */}
    </div>
    
/* <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900" style={{backgroundColor: "#6c89f2"}}>
  <div className="container flex flex-wrap items-center justify-between mx-auto" style={{color: "white"}}>
    <a href="#Name" className="flex items-center" style={{fontSize: "18px"}}>
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">HARSHUL</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" style={{backgroundColor: "#6c89f2"}}>
        <li>
          <a href="#about" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page" style={{color: "white", fontSize: "18px"}}>About</a>
        </li>
        <li>
          <a href="#Skills" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{color: "white", fontSize: "18px"}}>Skills</a>
        </li>
        <li>
          <a href="#Project" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{color: "white", fontSize: "18px"}}>Projects</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav> */

);
}

export default Header;