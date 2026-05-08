function Activity() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

      {/* ========================= */}
      {/* Recent Activity */}
      {/* ========================= */}
      <div className="xl:col-span-2 bg-white rounded-3xl shadow p-6">

        <div className="flex items-center justify-between mb-6">

          <h2 className="text-2xl font-bold">
            Recent Activity
          </h2>

          <button className="text-blue-600 font-medium">
            View All
          </button>

        </div>

        <div className="space-y-5">

          {/* Activity Item */}
          <div className="flex items-start gap-4">

            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
              FE
            </div>

            <div>

              <h4 className="font-semibold">
                Enrolled in Frontend Web Development
              </h4>

              <p className="text-gray-500 text-sm mt-1">
                Start learning HTML, CSS, React and modern frontend technologies.
              </p>

              <span className="text-xs text-gray-400">
                2 hours ago
              </span>

            </div>

          </div>

          {/* Activity Item */}
          <div className="flex items-start gap-4">

            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
              UI
            </div>

            <div>

              <h4 className="font-semibold">
                Completed UI/UX Lesson 1
              </h4>

              <p className="text-gray-500 text-sm mt-1">
                Successfully completed introduction to UI principles.
              </p>

              <span className="text-xs text-gray-400">
                Yesterday
              </span>

            </div>

          </div>

          {/* Activity Item */}
          <div className="flex items-start gap-4">

            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
              CS
            </div>

            <div>

              <h4 className="font-semibold">
                Started Cyber Security Course
              </h4>

              <p className="text-gray-500 text-sm mt-1">
                Learning ethical hacking and cyber defense strategies.
              </p>

              <span className="text-xs text-gray-400">
                3 days ago
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* ========================= */}
      {/* Learning Progress */}
      {/* ========================= */}
      <div className="bg-white rounded-3xl shadow p-6">

        <h2 className="text-2xl font-bold mb-6">
          Learning Progress
        </h2>

        {/* Progress Item */}
        <div className="mb-6">

          <div className="flex justify-between mb-2">

            <span className="font-medium">
              Frontend Development
            </span>

            <span className="text-blue-600 font-semibold">
              75%
            </span>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-3">

            <div className="bg-blue-600 h-3 rounded-full w-[75%]"></div>

          </div>

        </div>

        {/* Progress Item */}
        <div className="mb-6">

          <div className="flex justify-between mb-2">

            <span className="font-medium">
              UI/UX Design
            </span>

            <span className="text-green-600 font-semibold">
              50%
            </span>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-3">

            <div className="bg-green-500 h-3 rounded-full w-[50%]"></div>

          </div>

        </div>

        {/* Progress Item */}
        <div>

          <div className="flex justify-between mb-2">

            <span className="font-medium">
              Cyber Security
            </span>

            <span className="text-purple-600 font-semibold">
              20%
            </span>

          </div>

          <div className="w-full bg-gray-200 rounded-full h-3">

            <div className="bg-purple-500 h-3 rounded-full w-[20%]"></div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Activity;