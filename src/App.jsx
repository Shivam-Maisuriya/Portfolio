import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Project from "./components/Project/Project";

function App() {
  return (
    <>
      <div className="dark:bg-slate-800 dark:text-purple-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
