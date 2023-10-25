// import { herodata } from "./data";
import heroImage from '../assets/HeroIcon.svg';

const Header = () => {
  // destructure data here
  // const { title, subtitle, btnText, image } = herodata;

  return (
    <section className=" lg:h-[900px] py-12">
      <div className=" container w-full min-h-screen bg-[#ffe8e7] px-4 relative">
        <div>
          {/* Text */}
          <div className=" mt-4 lg:px-6 px-4">
            <h1 className=" hero h1 xl:max-w-[700px] text-[#2f285d] mb-6 lg:mb-12 lg:py-24">
              LOW
              <span className=" text-[#ca2124]"> PRICES</span>, <br />
              <span className=" text-[#ca2124]"> ZERO</span> STRESS!
            </h1>
            <p className=" lead xl:max-w-[380px] lg:-mt-24 lg:mb-10">
              Your most affordable marketplace
            </p>
            <button className=" btn btn-primary mb-8 xl:mb-0 bg-[#ca2124] text-white p-3 rounded-full flex items-center gap-2 ">
              Order Now
            </button>
          </div>
          {/* Image */}
          <div className=" xl:absolute xl:-right-2 xl:-bottom-16 ">
            <img src={heroImage} alt="Hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
