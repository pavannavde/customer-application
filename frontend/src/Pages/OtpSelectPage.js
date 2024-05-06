import React, { useState } from 'react'
import RadioInput from '../Components/RadionInput'
import Button from '../Components/Button'
import Arrow from '../assets/Arrow.png'
import { useNavigate } from 'react-router'
const OtpSelectPage = () => {

   const[isOtp,setIsOtp] =useState();
   const navigate = useNavigate()
  function handleChange(e){
     setIsOtp(e.target.value)
  }
 function handleClick(){
  if(isOtp==='Yes'){
    navigate('/personaldetail')
  }
  else{
    navigate('/otp')
  }
 }
  return (
    <div className='languagePage'>
    <div className='navDiv'>
      <img src={Arrow} alt='arrow' onClick={()=>navigate(-1)}/>
    </div>
    <h1>Do you want to <br/>proceed without<br/>OTP verification?</h1>
    <div className='inputDiv'>
      <RadioInput text={'Yes'} handleChange={handleChange} value={'Yes'}/>
      <RadioInput text={'No,want to complete OTP verification'}handleChange={handleChange} value={'No'} />
     <p>Proceed without OTP if you live in an area with low network connectivity.</p>
     <Button handleClick={handleClick}/>
    </div>
  </div>
  )
}

export default OtpSelectPage
