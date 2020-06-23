import LandingPage from './screens/LandingPage';
import AboutUs from './screens/AboutUs';
import Contact from './screens/Contact';
import Blog from './screens/Blog';
import BlogPost from './screens/BlogPost';
import Subscribe from './screens/Subscribe';

const routes = [
  {
    exact: true,
    path: '/',
    component: LandingPage,
  },
  {
    exact: true,
    path: '/about-us',
    component: AboutUs,
  },
  {
    exact: true,
    path: '/contact',
    component: Contact,
  },
  {
    exact: true,
    path: '/blogs',
    component: Blog,
  },
  {
    exact: true,
    path: '/blog/:id',
    component: BlogPost,
  },
  {
    exact: true,
    path: '/subscribe',
    component: Subscribe,
  },
];

export default routes;