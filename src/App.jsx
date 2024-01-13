import { Navigate, Route, Routes, useSearchParams } from "react-router-dom";
import Home from "./pages/Home";
import Works from "./components/Works";
import NavBar from "./common/NavBar";
import About from "./pages/About";
import styles from "./App.module.css";
function App() {
  const [about] = useSearchParams();
  const isAbout = about.get("about") === "leeyounghyun";

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works/*" element={<Home />} />
        <Route path="/works/:title" element={<Works />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <NavBar />
      {isAbout && <About />}
    </>
  );
}

export default App;
