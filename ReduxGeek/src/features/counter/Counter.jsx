import { useSelector,useDispatch} from "react-redux"
import { decrement,increment,incrementByAmount } from "./counterSlice"


function Counter(){
 const count=useSelector((state)=>state.counter.count)
 const dispatch=useDispatch()

  const counterup=()=>{
    dispatch(increment())
  }
  const counterdown=()=>{
 dispatch(decrement())
  }

  function incrementAmount(){
    dispatch(incrementByAmount(10))
  }
 
  return(
    <>
    <button style={{display:'inline'}} onClick={counterup}>+</button>
  <button><h1 style={{display:'inline'}}>{count}</h1></button>
  <button style={{display:'inline'}} onClick={counterdown}>-</button>
  <button style={{display:'inline'}} onClick={incrementAmount}>Increment by 10</button>

    </>
  )
}

export default Counter