import React, { useState } from 'react'
import Button from '../Components/Button'
import Arrow from '../assets/Arrow.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const MobilenoPage = () => {
  const[mobile,setMobile] =useState();
  const navigate = useNavigate();


  function handleChange(e){
    setMobile(e.target.value)
  }

  async function postData(){
    const address = JSON.parse(localStorage.getItem('address'))
    const userObj = {...address,mobile:mobile}
    const response = await axios.post('http://localhost:8000/register',userObj);
    console.log(response);
    if(response.data.status === 200){
       navigate('/otpS')
    }
    else if(response.data.status === 400){
      // alert(response.data.message)
      toast.error(response.data.message)
  }
  }

  function handleClick(){
    if(mobile){
      postData()
    }
    else{
      // alert('Please enter all details')
      toast.error('Please enter all details')
   }
  }
  return (
    <div className='languagePage'>
    <div className='navDiv'>
      <img src={Arrow} alt='arrow'onClick={()=> navigate(-1)}/>
    </div>
    <h1>What is your<br/>mobile number?</h1>
    <div className='inputDiv'>
     <input type='number' placeholder='Enter Mobile Number' className='inputEle' onChange={handleChange}/>
     <p>This is used to create an account in your name on the Haqdarshak app.</p>
      <Button handleClick={handleClick}/>
    </div>
  </div>
  )
}

export default MobilenoPage
