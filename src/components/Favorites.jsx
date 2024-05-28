import React, { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

const Favorites = () => {
  const favoriteItems = useSelector((state) => state.favoriteList.favoriteList)
 
  return (
    <>
      <Toaster position="top-center" reverseOrder={false}/>
      
      <div className="h-full px-10 pt-5">
        <div className='flex justify-between items-center lcleading-relaxed font-poppins text-4xl font-semibold text-gray-800  mb-8' >
          <h1 className="  ">
            Favorites
          </h1>
          <span className="block 
          ">  </span>
        </div>
        <div className="flex flex-wrap gap-10 justify-start">
          {favoriteItems.map((item) => (
            <FoodCard
              item={item}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Favorites;
