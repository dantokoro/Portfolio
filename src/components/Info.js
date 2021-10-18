import React from "react";
import { motion } from "framer-motion";
import "./scss/Info.scss";

const hoverVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
    },
  },
  initialLeft: { x: -250, opacity: 0 },
  animateLeft: {
    x: -10,
    opacity: 1,
    transition: { delay: 0.2, type: "spring", stiffness: 120 },
  },
  initialRight: { x: 250, opacity: 0 },
  animateRight: {
    x: 10,
    opacity: 1,
    transition: { delay: 0.2, type: "spring", stiffness: 120 },
  },
};

const Info = () => {
  return (
    <div className="info d-flex justify-content-around">
      <motion.div
        className="birth d-flex flex-column align-items-center"
        variants={hoverVariants}
        whileHover="hover"
        initial="initialLeft"
        animate="animateLeft"
      >
        <div className="info-title">Năm sinh</div>
        <div className="birth-value">
          <h2>1998</h2>
        </div>
      </motion.div>
      <motion.div
        className="live d-flex flex-column align-items-center"
        variants={hoverVariants}
        whileHover="hover"
        initial="initialLeft"
        animate="animateLeft"
      >
        <div className="info-title">Nơi ở hiện tại</div>
        <div className="live-value">
          <h2>Hadoong</h2>
        </div>
      </motion.div>
      <motion.div
        className="relationship d-flex flex-column align-items-center"
        variants={hoverVariants}
        whileHover="hover"
        initial="initialRight"
        animate="animateRight"
      >
        <div className="info-title">Tình trạng quan hệ</div>
        <div className="relationship-value">
          <img
            src="https://res.cloudinary.com/dbzfjnlhl/image/upload/v1634480569/Portfolio/2972017_c9rv9o.png"
            class="h-80px"
            alt="flower"
          />
        </div>
      </motion.div>
      <motion.div
        className="character d-flex flex-column align-items-center"
        variants={hoverVariants}
        whileHover="hover"
        initial="initialRight"
        animate="animateRight"
      >
        <div className="info-title">Nhóm tính cách</div>
        <div className="character-value">
          <h2>ENTJ</h2>
        </div>
      </motion.div>
    </div>
  );
};

export default Info;
