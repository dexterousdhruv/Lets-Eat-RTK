import React, { useEffect } from 'react'
import {useState} from 'react'
import FoodData from '../data/FoodData'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../redux/slices/CategorySlice'

const CategoryMenu = () => {
  const [categories, setCategories] = useState([])

  const listUniqueCategories = () => {
    const uniqueCategories = [...new  Set(FoodData.map((food) => food.category))]
    setCategories(uniqueCategories)
  }
  
  useEffect(() => {
    listUniqueCategories()
  }, [])

  const dispatch = useDispatch()
  const selectedCategory = useSelector((state) => state.category.category)


  return (
    <div >
      <h3 className='font-bold font-poppins text-gray-700 text-2xl mt-7'> Find the best deals </h3>
      <div className='my-5 flex gap-4 overflow-scroll scroll-smooth sm:overflow-hidden '>
        <button
          className={`text-[17px] tracking-w px-3 py-2 rounded-md font-bold ${selectedCategory === 'All' ? 'bg-white text-tangy-orange shadow-sm' : 'bg-tangy-orange text-white hover:bg-orange-400'}`}
          onClick={() => dispatch(setCategory('All'))}
        >
          All
        </button>

        {categories.map((category, i) => (
          <button
            key={i}
            className={`text-[17px] tracking-w px-3 py-2 rounded-md font-bold ${selectedCategory === category ? 'bg-white text-tangy-orange  shadow-sm ' : 'bg-tangy-orange text-white hover:bg-orange-400'}`}
            onClick={() => dispatch(setCategory(category))}
          >
            {category}
          </button>
        ))}
      </div>
    
    </div>
  )
}

export default CategoryMenu