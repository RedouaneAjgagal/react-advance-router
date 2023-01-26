import classes from './EventsNavigation.module.css';
import { Link, useRouteLoaderData } from 'react-router-dom';

function EventsNavigation() {
  const isToken = useRouteLoaderData('root');
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to=''>All Events</Link>
          </li>
          {isToken &&
            <li>
              <Link to='new'>New Events</Link>
            </li>}
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
