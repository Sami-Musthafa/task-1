"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import styles from "./modal.module.css";
import Link from "next/link";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import SignupDialog from "./signup";

type FormInputs = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

const schema = z.object({
  email: z.string().email({ message: "Invalid email format" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export default function ResponsiveDialog() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState<boolean>(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleLoginOpen = () => setOpenLogin(true);
  const handleLoginClose = () => setOpenLogin(false);

  const handleSignupOpen = () => setOpenSignup(true);
  const handleSignupClose = () => setOpenSignup(false);

  const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        paddingTop: "3rem",
      }}
    >
      <div className={styles.btnBoth}>
        <React.Fragment>
          <Button
            id="loginSection"
            variant="outlined"
            sx={{ color: "white" }}
            onClick={handleLoginOpen}
          >
            Login
          </Button>
          <Dialog
            fullScreen={fullScreen}
            open={openLogin}
            onClose={handleLoginClose}
            aria-labelledby="responsive-dialog-title"
          >
            <div className={styles.home}>
              <DialogTitle
                id="responsive-dialog-title"
                sx={{ fontWeight: "600" }}
              >
                {"Sign in to Culty"}
              </DialogTitle>
              <DialogContentText
                style={{ paddingLeft: "10%", fontWeight: "300" }}
              >
                New user?
                <Link
                  href={""}
                  onClick={handleLoginOpen}
                  style={{
                    fontWeight: "600",
                    color: "#124076",
                  }}
                >
                  Create new account
                </Link>
              </DialogContentText>
              <DialogContent>
                <div>
                  <form
                    action="submit"
                    className={styles.loginForm}
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <input
                      type="email"
                      placeholder="Email address"
                      className={styles.emailInput}
                      {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && (
                      <p style={{ color: "#FE0000" }}>
                        {" "}
                        {errors.email?.message}
                      </p>
                    )}
                    <input
                      type="password"
                      placeholder="Password"
                      className={styles.passInput}
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Minimum 6 characters required",
                        },
                      })}
                    />
                    {errors.password && (
                      <p style={{ color: "#FE0000" }}>
                        {" "}
                        {errors.password?.message}
                      </p>
                    )}
                    <a className={styles.forgotPass} href="#">
                      Forgot password?
                    </a>
                    <button className={styles.loginButton}>Login</button>
                  </form>
                </div>
              </DialogContent>
              <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
                <Button autoFocus onClick={handleLoginClose}>
                  <button className={styles.cancelButton}>Close</button>
                </Button>
              </DialogActions>
            </div>
          </Dialog>
        </React.Fragment>
      </div>
      <div className={styles.btnBoth}>
        <React.Fragment>
          <Button
            id="signupSection"
            sx={{ color: "white" }}
            variant="outlined"
            onClick={handleSignupOpen}
          >
            Sign Up
          </Button>
          <Dialog
            fullScreen={fullScreen}
            open={openSignup}
            onClose={handleSignupClose}
            aria-labelledby="responsive-dialog-title"
          >
            <div className={styles.home}>
              <DialogTitle
                id="responsive-dialog-title"
                sx={{ fontWeight: "600" }}
              >
                {"Get started absolutely free"}
              </DialogTitle>
              <DialogContentText
                style={{ paddingLeft: "10%", fontWeight: "300" }}
              >
                Already have account?
                <Link
                  style={{
                    fontWeight: "600",
                    color: "#124076",
                  }}
                  href="#"
                >
                  Sign in
                </Link>
              </DialogContentText>
              <DialogContent>
                <div>
                  <form
                    action="submit"
                    onSubmit={handleSubmit(onSubmit)}
                    className={styles.loginForm}
                  >
                    <input
                      type="firstName"
                      placeholder="First Name"
                      className={styles.firstname}
                      {...register("firstName", {
                        required: "First Name is required",
                      })}
                    />
                    {errors.firstName && (
                      <p style={{ color: "#FE0000" }}>
                        {" "}
                        {errors.firstName?.message}
                      </p>
                    )}
                    <input
                      type="lastName"
                      placeholder="Last Name"
                      className={styles.lastname}
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                    />
                    {errors.lastName && (
                      <p style={{ color: "#FE0000" }}>
                        {" "}
                        {errors.lastName?.message}
                      </p>
                    )}
                    <input
                      type="email"
                      placeholder="Email address"
                      className={styles.emailInput}
                      {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && (
                      <p style={{ color: "#FE0000" }}>
                        {" "}
                        {errors.email?.message}
                      </p>
                    )}
                    <input
                      type="password"
                      placeholder="Password"
                      className={styles.passInput}
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Minimum 6 characters required",
                        },
                      })}
                    />
                    {errors.password && (
                      <p style={{ color: "#FE0000" }}>
                        {" "}
                        {errors.password?.message}
                      </p>
                    )}
                    <a className={styles.forgotPass} href="#">
                      Forgot password?
                    </a>
                    <button className={styles.loginButton}>Sign up</button>
                  </form>
                </div>
              </DialogContent>
              <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
                <Button autoFocus onClick={handleSignupClose}>
                  <button className={styles.cancelButton}>Close</button>
                </Button>
              </DialogActions>
            </div>
          </Dialog>
        </React.Fragment>
      </div>
    </div>
  );
}
