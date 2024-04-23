import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { AxiosResponse, AxiosError } from "axios";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import apiClient from "../axios/apiClient";
import { ArrowRight, CheckCircle, CircleNotch } from "@phosphor-icons/react";
import { userPasswordResetSchema, userPasswordResetType } from "../zod/schemas";

import { Turnstile } from "@marsidev/react-turnstile";

function ResetPassword() {
  const [captchaToken, setCaptchaToken] = useState("");
  const navigate = useNavigate();
  const [isSpin, setIsSpin] = useState(false);
  const [toggle, setToggle] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<userPasswordResetType>({
    resolver: zodResolver(userPasswordResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const SubmitHandler = async (data: userPasswordResetType) => {
    setIsSpin(true);
    await apiClient()
      .post(`/auth/reset-password`, { ...data, token: captchaToken })
      .then((res: AxiosResponse) => {
        enqueueSnackbar(res.data.message, { variant: "success" });
        reset();
        setToggle(false);
      })
      .catch((error: AxiosError) => {
        const data = error.response?.data as any;
        enqueueSnackbar(data?.message || "Something Went Wrong!", {
          variant: "error",
        });
      })
      .finally(() => {
        setIsSpin(false);
      });
  };

  return (
    <div className="font-inter">
      <div className="flex justify-center h-svh items-center">
        {toggle ? (
          <form
            onSubmit={handleSubmit(SubmitHandler)}
            className="space-y-2 max-w-screen-md justify-center"
          >
            <div className="p-2 w-[310px] flex justify-center ">
              <div>
                <div className="w-full text-center mb-5">
                  <span className="italic font-courgette capitalize text-5xl text-yellow-400 cursor-pointer text-center  font-extrabold">
                    Rasoi
                  </span>
                </div>
                <div className="text-xs font-medium text-slate-800/80 mt-5  italic">
                  Experience India on a Plate: Where Flavour Meets Tradition
                </div>
              </div>
            </div>
            <div className="p-2">
              <div className="space-y-8">
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
              </div>
            </div>
            <div className="p-2 flex justify-center">
              <button className="p-2 rounded-sm  outline outline-1 outline-slate-400 w-[310px]  bg-black text-xl font-bold text-white">
                Reset{" "}
                {isSpin && (
                  <CircleNotch size={32} className="inline ml-2 animate-spin" />
                )}
              </button>
            </div>
            <div className="p-2 flex justify-center">
              <Turnstile
                siteKey="0x4AAAAAAAX-PpkRSHXB_Lgb"
                onSuccess={(token: string) => setCaptchaToken(token)}
              />
            </div>
            <div className="px-2">
              <div className="text-center text-md font-semibold">or</div>
            </div>
            <div className="p-2 flex justify-center">
              <button
                className="p-1 rounded-sm  outline outline-1 outline-slate-400 w-[310px]  bg-yellow-300 text-black text-xl font-bold"
                onClick={() => navigate("/login")}
              >
                login <ArrowRight size={32} className="inline ml-2" />
              </button>
            </div>
          </form>
        ) : (
          <div className="h-screen w-full flex flex-col justify-center items-center space-y-5">
            <div>
              <CheckCircle
                size={120}
                weight="fill"
                className="text-center text-green-500 sm:w-40 h-40"
              />
            </div>
            <div className="flex justify-center items-center text-center">
              <div className="space-y-4">
                <p>
                  A reset password email has been sent to your email address.
                </p>
                <p>
                  Please check your inbox and follow the instructions in the
                  email to reset your password.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResetPassword;
