import React from 'react'
// import EventDetail from './EventDetail'
import { Link } from 'react-router-dom'
export const dummyEvents = [
    { id: 'event-number-one', about: 'Event for making a full stack app' },
    { id: 'event-number-two', about: 'Event for Practicing React Routers' },
    { id: 'event-number-three', about: 'Event for Making Mobile Apps' },
    { id: 'event-number-four', about: 'Event for Gaming!' },
]

const Events = () => {
    return (
        <>
            {dummyEvents.map((event) => <Link key={event.id} to={event.id} style={{ color: 'white', display: 'block', marginBottom: '1rem' }}>{event.id}</Link>)}
        </>
    )
}

export default Events