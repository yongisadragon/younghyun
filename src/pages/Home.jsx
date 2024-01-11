import React from "react";
import WorksIndex from "../components/WorksIndex";
import NavBar from "../common/NavBar";
import { useSearchParams } from "react-router-dom";
import About from "./About";

export default function Home() {
  const [about] = useSearchParams();
  const isAbout = about.get("about") === "leeyounghyun";

  return (
    <>
      <WorksIndex />
      <br />
      <NavBar />
      {isAbout && <About />}
    </>
  );
}
