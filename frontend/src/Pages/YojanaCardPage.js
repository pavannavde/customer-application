import React from 'react'
import torch from '../assets/icons.png'
import Arrow from '../assets/Arrow.png'
import QR from '../assets/Frame 4869668.png'
import { useNavigate } from 'react-router'

const YojanaCardPage = () => {

 const navigate = useNavigate();

  return (
    <div className='yojana'>
      <div className="topDiv">
        <div className='imgDiv'>
            <img src={Arrow} alt='arrow' onClick={()=>navigate(-1)}/>
            <img src={torch} alt='torchImg'/>
        </div>
        <div className='QrDiv'>
           <p>Scan QR from Yojana <br/> Card to login</p>
           <img src={QR} alt='QRCode'/>
           <button className='btn1'>Upload Image from Gallery</button>
        </div>
      </div>
     <div className='bottomDiv'>
        <p>Or</p>
        <button className='btn2' onClick={()=>navigate('/Login1')}>Use Phone Number</button>
     </div>
      </div>
  )
}

export default YojanaCardPage
