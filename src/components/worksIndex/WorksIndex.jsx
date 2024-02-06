import React, { forwardRef, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import worksData from "../../data/worksData";
import styles from "./WorksIndex.module.css";
const WorksIndex = (props, ref) => {
  const [currentScroll, setCurrentScroll] = useState(false);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const scrollTo = () => {
  //     const scrollPosition = window.scrollY;
  //     // 썸네일들의 Y포지션값 계산해서 배열
  //     const thumbnailsY = ref.current.map((thumb) => thumb.offsetTop);

  //     //현재 스크롤위치의 idx계산
  //     const currentIndex = thumbnailsY.findIndex((el) => el > scrollPosition);

  //     console.log(currentIndex);
  //   };
  //   scrollTo();
  // }, [ref]);

  const handleScroll = (idx) => {
    ref.current[idx].scrollIntoView({ behavior: "smooth" });
    setCurrentScroll(ref.current[idx]);
  };

  const handleLinkTo = (workName, i) => {
    if (currentScroll === ref.current[i]) {
      navigate(`/works/${workName}`);
    }
  };

  return (
    <div className={styles.container}>
      {worksData.map((work, idx) => (
        <div
          key={work.id}
          className={
            currentScroll === ref.current[idx] ? styles.selected : styles.links
          }
          onClick={() => {
            currentScroll === ref.current[idx]
              ? handleLinkTo(work.name, idx)
              : handleScroll(idx);
          }}>
          {`${work.id}. ${work.name.replace("-", " ")}`}
        </div>
      ))}
    </div>
  );
};

export default forwardRef(WorksIndex);
