import { createSlice } from "@reduxjs/toolkit";

const FavoriteSlice = createSlice({
  name: 'favoriteList',
  initialState: {
    favoriteList: []
  },
  reducers: {
    addToFavorite: (state,action) => {
      const existingItem = state.favoriteList.find((item) => item.id === action.payload.id)
      if (!existingItem) {
        state.favoriteList.push(action.payload)
      }
     
      
    },
    removeFromFavorite: (state, action) => {
      state.favoriteList = state.favoriteList.filter((item) => item.id !== action.payload.id)
   
    }
  }
})

export default FavoriteSlice.reducer
export const { addToFavorite, removeFromFavorite } = FavoriteSlice.actions