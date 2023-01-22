import React from 'react'
import { json, redirect } from 'react-router-dom'
import EventForm from '../components/EventForm'

const NewEvent = () => {
  return <EventForm />
}
export default NewEvent

export const action = async ({ request, params }) => {
  console.log(params);
  const data = await request.formData();
  const eventsData = {
    title: data.get('title'),
    image: data.get('image'),
    date: data.get('date'),
    description: data.get('description'),
  }
  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(eventsData)
  });
  if (!response.ok) {
    throw json({ errorMsg: "Couldn't Post An Event.." }, { status: 500 });
  }
  return redirect(`/events`);

}
