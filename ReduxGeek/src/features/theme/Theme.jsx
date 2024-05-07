
import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeTextColor } from "./themeSlice"
const Theme=()=>{
  const[color,setColor]=useState('white')
  const dispatch=useDispatch()

  return(
    <div>
      <input type="text"  onChange={(e)=>setColor(e.target.value)}/>
      <button onClick={()=>dispatch(changeTextColor(color))} >click to change color</button>
      <h1 style={{color:color}}>{color}</h1>
    </div>
  )
}
export default Theme