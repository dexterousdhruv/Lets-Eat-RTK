import React, { useEffect, useState } from 'react'
import star5 from '../assets/rating-50.png'
import star4 from '../assets/rating-35.png'
import { Plus } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart} from '../redux/slices/CartSlice'
import Heart from '../assets/Heart.jsx'
import { addToFavorite, removeFromFavorite } from "../redux/slices/FavoriteSlice";
import toast from "react-hot-toast";

const FoodCard = ({ item, toastHandler }) => {
  const { id, img, name, price, rating } = item
  
  const { favoriteList } = useSelector(state => state.favoriteList)
  const [isFavorite, setIsFavorite] = useState(() => {
    const isFavoriteItem = favoriteList.find(item => item.id === id)    
    return isFavoriteItem
  })
  const dispatch = useDispatch()
  const addItem =  () => { dispatch(addToCart({ ...item, qty: 1 })); toastHandler(name)}
  
  const handleFavorites = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(item));
      setIsFavorite((prevState) => !prevState);
      toast('Removed from Favorites', {icon: '👋'})

    } else {
      dispatch(addToFavorite(item));
      setIsFavorite((prevState) => !prevState);
      toast.success('Added to Favorites')
    }
  };
 


  return (
    <div className='bg-white rounded-2xl relative aspect-square w-[280px]  hover:scale-110 transition-all duration-350 ease-in'>
      {
        rating > 4.2 ? ( <span className='absolute bg-[#FF4D4D] text-sm font-poppins font-medium
        text-white p-[5px] top-5 leading-3 rounded-r-md '>20% Off</span>) : null
      }
      <div className=" absolute top-5 right-5">
        {isFavorite ?
          (<Heart color={'#ff4644'} handleFavorites={handleFavorites} />) : (<Heart color={'#f1f5f9'} handleFavorites={handleFavorites} />)
        }
      </div>
      <div className="pt-14 flex flex-col items-center">
        <div className="">
          <img src={img} alt="" className=' h-[135px] w-[220px] cursor-grab overflow-hidden'  />
        </div>
        <div className="flex items-center justify-between my-4 px-8  w-full ">
          <div className='flex flex-col gap-1.5 leading-4 font-nunito font-bold  text-gray-700 tracking-tight'>
            <img src={rating > 4.5 ? star5 : star4} alt="" width={75} />
            <span className='text-wrap'>{name}</span>
            <span>₹{price}</span>
          </div>
          <div className='aspect-square h-9 bg-tangy-orange text-white grid place-content-center rounded-md'>
            <Plus onClick={addItem}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodCard