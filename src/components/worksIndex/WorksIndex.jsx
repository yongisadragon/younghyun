import React, { forwardRef, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import worksData from "../../data/worksData";
import styles from "./WorksIndex.module.css";
const WorksIndex = (props, ref) => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const handlePosition = () => {
  //     const scrollPosition = window.scrollY + window.innerHeight / 2;
  //     // 썸네일들의 Y포지션값 계산해서 배열
  //     const thumbnailsY = ref.current.map((thumb) => thumb.offsetTop);
  //     //현재 스크롤위치의 idx계산
  //     const currentIndex = thumbnailsY.findIndex((el) => el >= scrollPosition);
  //     console.log(thumbnailsY, scrollPosition, currentIndex);
  //     // setCurrentPosition(currentIndex === -1 ? null : currentIndex);
  //   };

  //   window.addEventListener("scroll", handlePosition);
  //   return () => window.removeEventListener("scroll", handlePosition);
  // }, [ref]);

  const handleScroll = (workName, idx) => {
    if (currentPosition === idx) {
      navigate(`/works/${workName}`);
    } else {
      ref.current[idx].scrollIntoView({ block: "center", behavior: "smooth" });
      setCurrentPosition(idx);
    }
  };

  return (
    <div className={styles.container}>
      {worksData.map((work, idx) => (
        <div
          key={work.id}
          className={currentPosition === idx ? styles.selected : styles.links}
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
