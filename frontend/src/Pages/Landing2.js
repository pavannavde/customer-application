import React, { useEffect } from 'react';
import heroImg from '../assets/heroImg.png';
import { useNavigate } from 'react-router-dom';

const Landing2 = () => {

 const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/language')
    }, 2000)
  }, []);

  return (
    <div className='landing2'>
      <div className='textDiv'>
        <h1>Getting <br/> benefits is <br/> now easy!</h1>
      </div>
      <div className='colorDiv'>
      </div>
       <img src={heroImg} alt='heroImg'/>
    </div>
  )
}

export default Landing2
