import React, { Suspense } from 'react'
import { useRouteLoaderData, redirect, json, defer, Await } from 'react-router-dom'
import EventItem from '../components/EventItem'
import EventsList from '../components/EventsList'
import { getToken } from '../util/Auth'

const EventDetail = () => {
    const { event, events } = useRouteLoaderData('eventDetails');
    return (
        <>
            <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
                <Await resolve={event}>
                    {(loadedEvent) => <EventItem event={loadedEvent} />}
                </Await>
            </Suspense>
            <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
                <Await resolve={events}>
                    {(loadedEvents) => <EventsList events={loadedEvents} />}
                </Await>
            </Suspense>
        </>
    )
}
export default EventDetail
export const action = async ({ request, params }) => {
    const token = getToken();
    const id = params.eventId
    const response = await fetch('http://localhost:8080/events/' + id, {
        method: request.method,
        headers: { 'Authorization': `Bearer ${token}` }
    });
    if (!response.ok) {
        throw json({ errorMsg: "Couldn't delete this event.." }, { status: 500 });
    }
    return redirect('/events');
}

export const loadEvent = async (id) => {
    const response = await fetch('http://localhost:8080/events/' + id);
    if (!response.ok) {
        throw json({ errorMsg: "Couldn't fetch data.." }, { status: 500 });
    }
    const data = await response.json();
    return data.event;
}

const loadEvents = async () => {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        throw json({ errorMsg: "Couldn't fetch events.." }, { status: 500 });
    }
    const data = await response.json();
    return data.events
}

export const loader = async ({ params }) => {
    const id = params.eventId;
    return defer({
        event: await loadEvent(id),
        events: loadEvents()
    });
}