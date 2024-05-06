import React, { useEffect, useState } from 'react'
import locImg from '../assets/My Location.png';
import Button from '../Components/Button';
import { useNavigate } from 'react-router-dom';

const MapPage = () => {
 const[ipAddress,setIpAddress] =useState('');
 const[ipInfo,setIpInfo] =useState({});
 const[location, setLocation]=useState([]);
 const navigate = useNavigate();

 function handleClick(){
    navigate('/address');
 }
// function to get IP address
async function getIPAddress(){

    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    console.log(data)
    setIpAddress(data.ip);
}
// fetching IPAddress info 
async function fetchIpinfo(){
    try{
     const response = await fetch(`https://ipinfo.io/${ipAddress}/geo?token=580370a92cf7e5`)
     const data = await response.json();
     console.log(data)
     setIpInfo(data);
     setLocation(data.loc.split(','))
    }
    catch(error){
      console.log(`An error occured : ${error}`)
    }    
 }
 useEffect(()=>{
    getIPAddress();
    fetchIpinfo();
  },[])

  return (
    <div className='mapPage'>
      <iframe src={`https://maps.google.com/maps?q=${location[0]},${location[1]}&z=15&output=embed`} style={{width:'100%' ,height:'90vh'}} frameborder="0" ></iframe>
      <div className='mapInfo'>
        <p>Yor are here right now</p>
        <div>
            <img src={locImg} alt='imLoc' width={'30px'} height={'30px'}/>
            <p>{ipInfo.region}, {ipInfo.city}, {ipInfo.postal}</p>
        </div>
        <Button handleClick={handleClick}/>
      </div>
    </div>
  )
}

export default MapPage
