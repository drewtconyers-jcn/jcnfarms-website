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
        <img className={classes.logo} alt="JCN Farms logo" />
      </Link>
      <ul>
        <li>
          <Link to="/" end>
            Overview
          </Link>
        </li>
        <li>
          <Link to="/agriculture">Agriculture</Link>
        </li>
        <li>
          <Link to="/technology">Technology</Link>
        </li>
        <li>
          <Link to="/produce">Produce</Link>
        </li>
        <li>
          <Link to="/sustainability">Sustainability</Link>
        </li>
      </ul>
    </nav>
  );
});
