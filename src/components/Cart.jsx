import React, { useEffect } from "react";
import { useState } from "react";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector(state => state.order.cart)  
  const [activeCart, setActiveCart] = useState(false)

  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0)
  const totalPrice = cartItems.reduce((totalPrice, item) => totalPrice + item.qty * item.price, 0)
  
  const navigate = useNavigate() 


  return (
    <>
      <div className={`fixed flex flex-col justify-between z-10 right-0 top-0 w-full lg:w-[22vw] h-full bg-white p-4 transition-all duration-500 ${activeCart ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="">
          <div className="flex justify-between items-center my-3">
            <span className="text-xl font-semibold font-nunito text-gray-700 ">
              Order Menu
            </span>
            <i className="fa-solid fa-xmark border-2 px-1 py-0.5 leading-4 border-gray-600 text-gray-600  text-[14px] rounded-md  hover:text-red-500 hover:border-red-500 cursor-pointer" onClick={() => setActiveCart(false)} ></i>
          </div>

          {cartItems.length > 0  ? (cartItems.map((item) => (
            <ItemCard item={item} key={item.id} totalQty={totalQty} />
          ))) : (<div className="text-center font-semibold text-xl text-gray-700 "> Your cart is empty</div>) }
        </div>
          
        <div className=" bottom-0 font-nunito  ">
          <hr className=" h-0.5 bg-gray-100 mb-5 " />

          <div className=" w-full flex justify-between items-center mb-5 leading-4">
            <h3 className="text-sm ">Items  </h3>
            <span className="block">{totalQty}</span>
          </div>

          <div className=" w-full flex justify-between items-center mb-5 leading-4">
            <h3 className=" text-lg leading-4">Total  </h3>
            <span className="block font-semibold"><span className="text-tangy-orange">₹</span>{totalPrice}</span>
          </div>

          <button onClick={() => navigate('/success')} className="w-full bg-tangy-orange hover:bg-orange-400 text-white text-sm rounded-md py-2.5">
            Checkout
          </button>
        </div>
      </div>

      <i
        className={`fa-solid fa-shopping-cart rounded-full bg-white shadow-md text-[20px] px-3 py-3.5 fixed bottom-10 right-10 ${totalQty > 0 && 'animate-bounce delay-150 transition-all'} `}
        onClick={() => setActiveCart(true)}
      ></i>


    </>
  );
};

export default Cart;
