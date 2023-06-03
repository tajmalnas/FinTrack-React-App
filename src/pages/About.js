import React from 'react'
import './About.css'
import Lottie from 'lottie-react'
import animationData from '../assets/113385-women-finance.json'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div className='about' >
            <h2>This Will be Your Growth Graph</h2>
            <div className='growth-graph'>
                <Lottie animationData={animationData} />
            </div>
            <div className="future-plans-container">
                <h2>FinTrack Future Plans</h2>
                <motion.div
                    className="plans"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <motion.h3
                        className="plan-item"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Finance Report
                    </motion.h3>
                    <motion.h3
                        className="plan-item"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Connect to Wallet
                    </motion.h3>
                    <motion.h3
                        className="plan-item"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Sort by Category
                    </motion.h3>
                    <motion.h3
                        className="plan-item"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        Addition of More Charts
                    </motion.h3>
                </motion.div>
            </div>
        </div>
    )
}

export default About