import classes from './EventItem.module.css';
import { Link, useSubmit, useRouteLoaderData } from 'react-router-dom';

function EventItem({ event }) {
  const submit = useSubmit();
  function startDeleteHandler() {
    const confirm = window.confirm('Are you sure you want to delete this event');
    if (confirm) {
      submit(null, { method: 'delete' });
    }
  }
  const isToken = useRouteLoaderData('root');
  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      {isToken &&
        <menu className={classes.actions}>
          <Link to='edit'>Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
        </menu>
      }
    </article>
  );
}

export default EventItem;
