import React from "react";
import styles from "./About.module.css";
import { useNavigate } from "react-router-dom";
export default function About() {
  let navigate = useNavigate();
  return (
    <div className={styles.back}>
      <div>
        <div>younghyun!!</div>
        <p onClick={() => navigate(-1)}>back</p>
      </div>
    </div>
  );
}
