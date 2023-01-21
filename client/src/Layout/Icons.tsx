/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import user from './user.svg';
export const UserIcon = () => (
  <img
    src={user}
    alt="User"
    css={css`
      width: 20px;
      opacity: 0.6;
    `}
  />
);
