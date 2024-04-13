import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import { useState } from "react";

import { AxiosResponse, AxiosError } from "axios";

import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import useFoodStore from "../../store";
import apiClient from "../axios/apiClient";
import { ArrowRight, CircleNotch } from "@phosphor-icons/react";

function LoginForm() {
  const { setToken, setUser } = useFoodStore();
  const navigate = useNavigate();
  const [isSpin, setIsSpin] = useState(false);

  const userLoginSchema = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "password cannot be less than 8 digits" })
      .max(10, { message: "password cannot be more than 10 digits" }),
  });

  type userLoginType = z.infer<typeof userLoginSchema>;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<userLoginType>({
    resolver: zodResolver(userLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const SubmitHandler = async (data: userLoginType) => {
    setIsSpin(true);
    await apiClient()
      .post(`/auth/login`, data)
      .then((res: AxiosResponse) => {
        enqueueSnackbar(res.data.message, { variant: "success" });
        setToken(res.data.token);
        setUser(res.data.user);
        navigate("/");
        reset();
        location.reload();
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
                Experience India on a Plate: Where Flavor Meets Tradition
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
            </div>
          </div>
          <div className="p-2 flex justify-center">
            <button className="p-2 rounded-sm  outline outline-1 outline-slate-400 w-[310px]  bg-black text-xl font-bold text-white">
              Login{" "}
              {isSpin && (
                <CircleNotch size={32} className="inline ml-2 animate-spin" />
              )}
            </button>
          </div>
          <div className="px-2">
            <p className="font-semibold text-sm text-blue-600 hover:text-purple-800 cursor-pointer">
              forgot password?
            </p>
            <div className="text-center text-md font-semibold">or</div>
          </div>
          <div className="p-2 flex justify-center">
            <button
              className="p-2 rounded-sm  outline outline-1 outline-slate-400 w-[310px]  bg-yellow-300 text-black text-xl font-bold"
              onClick={() => navigate("/signup")}
            >
              Sign Up <ArrowRight size={32} className="inline ml-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
