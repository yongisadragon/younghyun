import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./components/Works";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works/*" element={<Home />} />
        <Route path="/works/:title" element={<Works />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;