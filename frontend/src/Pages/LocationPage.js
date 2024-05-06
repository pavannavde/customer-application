import React from 'react'
import locImg from '../assets/My Location.png';
import Arrow from '../assets/Arrow.png';
import { useNavigate } from 'react-router';
import Button from '../Components/Button';
import SelectEle from '../Components/SelectEle';


const LocationPage = () => {
 
  //navigate to previus page
  const navigate = useNavigate()
  
  function handleClick(){
    navigate('/address')
  }
  
  return (
    <div className='languagePage'>
    <div className='navDiv'>
      <img src={Arrow} alt='arrow' onClick={()=>navigate(-1)}/>
    </div>
    <h1>Choose location</h1>
    <div className='inputDiv'>
      <SelectEle type={'state'}/>
      <h1>Or</h1>
      <div className='locationDiv' onClick={()=>navigate('/map')}>
        <img src={locImg} alt='location'/>
        <p>Use my location</p>
      </div>
      <p>This is used to give you information more accurate to your area.</p>
      <Button handleClick={handleClick}/>
    </div>
  </div>
  )
}

export default LocationPage
