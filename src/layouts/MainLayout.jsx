import { useState } from "react";

import {
  LayoutDashboard,
  BookOpen,
  LogOut,
  Menu,
  X,
  GraduationCap,
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
      icon: <LayoutDashboard size={18} />,
    },
    {
      name: "Courses",
      path: "/courses",
      icon: <BookOpen size={18} />,
    },
  ];

  return (

    <div className="min-h-screen bg-gray-100 flex">

      {/* ========================= */}
      {/* Mobile Overlay */}
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
        className={`fixed md:static top-0 left-0 z-50 h-screen w-72 bg-white shadow-2xl transform transition-transform duration-300 flex flex-col

        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }

        md:translate-x-0`}
      >

        {/* Logo */}
        <div className="p-6 border-b">

          <div className="flex items-center gap-3">

            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-3 rounded-2xl shadow-lg">
              <GraduationCap size={28} />
            </div>

            <div>

              <h1 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                TechTutors
              </h1>

              <p className="text-sm text-gray-500 mt-1">
                Learning Management System
              </p>

            </div>

          </div>

          {/* Close button mobile */}
          <button
            onClick={() => setSidebarOpen(false)}
            className="absolute top-6 right-5 md:hidden"
          >

            <X size={24} />

          </button>

        </div>

        {/* Navigation */}
        <nav className="flex-1 p-5 space-y-3">

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
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl font-medium transition-all duration-300

                ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >

                {link.icon}

                <span>{link.name}</span>

              </Link>

            );
          })}

        </nav>

        {/* Bottom Card */}
        <div className="mx-5 mb-5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-5 shadow-xl">

          <h3 className="text-lg font-bold">
            Upgrade Your Skills 🚀
          </h3>

          <p className="text-sm text-blue-100 mt-2 leading-relaxed">
            Continue learning modern tech skills and become industry ready.
          </p>

        </div>

        {/* Logout */}
        <div className="p-5 border-t">

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-3 rounded-2xl transition font-medium"
          >

            <LogOut size={18} />

            Logout

          </button>

        </div>

      </aside>

      {/* ========================= */}
      {/* Main Content */}
      {/* ========================= */}
      <main className="flex-1 overflow-hidden">

        {/* ========================= */}
        {/* Top Navbar */}
        {/* ========================= */}
        <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b shadow-sm px-4 md:px-8 py-4 flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-4">

            {/* Mobile Menu */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden"
            >

              <Menu size={28} />

            </button>

            {/* Logo */}
            <div className="hidden md:flex items-center gap-3">

              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-2 rounded-xl shadow-md">
                <GraduationCap size={22} />
              </div>

              <h2 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
                TechTutors LMS
              </h2>

            </div>

          </div>

          {/* Center Navigation */}
          <div className="hidden md:flex items-center gap-3 bg-gray-100 p-2 rounded-2xl shadow-inner">

            {navLinks.map((link) => {

              const isActive =
                location.pathname === link.path;

              return (

                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-5 py-2 rounded-xl font-medium transition-all duration-300

                  ${
                    isActive
                      ? "bg-white shadow text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >

                  {link.name}

                </Link>

              );
            })}

          </div>

          {/* Right */}
          <div className="flex items-center gap-4">

            {/* User */}
            <div className="hidden sm:flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-2xl">

              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-center font-bold">
                T
              </div>

              <div>

                <p className="font-semibold text-sm">
                  TechTutors Student
                </p>

                <p className="text-xs text-gray-500">
                  Active Learner
                </p>

              </div>

            </div>

          </div>

        </header>

        {/* ========================= */}
        {/* Page Content */}
        {/* ========================= */}
        <div className="p-4 md:p-8">

          <Outlet />

        </div>

      </main>

    </div>
  );
}

export default MainLayout;