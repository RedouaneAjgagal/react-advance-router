import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { dummyEvents } from './Events';

const EventDetail = () => {
    // console.log(dummyEvents);
    const params = useParams();
    const event = dummyEvents.find(event => event.id === params.eventId);
    return (
        <>
            <h1>Event Detail</h1>
            <h2>{event.about}</h2>

            <Link to='..' relative='path'>Get back</Link>
        </>
    )
}

export default EventDetail