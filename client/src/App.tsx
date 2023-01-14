import { HomePage } from './Home/HomePage';
import { ProfilePage } from './Profile/ProfilePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <h1>This is the header</h1>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
