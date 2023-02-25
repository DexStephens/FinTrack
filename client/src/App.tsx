/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { HomePage } from './Home/HomePage';
import { ProfilePage } from './Profile/ProfilePage';
import { NewUserForm } from './Profile/NewUserForm';
import { LoginForm } from './Profile/LoginForm';
import { DownloadsPage } from './Downloads/DownloadsPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Home/Header';
import { Footer } from './Home/Footer';
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <CookiesProvider>
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
              padding-top: 10vh;
              background-color: #000000;
            `}
          >
            <Routes>
              <Route path="" element={<HomePage />} />
              <Route path="profile" element={<ProfilePage />}>
                <Route path="login" element={<LoginForm />} />
                <Route path="newUser" element={<NewUserForm />} />
              </Route>
              <Route path="downloadsPage" element={<DownloadsPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </CookiesProvider>
  );
}

export default App;
