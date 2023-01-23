/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import user from './user.svg';
import { Link } from 'react-router-dom';
export const UserIcon = () => (
  <Link to="profile">
    <img
      src={user}
      alt="User"
      css={css`
        width: 30px;
        opacity: 0.6;
        background-color: lightgray;
        border-radius: 30%;
      `}
    />
  </Link>
);
