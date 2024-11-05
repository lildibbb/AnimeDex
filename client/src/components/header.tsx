import { Link } from "react-router-dom";
import { Avatar, AvatarImage } from "../components/ui/avatar";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-indigo-950 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <Avatar>
            <AvatarImage
              src="https://pngimg.com/d/anime_girl_PNG68.png"
              className="mr-3 h-10 w-10"
              alt="Anime Logo"
            />
          </Avatar>
          <span className="text-2xl font-bold">MeowAnime</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-md focus:outline-none"
          aria-label="Toggle Menu"
        >
          <i className={`fa ${menuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
        </button>

        {/* Mobile Auth Buttons */}
        <div className="flex lg:hidden space-x-4">
          <Link
            to="/auth/login"
            className="text-gray-200 hover:bg-gray-600 px-3 py-2 rounded-lg"
          >
            Log in
          </Link>
          <Link
            to="/auth/register"
            className="bg-white text-indigo-500 hover:bg-indigo-700 hover:text-white px-3 py-2 rounded-lg"
          >
            Get started
          </Link>
        </div>

        {/* Navigation Links for Larger Screens */}
        <div
          className={`hidden lg:flex ${
            menuOpen ? "block" : "hidden"
          } w-full lg:w-auto mt-4 lg:mt-0`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6">
            {[
              { path: "/", label: "Home" },
              { path: "/auth/team", label: "Team" },
              { path: "/auth/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="block py-2 lg:py-0 px-4 lg:px-0 hover:text-gray-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Auth Buttons for Larger Screens */}
        <div className="hidden lg:flex space-x-4">
          <Link
            to="/auth/login"
            className="text-gray-200 hover:bg-gray-600 px-4 py-2 rounded-lg"
          >
            Log in
          </Link>
          <Link
            to="/auth/register"
            className="bg-white text-indigo-500 hover:bg-indigo-700 hover:text-white px-4 py-2 rounded-lg"
          >
            Get started
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
