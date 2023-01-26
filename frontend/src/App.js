import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Events, { loader as events } from "./pages/Events";
import EventDetail, { loader as eventsDetails, action as deleteEvent } from "./pages/EventDetail";
import NewEvent from "./pages/NewEvent";
import EditEvent from "./pages/EditEvent";
import Root from "./pages/Root";
import EventsRoot from "./pages/EventsRoot";
import Error from "./pages/Error";
import { action as eventActions } from "./components/EventForm";
import Newsletter, { action as signupToNewsletter } from "./pages/Newsletter";
import Authentication from "./pages/Authentication";

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Home /> },
        {
          path: 'events',
          element: <EventsRoot />,
          children: [
            { index: true, element: <Events />, loader: events },
            {
              path: ':eventId', loader: eventsDetails, id: 'eventDetails', children: [
                { index: true, element: <EventDetail />, action: deleteEvent },
                { path: 'edit', element: <EditEvent />, action: eventActions }
              ]
            },
            { path: 'new', element: <NewEvent />, action: eventActions },
          ]
        },
        { path: 'newsletter', element: <Newsletter />, action: signupToNewsletter },
        { path: 'auth', element: <Authentication /> }
      ]
    },

  ])
  return <div>
    <RouterProvider router={router} />
  </div>;
}

export default App;
