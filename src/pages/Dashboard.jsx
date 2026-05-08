import { useEffect, useState } from "react";

import Hero from "../components/dashboard/Hero";
import Stats from "../components/dashboard/Stats";
import Activity from "../components/dashboard/Activity";
import MyCourses from "../components/dashboard/MyCourses";

function Dashboard() {

  const [enrolledCourses, setEnrolledCourses] =
    useState([]);

  // =========================
  // Load enrolled courses
  // =========================
  useEffect(() => {

    const savedCourses =
      localStorage.getItem("enrolledCourses");

    if (savedCourses) {

      setEnrolledCourses(
        JSON.parse(savedCourses)
      );

    }

  }, []);

  // =========================
  // Course Images
  // =========================
  const courseImages = {

    "Tech for Newbies":
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",

    "Frontend Web Development":
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",

    "Backend Web Development":
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",

    "Fullstack Web Development":
      "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",

    "Data Analysis":
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",

    "UI/UX Design":
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop",

    "Digital Marketing":
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312",

    "Cyber Security":
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",

    "Cloud Computing / DevOps":
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa",

    "Mobile App Development":
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",

  };

  return (

    <div className="space-y-10">

      {/* ========================= */}
      {/* Hero Section */}
      {/* ========================= */}
      <Hero
        enrolledCourses={enrolledCourses}
      />

      {/* ========================= */}
      {/* Statistics */}
      {/* ========================= */}
      <Stats
        enrolledCourses={enrolledCourses}
      />

      {/* ========================= */}
      {/* Activity + Progress */}
      {/* ========================= */}
      <Activity />

      {/* ========================= */}
      {/* My Courses */}
      {/* ========================= */}
      <MyCourses
        enrolledCourses={enrolledCourses}
        courseImages={courseImages}
      />

    </div>

  );
}

export default Dashboard;