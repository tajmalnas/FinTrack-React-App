import React from 'react';
import LoginForm from '../components/LoginForm';
import './Auth.css';

const Auth = (props) => {
  return (
    <section className='main'>
      <div className='hero'>
        <h1>Welcome to FinTrack</h1>
        <p>Here You Can Track Your Personal Finance and Improve Your Money Managing Skills</p>
      </div>
      <div className='form'>
        <LoginForm setIsAuth = {props.setIsAuth} />
      </div>
    </section>
  );
};

export default Auth;
