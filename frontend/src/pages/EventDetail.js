import React from 'react'
import { useRouteLoaderData, redirect, json } from 'react-router-dom'
import EventItem from '../components/EventItem'

const EventDetail = () => {
    const eventDetail = useRouteLoaderData('eventDetails');
    return <EventItem event={eventDetail.event} />
}
export default EventDetail
export const loader = async ({ params }) => {
    const id = params.eventId
    const data = await fetch('http://localhost:8080/events/' + id);
    if (!data.ok) {
        throw json({ errorMsg: "Couldn't fetch data.." }, { status: 500 });
    }
    return data;
}
export const action = async ({ request, params }) => {
    const id = params.eventId
    const response = await fetch('http://localhost:8080/events/' + id, {
        method: request.method
    });
    if (!response.ok) {
        throw json({ errorMsg: "Couldn't delete this event.." }, { status: 500 });
    }
    return redirect('/events');
}