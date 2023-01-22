import React from 'react'
import { useRouteLoaderData, json } from 'react-router-dom'
import EventItem from '../components/EventItem'

const EventDetail = () => {
    const eventDetail = useRouteLoaderData('eventDetails');
    return <EventItem event={eventDetail.event} />
}
export default EventDetail
export const loader = async ({ request, params }) => {
    const id = params.eventId
    const data = await fetch('http://localhost:8080/events/' + id);
    if (!data.ok) {
        throw json({ errorMsg: "Couldn't fetch data.." }, { status: 500 });
    }
    return data;
}