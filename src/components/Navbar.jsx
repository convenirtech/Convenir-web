import { motion } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className=" fixed top-0 w-full lg:px-12 px-4 py-4 bg-[#ffe8e7]">
      <nav className=" flex justify-between w-full items-center">
        <div>
          <a href="/">
            <img
              className=" w-24 object-cover"
              src="/src/assets/logo.png"
              alt="Logo"
              loading="lazy"
            />
          </a>
        </div>
        <div>
          <ul className=" lg:flex gap-10 hidden font-semibold items-center">
            <li className=" hover:text-[#ca2124]">Why Convenir Express?</li>
            <li className=" hover:text-[#ca2124]">Services</li>
            <li className=" hover:text-[#ca2124]">Menu</li>
            <li className=" hover:text-[#ca2124]">Contact</li>
            <li className=" bg-[#ca2124] text-white p-3 rounded-full flex items-center gap-2 ">
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
            </li>
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
            <motion.div animate={open?{translateX:0,opacity:1}:{translateX:"100%",opacity:0}} transition={{type:"tween"}} className=" absolute right-0 top-[100%] bg-[#ffe8e7] shadow-md h-screen w-2/3">
              <ul className=" grid gap-4 mt-4 p-4">
                <li className=" hover:text-[#ca2124]">Why Convenir Express?</li>
                <li className=" hover:text-[#ca2124]">Services</li>
                <li className=" hover:text-[#ca2124]">Menu</li>
                <li className=" hover:text-[#ca2124]">Contact</li>
                <li className=" bg-[#ca2124] text-white p-3 rounded-full w-fit flex items-center gap-2 ">
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
                </li>
              </ul>
            </motion.div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
