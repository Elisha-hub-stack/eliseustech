 import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CourseDetails() {
  const { id } = useParams();

  const lessons = [
    {
      title: "Introduction",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content: "Welcome to this course. Let's get started!",
    },
    {
      title: "Getting Started",
      video: "https://www.youtube.com/embed/Ke90Tje7VS0",
      content: "In this lesson, we set up our tools.",
    },
    {
      title: "Core Concepts",
      video: "https://www.youtube.com/embed/w7ejDZ8SWv8",
      content: "Here we learn the main concepts.",
    },
    {
      title: "Project Build",
      video: "https://www.youtube.com/embed/UB1O30fR-EE",
      content: "Now we build a real project.",
    },
  ];

  const [activeLesson, setActiveLesson] = useState(lessons[0]);
  const [completedLessons, setCompletedLessons] = useState([]);

  // 🔥 LOAD FROM STORAGE
  useEffect(() => {
    const saved = localStorage.getItem(`course-${id}`);
    if (saved) {
      setCompletedLessons(JSON.parse(saved));
    }
  }, [id]);

  // 🔥 SAVE TO STORAGE
  useEffect(() => {
    localStorage.setItem(
      `course-${id}`,
      JSON.stringify(completedLessons)
    );
  }, [completedLessons, id]);

  // Mark lesson complete
  const markComplete = () => {
    if (!completedLessons.includes(activeLesson.title)) {
      setCompletedLessons([...completedLessons, activeLesson.title]);
    }
  };

  // Calculate progress
  const progress = Math.round(
    (completedLessons.length / lessons.length) * 100
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      
      {/* Sidebar */}
      <div className="bg-white p-4 rounded-xl shadow">
        <h3 className="font-semibold mb-4">Lessons</h3>

        {lessons.map((lesson, index) => (
          <div
            key={index}
            onClick={() => setActiveLesson(lesson)}
            className={`p-2 rounded cursor-pointer mb-2 flex justify-between ${
              activeLesson.title === lesson.title
                ? "bg-blue-100 text-blue-600 font-semibold"
                : "hover:bg-gray-100"
            }`}
          >
            {lesson.title}

            {completedLessons.includes(lesson.title) && (
              <span className="text-green-500">✓</span>
            )}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="md:col-span-3 bg-white p-6 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-4">
          {activeLesson.title} (Course {id})
        </h2>

        {/* 🎥 Video */}
        <div className="w-full h-64 md:h-96 mb-6">
          <iframe
            className="w-full h-full rounded-lg"
            src={activeLesson.video}
            title="Course Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>

        {/* 📊 Progress */}
        <div className="mb-4">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-green-500 h-3 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-sm mt-1">{progress}% completed</p>
        </div>

        {/* Content */}
        <p className="text-gray-700 mb-6">
          {activeLesson.content}
        </p>

        {/* Button */}
        <button
          onClick={markComplete}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Mark as Complete
        </button>
      </div>

    </div>
  );
}

export default CourseDetails;