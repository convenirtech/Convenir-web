import acc from "../assets/catalog/accessories.png";
import groc from "../assets/catalog/grocery.png";
import cloth from "../assets/catalog/laundry.png";
import veg from "../assets/catalog/vegetable.png";

const CatalogDelivery = () => {
  return (
    <div className=" min-h-screen bg-red-50 px-20">
      <div className=" p-4">
        <div className=" py-10">
          <div className=" items-center justify-center align-items-center text-center py-4">
            <h2 className=" font-bold text-2xl text-center text-[#2f285d]">
              What would you like to Purchase? We Order and Deliver!
            </h2>
            <p className=" px-20 py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              veritatis ullam id beatae error expedita sunt! Error perspiciatis
              quam ratione dolorem, fugit magni magnam cupiditate tempore
              tenetur, iure aliquam. Consequatur?
            </p>
          </div>
          <div className=" flex justify-between px-20 py-4">
            <a
              href="#"
              className=" border border-red-400 rounded-md p-5 flex items-center gap-2 hover:bg-[#ca2124] hover:font-bold hover:text-white"
            >
              <img src={veg} alt="" className=" w-10" />
              Vegetables
            </a>
            <a
              href="#"
              className=" border border-red-400 rounded-md p-5 flex items-center gap-2 hover:bg-[#ca2124] hover:font-bold hover:text-white"
            >
              <img src={groc} alt="" className=" w-10" />
              Other Groceries
            </a>
            <a
              href="#"
              className=" border border-red-400 rounded-md p-5 flex items-center gap-2 hover:bg-[#ca2124] hover:font-bold hover:text-white"
            >
              <img src={acc} alt="" className=" w-10" />
              Accessories
            </a>
            <a
              href="#"
              className=" border border-red-400 rounded-md p-5 flex items-center gap-2 hover:bg-[#ca2124] hover:font-bold hover:text-white"
            >
              <img src={cloth} alt="" className=" w-10" />
              Clothing
            </a>
          </div>
        </div>
        <div className=" px-10 items-center justify-between flex">
          <a href="" className=" border rounded-md p-10">
            Product 1
          </a>
          <a href="" className=" border rounded-md p-10">
            {" "}
            Product 2
          </a>
          <a href="" className=" border rounded-md p-10">
            Product 3
          </a>
          <a href="" className=" border rounded-md p-10">
            Product 4
          </a>
        </div>
      </div>
    </div>
  );
};

export default CatalogDelivery;
