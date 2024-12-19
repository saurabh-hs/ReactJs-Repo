import { useCallback, useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent';
import ExpensiveComponent from './components/ExpensiveComponent';

function App() {
  // const [count, setCount] = useState(0);


  // const handleClick = useCallback(() => {
  //   setCount(count + 1);
  // }, [count]);

  return (
    <div>

      <ExpensiveComponent />

      {/* <div>
        Count: {count}
      </div>
      <br/>
      <div>
        <button onClick={handleClick}>
          Increment
        </button>
      </div>
      <br/> <br/>

      <div>
        <ChildComponent btnName="Click Me"
        handleClick={handleClick} />
      </div> */}
    </div>
  )
}

export default App
