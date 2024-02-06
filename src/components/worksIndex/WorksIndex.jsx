import React, { forwardRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import worksData from "../../data/worksData";
import styles from "./WorksIndex.module.css";
const WorksIndex = (props, ref) => {
  const [currentScroll, setCurrentScroll] = useState(false);
  const navigate = useNavigate();
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
          onClick={() => {
            currentScroll === ref.current[idx]
              ? handleLinkTo(work.name, idx)
              : handleScroll(idx);
          }}
          className={
            currentScroll === ref.current[idx] ? styles.selected : styles.links
          }
          key={work.id}>
          {`${work.id}. ${work.name.replace("-", " ")}`}
        </div>
      ))}
    </div>
  );
};

export default forwardRef(WorksIndex);
