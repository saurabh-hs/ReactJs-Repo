import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  // const[count, setCount] = useState(0);
  // //Usecase1: to persist variable value
  // let val = useRef(0);

  // //Usecase2: To change element from DOM directly
  // let btnRef = useRef();

  // function handleIncrement() {
  //   val.current = val.current + 1;
  //   console.log("Value of val: ", val.current);
  //   setCount(count + 1);
  // }

  // useEffect(() => {
  //   console.log("Page re-render");
  // })

  // function changeColor() {
  //   btnRef.current.style.backgroundColor = "orange";
  // }

  const [time, setTime] = useState(0);
  let timerRef = useRef(null);

  function startTimer() {
    timerRef.current = setInterval(() => {
      setTime(time => time + 1)
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function resetTimer() {
    stopTimer();
    setTime(0);
  }

  return (
    <div>

      <h1>StopWatch: {time} seconds</h1>
      <button onClick={startTimer}>
        Start
      </button>
      <br/>
      <br/>

      <button onClick={stopTimer}>
        Stop
      </button>
      <br/> <br/>

      <button onClick={resetTimer}>
        Reset
      </button>
      
      {/* <button
      ref={btnRef} 
      onClick={handleIncrement}
      >
          Increment
      </button>
      <br/>
      <br/>
      <div>
        Count: {count}
      </div>
      <br/>
      <br/>
      <button onClick={changeColor}>
          Change Color of Button
      </button> */}

    </div>
  )
}

export default App
