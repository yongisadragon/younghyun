import React from "react";
import styles from "./About.module.css";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function About({ setIsAbout }) {
  const handleClose = () => {
    // const aboutParam = searchParams.get("about");
    // if (aboutParam) {
    //   searchParams.delete("about");
    //   setSearchParams(searchParams);
    // }
    setIsAbout(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      onClick={handleClose}
      className={styles.background}>
      <div className={styles.contents} onClick={(e) => e.stopPropagation()}>
        Chogokri is a creative design studio based in Seoul. That name comes
        from a rural village where I first started designing. We work in a
        variety of areas, including furniture, object, and graphic. Chogokri is
        inspired by the surrounding objects and materials and explore unique
        stories through the characteristics of materials, textures, and
        formative ideas.
      </div>
      <p>BACK</p>
    </motion.div>
  );
}