import {createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: 5,

};


const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers:{
    increment:(state) =>{state.value+=1},
    decrement:(state) =>{state.value-=1},
    reset: (state) => {state.value = 0}
  // reducers: {
  //   increment: (state) => {
  //     state.value += 1;
  //   },
  //   decrement: (state) => {
  //     state.value -= 1;
  //   },
  //   reset: (state, action) => {
  //     state.value = 0
  //   },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
 
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer


