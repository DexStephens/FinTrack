/** @jsxImportSource @emotion/react */
import { UserIcon } from '../Layout/Icons';
import { Link } from 'react-router-dom';
import '../myCSS.css';

export const Banner = () => {
  return (
    <>
      <section className="one">
        <div className="content fade-in">
          <h1 className="heading">Fintrack</h1>
          <p className="subheading">
            Here at Fintrack we want to help make the idea of gaining financial
            independence a little bit easier. We've developed tools and systems
            to help you reach your financial independence goals.
          </p>
          <Link to="profile/login" className="buttons">
            Sign In
          </Link>
          <Link to="profile/newUser" className="buttons">
            Create Account
          </Link>
        </div>
      </section>
    </>
  );
};
