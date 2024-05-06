import React from 'react'
import './style.css'
const RadioInput= ({text,handleChange,value}) => {
  return (
    <div className='radioInput'>
      <input type='radio'  name='language' onClick={handleChange} value={value}/>
      <p>{text}</p>
    </div>
  )
}

export default RadioInput;
