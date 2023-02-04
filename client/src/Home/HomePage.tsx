/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import '../myCSS.css';
import {
  IntroSection,
  IntroLinkSection,
  HomeCard,
  primaryGreen,
  PrimaryButton,
  Wrapper,
} from '../Styles';
import { Banner } from './Banner';

export const HomePage = () => {
  return (
    <>
      <body>
        <div className="Wrapper">
          <Banner></Banner>
        </div>
      </body>
    </>
  );
};
