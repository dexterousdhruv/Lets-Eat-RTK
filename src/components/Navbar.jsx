import React from "react";
import searchIcon from "../assets/search.png";
import person from "../assets/person.jpg";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
const Navbar = () => {
  const greet = () => {
    const hour = String(new Date().getHours())    
    if ((hour >= "00" && hour < "12")) { return 'Morning' }
    if( (hour >= "12" && hour < "16")) { return 'Afternoon' }
    if( (hour >= "17" && hour < "23" )) { return 'Evening' }
  }

  const dispatch = useDispatch()

  return (
    <nav className=" bg-white flex flex-col gap-y-3 min-[700px]:flex-row justify-between items-center py-4 px-5  shadow-slate-300 shadow-[0px_1px_3px] ">
      <div className=" max-[700px]:text-center text-nowrap leading-3">
        <h3 className="text-[12px] text-[#7a7a7a] font-nunito font-medium ">{greet()} Hemmy</h3>
        <h1 className="text-lg font-bold text-gray-600">Welcome Back!</h1>
      </div>

      <div className="flex flex-col gap min-[500px]:flex-row gap-8 justify-between items-center min-[700px]:ml-5 max-[700px]:w-full">
        <div className="flex items-center border border-gray-100 rounded-lg bg-light-fade px-4 w-full">
          <div className="w-4">
            <img src={searchIcon} alt="" className="w-full opacity-45" />
          </div>
          <input
            type="search"
            name="search"
            placeholder="Search here"
            autoComplete="off"
            className="p-2.5 text-[16px] font-medium bg-transparent rounded-lg outline-none w-full sm:w-[30vw] "
            onChange={(e) => dispatch(setSearch(e.target.value))}
          />
        </div>

        <div className="flex items-center gap-x-7 justify-between max-[500px]:w-full ">
          <div className="text-[17px] flex gap-x-6 text-slate-gray">
            <i className="fa-solid fa-bell"></i>
            <i className="fa-solid fa-gear "></i>
          </div>
          <div className=" w-11 rounded-[50%] overflow-hidden">
            <img src={person} alt=""   className="w-full"/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
