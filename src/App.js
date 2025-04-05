import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/header';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <header id='header'>
        <AppHeader />
        </header>
        <main>
          <Home />
        </main>
    </div>
  );
}

export default App;
