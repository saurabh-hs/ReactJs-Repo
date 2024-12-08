import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='container'>
      <h1>{props.name}</h1>
      {props.children}
    </div>
  )
}

export default Card
