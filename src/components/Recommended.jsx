import appstore from "../assets/images/appstore.png";
import playstore from "../assets/images/playstore.png";
import app from "../assets/images/app.png";

const Recommended = () => {
  return (
    <div className=" grid md:grid-cols-2 min-h-screen w-full items-center justify-center lg:px-20 px-4 lg:flex-row gap-10 sm:mb-8">
      <div className=" lg:text-left md:text-center sm:text-center">
        <h1 className=" font-semibold lg:w-5/6 text-5xl">
          Get up to <span className=" text-[#ca2124]">20%</span> discount when
          making an order with our app
        </h1>
        <div className=" flex w-full items-center justify-center lg:justify-start">
          <p className=" lg:text-left w-full text-center max-w-sm my-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            blanditiis doloremque aliquam.
          </p>
        </div>
        <div className=" flex gap-8 ">
          <div className=" flex font-semibold text-lg mt-2 btn btn-primary w-full text-center justify-center lg:w-fit bg-white  text-black items-center gap-4">
            <div>
              <img
                className=" md:w-64 md:h-22 h-24"
                src={playstore}
                alt="playstore"
                loading="lazy"
              />
            </div>
          </div>
          <div className=" flex font-semibold text-lg mt-2 btn btn-primary w-full text-center justify-center lg:w-fit bg-white  text-black p-3 items-center  gap-4 ">
            <div>
              <img
                className=" md:w-72 md:h-28 "
                src={appstore}
                alt="appstore"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" w-72">
        <img src={app} alt="appimage" loading="lazy" />
      </div>
    </div>
  );
};

export default Recommended;
