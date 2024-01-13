import React, { useState } from "react";
import styles from "./About.module.css";
import { useNavigate } from "react-router-dom";

export default function About() {
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(!isOpen);
    navigate(-1);
  };

  return (
    isOpen && (
      <div onClick={handleClose} className={styles.background}>
        <div className={styles.contents} onClick={(e) => e.stopPropagation()}>
          Chogokri is a creative design studio based in Seoul. That name comes
          from a rural village where I first started designing. We work in a
          variety of areas, including furniture, object, and graphic. Chogokri
          is inspired by the surrounding objects and materials and explore
          unique stories through the characteristics of materials, textures, and
          formative ideas.
        </div>
        <p>BACK</p>
      </div>
    )
  );
}
