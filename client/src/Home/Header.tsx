/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { UserIcon } from '../Layout/Icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../myCSS.css';
import { useAppSelector } from '../hooks';

export const Header = () => {
  const user = useAppSelector((state) => state.user.user);
  return (
    <>
      <nav>
        <div className="logo">Fintrack</div>
        <div className="linkContainer">
          {user.id !== 0 && (
            <p>
              Welcome, {user.firstName} {user.lastName}
            </p>
          )}
          <Link to="" className="navLink">
            Finances
          </Link>
          <UserIcon />
          <Link to="profile/login" className="navLink">
            Login
          </Link>
        </div>
      </nav>
    </>
  );
};
