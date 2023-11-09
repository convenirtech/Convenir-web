const Footer = () => {
  return (
    <div className=" bg-[#2f285d] text-white lg:pt-12 pt-10">
      {/* Footer heading Convenir */}
      <div className=" items-center flex w-full text-center">
        <h1 className=" items-center pl-2 md:pl-6 w-full text-white font-bold text-2xl md:text-3xl">
          Con<span className=" text-[#ca2124]">ven</span>ir
        </h1>
      </div>

      {/* Footer Container */}
      <footer>
        <div className="container px-4 py-10 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first lg:justify-evenly">
            {/*Resources Container*/}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 items-center">
              {/*Heading-Resources*/}
              <h2 className="title-font  font-bold tracking-widest text-sm mb-8">
                Resources
              </h2>

              {/*Resource Links*/}
              <nav className="list-none mb-10 space-y-2 md:space-y-4 text-[12px] md:text-[14px]">
                <li>
                  <a
                    href="/about-us"
                    className="text-gray-200 hover:text-[#ca2124] cursor-pointer"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/mental-health"
                    className="text-gray-200 hover:text-[#ca2124] cursor-pointer"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a className="text-gray-200 hover:text-[#ca2124] cursor-pointer">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-gray-200 hover:text-[#ca2124] cursor-pointer">
                    Terms & Conditions
                  </a>
                </li>
              </nav>
            </div>

            {/*Socials Container*/}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              {/*Socials Heading*/}
              <h2 className="title-font font-bold  tracking-widest text-sm mb-8">
                Socials
              </h2>

              {/*Social Links*/}
              <nav className="list-none mb-10 space-y-2 md:space-y-4 text-[12px] md:text-[14px]">
                <li>
                  <a className="text-gray-200 hover:text-[#ca2124] cursor-pointer">
                    Facebook
                  </a>
                </li>
                {/* <li>
                  <a className="text-gray-200 hover:text-[#ca2124] cursor-pointer">
                    Twitter
                  </a>
                </li> */}
                <li>
                  <a className="text-gray-200 hover:text-[#ca2124] cursor-pointer">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="text-gray-200 hover:text-[#ca2124] cursor-pointer">
                    Linkedln
                  </a>
                </li>
                <li>
                  <a className="text-gray-200 hover:text-[#ca2124] cursor-pointer">
                    Whatsapp
                  </a>
                </li>
              </nav>
            </div>

            {/*Get In Touch Container*/}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              {/*Get In Touch Heading*/}
              <h2 className="title-font font-bold  tracking-widest text-sm mb-8">
                GET IN TOUCH
              </h2>

              {/*Contact Paragraph*/}
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2 items-center md:text-left text-center">
                  <p className="leading-7 text-sm text-gray-200">
                    Contact us any time for getting support.
                  </p>
                </div>
              </div>

              {/*Social Media Icon Container*/}
              <span className="inline-flex sm:ml-auto md:pt-4 my-4 justify-center sm:justify-start transition-all ease-in-out">
                {/*Facebook Icon*/}
                <a className="text-gray-200 cursor-pointer hover:scale-125 transition-all ease-in-out">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>

                {/*Twitter Icon*/}
                <a className="ml-3 text-gray-200 cursor-pointer hover:scale-125 transition-all ease-in-out">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>

                {/*Instagram Icon*/}
                <a className="ml-3 text-gray-200 cursor-pointer hover:scale-125 transition-all ease-in-out">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>

                {/*Linked In Icon*/}
                <a className="ml-3 text-gray-200 cursor-pointer hover:scale-125 transition-all ease-in-out">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>

              {/*Bottom URL @umweo.com*/}
              <div className="py-4 text-[12px] md:text-[14px]">
                <a
                  className="text-[#ca2124] hover:text-[#39becf] text-lg"
                  href="/"
                >
                  www.express.convenir.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className=" w-full border-t border-gray-600 text-center justify-center items-center py-4">
        ©2023 Convenir Express
      </div>
    </div>
  );
};

export default Footer;
