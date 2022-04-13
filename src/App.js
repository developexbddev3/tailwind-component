import { Route, Routes } from "react-router-dom"; 
import Home from "./pages/Home";
import About from "./pages/About";
import Video from "./pages/Video";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/video" element={<Video />} />
    </Routes>
  );
}

export default App;
