import '../default.css';
import { transition } from '../../features';
import { Link } from 'react-router-dom';
import { Row } from '../../components/row/row';
import { data } from '../../data/data-links';

const Page = () => {
  return (
    <>
      <main>home page</main>
      <Row>
        {data.map(({ id, url, page }) => (
          <Link to={url} key={id}>{page}</Link>
        ))}
      </Row>
    </>
  )
}

export const Home = transition(Page);