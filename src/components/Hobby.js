import React from "react";
import { motion } from "framer-motion";
import "./scss/Hobby.scss";

const hoverVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3,
    },
  },
};

const Hobby = () => {
  return (
    <div className="hobby d-flex flex-column">
      <div className="hobby-title d-flex justify-content-center">
        <h2>SỞ THÍCH</h2>
      </div>
      <div className="hobby-list container">
        <div class="row">
          <div class="col d-flex flex-column align-items-center">
            <motion.button variants={hoverVariants} whileHover="hover">
              Võ thuật
            </motion.button>
          </div>
          <div class="col d-flex flex-column align-items-center">
            <motion.button variants={hoverVariants} whileHover="hover">
              Trau dồi kiến thức
            </motion.button>
          </div>
          <div class="col d-flex flex-column align-items-center">
            <motion.button variants={hoverVariants} whileHover="hover">
              Trải nghiệm
            </motion.button>
          </div>
        </div>
      </div>
      <div className="hobby-content container">
        <p>
          Mình đã tập võ tổng cộng được khoảng 3 4 năm. Đây là các môn võ mình
          đã tập.
        </p>
        <div class="row">
          <div class="col d-flex flex-column align-items-center">
            <img
              src="https://res.cloudinary.com/dbzfjnlhl/image/upload/v1634740566/Portfolio/52c92ad593ac34a09275e4bfa122f7e3_1_ou8mi4.png"
              alt="wingchun"
            />
            <h5>Vịnh Xuân Quyền</h5>
          </div>
          <div class="col d-flex flex-column align-items-center">
            <img
              src="https://res.cloudinary.com/dbzfjnlhl/image/upload/v1634740566/Portfolio/63f6f1641e81fc651a0d7ff7261ebc56_1_cgd048.png"
              alt="taekwondo"
            />
            <h5>Taekwondo</h5>
          </div>
          <div class="col d-flex flex-column align-items-center">
            <img
              src="https://res.cloudinary.com/dbzfjnlhl/image/upload/v1634740566/Portfolio/copy_96188495_mbr9yk.png"
              alt="arnis"
            />
            <h5>Arnis</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobby;
