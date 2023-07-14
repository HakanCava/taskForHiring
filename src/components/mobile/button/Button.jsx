import React from 'react'
import './button.css'

const Button = () => {
  return (
    <div className='buttons'>
      <button className='btn-1'>Add others</button>
      <button className='btn-2' data-test="add-me-btn">Add me</button>
    </div>
  )
}

export default Button