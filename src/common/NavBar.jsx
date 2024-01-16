import React from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import styles from "./NavBar.module.css";
export default function NavBar() {
  const [searchAbout, setSearchAbout] = useSearchParams();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <div onClick={() => navigate("/")}>Works</div>
        <div
          onClick={() => {
            setSearchAbout({ about: "leeyounghyun" });
          }}>
          About
        </div>
        <div
          onClick={() => {
            window.open("https://www.instagram.com/leeygnhn/", "_blank");
          }}>
          Instagram
        </div>
      </div>
    </div>
  );
}
