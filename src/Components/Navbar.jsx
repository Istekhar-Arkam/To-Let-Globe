import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Image/Navbar/Logo.svg";

const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 z-50 shadow">
        <nav className="bg-[#232323] border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
            <Link to="/" className="flex items-center">
              <img src={Logo} className="h-12 mr-3" alt="Logo" />
            </Link>

            <div
              className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/service"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-white"
                      }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      }`
                    }
                  >
                    Service
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      ` block py-2 pr-4 pl-3 duration-200  ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 capitalize ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      }`
                    }
                  >
                    blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 capitalize ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      }`
                    }
                  >
                    contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 capitalize ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      }`
                    }
                  >
                    about
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/propertyListing"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 capitalize ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      }`
                    }
                  >
                    property listing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/logIn"
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      }  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 capitalize ${
                        isActive ? "text-orange-700" : "text-gray-700"
                      }`
                    }
                  >
                    log in
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
