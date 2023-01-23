/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import {
  IntroSection,
  IntroLinkSection,
  HomeCard,
  primaryGreen,
  PrimaryButton,
} from '../Styles';
export const HomePage = () => {
  return (
    <div>
      <IntroSection>
        <h1
          css={css`
            color: ${primaryGreen};
          `}
        >
          Welcome to FinTrack!
        </h1>
      </IntroSection>
      <IntroLinkSection>
        <HomeCard>
          <h4>Login</h4>
          <PrimaryButton>
            <Link
              to="profile/login"
              css={css`
                padding: 5px 10px;
                background-color: transparent;
                color: inherit;
                text-decoration: none;
                cursor: pointer;
                span {
                  margin-left: 7px;
                }
              `}
            >
              Login
            </Link>
          </PrimaryButton>
        </HomeCard>
        <HomeCard>
          <h4>Create a new user</h4>
          <PrimaryButton>
            <Link
              to="profile/newUser"
              css={css`
                padding: 5px 10px;
                background-color: transparent;
                color: inherit;
                text-decoration: none;
                cursor: pointer;
                span {
                  margin-left: 7px;
                }
              `}
            >
              Create
            </Link>
          </PrimaryButton>
        </HomeCard>
      </IntroLinkSection>
    </div>
  );
};
