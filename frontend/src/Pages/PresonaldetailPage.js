import React, { useState } from 'react'
import Arrow from '../assets/Arrow.png';
import Button from '../Components/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const PresonaldetailPage = () => {
  const [personalDetail ,setPersonalDetail] =useState({})
  const navigate = useNavigate();

  async function handleClick(){
    console.log(personalDetail)
    try{
      const res = await axios.post('https://customer-application-api.vercel.app/personalDetail',personalDetail)
      console.log(res)
      if(res.data.status === 200){
        navigate('/submission1')
        toast.success('Successfully Login')
      }
      else if(res.data.status === 400){
        // alert(res.data.message)
        toast.error(res.data.message)
      }
    }
    catch(err){
      console.log(err)
    }
    
  }
  function handleChange(e){
    setPersonalDetail({...personalDetail,[e.target.name]:e.target.value})
  }
  return (
    <div className='languagePage'>
    <div className='navDiv'>
      <img src={Arrow} alt='arrow' onClick={()=>navigate(-1)}/>
    </div>
    <h1>Personal Details</h1>
    <div className='inputDiv'>
     <div className='genderDiv'>
       <p>Name</p>
       <input type='text' placeholder='Enter your full name' className='inputEle' name='fullname' onChange={handleChange}/>
     </div>
     <div className='genderDiv'>
       <p>Gender</p>
       <div>
        <div>
         <input type='radio' name='gender' value='male' onChange={handleChange}/>
         <p>Male</p>
        </div>
        <div>
         <input type='radio' name='gender' value='female' onChange={handleChange}/>
         <p>Female</p>
        </div>
        <div>
         <input type='radio' name='gender' value='other' onChange={handleChange}/>
         <p>Other</p>
        </div>
       </div> 
     </div>
     <div className='ageDiv'>
       <p>DOB/Age</p>
       <div>
       <input type='date'  className='inputEle' name='ageOrdob' onChange={handleChange}/>
        <p>Or</p>
        <input type='number' placeholder='Age'className='inputEle'name='ageOrdob' onChange={handleChange}/>
       </div>
     </div>
     <p>This information helps us suggest schemes that are right for you.</p>
     <Button handleClick={handleClick}/>
     <p style={{margin:'0'}}>By creating an account, I agree to Haqdarshak’s Terms of Service & Privacy Policy</p>
    </div>
  </div>
  )
}

export default PresonaldetailPage
