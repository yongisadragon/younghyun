import React, { useEffect, useState } from "react";
import WorksIndex from "../../components/worksIndex/WorksIndex";
import WorksThumbnail from "../../components/worksThumbnail/WorksThumbnail";
import styles from "./Home.module.css";

export default function Home() {
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.mainLogo}>
        <img src="/images/logo.svg" alt="메인로고" />
      </div>
      <WorksIndex />
      <WorksThumbnail />
    </div>
  );
}
