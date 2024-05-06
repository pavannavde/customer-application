import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'

const SubmissionPage1 = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    setTimeout(()=>{
      navigate('/submission2')
    },3000)
  },[])
  
  return (
    <div className='submissionPage'>
    <div>
      <p>Welcome to</p>
      <h1>हक्कदर्शक</h1>
      <h2>Haqdarshak</h2>
      <p className='msg'>Your profile has been created <br/>successfully !</p>
    </div>
  </div>
  )
}

export default SubmissionPage1;
