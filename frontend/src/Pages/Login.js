import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Arrow from '../assets/Arrow.png';
import Button from '../Components/Button';
import { toast } from 'react-toastify';

const Login = () => {

    const[mobile,setMobile] = useState();
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    function handleChange(e){
        setMobile(e.target.value);
    }
     async function handleClick(){ 
        try{
            const res = await axios.post('https://customer-application-api.vercel.app/login',{mobile});
            console.log(res.data);
            if(res.data.status === 200){
                navigate('/submission1')
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

export default Login
