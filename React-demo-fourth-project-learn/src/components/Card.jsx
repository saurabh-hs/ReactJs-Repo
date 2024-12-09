import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='container'>
      <input type="text" onChange={(e) => props.setName(e.target.value)} />
      <p>Name state value in {props.title}: {props.name}</p>
    </div>
  )
}

export default Card