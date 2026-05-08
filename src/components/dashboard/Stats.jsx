function Stats({ enrolledCourses }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Courses Enrolled */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-6 rounded-2xl shadow-lg">

        <h3 className="text-sm uppercase tracking-wide">
          Courses Enrolled
        </h3>

        <p className="text-4xl font-bold mt-3">
          {enrolledCourses.length}
        </p>

      </div>

      {/* Completed */}
      <div className="bg-gradient-to-r from-green-400 to-green-600 text-white p-6 rounded-2xl shadow-lg">

        <h3 className="text-sm uppercase tracking-wide">
          Completed
        </h3>

        <p className="text-4xl font-bold mt-3">
          0
        </p>

      </div>

      {/* In Progress */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-2xl shadow-lg">

        <h3 className="text-sm uppercase tracking-wide">
          In Progress
        </h3>

        <p className="text-4xl font-bold mt-3">
          {enrolledCourses.length}
        </p>

      </div>

    </div>
  );
}

export default Stats;