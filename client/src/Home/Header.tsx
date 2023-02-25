/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { UserIcon } from '../Layout/Icons';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../myCSS.css';
import { useAppSelector, useAppDispatch } from '../hooks';
import { User } from '../user/usersSlice';
import { remove } from '../user/usersSlice';
import { useCookies } from 'react-cookie';

export const Header = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const logout = () => {
    const resetUser: User = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
    };
    dispatch(remove(resetUser));
    removeCookie('token');
  };

  return (
    <>
      <nav>
        <div className="logo">Fintrack</div>
        <div className="linkContainer">
          <Link to="" className="navLink">
            About
          </Link>
          {user.id !== 0 && (
            <>
              <Link to="" className="navLink">
                Finances
              </Link>
              <p>
                Welcome, {user.firstName} {user.lastName}
              </p>
              <UserIcon />
              <button className="navLink" onClick={logout}>
                Logout
              </button>
            </>
          )}
          {user.id === 0 && (
            <Link to="profile/login" className="navLink">
              Login
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};
