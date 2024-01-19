import React from "react";
import { NavLink } from "react-router-dom";
import worksData from "../../data/worksData";
import styles from "./WorksIndex.module.css";
export default function WorksIndex() {
  return (
    <div className={styles.container}>
      {worksData?.map((work) => (
        <NavLink key={work.id} to={`/works/work${work.id}`}>
          {work.title}
        </NavLink>
      ))}
    </div>
  );
}
