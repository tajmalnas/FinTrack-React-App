import { Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState, useRef } from 'react';
import './App.css';
import 'primeicons/primeicons.css';
import Auth from './pages/Auth';
import Cookies from 'universal-cookie';
import Home from './pages/Home';
import NavBar from './components/home/NavBar';
import Expense from './pages/Expense';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pro from './pages/Pro';
import About from './pages/About';
import './fade.css'; 
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'));
  const location = useLocation();
  const nodeRef = useRef(null); 

  if (!isAuth) {
    return (
      <div className='login'>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <div className='App'>
      <ToastContainer />
      <NavBar />
      <TransitionGroup>
        <CSSTransition key={location.key} classNames='fade' timeout={300} nodeRef={nodeRef}>
          <div ref={nodeRef}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/expense' element={<Expense />} />
              <Route path='/pro' element={<Pro />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
