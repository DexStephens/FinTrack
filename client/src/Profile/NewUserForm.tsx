/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
  ProfileFieldset,
  FieldInput,
  FieldLabel,
  FieldContainer,
  FormButtonContainer,
  PrimaryButton,
} from '../Styles';
import { useForm } from 'react-hook-form';
import '../myCSS.css';
import { Link } from 'react-router-dom';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const NewUserForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    mode: 'onBlur',
  });

  const submitForm = (data: FormData) => {
    //post the user to the data
    //eventually call the api
  };

  return (
    <section className="one">
      <div className="content">
        <form onSubmit={handleSubmit(submitForm)}>
          <ProfileFieldset>
            <div
              css={css`
                display: flex;
                justify-content: center;
              `}
            >
              <h2>Create a New User</h2>
            </div>

            <div className="formInputs">
              <label className="myLabel" htmlFor="firstName">
                First Name
              </label>
              <input
                className="myInput"
                id="firstName"
                type="text"
                {...register('firstName', { required: true, minLength: 2 })}
              />
              {errors.firstName?.type === 'required' && (
                <p className="inputError">First name is required</p>
              )}
              {errors.firstName?.type === 'minLength' && (
                <p className="inputError">
                  First name must have at least two characters
                </p>
              )}
            </div>
            <div className="formInputs">
              <label className="myLabel" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="myInput"
                id="lastName"
                type="text"
                {...register('lastName', { required: true, minLength: 2 })}
              />
              {errors.lastName?.type === 'required' && (
                <p className="inputError">Last name is required</p>
              )}
              {errors.lastName?.type === 'minLength' && (
                <p className="inputError">
                  Last name must have at least two characters
                </p>
              )}
            </div>
            <div className="formInputs">
              <label className="myLabel" htmlFor="email">
                Email
              </label>
              <input
                className="myInput"
                id="email"
                type="text"
                {...register('email', {
                  required: true,
                  pattern: /.+@\w+\.\w+/,
                })}
              />
              {errors.email?.type === 'required' && (
                <p className="inputError">Email is required</p>
              )}
              {errors.email?.type === 'pattern' && (
                <p className="inputError">Please use a valid email</p>
              )}
            </div>
            <div className="formInputs">
              <label className="myLabel" htmlFor="password">
                Password
              </label>
              <input
                className="myInput"
                id="password"
                type="text"
                {...register('password', {
                  required: true,
                  pattern:
                    /^(?=.*[A-Z])(?=.*\d)(?=.*[a-z])(?=.*[@$!%*#?&])[A-Za-z@$!%*#?&1-9]{8,}$/,
                })}
              />
              {errors.password?.type === 'required' && (
                <p className="inputError">Adding a password is required</p>
              )}
              {errors.password?.type === 'pattern' && (
                <p className="inputError">
                  The password does not meet the specified pattern
                </p>
              )}
            </div>
            <FormButtonContainer>
              <Link className="buttons" to="../login">
                Go Back
              </Link>
              <Link className="buttons" to="../login">
                Create New User
              </Link>
            </FormButtonContainer>
          </ProfileFieldset>
        </form>
      </div>
    </section>
  );
};
