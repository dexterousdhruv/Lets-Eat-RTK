import React from "react";
import person from "../assets/person.jpg";
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import { useDispatch } from 'react-redux'
import {removeFromCart, incrementQty, decrementQty } from "../redux/slices/CartSlice";
import toast from "react-hot-toast";


const ItemCard = ({item, totalQty}) => {
  const { id, img, name, price, qty } = item
  const dispatch = useDispatch()
  const removeItem = () => {
    dispatch(removeFromCart(item))
    toast(`${name} Removed!`, { icon: "👋"})
  }
 
  return (
    <div className="flex relative items-start gap-x-4 p-2.5 rounded-md shadow-md text-gray-700 font-nunito mb-3">
      <img src={img} alt="item" width={50} />

      <div className="w-full text-[15px]">

        <div className="flex justify-between items-start">
          <h2 className="leading-4 mb-2 ">{name}</h2>
          <Trash2 size={17} className="active:scale-110 duration-100" onClick={removeItem} />
        </div>

        <div className="flex justify-between items-center w-full  h-[21px]">
          <span className="leading-3 inline-block ">₹{price} </span>
          <div className=" flex items-center gap-x-1 text-[12px] text-gray-700 ">

            <MinusIcon className="border-2 w-[16px] h-[16px] p-[2px] border-gray-700 rounded-[5px] hover:bg-green-500 hover:text-white hover:border-green-500" onClick={() => (totalQty > 1) ? dispatch(decrementQty(item)) : alert('Minimum cart limit is 1')} />
            
            <span>{qty} </span>

            <PlusIcon className="border-2 w-[16px] h-[16px] p-[2px] border-gray-700 rounded-[5px] hover:bg-green-500 hover:text-white hover:border-green-500" onClick={() => (totalQty < 6) ? dispatch(incrementQty(item)) : alert('Maximum cart limit is 6')}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
