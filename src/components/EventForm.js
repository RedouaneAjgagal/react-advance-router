import { useNavigate, Form, useNavigation, useActionData } from 'react-router-dom';
import React from 'react';

import classes from './EventForm.module.css';

function EventForm({ method, event }) {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  const navigate = useNavigate();
  function cancelHandler() {
    navigate('..');
  }

  const actionData = useActionData();

  return (
    <Form method='post' className={classes.form}>
      {actionData?.errors && <ul>{Object.values(actionData.errors).map(error => <li key={error}>{error}</li>)}</ul>}
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" required defaultValue={event?.title} />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image" required defaultValue={event?.image} />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date" required defaultValue={event?.date} />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5" required defaultValue={event?.description} />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>{isSubmitting ? <div className={classes.load}></div> : 'Save'}</button>
      </div>
    </Form>
  );
}

export default EventForm;
