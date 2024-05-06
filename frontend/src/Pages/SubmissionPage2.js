import React from 'react'

const SubmissionPage2 = () => {
  return (
    <div className='submissionPage'>
    <div>
        <div className='logo'>
          <h1>हक्कदर्शक</h1>
          <h2>Haqdarshak</h2>
        </div>
      <div className='checkDiv'>
        <div>
            <input type='checkbox' className='checkBox' />
            <p>Find the benefits that are right for you or your business</p>
        </div>
        <div>
            <input type='checkbox' className='checkBox'/>
            <p>Learn everything you need to apply </p>
        </div>
        <div>
            <input type='checkbox' className='checkBox'/>
            <p>Save schemes and track your bookings </p>
        </div>
      </div>
      <button className='btn'>Get Started !</button>
    </div>
  </div>
  )
}

export default SubmissionPage2
