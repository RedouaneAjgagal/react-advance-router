import React from 'react';
import EventForm from '../components/EventForm'
import { useRouteLoaderData } from 'react-router-dom';

const EditEvent = () => {
  const data = useRouteLoaderData('eventDetails');
  return (
    <EventForm event={data.event} method={'patch'} />
  )
}

export default EditEvent