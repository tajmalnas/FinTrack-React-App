import React from 'react';
import './Pro.css'; 
import Lottie from 'lottie-react'
import animationData from '../assets/21192-premium-gold.json'
const ProPage = () => {

  return (
    <div className="pro-page">
     <div className='lottie-animation'>
      <Lottie animationData={animationData} />
      </div>
      <div className="pro-content">     
        <h2>Pro is Coming Soon!</h2>
        <p>Unlock premium features to take your personal finance tracking to the next level.</p>
        <div className="feature-list">
          <div className="feature">
            <h3>Advanced Budgeting</h3>
            <p>Create custom budgets, track expenses, and get detailed insights into your spending habits.</p>
          </div>

          <div className="feature">
            <h3>Goal Tracking</h3>
            <p>Set financial goals, track your progress, and stay motivated to achieve your targets.</p>
          </div>

          <div className="feature">
            <h3>Custom Reports</h3>
            <p>Generate comprehensive reports to analyze your financial data and make informed decisions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProPage;
