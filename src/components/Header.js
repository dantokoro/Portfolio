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
      <motion.div
        className="title d-flex justify-content-between"
        initial={{ y: -250 }}
        animate={{ y: -10 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <div className="life-work-mode">
          <motion.button variants={buttonVariants} whileHover="hover" className="button-active">
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
