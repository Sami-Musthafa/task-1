"use client";
import Link from "next/link";
import React from "react";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";

const schema = z.object({
  email: z.string().min(3),
  password: z.string().min(6).max(12),
});

type FormInputs = {
  email: string;
  password: string;
};

const form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  return (
    <div style={{ backgroundColor: "#FFC374", fontFamily: "sans-serif" }}>
      <div className="headingLogin">
        <div>
          <i>Hi, Welcome back</i>
        </div>
      </div>
      <div>
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"
          alt="logo"
          width={"50px"}
        />
      </div>
      <div>
        <img
          className="cameraImg"
          src="https://cdni.iconscout.com/illustration/premium/thumb/mobile-camera-7504425-6138210.png?f=webp"
          alt=""
        />
      </div>
      <div className="cssPage">
        <div className="formSectionLogin">
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "600",
              margin: "1rem 0",
            }}
          >
            Sign in to Culty
          </div>
          <div style={{ margin: "0.5rem 0 3rem 0" }}>
            New user?{" "}
            <Link
              style={{ fontWeight: "600", color: "#124076" }}
              href={"./signup"}
            >
              Create an account
            </Link>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              <input
                style={{
                  borderRadius: "10px",
                  padding: "12px",
                }}
                type="email"
                placeholder="Email address"
                {...register("email", { required: "Email is required" })}
              />{" "}
              {errors.email && (
                <p style={{ color: "#FE0000" }}> {errors.email?.message}</p>
              )}
              <input
                style={{ borderRadius: "10px", padding: "12px" }}
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters required",
                  },
                })}
              />
              {errors.password && (
                <p style={{ color: "#FE0000" }}> {errors.password?.message}</p>
              )}
              <a
                style={{ textAlign: "right", textDecoration: "underline" }}
                href=""
              >
                Forgot password?
              </a>
              <button
                style={{
                  flex: "1",
                  backgroundColor: "#124076",
                  borderRadius: "10px",
                  padding: "10px",
                  fontWeight: "600",
                  color: "white",
                }}
              >
                Login
              </button>
            </div>
          </form>
          <div
            style={{
              textAlign: "center",
              width: "100%",
              margin: "1rem 0",
              padding: "2%",
              borderRadius: "10px",
              backgroundColor: "#378CE7",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "white" }}
              href={"../modal"}
            >
              Visit Popup page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default form;
