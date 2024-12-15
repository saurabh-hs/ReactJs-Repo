import { createContext, useState } from 'react'
import './App.css'
import ChildC from './components/ChildC';
import ChildA from './components/ChildA';

//step1: create Context
const UserContext = createContext();
//step2: wrap all the child inside a provider
//step3: pass value
//step4: access value under Consumer

const ThemeContext = createContext();

function App() {
  const [user, setUser] = useState({name:"Saurabh Shinde"});
  const [theme, setTheme] = useState('light');

  return (
    <div>
        <UserContext.Provider value={user}>
        <ThemeContext.Provider value={{theme, setTheme}}>
        <div id='container' style={{backgroundColor:theme === 'light' ? "rgb(246, 238, 238)":"black"}}>
          <ChildA />
        </div>
      </ThemeContext.Provider>
        </UserContext.Provider>

      {/* <UserContext.Provider value={user}>
          <ChildA />
      </UserContext.Provider> */}
    </div>
  )
}

export default App
export {UserContext}
export {ThemeContext}