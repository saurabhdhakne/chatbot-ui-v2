import { useState } from "react";
import { FiRefreshCcw } from "react-icons/fi";
import { Link } from "react-router-dom";
import CustomLogo from "../components/CustomLogo";

const LoginPageHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative  dark:bg-gray-800">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link to="/">
            <CustomLogo mode={'dark'} />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
            isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
          }`}
        >
     
          <div className="flex justify-center md:block">
            <a
              className="relative text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
              href="#"
            >   
              <FiRefreshCcw />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LoginPageHeader;
