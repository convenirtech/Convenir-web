// import { herodata } from "./data";
import { Player } from "@lottiefiles/react-lottie-player";

const Header = () => {
  // destructure data here
  // const { title, subtitle, btnText, image } = herodata;

  return (
    <div className=" w-full min-h-screen bg-[#ffe8e7] px-20 lg:grid-cols-2 grid-cols-1 grid lg:p items-center justify-center py-56 md:py-32 lg:py-0">
      {/* Text */}
      <div className="grid w-full gap-4 lg:text-left text-center">
        <h1 className=" font-extrabold text-5xl lg:text-7xl text-[#2f285d]">
          LOW
          <span className=" text-[#ca2124]"> PRICES</span>, <br />
          <span className=" text-[#ca2124]"> ZERO</span> STRESS!
        </h1>
        <p className="">Your most affordable marketplace with the best deals</p>
        <div className="flex lg:flex-row flex-col gap-4">
          <button className=" btn btn-primary w-full text-center justify-center lg:w-fit bg-[#ca2124] text-white p-3 rounded-full flex items-center shadow-lg ">
            Order Now
          </button>
          <button className=" btn btn-primary w-full text-center justify-center lg:w-fit border border-[#ca2124] text-[#ca2124] p-3 rounded-full flex items-center shadow-lg">
            Get app
          </button>
        </div>
      </div>
      {/* Image */}
      <div className=" w-full items-center justify-center">
        <Player
          src={
            "https://lottie.host/de6479e1-1bf1-423c-8eb2-01375096300a/4APS1QRN7Z.json"
          }
          loop={true}
          autoplay={true}
          className=" w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Header;
