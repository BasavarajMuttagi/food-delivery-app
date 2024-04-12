import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

function AboutDetails() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-xl font-semibold text-slate-700">Timings</h1>
        <p className="text-sm text-slate-500">07:00 - 20:00</p>
      </div>
      <div>
        <h1 className="text-xl font-semibold text-slate-700">Address</h1>
        <p className="text-sm text-slate-500">
          2nd Floor, Arogya Soudha Opposite Kulshekar Post Office Kulshekar
          Mangaluru Karnataka India - 575001
        </p>
      </div>
      <div>
        <h1 className="text-xl font-semibold text-slate-700">Phone</h1>
        <p className="text-sm text-slate-500">+918197628777</p>
      </div>
      <div>
        <h1 className="text-xl font-semibold text-slate-700">Whatsapp</h1>
        <p className="text-sm text-slate-500">918762582739</p>
      </div>
      <div>
        <h1 className="text-xl font-semibold text-slate-700">Services</h1>
        <p className="text-sm text-slate-500">Dine-in, Takeaway, Delivery</p>
      </div>
      <div>
        <h1 className="text-xl font-semibold text-slate-700">Cuisines</h1>
        <p className="text-sm text-slate-500">
          South Indian Vegetarian, North Indian Vegetarian
        </p>
      </div>
      <div className="flex justify-between items-center">
        <FacebookLogo size={32} weight="fill" />
        <TwitterLogo size={32} weight="fill" />
        <InstagramLogo size={32} weight="fill" />
        <YoutubeLogo size={32} weight="fill" />
      </div>
    </div>
  );
}

export default AboutDetails;
