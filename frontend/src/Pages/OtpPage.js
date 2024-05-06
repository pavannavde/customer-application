import React from 'react'
import Arrow from '../assets/Arrow.png';
import Button from '../Components/Button';
import { useNavigate } from 'react-router-dom';

const OtpPage = () => {
  const navigate = useNavigate();
  return (
    <div className='languagePage'>
      <div className='navDiv'>
        <img src={Arrow} alt='arrow'onClick={()=>navigate(-1)}/>
      </div>
      <h1>What is OTP ?</h1>
      <div className='inputDiv'>
       <div className='inDiv'>
        <input type='number' className='inputEle'/>
        <input type='number'className='inputEle'/>
        <input type='number'className='inputEle'/>
        <input type='number'className='inputEle'/>
       </div>
       <p style={{color:'rgba(79, 40, 94, 1)'}}>Did not receive OTP ?Resend</p>
       <Button/>
      </div>
    </div>
  )
}

export default OtpPage
