import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Courses from "./pages/Courses";
import Dashboard from "./pages/Dashboard";
import CourseDetails from "./pages/CourseDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="courses" element={<Courses />} />
        <Route path="course/:id" element={<CourseDetails />} />
      </Route>
    </Routes>
  );
}

export default App;