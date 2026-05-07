import { Outlet, Link } from "react-router-dom";

function MainLayout() {
  return (
    <div className="flex">
      
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white min-h-screen p-5">
        <h2 className="text-xl font-bold mb-6">
          TechTutors
        </h2>

        <nav className="space-y-4">
          <Link to="/" className="block hover:text-gray-300">
            Dashboard
          </Link>

          <Link to="/courses" className="block hover:text-gray-300">
            Courses
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 min-h-screen p-6">
        <Outlet />
      </div>

    </div>
  );
}

export default MainLayout;