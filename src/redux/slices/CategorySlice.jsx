import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: 'All',
}

const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload
    }
  }
})

export default CategorySlice.reducer
export const { setCategory } = CategorySlice.actions