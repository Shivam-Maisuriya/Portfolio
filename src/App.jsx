import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Project from "./components/Project/Project";
import AboutData from "./components/AboutData";
import ContactData from "./components/ContactData";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <div className="dark:bg-slate-800 dark:text-purple-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/#banner" element={<Banner />} />
          <Route path="/about" element={<AboutData />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<ContactData />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
