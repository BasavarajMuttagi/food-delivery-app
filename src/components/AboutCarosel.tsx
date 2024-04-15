import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import image1 from "../assets/1.webp";
import image2 from "../assets/2.webp";
import image3 from "../assets/3.webp";
import image4 from "../assets/4.webp";

const AboutCarosel = () => {
  return (
    <div>
      <PhotoProvider>
        <PhotoView src={image1}>
          <img src={image1} className="rounded" />
        </PhotoView>
        <PhotoView src={image2}></PhotoView>
        <PhotoView src={image3}></PhotoView>
        <PhotoView src={image4}></PhotoView>
      </PhotoProvider>
      <p className="text-xs text-slate-400 p-1 italic">image gallery</p>
    </div>
  );
};

export default AboutCarosel;
