import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import 'primeicons/primeicons.css';
import Auth from './pages/Auth';
import Cookies from 'universal-cookie';
import Home from './pages/Home';
import NavBar from './components/home/NavBar';
import Expense  from './pages/Expense';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'));

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
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/expense' element={<Expense />} /> 
      </Routes>
    </div>
  );
}

export default App;