import React from "react";
import worksData from "../../data/worksData";
import styles from "./WorksThumbnail.module.css";
export default function WorksThumbnail() {
  //map돌리기
  return (
    <div className={styles.container}>
      {worksData.map((work) => (
        <img src={`/images/${work.image}`} alt="test" />
      ))}
    </div>
  );
}
