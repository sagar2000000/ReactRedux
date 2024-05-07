import {useState} from "react";

function Counter(){
  const [count,setCount]=useState(0)
  const counterup=()=>{
    setCount(count+1)
  }
  const counterdown=()=>{
    setCount(count-1)
  }
  return(
    <>
    <button style={{display:'inline'}} onClick={counterup}>+</button>
  <button><h1 style={{display:'inline'}}>{count}</h1></button>
  <button style={{display:'inline'}} onClick={counterdown}>-</button>
    </>
  )
}

export default Counter