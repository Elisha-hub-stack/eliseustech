import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // ✅ Load enrolled courses from localStorage
  useEffect(() => {
    const savedCourses = localStorage.getItem("enrolledCourses");

    if (savedCourses) {
      setEnrolledCourses(JSON.parse(savedCourses));
    }
  }, []);

  // ✅ Course Images
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
    <div className="space-y-8">

      {/* ✅ Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-lg">
        
        <h1 className="text-3xl font-bold">
          Welcome back 👋
        </h1>

        <p className="mt-2 text-blue-100">
          Continue your learning journey with TechTutors Tech Academy.
        </p>

      </div>

      {/* ✅ Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Courses Enrolled */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl shadow-lg">

          <h3 className="text-sm uppercase tracking-wide opacity-80">
            Courses Enrolled
          </h3>

          <p className="text-4xl font-bold mt-3">
            {enrolledCourses.length}
          </p>

        </div>

        {/* Completed */}
        <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-2xl shadow-lg">

          <h3 className="text-sm uppercase tracking-wide opacity-80">
            Completed
          </h3>

          <p className="text-4xl font-bold mt-3">
            0
          </p>

        </div>

        {/* In Progress */}
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-2xl shadow-lg">

          <h3 className="text-sm uppercase tracking-wide opacity-80">
            In Progress
          </h3>

          <p className="text-4xl font-bold mt-3">
            {enrolledCourses.length}
          </p>

        </div>

      </div>

      {/* ✅ My Courses Header */}
      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold">
          My Courses
        </h2>

        <button
          onClick={() => navigate("/courses")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
        >
          Browse Courses
        </button>

      </div>

      {/* ✅ Empty State */}
      {enrolledCourses.length === 0 ? (

        <div className="bg-white rounded-2xl p-12 shadow text-center">

          <h3 className="text-2xl font-bold mb-3">
            No Courses Yet
          </h3>

          <p className="text-gray-500 mb-6">
            Start learning by enrolling in one of our professional tech courses.
          </p>

          <button
            onClick={() => navigate("/courses")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
          >
            Explore Courses
          </button>

        </div>

      ) : (

        /* ✅ Course Cards */
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {enrolledCourses.map((course) => (

            <div
              key={course.id}
              className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-2xl transition duration-300"
            >

              {/* ✅ Course Image */}
              <div className="relative h-52">

                <img
                  src={courseImages[course.title]}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                {/* Course Title */}
                <div className="absolute bottom-4 left-4 right-4">

                  <h3 className="text-white text-xl font-bold">
                    {course.title}
                  </h3>

                </div>

              </div>

              {/* ✅ Course Content */}
              <div className="p-6">

                {/* Duration */}
                <div className="flex items-center justify-between mb-3">

                  <span className="text-gray-500 text-sm">
                    Duration
                  </span>

                  <span className="font-medium">
                    {course.duration}
                  </span>

                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-6">

                  <span className="text-gray-500 text-sm">
                    Course Fee
                  </span>

                  <span className="text-blue-600 font-bold">
                    {course.price}
                  </span>

                </div>

                {/* Continue Learning */}
                <button
                  onClick={() =>
                    navigate(`/course/${course.id}`)
                  }
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition font-medium"
                >
                  Continue Learning
                </button>

              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;