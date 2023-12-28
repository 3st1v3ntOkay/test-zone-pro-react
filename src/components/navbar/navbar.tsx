import style from './nav.module.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className={style.navbar}>
        <Link className={style.anchor} to='/'>
          home
        </Link>
        <Link className={style.anchor} to='about'>
          about
        </Link>
        <Link className={style.anchor} to='contact'>
          contact
        </Link>
    </nav>
  )
}
