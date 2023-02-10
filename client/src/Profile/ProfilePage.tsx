/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { PrimaryButton } from '../Styles';
import { Outlet, Link } from 'react-router-dom';
export const ProfilePage = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};
