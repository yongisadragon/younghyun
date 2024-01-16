// Works.jsx
import React from "react";
import { useParams } from "react-router-dom";
import worksData from "../data/worksData";
export default function Works() {
  const { workTitle } = useParams();
  const work = worksData.find((work) => work.title === workTitle);

  return (
    <>
      <div>{work.title}</div>
      <p>{work.year}</p>
    </>
  );
}
