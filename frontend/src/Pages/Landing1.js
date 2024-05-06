import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing1 = () => {

  const navigate = useNavigate();

   //navigate to landing 
  useEffect(() => {
    setTimeout(() => {
      navigate('/landing2')
    }, 2000)
  }, [])

  return (
    <div className='landing1'>
      <div>
        <h1>हक्कदर्शक</h1>
        <h2>Haqdarshak</h2>
      </div>
    </div>
  )
}

export default Landing1
