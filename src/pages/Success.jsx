import React, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners'
const Success = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  
  return (
    <div className=' mt-60 flex flex-col justify-center items-center font-poppins text-gray-800 text-center'>
      {loading ? (
          <PropagateLoader color="#f97316" />
        ) :
        (
          <div>
            <h2 className='font-semibold text-3xl mb-4 '>Order Successful!</h2>
            <p>Your order has been successfully placed ✅ </p>
          </div>
        )
      }
    </div>
  )
}

export default Success