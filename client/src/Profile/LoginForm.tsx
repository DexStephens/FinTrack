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
export const LoginForm = () => {
  return (
    <form>
      <ProfileFieldset>
        <div
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <h2>Login</h2>
        </div>
        <FieldContainer>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <FieldInput id="email" />
        </FieldContainer>
        <FieldContainer>
          <FieldLabel htmlFor="password">Password</FieldLabel>
          <FieldInput id="password" />
        </FieldContainer>
        <FormButtonContainer>
          <PrimaryButton>Create</PrimaryButton>
        </FormButtonContainer>
      </ProfileFieldset>
    </form>
  );
};
