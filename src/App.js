import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/header';
import Home from './components/Home';
import LoginPage from './components/login';
import Signup from './components/signup';
import ForgotPassword from './components/forgotpassword'; 
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const location = useLocation();

  return (
    <div className='App'>
      {location.pathname !== '/login' && location.pathname !== '/signup' && location.pathname !== '/forgot-password' && (
        <header id='header'>
          <AppHeader />
        </header>
      )}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> 
        </Routes>
      </main>
    </div>
  );
}

export default App;
