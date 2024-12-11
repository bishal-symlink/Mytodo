import todoImage from "../assets/todo-png-image.png";

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-r from-slate-300 via-orange-300 to-red-500">
      {/* Navbar Section with glass blur background */}
      <nav className="w-full px-8 py-4 fixed top-0 left-0 flex items-center justify-between backdrop-blur-lg bg-white bg-opacity-30 z-10">
        {/* Left side of navbar (you can add logo or text here if needed) */}
        <div></div>

        {/* Buttons on the right side */}
        <div className="ml-auto flex space-x-6">
          {/* Login Button */}
          <button className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-400 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            Login
          </button>

          {/* Sign Up Button */}
          <button className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-purple-400 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center">
        {" "}
        {/* Adjusted margin-top for navbar space */}
        {/* Todo Image */}
        <img
          src={todoImage}
          alt="Todo Logo"
          style={{ width: "600px", height: "400px" }} // Custom size
        />
      </div>

      {/* Get Started Button */}
      <div>
        <button className="px-8 py-4 text-xl font-semibold text-white bg-gradient-to-r from-red-500 to-white rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-red-700 to-red-500 mr-4">
            Get Started
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
