import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import News from "./pages/News";
import CourseDetails from "./pages/CourseDetails";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/news" element={<News />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
