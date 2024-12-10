import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';
import ColorSwitch from './components/ColorSwitch';

function App() {
  
  // function handleClick() {
  //   alert("You have clicked button");
  // }

  // function handleMouseOver() {
  //   alert("Mouse over on paragraph content");
  // }

  // function handleInputChange(e) {
  //   console.log("Content till now: ", e.target.value);
  // }

  // function handleSubmit(e) {
  //     e.preventDefault();
  //     alert("You want to submit form");
  // }

  const [clicks, setClicks] = useState(0);

  function handleClickOutside() {
    setClicks(c => c + 1);
  }

  function getRandomLightColor() {
    let r = 170 + Math.round(50 * Math.random());
    let g = 150 + Math.round(50 * Math.random());
    let b = 190 + Math.round(50 * Math.random());

    return `rgb(${r}, ${g}, ${b})`;
  }

  function handleChangeColor() {
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomLightColor();
  }

  return(
    <div style={{width: '100%', height: '100%'}} onClick={handleClickOutside}>
     <ColorSwitch onChangeColor={handleChangeColor} />
     <br />
     <br />
    
     <h2>Clicks on the page: {clicks}</h2>

      {/* <button onClick={() => alert("Button clicked")}>
        Click me
      </button> */}

      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInputChange} />
        <button type='submit'>Submit</button>
      </form> */}

      {/* <p onMouseOver={handleMouseOver}>I am a para tag</p>

      <button onClick={handleClick}>
        Click Here
      </button> */}
    </div>
  )

  // if(!isLoggedIn) {
  //   return (
  //     <LoginBtn />
  //   )
  // }

  // return (
  //   <div>
  //     <h1>Welcome to React</h1>
  //     <div>
  //       {isLoggedIn && <LogoutBtn />}
  //     </div>
  //   </div>
  // )

  // return (
  //   <div>
  //     {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
  //   </div>
  // )

  // if(isLoggedIn) {
  //   return (
  //     <LogoutBtn />
  //   )
  // }else {
  //   return (
  //     <LoginBtn />
  //   )
  // }
 
}

export default App
