import { useLoaderData, json } from 'react-router-dom';
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
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        throw json({ errorMsg: "Couldn't fetch events.." }, { status: 500 });
    }
    return response;
}