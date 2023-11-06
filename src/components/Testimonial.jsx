// import { Testimonials } from "../constants/Testimonial";

import { Testimonials } from "../constants/Testimonial";

const Testimonial = () => {
  return (
    <div
      id="Testimonial"
      className=" grid place-items-center min-h-screen w-full bg-[#fde4e3]"
    >
      <div>
        <h1>2000+</h1>
        <p>Regular Customers</p>
      </div>
      <div className=" grid grid-cols-2 p-10 gap-10 w-full">
        <div className="bg-[#fde4e3] rounded-2xl shadow-lg overflow-hidden rotate-1">
          {Testimonials.map((item, i) => (
            <figure
              key={i}
              className=" bg-white rounded shadow-lg overflow-hidden rotate-1 hover:rotate-0 transition duration-200"
            >
              <blockquote className=" p-20">
                <div className=" mb-5 text-yellow-100">
                  <svg
                    className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                  >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                </div>
                <p>&ldquo;{item.summary}&rdquo;</p>
              </blockquote>
              <div className=" flex items-center justify-between px-8 py-4 bg-gradient-to-br from-yellow-500 to-orange-500">
                <div className=" flex items-center gap-5">
                  <div className=" rounded-full border-4 w-14 h-14 border-white overflow-hidden">
                    <img
                      className=" h-20  w-14 object-cover rounded-ful mb-10 pb-4"
                      src={item.image}
                      alt="testimonial"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className=" text-white font-semibold">
                    <div>{item.name}</div>
                    <div className=" opacity-70">Rating</div>
                  </figcaption>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
