import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";

export const Testimonials = [
  {
    image: { p1 },
    name: "Samuel Doe",
    summary:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit Rerum quo dolore cupiditate dolores iure veniam eos autem. Est adipisci in animi eligendi eum consequatur! Velit nisi consequatur assumenda impedit quos, obcaecati, optio quibusdam.",
    rating: "",
  },
  {
    image: { p2 },
    name: "Jane Doe",
    summary:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit Rerum quo dolore cupiditate dolores iure veniam eos autem. Est adipisci in animi eligendi eum consequatur! Velit nisi consequatur assumenda impedit quos, obcaecati, optio quibusdam.",
    rating: "",
  },
  {
    image: { p3 },
    name: "Nathan Doe",
    summary:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit Rerum quo dolore cupiditate dolores iure veniam eos autem. Est adipisci in animi eligendi eum consequatur! Velit nisi consequatur assumenda impedit quos, obcaecati, optio quibusdam.",
    rating: "",
  },
];

// {Testimonials.map((item, i) => (
//   <div key={i} className="">
//     <figure className=" bg-white rounded shadow-lg overflow-hidden rotate-1 hover:rotate-1 transition duration-200 ">
//       <div className=" flex items-center justify-center">
//         <img
//           className=" h-52"
//           src={item.image}
//           alt="service"
//           loading="lazy"
//         />
//       </div>
//       <div>{item.name}</div>
//       <div>{item.summary}</div>
//     </figure>
//   </div>
// ))}
