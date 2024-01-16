import { Navigate, Route, Routes, useSearchParams } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./components/Works";
import NavBar from "./common/NavBar";
import About from "./pages/About";
export default function App() {
  const [about] = useSearchParams();
  const isAbout = about.get("about") === "leeyounghyun";

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works/*" element={<Home />} />
        <Route path="/works/:workTitle" element={<Works />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <br />
      <NavBar />
      {isAbout && <About />}
    </>
  );
}
