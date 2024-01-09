import React from "react";
import { NavLink } from "react-router-dom";

export default function WorksIndex() {
  return (
    <>
      <NavLink to="/works/work1">wroks1</NavLink>
      <NavLink to="/works/work2">wroks2</NavLink>
      <NavLink to="/works/work3">wroks3</NavLink>
    </>
  );
}
