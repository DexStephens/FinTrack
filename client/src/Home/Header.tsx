/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { UserIcon } from '../Layout/Icons';
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
        background-color: #fff;
        border-bottom: 1px solid #fafafa;
        box-shadow: 0 3px 7px 0 rgba(110, 112, 114, 0.21);
      `}
    >
      <h4>FinTrack</h4>
      <div>
        <span>Finances</span>
        <UserIcon />
        <span>Login</span>
      </div>
    </div>
  );
};
