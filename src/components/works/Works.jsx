// Works.jsx
import React from "react";
import { useParams } from "react-router-dom";
import worksData from "../../data/worksData";

export default function Works() {
  const { workTitle } = useParams();
  const work = worksData.find((work) => work.title === workTitle);
  return (
    <div>
      <div>{work.title.replace("-", " ")}</div>
      <p>{work.year}</p>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet facere
        distinctio, blanditiis possimus tempora illum explicabo excepturi error
        reiciendis a vero voluptas adipisci impedit! Labore alias accusantium
        sequi ratione iste!
      </div>
    </div>
  );
}
