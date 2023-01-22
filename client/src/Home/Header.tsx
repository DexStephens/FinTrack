/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { UserIcon } from '../Layout/Icons';
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <div
      css={css`
        position: fixed;
        box-sizing: border-box;
        top: 0;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 20px;
        background-color: #000000;
        color: white;
      `}
    >
      <h4
        css={css`
          font-size: 1.2em;
        `}
      >
        FinTrack
      </h4>
      <div>
        <Link to="">Finances</Link>
        <UserIcon />
        <Link to="profile">Login</Link>
      </div>
    </div>
  );
};
