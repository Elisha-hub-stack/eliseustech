function Navbar() {
  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-lg font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <span className="text-gray-600">Hello, Elisha</span>

        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
          E
        </div>
      </div>
    </div>
  );
}

export default Navbar;