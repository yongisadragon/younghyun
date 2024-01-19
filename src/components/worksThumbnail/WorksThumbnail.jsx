import React from "react";
import worksData from "../../data/worksData";
import styles from "./WorksThumbnail.module.css";
export default function WorksThumbnail() {
  //map돌리기
  return (
    <div className={styles.container}>
      {worksData.map((work) => (
        <div>
          {/* 작품 이미지 */}
          <img src={`/images/${work.image}`} alt="test" />
          <div>
            {/* 작품정보 */}
            <p>{work.title}</p>
            <p>{work.year}</p>
            <p>{work.materials}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
