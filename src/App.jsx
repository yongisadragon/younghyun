import { useState } from "react";
import { Navigate, Route, Routes, useSearchParams } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./common/navBar/NavBar";
import Works from "./components/works/Works";
import About from "./pages/about/About";
export default function App() {
  const [isAbout, setIsAbout] = useState(false);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works/*" element={<Home />} />
        <Route path="/works/:workTitle" element={<Works />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <br />
      <NavBar setIsAbout={setIsAbout} />
      {isAbout && <About setIsAbout={setIsAbout} />}
    </>
  );
}
