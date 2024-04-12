const AboutCarosel = () => {
  const data = [1].map((eachImage: number) => (
    <img src={`src/assets/${eachImage}.jpg`} className="aspect-video" />
  ));

  return <div className="flex space-x-4 overflow-x-scroll no-scrollbar sm:w-[60%]">{data}</div>;
};

export default AboutCarosel;
