import React, {  useState } from "react";
import CategoryMenu from "../components/CategoryMenu";
import FoodItems from "../components/FoodItems";
import Banner from "../components/Banner";
import Cart from "../components/Cart";


const Home = () => {

  return (
    <div className="px-5 pt-8 pb-10">
      <Banner/>
      <CategoryMenu/>
      <FoodItems />
      <Cart/>
  </div>
  );
};

export default Home;
