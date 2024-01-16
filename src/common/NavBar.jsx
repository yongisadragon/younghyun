import React from "react";
import { NavLink, useNavigate, useSearchParams } from "react-router-dom";
import styles from "./NavBar.module.css";
export default function NavBar() {
  const [searchAbout, setSearchAbout] = useSearchParams();
  const handleAboutClick = () => {
    setSearchAbout({ about: "leeyounghyun" });
  };

  return (
    <div className={styles.layout}>
      <NavLink to={"/"}>Works</NavLink>
      <div onClick={handleAboutClick}>About</div>
      <div>Instagram</div>
    </div>
  );
}
