import React, { useEffect } from 'react';
import { useState } from 'react';
import './style.css';

const SelectEle = ({type,handleChange,stateCode}) => {
const [state, setState] = useState([]);
var headers = new Headers();
headers.append("X-CSCAPI-KEY", "ZEIyUk1rUmtQQlNzMGVWSFoxTkNLZmoyblN1QXJ5Y1RNTlk3ZVlYMw==");

var requestOptions = {
method: 'GET',
headers: headers,
redirect: 'follow'
};
//fetch state data
function fetchStateData() {
  fetch("https://api.countrystatecity.in/v1/countries/IN/states", requestOptions)
  .then(response => response.json())
  .then(result =>setState(result))
  .catch(error => console.log('Error--->', error));
}
//fetch district data
function fetchDistrictData() {
  fetch(`https://api.countrystatecity.in/v1/countries/IN/states/${stateCode}/cities`, requestOptions)
  .then(response => response.json())
  .then(result =>setState(result))
  .catch(error => console.log('error', error));
}

useEffect(() => {
  if(type === 'state'){
    fetchStateData();
  }
  else{
   fetchDistrictData();
   }
}, [])


  return (
    <div className='inputEle'>
      <select name={type} onChange={handleChange}>
        <option>Select {type}</option>
        {
          state.map((item, index) => {
            return <option key={index} value={item.ios2}>{item.name}</option>
          })
        }
      </select>
    </div>
  )
}

export default SelectEle
