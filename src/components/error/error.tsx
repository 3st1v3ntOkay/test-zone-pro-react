import style from './error.module.css';
import { useRouteError, Link } from "react-router-dom";

export const Error = () => {
  const { statusText, error } = useRouteError();

  return (
    <section className={style.error}>
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{statusText || error.message}</i>
        </p>

        <Link to='/'>
          go home
        </Link>
      </div>
    </section>
  );
}