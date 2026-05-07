import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    id: 1,
    title: "Tech for Newbies",
    duration: "1 Month",
    price: "₦200,000",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    id: 2,
    title: "Frontend Web Development",
    duration: "2 Months",
    price: "₦250,000",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: 3,
    title: "Backend Web Development",
    duration: "3 Months",
    price: "₦450,000",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  },
  {
    id: 4,
    title: "Fullstack Web Development",
    duration: "4 Months",
    price: "₦550,000",
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72",
  },
  {
    id: 5,
    title: "Data Analysis",
    duration: "2 Months",
    price: "₦250,000",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },
  {
    id: 6,
    title: "UI/UX Design",
    duration: "2 Months",
    price: "₦250,000",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "Digital Marketing",
    duration: "2 Months",
    price: "₦250,000",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312",
  },
  {
    id: 8,
    title: "Cyber Security",
    duration: "2 Months",
    price: "₦350,000",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
  },
  {
    id: 9,
    title: "Cloud Computing / DevOps",
    duration: "3 Months",
    price: "₦550,000",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  },
  {
    id: 10,
    title: "Mobile App Development",
    duration: "3 Months",
    price: "₦500,000",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
  },
];

function Courses() {
  const navigate = useNavigate();

  const [enrolledCourses, setEnrolledCourses] = useState([]);

  // ✅ Load enrolled courses
  useEffect(() => {
    const savedCourses = localStorage.getItem("enrolledCourses");

    if (savedCourses) {
      setEnrolledCourses(JSON.parse(savedCourses));
    }
  }, []);

  // ✅ Handle Enrollment
  const handleEnroll = (course) => {
    const alreadyEnrolled = enrolledCourses.find(
      (item) => item.id === course.id
    );

    if (!alreadyEnrolled) {
      const updatedCourses = [...enrolledCourses, course];

      setEnrolledCourses(updatedCourses);

      localStorage.setItem(
        "enrolledCourses",
        JSON.stringify(updatedCourses)
      );

      alert(`${course.title} enrolled successfully!`);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        Our Courses
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        {courses.map((course) => {

          const isEnrolled = enrolledCourses.find(
            (item) => item.id === course.id
          );

          return (
            <div
              key={course.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300"
            >

              {/* Image */}
              <img
                src={course.image}
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

                <p className="text-blue-600 font-bold mt-2">
                  {course.price}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-4">

                  {/* Enroll */}
                  <button
                    onClick={() => handleEnroll(course)}
                    disabled={isEnrolled}
                    className={`w-full py-2 rounded-lg text-white transition ${
                      isEnrolled
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                  >
                    {isEnrolled ? "Enrolled" : "Enroll Now"}
                  </button>

                  {/* Continue Learning */}
                  {isEnrolled && (
                    <button
                      onClick={() =>
                        navigate(`/course/${course.id}`)
                      }
                      className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                    >
                      Learn
                    </button>
                  )}

                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Courses;