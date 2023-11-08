import { services } from "../constants/Services";

const Services = () => {
  return (
    <div
      id="Service"
      className=" min-h-screen flex w-full items-center justify-center lg:px-20 px-4 lg:flex-row flex-col gap-10 sm:mb-8"
    >
      <div className=" flex lg:w-1/3 w-full flex-col lg:items-start items-center gap-4">
        <h1 className=" text-4xl font-extrabold"> Why we are the best? </h1>
        <p className=" lg:text-left text-center text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum quo,
          dolore cupiditate dolores iure veniam eos autem. Est adipisci in animi
          eligendi eum consequatur! Velit nisi consequatur assumenda impedit
          quos, obcaecati, optio quibusdam.
        </p>
        <button className=" btn btn-primary text-center justify-center w-fit bg-[#ca2124] text-white p-3 rounded-full flex items-center shadow-lg ">
          Read More
        </button>
      </div>
      <div className=" flex lg:w-2/3 w-full lg:flex-row flex-col justify-evenly gap-10">
        {services.map((item, i) => (
          <div key={i} className=" shadow-xl rounded-3xl py-8 border ">
            <div className=" flex items-center justify-center">
              <img
                className=" h-52"
                src={item.image}
                alt="service"
                loading="lazy"
              />
            </div>
            <div className=" text-center font-semibold">{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
