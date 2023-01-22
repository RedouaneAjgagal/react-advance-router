import { useLoaderData, json } from 'react-router-dom';
import EventsList from '../components/EventsList';

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