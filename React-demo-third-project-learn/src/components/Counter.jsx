import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const[count, setCount] = useState(0);
  return (
    <div>
        <div className="card-container">
           <p className='card-desc'>You clicked {count} times</p>
           <button className='counter-btn' onClick={() => {setCount(count + 1)}}>Click me</button>
        </div>
    </div>
  )
}

export default Counter
