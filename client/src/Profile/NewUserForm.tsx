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
export const NewUserForm = () => {
  return (
    <form>
      <ProfileFieldset>
        <div
          css={css`
            display: flex;
            justify-content: center;
          `}
        >
          <h2>Create a New User</h2>
        </div>

        <FieldContainer>
          <FieldLabel htmlFor="firstName">First Name</FieldLabel>
          <FieldInput id="firstName" />
        </FieldContainer>
        <FieldContainer>
          <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
          <FieldInput id="lastName" />
        </FieldContainer>
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
