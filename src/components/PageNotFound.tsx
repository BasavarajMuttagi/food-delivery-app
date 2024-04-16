import { ArrowLeft } from "@phosphor-icons/react";
import bgImage from "../assets/loadingbg.svg";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <div
        className="h-screen w-full bg-slate-600  flex flex-col  overflow-x-hidden relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="space-y-8 text-center flex flex-col justify-center h-full text-xl text-white font-bold p-2 sm:text-3xl">
          <div className="flex justify-center items-center space-x-4  text-white"></div>
          <div className="flex flex-col justify-center items-center space-y-10">
            <div className="px-5 text-5xl">404 Page Not Found</div>
            <Link to="/">
              <div className="px-5 text-xl flex items-center space-x-5 text-violet-500">
                <ArrowLeft size={32} weight="bold" /> <div>Back To Home</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
