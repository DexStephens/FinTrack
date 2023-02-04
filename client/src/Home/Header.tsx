/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { UserIcon } from '../Layout/Icons';
import { Link } from 'react-router-dom';
import '../myCSS.css';

export const Header = () => {
  return (
    <>
      <nav>
        <div className="logo">Fintrack</div>
        <div className="linkContainer">
          <Link to="" className="navLink">
            Finances
          </Link>
          <UserIcon />
          <Link to="profile" className="navLink">
            Login
          </Link>
        </div>
      </nav>
    </>
  );
};
