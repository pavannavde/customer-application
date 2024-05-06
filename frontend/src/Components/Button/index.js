import React from 'react'
import './style.css'
const Button = ({handleClick}) => {
  return (
      <button className='nextBtn' onClick={handleClick}> Next </button>
  )
}

export default Button
