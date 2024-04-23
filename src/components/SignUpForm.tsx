import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, CircleNotch } from "@phosphor-icons/react";
import apiClient from "../axios/apiClient";
import { AxiosResponse, AxiosError } from "axios";
import { userSignUpType, userSignUpSchema } from "../zod/schemas";
import { Turnstile } from "@marsidev/react-turnstile";
import { twMerge } from "tailwind-merge";

function SignUpForm() {
  const [isSpin, setIsSpin] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
    setError,
  } = useForm<userSignUpType>({
    resolver: zodResolver(userSignUpSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirmpassword: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      country: "",
    },
  });

  const SubmitHandler = async (data: userSignUpType) => {
    setIsSpin(true);

    await apiClient()
      .post(`/auth/signup`, { ...data, token: captchaToken })
      .then((res: AxiosResponse) => {
        enqueueSnackbar(res.data.message, { variant: "success" });
        reset();
      })
      .catch((error: AxiosError) => {
        setError("root", { type: "validate" });
        const data = error.response?.data as any;
        enqueueSnackbar(data?.message, { variant: "error" });
      })
      .finally(() => {
        setIsSpin(false);
      });
  };

  return (
    <div className="pb-10 font-inter   md:h-screen">
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(SubmitHandler)}
          className="space-y-2 max-w-screen-md justify-center"
        >
          <div className="p-2 w-[310px] flex justify-center mt-5">
            <div>
              <div className="w-full text-start mb-5">
                <NavLink to={"/"}>
                  <span className="italic font-courgette capitalize text-5xl text-yellow-400 cursor-pointer text-center  font-extrabold">
                    Rasoi
                  </span>
                </NavLink>
              </div>
              <div className="text-xs font-medium text-slate-800/80 mt-5  italic">
                Experience India on a Plate: Where Flavour Meets Tradition
              </div>
            </div>
          </div>
          {/* Personalform */}
          <div className="p-2 space-y-8">
            <label htmlFor="Personal" className="text-xl font-bold">
              Personal Details
            </label>
            <div className="space-y-2 md:flex  flex-wrap justify-between items-baseline md:space-y-4">
              <div id="Personal">
                <input
                  {...register("fullname")}
                  className="p-2  outline outline-1 outline-slate-400 drop-shadow rounded-sm w-[310px] font-semibold"
                  placeholder="Full Name"
                />
                {errors.fullname && (
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {errors.fullname.message}
                  </div>
                )}
              </div>
              <div>
                <input
                  {...register("email")}
                  placeholder="Email"
                  className="p-2  outline outline-1 outline-slate-400 drop-shadow rounded-sm w-[310px] font-semibold"
                />
                {errors.email && (
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {errors.email.message}
                  </div>
                )}
              </div>
              <div>
                <input
                  {...register("password")}
                  placeholder="Password"
                  className="p-2  outline outline-1 outline-slate-400 drop-shadow rounded-sm w-[310px] font-semibold"
                />
                {errors.password && (
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {errors.password.message}
                  </div>
                )}
              </div>
              <div>
                <input
                  {...register("confirmpassword")}
                  placeholder="Confirm Password"
                  className="p-2  outline outline-1 outline-slate-400 drop-shadow rounded-sm w-[310px] font-semibold"
                />
                {errors.confirmpassword && (
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {errors.confirmpassword.message}
                  </div>
                )}
              </div>
              <div>
                <input
                  {...register("phone")}
                  placeholder="Phone"
                  className="p-2  outline outline-1 outline-slate-400 drop-shadow rounded-sm w-[310px] font-semibold"
                />
                {errors.phone && (
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {errors.phone.message}
                  </div>
                )}
              </div>

              <div>
                <input
                  {...register("address")}
                  placeholder="Address"
                  className="p-2  outline outline-1 outline-slate-400 drop-shadow rounded-sm w-[310px] font-semibold"
                />
                {errors.address && (
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {errors.address.message}
                  </div>
                )}
              </div>

              <div>
                <input
                  {...register("country")}
                  placeholder="Country"
                  className="p-2  outline outline-1 outline-slate-400 drop-shadow rounded-sm w-[310px] font-semibold"
                />
                {errors.country && (
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {errors.country.message}
                  </div>
                )}
              </div>

              <div>
                <input
                  {...register("state")}
                  placeholder="State"
                  className="p-2  outline outline-1 outline-slate-400 drop-shadow rounded-sm w-[310px] font-semibold"
                />
                {errors.state && (
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {errors.state.message}
                  </div>
                )}
              </div>

              <div>
                <input
                  {...register("city")}
                  placeholder="City"
                  className="p-2  outline outline-1 outline-slate-400 drop-shadow rounded-sm w-[310px] font-semibold"
                />
                {errors.city && (
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {errors.city.message}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="p-2 flex justify-center">
            <button
              className={twMerge(
                "p-1 rounded-sm  outline outline-1 outline-slate-400 w-[310px]   text-xl font-bold text-black",
                isValid ? "bg-yellow-300" : "bg-yellow-300/40"
              )}
              disabled={isValid && captchaToken ? false : true}
              type="submit"
            >
              Sign Up{" "}
              {isSpin && (
                <CircleNotch size={32} className="inline ml-2 animate-spin" />
              )}
              {!isSpin && <ArrowRight size={32} className="inline ml-2" />}
            </button>
          </div>
          {isValid && (
            <div className="p-2 flex justify-center">
              <Turnstile
                siteKey="0x4AAAAAAAX-PpkRSHXB_Lgb"
                onSuccess={(token: string) => setCaptchaToken(token)}
              />
            </div>
          )}
          <div className="px-2">
            <div className="text-center text-md font-semibold">
              Already Have An Account ?{" "}
              <Link to="/login">
                <span className="text-blue-500">Login</span>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
