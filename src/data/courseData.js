import { useState, useEffect } from "react";
import { coursesData } from "../data/coursesData";

function Courses() {
  const [enrolled, setEnrolled] = useState([]);

  // Load enrolled courses
  useEffect(() => {
    const saved = localStorage.getItem("enrolledCourses");
    if (saved) {
      setEnrolled(JSON.parse(saved));
    }
  }, []);

  // Save enrolled courses
  useEffect(() => {
    localStorage.setItem("enrolledCourses", JSON.stringify(enrolled));
  }, [enrolled]);

  const handleEnroll = (course) => {
    if (!enrolled.find((c) => c.id === course.id)) {
      setEnrolled([...enrolled, course]);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Our Courses</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {coursesData.map((course) => {
          const isEnrolled = enrolled.find((c) => c.id === course.id);

          return (
            <div
              key={course.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300"
            >
              {/* Image (fallback if none later) */}
              <img
                src={`https://source.unsplash.com/400x300/?tech,${course.title}`}
                alt={course.title}
                className="h-40 w-full object-cover"
              />

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold">
                  {course.title}
                </h3>

                <p className="text-gray-500 mt-2">
                  {course.duration}
                </p>

                {/* 💰 Prices */}
                <p className="text-blue-600 font-bold mt-2">
                  Physical: ₦{course.pricePhysical.toLocaleString()}
                </p>

                {course.priceOnline && (
                  <p className="text-green-600 font-semibold text-sm">
                    Online: ₦{course.priceOnline.toLocaleString()}
                  </p>
                )}

                {/* 🎯 Button */}
                <button
                  onClick={() => handleEnroll(course)}
                  disabled={isEnrolled}
                  className={`mt-4 w-full py-2 rounded-lg ${
                    isEnrolled
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {isEnrolled ? "Enrolled" : "Enroll Now"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;