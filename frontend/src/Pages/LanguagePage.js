import React from 'react'
import Arrow from '../assets/Arrow.png'
import RadioInput from '../Components/RadionInput'
import Button from '../Components/Button'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const LanguagePage = () => {
   const navigate = useNavigate();

  function handleClick(){
    navigate('/login')
   }
   
  return (
    <div className='languagePage'>
      <div className='navDiv'>
       <Link to={'/'}> <img src={Arrow} alt='arrow'/> </Link>
      </div>
      <h1>Which language <br/>do you prefer?</h1>
      <div className='inputDiv'>
        <RadioInput text={'English'}/>
        <RadioInput text={'हिन्दी'} />
        <RadioInput text={'ಕನ್ನಡ'}/>
       <p>This allows you to experience the app in a language of your preference.</p>
        <Button  handleClick={handleClick}/>
      </div>
    </div>
  )
}

export default LanguagePage
