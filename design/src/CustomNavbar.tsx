import { memo } from 'react';
import { Link } from 'react-router-dom';
import type { FC } from 'react';
import classes from './CustomNavbar.module.css';

interface Props {
  className?: string;
}

export const CustomNavbar: FC<Props> = memo(function CustomNavbar(props) {
  return (
    <nav className={`${classes.root} ${props.className}`}>
      <Link to="/">
        <img className={classes.logo}/>
      </Link>
      <ul>
        <li>
          <Link to="/" activeClassName={classes.active}>
            Overview
          </Link>
        </li>
        <li>
          <Link to="/agriculture" activeClassName={classes.active}>Agriculture</Link>
        </li>
        <li>
          <Link to="/technology" activeClassName={classes.active}>Technology</Link>
        </li>
        <li>
          <Link to="/produce" activeClassName={classes.active}>Produce</Link>
        </li>
        <li>
          <Link to="/sustainability" activeClassName={classes.active}>Sustainability</Link>
        </li>
      </ul>
    </nav>
  );
});
