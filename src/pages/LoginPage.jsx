/* eslint-disable react/no-unescaped-entities */
import Email from "../components/Email";
import FacebookLogin from "../components/Facebook";
import GoogleLogin from "../components/Google";
import Password from "../components/Password";

const LoginPage = () => {
  return (
    <div className=" flex flex-col items-center text-center justify-center min-h-screen bg-red-100">
      <main className=" flex flex-col items-center justify-center w-full flex-1 lg:px-20 px-10 text-center">
        {/* signin section */}
        <div className=" bg-white rounded-2xl shadow-2xl flex w-2/3 md:w-full sm:w-full max-w-4xl">
          <div className=" w-3/5 p-5">
            <div className=" text-left font-bold">
              <div className=" items-center flex w-full text-center">
                <h1 className=" pl-2 md:pl-6 w-full text-[#2f285d] lg:font-bold font-semibold text-2xl md:text-3xl">
                  Con<span className=" text-[#ca2124]">ven</span>ir
                </h1>
              </div>
            </div>
            <div className=" py-10">
              <h2 className=" lg:text-3xl sm:text-lg font-bold md:font-semibold text-[#ca2124] mb-2">
                Sign into your Account
              </h2>
              <div className=" border-2 w-10 border-[#ca2124] inline-block mb-2"></div>
              <div className=" flex justify-center my-2">
                <a
                  href="#"
                  className=" border-2 border-gray-200 rounded-full p-3 mx-1 items-center justify-center text-center"
                >
                  <GoogleLogin />
                </a>
                <a
                  href="#"
                  className=" border-2 border-gray-200 rounded-full p-3 mx-1 items-center justify-center text-center"
                >
                  <FacebookLogin />
                </a>
              </div>
              <div className=" items-center justify-center py-2">
                <p className=" text-coolGray-500">
                  or login with your own email
                </p>
              </div>
              <div className=" flex flex-col items-center justify-center text-center mb-2 w-full">
                <div className=" bg-gray-100 w-full max-w-xs p-2 flex text-center justify-center mb-3 rounded-sm">
                  <div className=" pt-0.5">
                    <Email />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className=" bg-gray-100 pl-2 outline-none text-sm flex-1"
                  />
                </div>
                <div className=" bg-gray-100 w-full max-w-xs p-2 flex text-center justify-center rounded-sm">
                  <div className=" pt-0.5">
                    <Password id="password" />
                  </div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className=" bg-gray-100 pl-2 outline-none text-sm flex-1"
                  />
                </div>
              </div>
              <div className=" flex w-full my-2 items-center justify-center mb-5">
                <label
                  htmlFor=""
                  className=" flex items-center w-full max-w-xs justify-start text-xs"
                >
                  <input type="checkbox" name="" id="" className=" mr-2" />
                  <p>Remember me</p>
                </label>
              </div>
              <div className=" flex items-center justify-center">
                <a
                  href="#"
                  className=" border-2 border-[#ca2124] hover:border-white hover:bg-[#ca2124] text-center justify-center lg:w-40 p-3 rounded-full flex items-center shadow-lg text-[#ca2124] hover:text-white lg:font-bold font-semibold lg:text-lg"
                >
                  Login
                </a>
              </div>
              <div className=" mt-3 text-xs underline">
                <a href="#"> Forgot Password?</a>
              </div>
            </div>
          </div>

          {/* signup section */}
          <div className=" w-2/5 bg-[#ca2124] text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className=" lg:text-3xl text-lg lg:font-bold font-semibold mb-2">
              {" "}
              Don't have an account?{" "}
            </h2>
            <div className=" border-2 w-10 border-white inline-block mb-2"></div>
            <p className=" mb-2">
              {" "}
              Fill in your details and start a journey us{" "}
            </p>
            <div className=" lg:px-12 px-4">
              <a
                href="#"
                className=" border-2 border-white hover:border-[#ca2124] hover:bg-white  w-full text-center justify-center lg:w-full p-3 rounded-full flex items-center shadow-lg text-white hover:text-[#ca2124] lg:font-bold font-semibold lg:text-lg"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
