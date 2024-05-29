import React, { createContext, useContext, useState } from "react";
import person from "../assets/person.jpg";
import logo from '../assets/logoipsum.svg'
import { ChevronFirst, ChevronLast } from "lucide-react";

const SidebarContext = createContext()

const Sidebar = ({ children, expanded, setExpanded }) => {

 

  return (
    <aside className="h-screen fixed z-10" >
      <nav  className=" h-full inline-flex flex-col bg-white border-r shadow-sm ">
        <div  className={`p-2 px-4 flex  items-center ${expanded ? 'justify-between' : "justify-center"}`} >
          <div className={`flex my-4 ${expanded ? '' : "w-0"}`}>
            <span className={`font-nunito text-2xl text-tangy-orange mr-3 font-[700] overflow-hidden transition-all ${expanded ? '' : "w-0 "}`}>LetsMeal</span>
            <img
            src={logo}
            alt="logo"
            className={`overflow-hidden transition-all ${expanded ? "w-10" : "w-0"}`}
          />
          </div>
          <button
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            onClick={() =>  setExpanded((curr) => !curr)}
          >
            {expanded ? <ChevronFirst/> : <ChevronLast/>}
          </button>
        </div>
        
        <hr className="w-[90%] bg-gray-500  mx-[5%]" />

        <SidebarContext.Provider value={{expanded}}>
          <ul className="flex-1 px-4 space-y-3 ">{children}</ul>
        </SidebarContext.Provider>

      </nav>
    </aside>
  );
};

export default Sidebar;

export const SidebarItem = ({ icon, text, active, alert }) => {
  const { expanded } = useContext(SidebarContext)
  return (
    <li
      className={`relative group flex items-center h-[52px] py-3 px-4 my-1 font-medium rounded-md cursor-pointer ${
        active ? "bg-tangy-orange text-white" : "hover:bg-tangy-orange hover:text-white text-gray-700"
      } ${expanded ? "" : "aspect-square" }`}
    >
      {icon}
      <span className={`font-nunito text-md  overflow-hidden transition-all ${expanded ? 'w-52 ml-3' : 'w-0'} `}>{text}</span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-tangy-orange ${expanded ? "" : "top-2" }`}
        ></div>
      )}
      {!expanded && (
        <div className={`absolute text-[12px] left-full rounded-md px-3 py-1 ml-6 bg-orange-100 text-tangy-orange invisible opacity-100 -translate-x-3 transition-all duration-250 group-hover:visible group-hover:opacity-100  group-hover:translate-x-3`}>{text}</div>)
      }
    </li>
  );
};
