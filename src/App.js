// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminHome from './components/AdminHome';
import AdminLogin from './components/AdminLogin';
import LandingPage from './components/LandingPage';
import UserHome from './components/UserHome';
import UserLogin from './components/UserLogin';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/admin/*" element={<AdminHome />} />
          <Route path="/user/*" element={<UserHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
