"use client";

import Link from "next/link";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormInputs = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
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
      <div className="headingSignup">
        <div>
          SignUp <i>to join our</i> Culty <i>Community</i>
        </div>
      </div>
      <div>
        <Link href={"./"}></Link>
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
        <div className="formSectionSignup">
          <div
            style={{
              fontSize: "2rem",
              fontWeight: "600",
              margin: "1rem 0",
            }}
          >
            Get started absolutely free
          </div>
          <div style={{ margin: "0.5rem 0 3rem 0" }}>
            Already have an account?
            <Link
              style={{ fontWeight: "600", color: "#124076" }}
              href={"./login"}
            >
              Sign in
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
              <div style={{ display: "flex", gap: "2%" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "49%",
                  }}
                >
                  <input
                    style={{
                      borderRadius: "10px",
                      padding: "12px 12px",
                    }}
                    type="firstName"
                    placeholder="First Name"
                    {...register("firstName", {
                      required: "First Name is required",
                    })}
                  />
                  {errors.firstName && (
                    <p style={{ color: "#FE0000" }}>
                      {errors.firstName?.message}
                    </p>
                  )}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "49%",
                  }}
                >
                  <input
                    style={{
                      borderRadius: "10px",
                      padding: "12px",
                      flexBasis: "49%",
                      flex: "1",
                    }}
                    type="lastName"
                    placeholder="Last Name"
                    {...register("lastName", {
                      required: "Last Name is required",
                    })}
                  />
                  {errors.lastName && (
                    <p style={{ color: "#FE0000" }}>
                      {errors.lastName?.message}
                    </p>
                  )}
                </div>
              </div>
              <input
                style={{
                  borderRadius: "10px",
                  padding: "12px",
                }}
                type="email"
                placeholder="Email address"
                {...register("email", { required: "Email is required" })}
              />
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
        </div>
      </div>
    </div>
  );
};

export default form;
