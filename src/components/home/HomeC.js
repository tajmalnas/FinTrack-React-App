import React from 'react';
import { motion } from 'framer-motion';
import './HomeC.css';

const HomeC = () => {
  return (
    <div className='main'>
      <section className='page1'>
        <header>
          <h1>
            FinTrack is a Personal Finance Tracker
          </h1>
          <br />
          <h4>
            We can help you track your expenses and income to help you make better financial decisions. This can help you save money and achieve your financial goals.
          </h4>
        </header>
        <div className="content-container">
          <motion.div
            className="content-card"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Track Your Expenses</h2>
            <p>Stay on top of your spending by categorizing and tracking your expenses with ease.</p>
          </motion.div>
          <motion.div
            className="content-card"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2>Manage Your Budget</h2>
            <p>Create and manage your budget to allocate your income effectively and achieve your financial goals.</p>
          </motion.div>
          <motion.div
            className="content-card"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2>Analyze Your Financial Health</h2>
            <p>Get insights into your financial health through detailed reports and visualizations.</p>
          </motion.div>
        </div>

      </section>
    </div>
  );
};

export default HomeC;
