import React from "react";
import { NavLink } from "react-router-dom";
import worksData from "../data/worksData";
export default function WorksIndex() {
  return (
    <div>
      {worksData?.map((work) => (
        <NavLink key={work.id} to={`/works/work${work.id}`}>
          {work.title}
        </NavLink>
      ))}
    </div>
  );
}
