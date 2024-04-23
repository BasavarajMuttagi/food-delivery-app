import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { AxiosResponse, AxiosError } from "axios";
import { enqueueSnackbar } from "notistack";
import { useNavigate, useParams } from "react-router-dom";
import apiClient from "../axios/apiClient";
import { CircleNotch } from "@phosphor-icons/react";
import {
  userSetNewPasswordSchema,
  userSetNewPasswordType,
} from "../zod/schemas";
import { Turnstile } from "@marsidev/react-turnstile";
import { jwtDecode } from "jwt-decode";
import { tokenType } from "../routes/PrivateRoutes";

function SetNewPassword() {
  let { token } = useParams();

  const [captchaToken, setCaptchaToken] = useState("");
  const navigate = useNavigate();
  const [isSpin, setIsSpin] = useState(false);

  const decodedToken = jwtDecode(token!) as Omit<tokenType, "email" | "name">;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<userSetNewPasswordType>({
    resolver: zodResolver(userSetNewPasswordSchema),
    defaultValues: {
      userId: decodedToken.userId,
      password: "",
      confirmpassword: "",
    },
  });

  const SubmitHandler = async (data: userSetNewPasswordType) => {
    setIsSpin(true);
    await apiClient()
      .post(`/auth/setnewpassword`, { ...data, token: captchaToken })
      .then((res: AxiosResponse) => {
        enqueueSnackbar(res.data.message, { variant: "success" });
        reset();
        navigate("/");
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
                Experience India on a Plate: Where Flavour Meets Tradition
              </div>
            </div>
          </div>
          <div className="p-2">
            <div className="space-y-8">
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
                  placeholder="confirm password"
                  className="p-2  outline outline-1 outline-slate-400 drop-shadow rounded-sm w-[310px] font-semibold"
                />
                {errors.confirmpassword && (
                  <div className="text-red-400 ml-1   text-xs w-full">
                    {errors.confirmpassword.message}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="p-2 flex justify-center">
            <button className="p-2 rounded-sm  outline outline-1 outline-slate-400 w-[310px]  bg-black text-xl font-bold text-white">
              Set New Password{" "}
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
        </form>
      </div>
    </div>
  );
}

export default SetNewPassword;
