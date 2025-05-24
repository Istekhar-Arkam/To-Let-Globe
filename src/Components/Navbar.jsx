import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Image/Navbar/Logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <>
      <header className="sticky top-0 z-50 shadow">
        <nav className="bg-[#232323] px-4 lg:px-6 py-2.5">
          <div className="flex items-center mx-auto  justify-between">
            <Link to="/" className="lg:flex items-center ml-10 hidden ">
              <img src={Logo} className="h-12 " alt="Logo" />
            </Link>
            <div className="text-white text-2xl lg:hidden">
              <GiHamburgerMenu />
            </div>
            <div className=" w-full flex justify-center lg:hidden">
              <img src={Logo} className="h-12" alt="Logo" />
            </div>
            <div
              className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1 mr-10"
              id="mobile-menu-2 "
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 xl:mr-6">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `capitalize block ${
                        isActive ? "bg-[#5AA7A0] text-white" : "text-white"
                      }  lg:border-0 lg:px-3 rounded-lg lg:pb-0.5`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/service"
                    className={({ isActive }) =>
                      `capitalize block ${
                        isActive ? "bg-[#5AA7A0] text-white" : "text-white"
                      }  lg:border-0 lg:px-3 rounded-lg lg:pb-0.5`
                    }
                  >
                    Service
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      ` capitalize block ${
                        isActive ? "bg-[#5AA7A0] text-white" : "text-white"
                      }  lg:border-0 lg:px-3 rounded-lg lg:pb-0.5`
                    }
                  >
                    blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `capitalize block ${
                        isActive ? "bg-[#5AA7A0] text-white" : "text-white"
                      }  lg:border-0 lg:px-3 rounded-lg lg:pb-0.5`
                    }
                  >
                    contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      `capitalize block ${
                        isActive ? "bg-[#5AA7A0] text-white" : "text-white"
                      }  lg:border-0 lg:px-3 rounded-lg lg:pb-0.5`
                    }
                  >
                    about
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/propertyListing"
                    className={({ isActive }) =>
                      `capitalize block ${
                        isActive ? "bg-[#5AA7A0] text-white" : "text-white"
                      }  lg:border-0 lg:px-3 rounded-lg lg:pb-0.5`
                    }
                  >
                    property listing
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/logIn"
                    className={({ isActive }) =>
                      `capitalize block ${
                        isActive ? "bg-[#5AA7A0] text-white" : "text-white"
                      }  lg:border-0 lg:px-3 rounded-lg lg:pb-0.5`
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
