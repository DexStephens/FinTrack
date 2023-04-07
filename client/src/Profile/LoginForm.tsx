/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  ProfileFieldset,
  FieldContainer,
  FieldLabel,
  FieldInput,
  FormButtonContainer,
  PrimaryButton,
} from '../Styles';
import { useForm } from 'react-hook-form';
import React from 'react';
import { CheckLogin } from './LoginData';
import { Link, Navigate } from 'react-router-dom';
import '../myCSS.css';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useAppDispatch, useAppSelector } from '../hooks';
import { assign, User } from '../user/usersSlice';

type FormData = {
  email: string;
  password: string;
};

type NewUser = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  token: string;
};

export const LoginForm = () => {
  const user = useAppSelector((state) => state.user.user);
  const dispatch = useAppDispatch();

  const [cookies, setCookie] = useCookies(['token']);

  const [successfullySubmitted, setSuccessfullySubmitted] =
    React.useState(false);

  const [invalidUser, setInvalidUser] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    mode: 'onBlur',
  });

  const setToken = (newToken: string) => {
    setCookie('token', newToken, { path: '/' });
  };

  const submitForm = async (form: FormData) => {
    //send the login request
    await axios
      .post<NewUser>('http://localhost:52345/user/validateUser', {
        email: form.email,
        password: form.password,
      })
      .then((response) => {
        setToken(response.data.token);
        const newUser: User = {
          id: response.data.id,
          firstName: response.data.first_name,
          lastName: response.data.last_name,
          email: response.data.email,
        };
        dispatch(assign(newUser));
        setInvalidUser(false);
        setSuccessfullySubmitted(true);
      })
      .catch((error) => {
        setInvalidUser(true);
      });
  };

  return (
    <section className="one">
      <div className="content">
        {user.id !== 0 && <Navigate to="/profile/home" replace={true} />}
        <form onSubmit={handleSubmit(submitForm)}>
          <ProfileFieldset disabled={isSubmitting || successfullySubmitted}>
            <h2>Login</h2>
            <div className="formInputs">
              <label htmlFor="" className="myLabel">
                Email
              </label>
              <input
                className="myInput"
                type="text"
                id="email"
                {...register('email', { required: true })}
              />
              {errors.email?.type === 'required' && (
                <p className="inputError">Please enter your email</p>
              )}
            </div>
            <div className="formInputs">
              <label htmlFor="" className="myLabel">
                Password
              </label>
              <input
                className="myInput"
                type="text"
                id="password"
                {...register('password', {
                  required: true,
                })}
              />
              {errors.password?.type === 'required' && (
                <p className="inputError">Please enter your password</p>
              )}
            </div>
            {invalidUser && <h3>Email or password is invalid</h3>}
            <FormButtonContainer>
              <button className="buttons" type="submit">
                Login
              </button>
              <Link className="buttons" to="/profile/newUser">
                Create New User
              </Link>
            </FormButtonContainer>
            {successfullySubmitted && <h1>You are now logged in</h1>}
          </ProfileFieldset>
        </form>
      </div>
    </section>
  );
};
