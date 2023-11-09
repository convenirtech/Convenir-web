import app from "../assets/images/app.png";
import AppStore from "./apple";
import Google from "./google";

const Recommended = () => {
  return (
    <div className=" grid py-16 md:grid-cols-2 min-h-screen w-full items-center overflow-hidden justify-center lg:px-20 px-4 gap-10 sm:mb-8">
      <div className=" lg:text-left md:text-center sm:text-center">
        <h1 className=" font-semibold lg:w-5/6 md:text-5xl text-3xl lg:text-left text-center">
          Get up to <span className=" text-[#ca2124]">20%</span> discount when
          making an order with our app
        </h1>
        <div className=" flex w-full items-center justify-center lg:justify-start">
          <p className=" lg:text-left w-full text-center max-w-sm my-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            blanditiis doloremque aliquam.
          </p>
        </div>
        <div className=" flex gap-8 items-center justify-center lg:justify-start">
          <AppStore />
          <Google />
        </div>
      </div>

      <div className=" w-full flex items-center justify-center h-fit">
        <img
          src={app}
          alt="appimage"
          loading="lazy"
          className=" object-cover w-full h-[70vh]"
        />
      </div>
    </div>
  );
};

export default Recommended;
