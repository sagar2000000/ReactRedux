import {configureStore} from '@reduxjs/toolkit'
import TodoReducer from '../features/TodoSlice'

export const store= configureStore({
  reducer:{
    todo:TodoReducer,
  },
});



