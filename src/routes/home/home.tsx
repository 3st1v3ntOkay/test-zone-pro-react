import '../default.css';
import { transition } from '../../features';
import { Link } from 'react-router-dom';

const Page = () => {
  return (
    <>
      <main>home page</main>
      <Link to='/error'>Error</Link>
    </>
  )
}

export const Home = transition(Page);