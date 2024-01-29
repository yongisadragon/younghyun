import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./NavBar.module.css";
export default function NavBar({ setIsAbout }) {
  const [searchAbout, setSearchAbout] = useSearchParams();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <div
          onClick={() => {
            navigate("/");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}>
          Works
        </div>
        <div
          onClick={() => {
            // setSearchAbout({ about: "leeyounghyun" });
            setIsAbout(true);
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
