import React, { useState } from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';


const FoodItems = () => {
  const category = useSelector((state) => state.category.category)
  const search = useSelector((state) => state.search.search)

  const toastHandler = (name  ) => toast.success(`Added ${name}`)


  return (
    <>  
      <Toaster position="top-center" reverseOrder={false}/>
      <div className='flex flex-wrap gap-10 justify-center md:justify-start mt-16'>
        {
          FoodData.filter((food) => {
            if (category === 'All')
              return food.name.toLowerCase().includes(search.toLowerCase())
            else {
              return category === food.category && food.name.toLowerCase().includes(search.toLowerCase())
            }
          }).map(item => (
            <FoodCard item={item} key={item.id} iconActive={false} toastHandler={toastHandler} /> 
           ))
        }
      </div>
    </>
  )
}

export default FoodItems