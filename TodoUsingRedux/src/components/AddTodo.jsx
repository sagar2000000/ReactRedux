import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addList } from "../features/TodoSlice";
export default function AddTodo(){
  const dispatch=useDispatch();
const [todo,setTodo]=useState('')
const[id,setId]=useState(0)
return(
 <div>
<input type="text" onChange={(e)=>setTodo(e.target.value)}  />
<button onClick={()=>{
  setId((prev)=>prev+1)
  dispatch(addList(todo,id))
  setTodo("")}}>AddTodo</button>
 </div>
)
}