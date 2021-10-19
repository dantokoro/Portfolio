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
      <div className="hobby-list d-flex justify-content-around">
        <motion.button variants={hoverVariants} whileHover="hover">
          Võ thuật
        </motion.button>
        <motion.button variants={hoverVariants} whileHover="hover">
          Trau dồi kiến thức
        </motion.button>
        <motion.button variants={hoverVariants} whileHover="hover">
          Trải nghiệm
        </motion.button>
      </div>
      <div className="hobby-content container">
        <p>
          Mình đã tập võ tổng cộng được khoảng 3 4 năm gì đó. Dưới đây là cảm
          nhận của mình với những môn võ đã tập qua.
        </p>
        <p>
          <b>Vịnh Xuân</b> là môn võ với nền tảng lấy nhu chế cương. Lối đánh
          của môn võ này rất dẻo dai, uyển chuyển, thiên về đỡ gạt và phản đòn.
          Chúng ta thường bắt gặp những ông cụ tập Vịnh Xuân ở công viên một
          cách nhẹ nhàng, điềm đạm với mục đích rèn luyện sức khỏe. Hay đôi khi
          cũng thấy một số võ sư Vịnh Xuân bị các võ sĩ Boxing đấm sấp mặt trên
          sàn đấu. Tuy nhiên mình tin Vịnh Xuân không hề yếu, chỉ là không hợp
          thời thế. Vịnh Xuân, hay những môn võ cổ truyền của Việt Nam và Trung
          Quốc nói chung, sinh ra trong thời chiến tranh vũ khí lạnh, do đó các
          môn võ này sẽ mạnh ở những đòn đánh hiểm hóc, triệt hạ, hay để giết
          người. Đây là những điều không phù hợp với thời hiện đại, khi mà võ
          thuật chủ yếu để rèn luyện sức khỏe và thi đấu thể thao. Cá nhân mình
          thích Vịnh Xuân ở sự điềm đạm, nhẹ nhàng, triết lý lấy nhu chế cương
          khác những môn võ hổ báo mà chúng ta thường gặp.
        </p>
        <p>
          Taekwondo là môn võ thiên về sử dụng các đòn đá. Mình từng bị trấn
          thương nhẹ cơ chân do tập lung tung mà không khởi động. Cũng vì trấn
          thương này mà mình nghỉ luôn CLB Taekwondo.
        </p>
      </div>
    </div>
  );
};

export default Hobby;
