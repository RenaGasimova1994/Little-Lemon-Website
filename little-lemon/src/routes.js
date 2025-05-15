import Home from './pages/Home/HomePage';
import BookingPage from './pages/Booking/BookingPage';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/booking',
    element: <BookingPage />,
  },
];

export default routes;