import { useState } from 'react'
import './App.css'
import Panel from './components/Panel'
import Card from './components/Card'
import SearchBar from './components/SearchBar';
import List from './components/List';
import filterItems from './components/FilterItems';
import { foods } from './components/FilterItems';

function App() {
  //create state
  //manage state  
  //change state
  //sync all state in child
  // const[name, setName] = useState('');
  // const [activeIndex, setActiveIndex] = useState(0);
  const [query, setQuery] = useState('');
  const results = filterItems(foods, query);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div className='container'>

      <SearchBar query={query} onChange={handleChange} />
      <hr />
      <List items={results} />

      {/* <h2 className='container-title'>Lifting state up</h2>
      <Panel title="About" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolores numquam saepe accusamus et veritatis at aliquid provident corporis nihil?
      </Panel>
      <Panel title="Information" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, laborum?
      </Panel> */}

      {/* <Card title="Card1" name={name} setName={setName} />
      <Card title="Card2" name={name} setName={setName} />
      <p>Name state parent: {name}</p>  */}
    </div>  
  )
}

export default App
