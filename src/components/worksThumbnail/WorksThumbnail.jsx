import React from "react";
import worksData from "../../data/worksData";
import styles from "./WorksThumbnail.module.css";

export default function WorksThumbnail() {
  return (
    <div className={styles.container}>
      {worksData.map((work) => (
        //{}안에는 js문법만, ${} 안에는 전부 문자열화됨. 즉 `styles.${work.layout}` 과 같이 쓰면 work.layout 자체가 js문법이므로 ${} 안에는 못들어옴. 그래서 대활호 접근으로 바꿔야 인식됨.
        <div className={`${styles[work.layout]}`} key={work.id}>
          {/* 작품 이미지 */}
          <img src={`/images/${work.image}`} alt="test" />
          <div>
            {/* 작품정보 */}
            <p>{work.name}</p>
            <p>{work.year}</p>
            <p>{work.materials}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
