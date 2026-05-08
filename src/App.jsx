import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";

import Login from "./pages/Login";
import Register from "./pages/Register";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      {/* ✅ Public Routes */}
      <Route path="/login" element={<Login />} />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* ✅ Protected LMS Routes */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >

        {/* Dashboard */}
        <Route
          index
          element={<Dashboard />}
        />

        {/* Courses */}
        <Route
          path="courses"
          element={<Courses />}
        />

        {/* Course Player */}
        <Route
          path="course/:id"
          element={<CourseDetails />}
        />

      </Route>

    </Routes>
  );
}

export default App;