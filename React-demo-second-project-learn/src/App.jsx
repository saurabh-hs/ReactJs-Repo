import './App.css'
import UserCard from './components/UserCard'
import ratantata_bg from './assets/ratantata_bg.avif'
import apjabdulkalam from './assets/apjabdulkalam.webp'
import Lata_Mangeshkar from './assets/Lata_Mangeshkar.jpg'


function App() {

  return (
    <div className='container'>
      <UserCard name='Ratan Tata' image={ratantata_bg} desc='Ratan Naval Tata (28 December 1937 – 9 October 2024) was an Indian industrialist and philanthropist.' style={{"border-radius":"20px"}}/>
      <UserCard name='APJ Abdul Kalam' image={apjabdulkalam} desc='He was born on October 15,1931, in Tamil Nadu. He rose to become a renowned aerospace engineer at ISRO & DRDO' style={{"border-radius":"20px"}}/>
      <UserCard name='Lata Mangeshkar' image={Lata_Mangeshkar} desc='Lata Mangeshkar was an Indian playback singer and music director who was born on September 28, 1929 in Indore, India' style={{"border-radius":"20px"}}/>
    </div>
  )
}

export default App
