import { useState } from "react";
import "../style.css";

const Counter = () => {
  const [count,setCount] = useState(0);

  const increaseCount = () => {
    setCount((prevCount) => prevCount+1)
  };

  const decreaseCount = () => {
    setCount((prevCount) => prevCount-1)
  };
  return (
    <div className="container">
      <div>
        <h1 className="number">{count}</h1>
      </div>
      <div className="btns-container">
        <button onClick={increaseCount} className="increment">+</button>
        <button onClick={decreaseCount} className="increment">-</button>
      </div>
    </div>
  )
}

export default Counter;