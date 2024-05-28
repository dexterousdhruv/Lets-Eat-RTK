import React from 'react'
import chef from '../assets/chef.png'
const Banner = () => {
  return (
    <div className='flex flex-col gap-5 items-center bg-tangy-orange rounded-2xl max-w-[2200px] px-6 py-6 md:flex-row md:justify-between'>
      <div className='text-white font-nunito text-center min-[400px]:text-left'>
        <h2 className='capitalize font-bold text-3xl mb-6 lg:max-w-[400px] :w-full '>Get up to 20% discount on your first order</h2>
        <span className='font-medium text-lg inline-block max-w-[625px] '>Get the absolute best out of the main dishes that are prepared by the top 1% of chefs around the world. Don't hesitate to get started now!</span>
      </div>
      <div className="min-w-[220px] ">
        <img src={chef} width={250} />
      </div>
    </div>
  )
}

export default Banner