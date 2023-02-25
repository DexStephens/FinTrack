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
import { Link } from 'react-router-dom';
import '../myCSS.css';

type FormData = {
  email: string;
  password: string;
};

export const LoginForm = () => {
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

  const submitForm = async (data: FormData) => {
    //send the login request
    const result = await CheckLogin({
      email: data.email,
      password: data.password,
    });
    if (result === undefined) {
      setInvalidUser(true);
    } else {
      setInvalidUser(false);
      setSuccessfullySubmitted(true);
    }
  };

  return (
    <section className="one">
      <div className="content">
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
              <Link className="buttons" to="../login">
                Login
              </Link>
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
