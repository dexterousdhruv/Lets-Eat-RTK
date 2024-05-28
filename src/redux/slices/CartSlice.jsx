import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart:  []
}
// JSON.parse(localStorage.getItem('cart')) ??
const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cart.find((item) => item.id === action.payload.id)

      if (existingItem) {
        state.cart = state.cart.map((item) => (item.id === action.payload.id) ? {...item, qty: item.qty + 1} : item )
      }
      else 
        state.cart.push(action.payload)

      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id)
    },
    incrementQty: (state, action) => {
      state.cart = state.cart.map((item) => item.id === action.payload.id && item.qty < 10 ? { ...item, qty: item.qty + 1 } : item)
    },
    decrementQty: (state, action) => {
      state.cart = state.cart.map((item) => item.id === action.payload.id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item)

    },
    
  }
})

export default CartSlice.reducer
export const { addToCart, removeFromCart, incrementQty, decrementQty } = CartSlice.actions