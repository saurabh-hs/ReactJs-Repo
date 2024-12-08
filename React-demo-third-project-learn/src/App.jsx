import './App.css'
import Card from './components/Card'
import Button from './components/Button'
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  
  return (
      <div> 

        <Button handleClick={handleClick} text="Click me">
          <h1>{count}</h1>
        </Button>  

        {/* <Card name="Saurabh Shinde">
            <h1>Welcome to react</h1>
            <p>Props children concept learn</p>
            <p>Try to be consistent</p>
        </Card>
        <Card children="I'm a children">
           Hello world, how are you 
        </Card> */}

      </div>
  )
}

export default App
