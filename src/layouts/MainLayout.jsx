import { useState } from "react";

import {
  LayoutDashboard,
  BookOpen,
  LogOut,
  Menu,
  X,
} from "lucide-react";

import {
  Link,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";

function MainLayout() {

  const navigate = useNavigate();
  const location = useLocation();

  // Mobile sidebar state
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  // Logout
  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");

    navigate("/login");
  };

  // Navigation Links
  const navLinks = [
    {
      name: "Dashboard",
      path: "/",
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: "Courses",
      path: "/courses",
      icon: <BookOpen size={20} />,
    },
  ];

  return (

    <div className="min-h-screen bg-gray-100 flex">

      {/* ========================= */}
      {/* Overlay */}
      {/* ========================= */}
      {sidebarOpen && (

        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        ></div>

      )}

      {/* ========================= */}
      {/* Sidebar */}
      {/* ========================= */}
      <aside
        className={`fixed md:static top-0 left-0 z-50 h-screen w-64 bg-white shadow-xl transform transition-transform duration-300 flex flex-col

        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }

        md:translate-x-0`}
      >

        {/* Logo */}
        <div className="p-6 border-b flex items-center justify-between">

          <div>

            <h1 className="text-2xl font-bold text-blue-600">
              TechTutors
            </h1>

            <p className="text-sm text-gray-500 mt-1">
              LMS Dashboard
            </p>

          </div>

          {/* Close button mobile */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="md:hidden"
          >

            <X size={24} />

          </button>

        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">

          {navLinks.map((link) => {

            const isActive =
              location.pathname === link.path;

            return (

              <Link
                key={link.name}
                to={link.path}
                onClick={() =>
                  setSidebarOpen(false)
                }
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition

                ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >

                {link.icon}

                <span>{link.name}</span>

              </Link>

            );
          })}

        </nav>

        {/* Logout */}
        <div className="p-4 border-t">

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition"
          >

            <LogOut size={18} />

            Logout

          </button>

        </div>

      </aside>

      {/* ========================= */}
      {/* Main Content */}
      {/* ========================= */}
      <main className="flex-1 p-4 md:p-6">

        {/* Topbar */}
        <div className="bg-white rounded-2xl shadow p-4 mb-6 flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-4">

            {/* Hamburger */}
            <button
              onClick={() =>
                setSidebarOpen(true)
              }
              className="md:hidden"
            >

              <Menu size={28} />

            </button>

            <div>

              <h2 className="text-xl font-bold">
                TechTutors LMS
              </h2>

              <p className="text-sm text-gray-500">
                Learn modern tech skills professionally
              </p>

            </div>

          </div>

        </div>

        {/* Page Content */}
        <Outlet />

      </main>

    </div>
  );
}

export default MainLayout;