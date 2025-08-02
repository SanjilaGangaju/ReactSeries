import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    counter: 10,
  },
  reducers: {
    increment: state => {
      state.counter+=1
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
      state.counter +=1
    },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement} = counterSlice.actions

export default counterSlice.reducer