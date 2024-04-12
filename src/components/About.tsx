import AboutCarosel from "./AboutCarosel";
import AboutDetails from "./AboutDetails";

function About() {
  return (
    <div className="h-full no-scrollbar flex flex-col space-y-5 justify-between w-full p-2  overflow-y-scroll sm:w-[60%]">
      <AboutCarosel />
      <div className="border-b-2 w-full sm:w-[60%]" />
      <AboutDetails />
      <div className="border-b-2 w-full sm:w-[60%]" />
    </div>
  );
}

export default About;
