import React from "react";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
    },
  },
};

const Header = () => {
  return (
    <header>
      {/* <div className="logo">
        <svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </svg>
      </div> */}
      <motion.div
        className="title d-flex justify-content-between"
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <div className="life-work-mode">
          <motion.button variants={buttonVariants} whileHover="hover">
            Cuộc sống
          </motion.button>
          <motion.button variants={buttonVariants} whileHover="hover">
            Công việc
          </motion.button>
        </div>
        <div className="language-mode">
          <motion.button variants={buttonVariants} whileHover="hover">
            VI
          </motion.button>
          <motion.button variants={buttonVariants} whileHover="hover">
            EN
          </motion.button>
          <motion.button variants={buttonVariants} whileHover="hover">
            JA
          </motion.button>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
