import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handServices = () => {
    const service = document.getElementById("Service");
    service.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className=" fixed top-0 z-50 w-full lg:px-20 px-4 py-5 bg-[#ffe8e7] bg-opacity-80 backdrop-blur-md">
      <nav className=" flex justify-between w-full items-center">
        <div>
          <a href="/">
            <img
              className=" lg:w-36 md:w-32 w-28 object-cover"
              src={logo}
              alt="Logo"
              loading="lazy"
            />
          </a>
        </div>
        <div>
          <ul className=" lg:flex gap-10 hidden font-semibold items-center">
            <button className=" hover:text-[#ca2124]">
              Why Convenir Express?
            </button>
            <button onClick={handServices} className=" hover:text-[#ca2124]">
              Services
            </button>
            <Link to={'/catalog'} className=" hover:text-[#ca2124]">Catalog</Link>
            <button className=" hover:text-[#ca2124]">Contact</button>
            <Link to={"login"}>
              <span className=" bg-[#ca2124] text-white p-3 rounded-full flex items-center gap-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
                  </svg>
                <span>Login</span>
              </span>
            </Link>
          </ul>
        </div>
        <div className=" lg:hidden flex">
          <button onClick={() => setOpen(!open)}>
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </span>
            )}
          </button>
          <motion.div
            animate={
              open
                ? { translateX: 0, opacity: 1 }
                : { translateX: "100%", opacity: 0 }
            }
            transition={{ type: "tween" }}
            className=" absolute right-0 top-[100%] bg-[#ffe8e7] shadow-md h-screen w-2/3 bg-opacity-[95%] backdrop-blur-lg"
          >
            <ul className=" grid gap-4 mt-4 p-4 text-left items-start justify-start w-full">
              <div className=" hover:text-[#ca2124] cursor-pointer">
                Why Convenir Express?
              </div>
              <div
                onClick={() => {
                  setOpen(false);
                  handServices();
                }}
                className=" hover:text-[#ca2124] cursor-pointer"
              >
                Services
              </div>
              <div className=" hover:text-[#ca2124] cursor-pointer">Menu</div>
              <div className=" hover:text-[#ca2124] cursor-pointer">
                Contact
              </div>
              <div className=" bg-[#ca2124] text-white cursor-pointer p-3 rounded-full w-fit flex items-center gap-2 ">
                <Link to={"login"}>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                      />
                    </svg>
                  </button>
                  <span>Login</span>
                </Link>
              </div>
            </ul>
          </motion.div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
