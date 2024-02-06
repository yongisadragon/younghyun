import React, { forwardRef, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import worksData from "../../data/worksData";
import styles from "./WorksIndex.module.css";
const WorksIndex = (props, ref) => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handlePosition = () => {
      const scrollPosition = window.scrollY;
      // 썸네일들의 Y포지션값 계산해서 배열
      const thumbnailsY = ref.current.map((thumb) => thumb.offsetTop);
      //현재 스크롤위치의 idx계산
      const currentIndex = thumbnailsY.findIndex((el) => el > scrollPosition);

      setCurrentPosition(currentIndex === -1 ? null : currentIndex);
    };

    window.addEventListener("scroll", handlePosition);
    return () => window.removeEventListener("scroll", handlePosition);
  }, [ref]);

  const handleScroll = (i) => {
    ref.current[i].scrollIntoView({ behavior: "smooth" });
  };

  const handleLinkTo = (workName, idx) => {
    if (currentPosition === ref.current[idx]) {
      navigate(`/works/${workName}`);
    } else {
      handleScroll(idx);
    }
  };

  console.log(currentPosition);

  return (
    <div className={styles.container}>
      {worksData.map((work, idx) => (
        <div
          key={work.id}
          className={currentPosition === idx ? styles.selected : styles.links}
          onClick={() => {
            handleLinkTo(work.name, idx);
          }}>
          {`${work.id}. ${work.name.replace("-", " ")}`}
        </div>
      ))}
    </div>
  );
};

export default forwardRef(WorksIndex);
