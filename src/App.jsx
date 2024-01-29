import { Suspense, useState, lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./common/navBar/NavBar";
import Works from "./components/works/Works";
import About from "./pages/about/About";
import lenis from "./utils/lenis";

export default function App() {
  const [isAbout, setIsAbout] = useState(false);
  // const Works = lazy(() => import("./components/works/Works"));

  // TBD
  // if (isAbout) {
  //   document.body.style.overflow = "hidden";
  // } else {
  //   document.body.style.overflow = "auto";
  // }

  useEffect(() => {
    lenis();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Home />} />
        <Route path="/works/:workTitle" element={<Works />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <br />
      <NavBar setIsAbout={setIsAbout} />
      {isAbout && <About setIsAbout={setIsAbout} />}
    </>
  );
}
