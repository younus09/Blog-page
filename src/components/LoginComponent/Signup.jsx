import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { Input, Button, Logo } from "../index";
import authService from "../../appwrite/auth";
import { login as authLogin } from "../../store/authSlice";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const signup = async (data) => {
    setError("");
    try {
      const session = await authService.createAccount(data);

      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center ">
          <span className="inline-block w-full max-w-25 ">
            <Logo width="100%" />
          </span>
        </div>
        <h2> Create you Account</h2>
        <p className="mt-2 text-center text-base text-black/60">
          Have any account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center"> {error}</p>}

        <form action="" onSubmit={handleSubmit(signup)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Username :"
              placeholder="Enter your Username"
              type="text"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label="Email :"
              placeholder="Enter your Email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Enter Valid Email address",
                },
              })}
            />
            <Input
              label="Password : "
              placeholder="Enter your password"
              type="password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit">Sign up</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
