import { useNavigate } from "react-router-dom";

const Catalog = () => {
    const navigation=useNavigate();
  return (
    <section className=" min-h-screen justify-center items-center px-4 lg:px-20 py-8">
      <aside>
        <button onClick={()=>navigation(-1)} className="text-[#2f285d] hover:scale-95 active:scale-105 shadow-sm rounded-full duration-300">
          <svg
            viewBox="0 0 512 512"
            fill="currentColor"
            className=" md:h-[3em] h-[2em]"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={32}
              d="M249.38 336L170 256l79.38-80M181.03 256H342"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeMiterlimit={10}
              strokeWidth={32}
              d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
            />
          </svg>
        </button>
      </aside>
      <main>
        <h1 className=" lg:text-3xl text-xl font-bold">Catalog</h1>
      </main>
    </section>
  );
};

export default Catalog;
