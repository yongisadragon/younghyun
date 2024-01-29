import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./NavBar.module.css";
export default function NavBar({ setIsAbout }) {
  const [searchAbout, setSearchAbout] = useSearchParams();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <p
          onClick={() => {
            navigate("/");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}>
          Works
        </p>
        <p
          onClick={() => {
            // setSearchAbout({ about: "leeyounghyun" });
            setIsAbout(true);
          }}>
          About
        </p>
        <p
          onClick={() => {
            window.open("https://www.instagram.com/leeygnhn/", "_blank");
          }}>
          Instagram
        </p>
        <p>younghyun.com</p>
      </div>
    </div>
  );
}
