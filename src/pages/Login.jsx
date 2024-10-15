import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import backgroundSvg from "../../public/background.svg";
import { toast } from "react-toastify";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider } from "@mui/material";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);
    const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  }

  const onSubmit = async (data) => {
    try {
      const hashedPassword = await sha256(data.password);

      const payload = {
        email: data.email,
        password: hashedPassword,
      };

      const response = await axiosInstance.post(payload);

      if (response.data.status === "success") {
        const token = response.data.data.token;
        const smsToken = response.data.data.smsToken;

        toast.success(response.data.message);
        dispatch(loginUser(response.data));
        localStorage.setItem("authToken", token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div
      className="auth-page-wrapper pt-5 relative"
      style={{
        backgroundImage: `url(${backgroundSvg})`,
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <div className="relative z-2 pt-5">
        <div className="row justify-content-center">
          <div className="w-[370px] flex flex-col">
            <div className="card">
              <div className="p-4">
                <div className="p-2 mt-4">
                  <div className="flex justify-center text-center flex-col gap-2 ">
                    <h1 className="text-3xl text-gray-600">Sign in</h1>
                    <div className="flex justify-center items-center align-middle">
                      <h5 className="text-gray700 text-[13px] leading-4">
                        Need an account?
                      </h5>
                      <Link
                        to="/register"
                        className="pl-1 text-lightModePrimary text-[13px] leading-4 hover:text-gray-500"
                      >
                        Sign up
                      </Link>
                    </div>
                    <div className="flex items-center gap-3 my-4">
                      <Divider className="flex-grow bg-[#F1F1F4]" />
                      <span className="text-gray-500 text-sm">OR</span>
                      <Divider className="flex-grow bg-[#F1F1F4]" />
                    </div>
                  </div>
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="needs-validation flex flex-col gap-3"
                    noValidate
                  >
                    <div className="mb-3 flex flex-col gap-2">
                      <label htmlFor="useremail">Email</label>
                      <input
                        {...register("email", {
                          required: true,
                          pattern: /^\S+@\S+$/i,
                        })}
                        type="email"
                        placeholder="email@email.com"
                        className="authFormInput"
                      />
                      {errors.email && (
                        <span className="formError">
                          Lütfen Geçerli Bir Mail Adresi Giriniz.
                        </span>
                      )}
                      <div className="invalid-feedback">Please enter email</div>
                    </div>
                    <div className="mb-3">
                      <div className="flex justify-between items-center">
                        <label htmlFor="password-input">Şifre</label>
                        <Link
                          to="/forgot-password"
                          className="text-lightModePrimary leading-[14px] text-[13px] hover:text-gray-500"
                        >
                          Forgot Password?
                        </Link>
                      </div>

                      <div className="relative pt-2">
                        <input
                          {...register("password", {
                            required: true,
                            minLength: 6,
                          })}
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter Password"
                          className="authFormInput"
                          style={{ paddingRight: "95px" }}
                        />
                        <FontAwesomeIcon
                          icon={showPassword ? faEyeSlash : faEye}
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-7 transform -translate-y-1/2 cursor-pointer text-gray-400"
                        />
                        {errors.password && (
                          <span className="formError">
                            Şifreniz en az 6 karakter olmalıdır.
                          </span>
                        )}
                        <div className="invalid-feedback">
                          Please enter password
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id="remember"
                          {...register("remember")}
                          className="mr-2"
                        />
                        <label htmlFor="remember">
                          Remember me
                        </label>
                      </div>
                    </div>

                    <div className="flex my-2">
                      <button
                        className="primaryButton bg-lightModePrimary w-full max-w-none"
                        type="submit"
                      >
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
