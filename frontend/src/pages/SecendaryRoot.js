import React from 'react'
import EventsNavigation from '../components/EventsNavigation'
import { Outlet } from 'react-router-dom'

const SecendaryRoot = () => {
  return (
    <div style={{ width: '100%' }}>
      <EventsNavigation />
      <Outlet />
    </div>
  )
}

export default SecendaryRoot