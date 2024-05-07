import React from "react";
import { useDispatch,useSelector } from "react-redux";

export default function TodoList(){
  const list=useSelector((state)=>state.todo.todos.todoo)
  const id=useSelector((state)=>state.todo.todos.id)
return(
 <div>
  <ol>
 
<li>{list}{id}</li>
  </ol>
 </div>
)
}