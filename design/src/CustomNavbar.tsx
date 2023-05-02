import { memo } from 'react';
import type { FC } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './CustomNavbar.module.css';

interface Props {
  className?: string;
}

export const CustomNavbar: FC<Props> = memo(function CustomNavbar(props) {
  return (
    <nav className={`${classes.root} ${props.className}`}>
      <ul>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/agriculture">Agriculture</NavLink>
        </li>
        <li>
          <NavLink to="/technology">Technology</NavLink>
        </li>
        <li>
          <NavLink to="/sustainability/greenhouse">Greenhouse</NavLink>
        </li>
        <li>
          <NavLink to="/sustainability/mushroom">Mushroom</NavLink>
        </li>
      </ul>
    </nav>
  );
});
