import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CourseDetails() {

  const { id } = useParams();

  // Demo lessons
  const lessons = [

    {
      id: 1,
      title: "Introduction to the Course",
      duration: "10 mins",
      video:
        "https://www.youtube.com/embed/Ke90Tje7VS0",
    },

    {
      id: 2,
      title: "HTML Fundamentals",
      duration: "18 mins",
      video:
        "https://www.youtube.com/embed/qz0aGYrrlhU",
    },

    {
      id: 3,
      title: "CSS Crash Course",
      duration: "25 mins",
      video:
        "https://www.youtube.com/embed/yfoY53QXEnI",
    },

    {
      id: 4,
      title: "JavaScript Basics",
      duration: "30 mins",
      video:
        "https://www.youtube.com/embed/W6NZfCO5SIk",
    },

  ];

  // Active lesson
  const [activeLesson, setActiveLesson] =
    useState(lessons[0]);
  
  const [completedLessons, setCompletedLessons] =
    useState([]);

  useEffect(() => {

    const savedProgress =
      localStorage.getItem(`course-${id}-progress`);

    if (savedProgress) {

      setCompletedLessons(
        JSON.parse(savedProgress)
      );

    }

  }, [id]);

    const markLessonComplete = () => {

    // Avoid duplicates
    if (
      completedLessons.includes(activeLesson.id)
    ) {
      return;
    }

    const updatedProgress = [
      ...completedLessons,
      activeLesson.id,
    ];

    setCompletedLessons(updatedProgress);

    // Save to localStorage
    localStorage.setItem(
      `course-${id}-progress`,
      JSON.stringify(updatedProgress)
    );
  };

    const progressPercentage = Math.round(
    (completedLessons.length / lessons.length) * 100
  );

  return (

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

      {/* ========================= */}
      {/* Video Section */}
      {/* ========================= */}
      <div className="lg:col-span-2">

        {/* Video Player */}
        <div className="bg-black rounded-3xl overflow-hidden shadow-xl">

          <iframe
            className="w-full aspect-video"
            src={activeLesson.video}
            title={activeLesson.title}
            allowFullScreen
          ></iframe>

        </div>

        {/* Lesson Info */}
        <div className="bg-white rounded-3xl shadow p-6 mt-6">

          <h1 className="text-3xl font-bold">
            {activeLesson.title}
          </h1>

          <p className="text-gray-500 mt-3">
            Learn modern web development with practical lessons and real-world examples.
          </p>

          {/* Progress bar*/}
          <div className="mt-6">

            <div className="flex justify-between mb-2">

              <span className="font-medium">
                Course Progress
              </span>

              <span className="text-blue-600 font-semibold">
                {progressPercentage}%
              </span>

            </div>

            <div className="w-full bg-gray-200 rounded-full h-3">

              <div className="bg-blue-600 h-3 rounded-full style={{ width: `${progressPercentage}%` }}"></div>

            </div>

          </div>

        </div>

      </div>

      <button
        onClick={markLessonComplete}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">

        {completedLessons.includes(activeLesson.id)
          ? "Lesson Completed ✅"
          : "Mark As Complete"}

      </button>

      {/* ========================= */}
      {/* Lessons Sidebar */}
      {/* ========================= */}
      <div className="bg-white rounded-3xl shadow p-6 h-fit">

        <h2 className="text-2xl font-bold mb-6">
          Course Curriculum
        </h2>

        <div className="space-y-4">

          {lessons.map((lesson) => (

            <button
              key={lesson.id}
              onClick={() =>
                setActiveLesson(lesson)
              }
              className={`w-full text-left p-4 rounded-2xl transition border

              ${
                activeLesson.id === lesson.id
                  ? "bg-blue-600 text-white border-blue-600"
                  : "hover:bg-gray-50 border-gray-200"
              }`}
            >

              <div className="flex items-center justify-between">

                <h3 className="font-semibold">
                  {lesson.title}
                </h3>

                {completedLessons.includes(lesson.id) && (
                  <span>
                    ✅
                  </span>
                )}

              </div>

              <p
                className={`text-sm mt-1

                ${
                  activeLesson.id === lesson.id
                    ? "text-blue-100"
                    : "text-gray-500"
                }`}
              >

                {lesson.duration}

              </p>

            </button>

          ))}

        </div>

      </div>

    </div>

  );
}

export default CourseDetails;