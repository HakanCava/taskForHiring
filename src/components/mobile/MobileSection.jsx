import React from 'react'
import Navbar from './navbar/Navbar'
import WaitingList from './waitingList/WaitingList'
import Courts from './court/Courts'
import Button from './button/Button'
import './mobileSection.css'
const MobileSection = ({ list, loading, error }) => {
  return (
    <div className='mobile-section'>
      <Navbar/>
      <WaitingList list={list} loading={loading} error={error}/>
      <Courts/>
      <Button/>
    </div>
  )
}

export default MobileSection