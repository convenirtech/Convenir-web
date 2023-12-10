import { useNavigate } from "react-router-dom";

const Catalog = () => {
  const navigation = useNavigate();
  return (
    <section className=" min-h-screen px-4 lg:px-20 py-8">
      <aside>
        <button
          onClick={() => navigation(-1)}
          className="text-[#2f285d] hover:scale-95 active:scale-105 shadow-sm rounded-full duration-300"
        >
          <svg fill="none" viewBox="0 0 24 24" className=" md:h-[3em] h-[2em]">
            <path
              fill="currentColor"
              d="M12 7.757l1.414 1.415L10.586 12l2.828 2.829L12 16.242 7.757 12 12 7.757z"
            />
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zM3 12a9 9 0 1118 0 9 9 0 01-18 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </aside>
      <main>
        <h1 className=" lg:text-3xl text-2xl font-bold text-center text-[#2f285d] ">
          Catalog
        </h1>
        <div className=" w-full flex flex-col mt-4">
          <div className=" w-full items-center flex justify-between">
            <span className=" text-[#2f285d] font-semibold">Lorem</span>
            <button className=" flex items-center gap-2 rounded-full px-1 md:px-2 md:py-1 border border-[#2f285d] hover:shadow-lg delay-100 duration-300">
              <span>See all</span>
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 1.646a.5.5 0 01.708 0l6 6a.5.5 0 010 .708l-6 6a.5.5 0 01-.708-.708L10.293 8 4.646 2.354a.5.5 0 010-.708z"
                />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Catalog;
