import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, addAmount, reset } from './counterSlice'
import { useState } from "react";

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const amount = useSelector((state) => state.counter.amount)
    const dispatch = useDispatch()
    const [input, setInput] = useState(0);

    const addValue = Number(input) || 0;
    
    const resetAll = () => {
      setInput(0)
      dispatch(reset())
    }
    
    return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <div>
        <button onClick={() => dispatch(addAmount(addValue))}>Add Amount</button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  )
}

export default Counter

