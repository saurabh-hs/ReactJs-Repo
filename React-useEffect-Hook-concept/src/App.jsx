import { useEffect } from 'react'
import './App.css'
import { useState, useRef } from 'react'
import LoggerComponent from './components/LoggerComponent'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'
import ResizeComponent from './components/ResizeComponent'
import Welcome from './components/Welcome'


function App() {
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);
  //first -> side effect function
  //second -> clean-up function
  //third -> comma separated dependency list

  //variation: 1
  //runs on every render
  //Execute before render
  // useEffect(() => {
  //   alert("I will run on each render")
  // })

  //Variation: 2
  //Runs on only first render
  // useEffect(() => {
  //   alert("I will run on only first render");
  // }, [])

  // variation: 3
  // useEffect(() => {
  //   alert("I will run every time when count is updated");
  // }, [count])

  // variation: 4
  // useEffect(() => {
  //   alert("I will run every time when count/total is updated");
  // }, [count, total])

  // variation: 5 
  //added a cleanup function
  // useEffect(() => {
  //   alert("Count is updated")
  //   return () => {
  //     alert("count is unmounted form UI");
  //   }
  // }, [count])


  // function handleClick() {
  //   setCount(count + 1);
  // }

  // function handleTotal() {
  //   setTotal(total + 1);
  // }
  const [show, setShow] = useState(false);

  return (
   <div>
  
    <button onClick={() => setShow(!show)}>
      {show ? 'Remove' : 'Show'}
    </button>
    <hr />
      {show && <Welcome />}

    {/* <LoggerComponent /> */}
    {/* <TimerComponent /> */}
    {/* <DataFetcher /> */}
    {/* <ResizeComponent /> */}

    {/* <button onClick={handleClick}>
      Update Count
    </button>
    <br/>
    Count is: {count}
    <br/>
    <br/>
    <br/>
    <button onClick={handleTotal}>
      Update Total
    </button>
    <br/>
    Total is: {total} */}
   </div>
  )
}

export default App
