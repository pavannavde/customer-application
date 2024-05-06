import React, { useState } from 'react';
import Arrow from '../assets/Arrow.png';
import RadioInput from '../Components/RadionInput';
import Button from '../Components/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [logintype,setLoginType] =useState('');
  const navigate = useNavigate();

  //handle click to navigate to next page
  function handleClick(){
    if(logintype === 'new user'){
      navigate('/location')
    }
    else if(!logintype){
      // alert('Please select an option')
      toast.error('Please select an option')
    }
    else if(logintype ==='old user'){
      navigate('/mobileno')
    }
    else{
      navigate('/yojanaCard')
    }
  }
 
  //to set the value of radio button
  function handleChange(e){
    setLoginType(e.target.value);
    console.log(logintype)
  }

  return (
    <div className='languagePage'>
      <div className='navDiv'>
       <Link to={'/language'}><img src={Arrow} alt='arrow'/></Link> 
      </div>
      <h1>How do you want  <br/>to login?</h1>
      <div className='inputDiv'>
        <RadioInput text={'Register me as a new user'} handleChange={handleChange} value={'new user'}/>
        <RadioInput text={'Use my phone number'} handleChange={handleChange} value={'old user'} />
        <RadioInput text={'Use my Yojana card'} handleChange={handleChange} value={'card user'}/>
       <Button handleClick={handleClick}/>
      </div>
    </div>
  )
}

export default LoginPage
