import {createSlice} from '@reduxjs/toolkit'

const initialState={
  color:'',
}

export const themeSlice=createSlice({
  name:'theme',
  initialState:initialState,
  reducers:{
    changeTextColor:(state,action)=>{
      state.color=action.payload
    },
  },
})
export const{changeTextColor}=themeSlice.actions
export default themeSlice.reducer