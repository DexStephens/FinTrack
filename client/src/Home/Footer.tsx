/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
export const Footer = () => (
  <div
    css={css`
      height: 50px;
      flex-shrink: 0;
      margin: 0;
      padding: 0;
      background-color: #197230;
      color: white;
    `}
  >
    <p
      style={{
        display: 'inline-block',
        marginRight: '25px',
      }}
    >
      Fintrack &copy; 2023
    </p>
    <p
      style={{
        display: 'inline-block',
        marginRight: '6px',
      }}
    >
      Email Us:{' '}
    </p>
    <p
      style={{
        display: 'inline-block',
        textDecoration: 'underline',
      }}
    >
      fintrackplanning@gmail.com
    </p>
  </div>
);
