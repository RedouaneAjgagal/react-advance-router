// import React from 'react'
// // import EventDetail from './EventDetail'
// import { Link } from 'react-router-dom'


// const Events = () => {
//     return (
//         <>
//             {dummyEvents.map((event) => <Link key={event.id} to={event.id} style={{ color: 'white', display: 'block', marginBottom: '1rem' }}>{event.id}</Link>)}
//         </>
//     )
// }

// export default Events



import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';


export const dummyEvents = [
    { id: 'event-number-one', about: 'Event for making a full stack app' },
    { id: 'event-number-two', about: 'Event for Practicing React Routers' },
    { id: 'event-number-three', about: 'Event for Making Mobile Apps' },
    { id: 'event-number-four', about: 'Event for Gaming!' },
]


function EventsPage() {
    const { events } = useLoaderData();
    return <EventsList events={events} />
}

export default EventsPage;


export const loader = async () => {
    const response = await fetch('http://localhost:8080/eventss');
    if (!response.ok) {
        throw new Response(JSON.stringify({ errorMsg: "Couldn't fetch events.." }), { status: 500 });
    }
    // const data = await response.json();
    return response
}