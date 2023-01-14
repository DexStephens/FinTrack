import { Outlet, Link } from 'react-router-dom';
export const ProfilePage = () => {
  return (
    <>
      <h4>This is the profile page</h4>
      <Link to="login">Login</Link>
      <Link to="newUser">New User</Link>
      <Outlet />
    </>
  );
};
