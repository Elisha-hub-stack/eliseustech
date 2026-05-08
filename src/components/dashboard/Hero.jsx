import { useNavigate } from "react-router-dom";

function Hero({ enrolledCourses }) {
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 p-8 md:p-12 text-white shadow-2xl">

      {/* Glow */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 left-0 w-60 h-60 bg-cyan-400/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

        {/* Left */}
        <div className="max-w-2xl">

          <p className="uppercase tracking-[4px] text-blue-200 text-sm mb-3">
            TechTutors Tech Academy
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Build Your Future In Tech 🚀
          </h1>

          <p className="mt-5 text-blue-100 text-lg leading-relaxed">
            Learn software engineering, cybersecurity,
            UI/UX, cloud computing, data analysis and more.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            <button
              onClick={() => navigate("/courses")}
              className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              Explore Courses
            </button>

            <button className="bg-white/10 border border-white/20 backdrop-blur px-6 py-3 rounded-xl hover:bg-white/20 transition">
              Watch Overview
            </button>

          </div>

        </div>

        {/* Right Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 w-full max-w-sm shadow-xl">

          <h3 className="text-xl font-bold mb-5">
            Student Overview
          </h3>

          <div className="space-y-5">

            <div className="flex items-center justify-between">

              <span className="text-blue-100">
                Courses Enrolled
              </span>

              <span className="text-3xl font-bold">
                {enrolledCourses.length}
              </span>

            </div>

            <div className="flex items-center justify-between">

              <span className="text-blue-100">
                In Progress
              </span>

              <span className="text-3xl font-bold">
                {enrolledCourses.length}
              </span>

            </div>

            <div className="flex items-center justify-between">

              <span className="text-blue-100">
                Completed
              </span>

              <span className="text-3xl font-bold">
                0
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Hero;