import React, { useEffect, useRef, useState } from "react";
import worksData from "../../data/worksData";
import styles from "./WorksThumbnail.module.css";
import WorksIndex from "../worksIndex/WorksIndex";
import { useInView } from "react-intersection-observer";

export default function WorksThumbnail() {
  //scrollRef에 각 썸네일의 ref를 배열로 담아 WorksIndex에 props로 전달. WorksIndex에는 foward필요.
  // const [isVisible, setIsVisible] = useState();
  const { ref: rret, inView: isVisible } = useInView();
  const scrollRef = useRef([]);
  const rref = useRef();
  console.log(scrollRef);

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0];
  //     console.log(entry);
  //     setIsVisible(entry.isIntersecting);
  //   });
  //   observer.observe(scrollRef.current[0]);
  // }, []);

  return (
    <div className={styles.container}>
      <WorksIndex ref={scrollRef} />
      <div ref={rref}>{isVisible ? "special" : "no"}</div>

      {worksData.map((work, i) => (
        //{}안에는 js문법만, ${} 안에는 전부 문자열화됨. 즉 `styles.${work.layout}` 과 같이 쓰면 work.layout 자체가 js문법이므로 ${} 안에는 못들어옴. 그래서 대활호 접근으로 바꿔야 인식됨.
        <div
          ref={(el) => (scrollRef.current[i] = el)}
          className={`${styles[work.layout]}`}
          key={work.id}>
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
