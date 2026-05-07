import { FaHome, FaBook, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkClass =
    "flex items-center gap-3 px-3 py-2 rounded-lg transition";

  const activeClass = "bg-white text-blue-600 font-semibold";

  return (
    <div className="w-64 h-screen bg-gradient-to-b from-blue-600 to-indigo-700 text-white p-5">
      <h2 className="text-2xl font-bold mb-10">TechTutors</h2>

      <ul className="space-y-4">
        
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : "hover:bg-white/20"}`
            }
          >
            <FaHome /> Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : "hover:bg-white/20"}`
            }
          >
            <FaBook /> Courses
          </NavLink>
        </li>

        <li className="flex items-center gap-3 px-3 py-2">
          <FaUser /> Profile
        </li>

      </ul>
    </div>
  );
}

export default Sidebar;