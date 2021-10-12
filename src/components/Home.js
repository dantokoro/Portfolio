import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      yoyo: 5
    }
  }
}

const Home = () => {
  const [placeholder, setPlaceholder] = useState('');

  const
    string = 'Xin chào, mình là Đăng',
    index = useRef(0);

  useEffect(() => {
    function tick() {
      setPlaceholder(prev => prev + string[index.current]);
      index.current++;
    }
    if (index.current < string.length) {
      let addChar = setInterval(tick, 100);
      return () => clearInterval(addChar);
    }
  }, [placeholder]);

  return (
    <motion.div className="home container d-flex justify-content-between align-items-center"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ delay: 1.5, duration: 1.5 }}
      animate={{ }}
    >
      <div></div>
      <h1>{placeholder}</h1>
      {/* <Link to="/base">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
        >
          Create Your Pizza
        </motion.button>
      </Link> */}
    </motion.div>
  )
}

export default Home;