import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/header';
import Home from './components/Home';
import LoginPage from './components/login';
import Signup from './components/signup';
import ForgotPassword from './components/forgotpassword'; 
import Menu from './components/menulanding';
import About from './components/aboutus';  
import Services from './components/services'; 
import Menus from './components/menu';
import Footer from './components/footer';
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
  const hideHeaderFooterPaths = ['/login', '/signup', '/forgot-password'];
  const shouldHideHeaderFooter = hideHeaderFooterPaths.includes(location.pathname);
  
  return (
    <div className='App'>
      {!shouldHideHeaderFooter && (
        <header id='header'>
          <AppHeader />
        </header>
      )}
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <Menu />
              <About />
              <Services />  
            </>
          } />
          <Route path="/menu" element={<Menus />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </main>
      {!shouldHideHeaderFooter && <Footer />} {/* Add Footer here */}
    </div>
  );
}  

export default App;