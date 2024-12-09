import React from 'react'
import './Panel.css'

const Panel = ({title, children, isActive, onShow}) => {
  return (
    <section className='panel'>
        <h3 className='panel-title'>{title}</h3>
        {isActive ? 
        (<p className='panel-text'>{children}</p>) : (<button className='panel-btn' onClick={onShow}>
            Show
        </button>
    )}
    </section>
  )
}

export default Panel