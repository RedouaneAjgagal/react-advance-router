import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
// import Events, { loader as events } from "./pages/Events";
import EventDetail, { loader as eventsDetails, action as deleteEvent } from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import Root from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";
import Error from "./pages/Error";
import { action as eventActions } from "./components/EventForm";
import Newsletter, { action as signupToNewsletter } from "./pages/Newsletter";
import Authentication, { action as authAction } from "./pages/Authentication";
import { action as logoutAction, loader as logoutLoader } from "./pages/logout";
import { tokenLoader, checkAuthLoader } from "./util/Auth";
import React, { lazy, Suspense } from "react";

function App() {
  const Events = lazy(() => import('./pages/Events'));
  const eventsLoader = () => import('./pages/Events').then(module => module.loader());

  const router = createBrowserRouter([
    {
      path: '/',
      id: 'root',
      element: <Root />,
      errorElement: <Error />,
      loader: tokenLoader,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'events',
          element: <EventsRoot />,
          children: [
            { index: true, element: <Suspense fallback={null}><Events /></Suspense>, loader: eventsLoader },
            {
              path: ':eventId', loader: eventsDetails, id: 'eventDetails', children: [
                { index: true, element: <EventDetail />, action: deleteEvent },
                { path: 'edit', element: <EditEvent />, action: eventActions, loader: checkAuthLoader }
              ]
            },
            { path: 'new', element: <NewEvent />, action: eventActions, loader: checkAuthLoader },
          ]
        },
        { path: 'newsletter', element: <Newsletter />, action: signupToNewsletter },
        { path: 'auth', element: <Authentication />, action: authAction },
        { path: 'logout', action: logoutAction, loader: logoutLoader }
      ]
    },

  ])
  return <div>
    <RouterProvider router={router} />
  </div>;
}

export default App;
