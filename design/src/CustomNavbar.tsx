import { memo } from 'react';
import { Link } from 'react-router-dom';
import type { FC } from 'react';
import classes from './CustomNavbar.module.css';

interface Props {
  className?: string;
}

export const CustomNavbar: FC<Props> = memo(function CustomNavbar(props) {
  return (
    <nav className={`${classes.root} ${props.className} custom-navbar`}>
      <Link to="/">
        <img className={classes.logo}></img>
      </Link>
      <ul>
        <li>
          <Link to="/">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
        </li>
        <li>
          <Link to="/agriculture" className={classes.active}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
        </li>
        <li>
          <Link to="/technology" className={classes.active}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;
          </Link>
        </li>
        <li>
          <Link to="/produce" className={classes.active}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
        </li>
        <li>
          <Link to="/sustainability" className={classes.active}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;
          </Link>
        </li>
      </ul>
    </nav>
  );
});
