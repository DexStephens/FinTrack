import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const primaryGreen = '#008631';

export const primaryGrey = '#555555';

export const secondaryGrey = '#bbbbbb';

export const IntroSection = styled.div`
  padding: 10vh;
  background-color: #000000;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const IntroLinkSection = styled.div`
  padding: 10vh;
  background-color: #555555;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeCard = styled.div`
  padding: 1vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  border: 3px solid #000000;
  margin: 1vh;
  min-width: 200px;
  min-height: 200px;
  border-radius: 10%;
`;

export const ProfileFieldset = styled.fieldset`
  margin: 10px auto 0 auto;
  padding: 30px;
  width: 350px;
  background-color: ${secondaryGrey};
  border-radius: 4px;
  border: 1px solid ${primaryGrey};
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
`;

export const PrimaryButton = styled.button`
  color: ${primaryGreen};
  padding: 1vh 3vh;
  border-radius: 5%;
  background-color: white;
  :hover {
    background-color: ${primaryGrey};
  }
  :focus {
    outline-color: ${primaryGrey};
  }
`;

const baseFieldCSS = css`
  box-sizing: border-box;
  margin-bottom: 5px;
  padding: 8px 10px;
  border: 1px solid ${primaryGrey};
  border-radius: 3px;
  color: ${secondaryGrey};
  background-color: white;
  width: 100%;
  :focus {
    outline-color: ${secondaryGrey};
  }
  :disabled {
    background-color: ${secondaryGrey};
  }
`;

export const FieldInput = styled.input`
  ${baseFieldCSS}
`;

export const FieldLabel = styled.label`
  font-weight: bold;
`;

export const FieldContainer = styled.div`
  margin-bottom: 10px;
`;

export const FormButtonContainer = styled.div`
  margin: 30px 0px 0px 0px;
  padding: 20px 0px 0px 0px;
  border-top: 1px solid ${secondaryGrey};
  display: flex;
  justify-content: center;
`;

// NEW STYLES FOR HOME PAGE
export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  color: #008631;
`;
