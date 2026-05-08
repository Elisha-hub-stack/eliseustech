import { useNavigate } from "react-router-dom";

function MyCourses({
  enrolledCourses,
  courseImages,
}) {
  const navigate = useNavigate();

  return (
    <div>

      {/* Header */}
      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold">
          My Courses
        </h2>

        <button
          onClick={() => navigate("/courses")}
          className="text-blue-600 font-medium"
        >
          Browse More
        </button>

      </div>

      {/* Empty State */}
      {enrolledCourses.length === 0 ? (

        <div className="bg-white rounded-3xl shadow p-10 text-center">

          <h3 className="text-2xl font-bold mb-3">
            No Courses Yet
          </h3>

          <p className="text-gray-500 mb-6">
            You have not enrolled in any course yet.
          </p>

          <button
            onClick={() => navigate("/courses")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
          >
            Explore Courses
          </button>

        </div>

      ) : (

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {enrolledCourses.map((course) => (

            <div
              key={course.id}
              className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-xl transition duration-300"
            >

              {/* Image */}
              <div className="relative h-52">

                <img
                  src={courseImages[course.title]}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Course Title */}
                <div className="absolute bottom-4 left-4">

                  <h3 className="text-white text-xl font-bold">
                    {course.title}
                  </h3>

                </div>

              </div>

              {/* Content */}
              <div className="p-6">

                {/* Duration */}
                <p className="text-gray-500">
                  Duration: {course.duration}
                </p>

                {/* Price */}
                <div className="mt-3">

                  <p className="text-blue-600 font-bold text-lg">
                    ₦
                    {course.pricePhysical
                      ? course.pricePhysical.toLocaleString()
                      : "N/A"}
                  </p>

                  {course.priceOnline && (

                    <p className="text-green-600 text-sm mt-1">

                      Online:
                      ₦
                      {course.priceOnline.toLocaleString()}

                    </p>

                  )}

                </div>

                {/* Progress */}
                <div className="mt-5">

                  <div className="flex justify-between mb-2">

                    <span className="text-sm text-gray-500">
                      Progress
                    </span>

                    <span className="text-sm font-semibold">
                      35%
                    </span>

                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-3">

                    <div className="bg-blue-600 h-3 rounded-full w-[35%]"></div>

                  </div>

                </div>

                {/* Button */}
                <button
                  onClick={() =>
                    navigate(`/course/${course.id}`)
                  }
                  className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl transition"
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

export default MyCourses;