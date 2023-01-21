/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { HomePage } from './Home/HomePage';
import { ProfilePage } from './Profile/ProfilePage';
import { NewUserForm } from './Profile/NewUserForm';
import { LoginForm } from './Profile/LoginForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Home/Header';
import { Footer } from './Home/Footer';
function App() {
  return (
    <BrowserRouter>
      <div
        css={css`
          min-height: 100vh;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
        `}
      >
        <Header />
        <div
          css={css`
            flex-grow: 1;
          `}
        >
          <Routes>
            <Route path="" element={<HomePage />} />
            <Route path="profile" element={<ProfilePage />}>
              <Route path="login" element={<LoginForm />} />
              <Route path="newUser" element={<NewUserForm />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
