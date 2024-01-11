import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <NavLink to={"/"}>Works</NavLink>
      <NavLink to={"/?about=leeyounghyun"}>About</NavLink>
      <div>Instagram</div>
    </>
  );
}
