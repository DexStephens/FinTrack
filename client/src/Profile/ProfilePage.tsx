/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PrimaryButton } from '../Styles';
import { Outlet, Link } from 'react-router-dom';
export const ProfilePage = () => {
  return (
    <>
      <div
        css={css`
          display: flex;
          justify-content: space-around;
          padding: 10px;
        `}
      >
        <PrimaryButton>
          <Link
            to="login"
            css={css`
              padding: 5px 10px;
              background-color: transparent;
              color: inherit;
              text-decoration: none;
              cursor: pointer;
              span {
                margin-left: 7px;
              }
            `}
          >
            Login
          </Link>
        </PrimaryButton>
        <PrimaryButton>
          <Link
            to="newUser"
            css={css`
              padding: 5px 10px;
              background-color: transparent;
              color: inherit;
              text-decoration: none;
              cursor: pointer;
              span {
                margin-left: 7px;
              }
            `}
          >
            New User
          </Link>
        </PrimaryButton>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
