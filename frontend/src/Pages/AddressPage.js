import React, { useState } from 'react'
import Arrow from '../assets/Arrow.png';
import Button from '../Components/Button';
import SelectEle from '../Components/SelectEle';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddressPage = () => {
  const [address,setAddress] =useState({state:'MH'});
  const navigate =useNavigate();

  function handleChange(e){
    setAddress({...address,[e.target.name]:e.target.value})
  }

  async function handleClick(){
    if(address.pincode && address.district && address.state)
    {

      console.log(address)
      if(address.pincode.length === 6){
        localStorage.setItem('address',JSON.stringify(address))
        navigate('/mobileno')
      }
      else{
        toast.error("pincode must be six digit")
      }
      
    }
    else{
      // alert('Please enter all details')
      toast.error('Please enter all details')
   }
  }
  return (
    <div className='languagePage'>
    <div className='navDiv'>
      <img src={Arrow} alt='arrow' onClick={()=>navigate(-1)}/>
    </div>
    <h1>Where are you <br/>from?</h1>
    <div className='inputDiv'>
     <SelectEle type={'state'} handleChange={handleChange} />
     <SelectEle type={'district'} handleChange={handleChange} stateCode={address.state}/>
     <input type='number' placeholder='Enter your pincode' className='inputEle'  name='pincode' onChange={handleChange}/>
      <Button handleClick={handleClick}/>
    </div>
  </div>
  )
}

export default AddressPage
