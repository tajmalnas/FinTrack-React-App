import { Route, Routes } from "react-router-dom"
import { useState } from 'react';
import './App.css';
import Auth from './pages/Auth';
import Cookies from 'universal-cookie';
import Home from './pages/Home';
import NavBar from './components/home/NavBar';
import Expense from "./pages/Expense";
const cookies = new Cookies();

function App() {

  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));

  if (!isAuth) {
    return (
      <div className="login">
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/expenses" element={ <Expense/> } />
      </Routes>
    </div>
  );
}

export default App;
