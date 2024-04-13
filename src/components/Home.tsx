import { ArrowRight } from "@phosphor-icons/react";
import rightside from "../assets/rightside.jpg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="noise h-screen  grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-none ">
      <div className="place-content-center row-span-1 bg-white/60">
        <div className="flex flex-col items-center uppercase text-justify space-y-2 text-black">
          <div className="text-xl font-semibold sm:text-5xl">The Great</div>
          <div className="text-xl font-extrabold  tracking-wider sm:text-5xl">
            Indian
          </div>
          <div className="text-xl font-semibold  tracking-wider sm:text-5xl">
            Kitchen{" "}
            <span className="text-sm font-normal lowercase italic sm:text-3xl">by</span>{" "}
            <span className="italic font-courgette capitalize text-xl text-yellow-400 sm:text-5xl">
              Rasoi
            </span>
          </div>
        </div>
        <div className="text-lg font-medium text-slate-800/80 mt-5 text-center sm:text-xl">
          Experience India on a Plate: Where Flavor Meets Tradition
        </div>

        <Link to={"/menu"} className="flex justify-center items-center mt-10">
          <button className="rounded bg-black text-white p-2 font-bold flex justify-between items-center space-x-3">
            <span>Order Now</span> <ArrowRight size={32} />
          </button>
        </Link>
      </div>
      <div className="row-span-1 bg-green-400">
        <img src={rightside} className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

export default Home;
