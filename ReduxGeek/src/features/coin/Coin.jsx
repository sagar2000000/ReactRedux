import React from "react"
import { useSelector } from "react-redux"

function Coin(){
const count=useSelector((state)=>state.counter.count)
const clr=useSelector((state)=>state.theme.color)
  return(
    <>
      <button><h1 style={{color:clr}}>{count}</h1></button>
    </>
  )
}


export default Coin