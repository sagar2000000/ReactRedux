
import { createSlice } from '@reduxjs/toolkit'
 const initialState={
todos:
  {
  todoo:"",
  id:0,
  }

 
}

export const TodoSlice=createSlice({
  name:'todo',
  initialState:initialState,
  reducers:{
    addList:(state,action)=>{
      state.todos.todoo=action.payload
      state.todos.id=action.payload
    },
  

  },
})

export const {addList}=TodoSlice.actions

export  default TodoSlice.reducer