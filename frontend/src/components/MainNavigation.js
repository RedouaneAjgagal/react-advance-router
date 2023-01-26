import classes from './MainNavigation.module.css';
import { NavLink, useRouteLoaderData, Form } from 'react-router-dom';
import NewsletterSignup from './NewsletterSignup';

function MainNavigation() {
  const isToken = useRouteLoaderData('root');
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to='/' className={({ isActive }) => isActive ? classes.active : null} end>Home</NavLink>
          </li>
          <li>
            <NavLink to='events' className={({ isActive }) => isActive ? classes.active : null}>Events</NavLink>
          </li>
          <li>
            <NavLink to='newsletter' className={({ isActive }) => isActive ? classes.active : null}>Newsletter</NavLink>
          </li>
          {
            isToken ?
              <li>
                <Form method='post' action='/logout'>
                  <button>Logout</button>
                </Form>
              </li>
              :
              <li>
                <NavLink to='auth?mode=login' className={({ isActive }) => isActive ? classes.active : null}>Authentication</NavLink>
              </li>
          }
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
