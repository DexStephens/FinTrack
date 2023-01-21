/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { HomePage } from './Home/HomePage';
import { ProfilePage } from './Profile/ProfilePage';
import { NewUserForm } from './Profile/NewUserForm';
import { LoginForm } from './Profile/LoginForm';
import { Footer } from './Home/Footer';
import { NotFoundPage } from './Home/NotFoundPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Home/Header';
function App() {
  return (
    <div
      css={css`
        min-height: 100vh;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
      `}
    >
      <BrowserRouter>
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
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
