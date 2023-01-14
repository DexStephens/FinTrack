import { HomePage } from './Home/HomePage';
import { ProfilePage } from './Profile/ProfilePage';
import { NewUserForm } from './Profile/NewUserForm';
import { LoginForm } from './Profile/LoginForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <h1>This is the header</h1>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="profile" element={<ProfilePage />}>
          <Route path="login" element={<LoginForm />} />
          <Route path="newUser" element={<NewUserForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
