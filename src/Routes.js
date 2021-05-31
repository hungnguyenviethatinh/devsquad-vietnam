import LandingPage from './screens/LandingPage';
import AboutUs from './screens/AboutUs';
import Contact from './screens/Contact';
import Blog from './screens/Blog';
import BlogPost from './screens/BlogPost';
import Subscribe from './screens/Subscribe';
import NotFoundScreen from './screens/404/404';

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
    path: '/blog/:slug',
    component: BlogPost,
  },
  {
    exact: true,
    path: '/subscribe',
    component: Subscribe,
  },
  {
    exact: true,
    path: '*',
    component: NotFoundScreen,
  }
];

export default routes;
