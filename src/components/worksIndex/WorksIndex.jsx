import React, { forwardRef, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import worksData from "../../data/worksData";
import styles from "./WorksIndex.module.css";
const WorksIndex = (props, ref) => {
  const [currentScrollPosition, setCurrentScrollPosition] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handlePosition = () => {
      // 3 ~ 3.5 조정
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      // 썸네일들의 Y포지션값 계산해서 배열
      const thumbnailsY = ref.current.map((thumb) => thumb.offsetTop);
      //현재 스크롤위치의 idx계산
      const currentIndex = thumbnailsY.findIndex((el) => el > scrollPosition);
      console.log(scrollPosition);

      // 현재 스크롤이 바닥에 도달했는지 여부 확인
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 40;
      if (isAtBottom) {
        setCurrentScrollPosition(worksData.length - 1);
      } else {
        setCurrentScrollPosition(currentIndex === -1 ? null : currentIndex - 1);
      }
    };

    window.addEventListener("scroll", handlePosition);
    return () => window.removeEventListener("scroll", handlePosition);
  }, [ref]);

  const handleScroll = (workName, idx) => {
    if (currentScrollPosition === idx) {
      navigate(`/works/${workName}`);
    } else {
      ref.current[idx].scrollIntoView({ block: "center", behavior: "smooth" });
    }
  };
  return (
    <div className={styles.container}>
      {worksData.map((work, idx) => (
        <div
          key={work.id}
          className={
            currentScrollPosition === idx ? styles.selected : styles.links
          }
          onClick={() => {
            handleScroll(work.name, idx);
          }}>
          {`${work.id}. ${work.name.replace("-", " ")}`}
        </div>
      ))}
    </div>
  );
};

export default forwardRef(WorksIndex);
