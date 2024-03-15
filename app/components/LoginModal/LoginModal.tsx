// import * as React from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import styles from "../../modal/modal.module.css";
// import Link from "next/link";
// import { z } from "zod";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// type FormInputs = {
//   email: string;
//   password: string;
//   //   firstName: string;
//   //   lastName: string;
// };

// const schema = z.object({
//   email: z.string().email({ message: "Invalid email format" }),
//   password: z
//     .string()
//     .min(6, { message: "Password must be at least 6 characters long" }),
// });

// const LoginModal = (props: any) => {
//   const { open, toggleLogin } = props;
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormInputs>({ resolver: zodResolver(schema) });

//   //   const [openLogin, setOpenLogin] = useState(false);
//   //   const handleLoginOpen = () => setOpenLogin(true);
//   //   const handleLoginClose = () => setOpenLogin(false);

//   const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

//   return (
//     <Dialog open={open} onClose={toggleLogin}>
//       <div className={styles.home}>
//         <DialogTitle sx={{ fontWeight: "600" }}>
//           {"Sign in to Culty"}
//         </DialogTitle>
//         <DialogContentText style={{ paddingLeft: "10%", fontWeight: "300" }}>
//           New user?
//           <Link
//             href={""}
//             onClick={toggleLogin}
//             style={{
//               fontWeight: "600",
//               color: "#124076",
//             }}
//           >
//             Create new account
//           </Link>
//         </DialogContentText>
//         <DialogContent>
//           <div>
//             <form
//               action="submit"
//               className={styles.loginForm}
//               onSubmit={handleSubmit(onSubmit)}
//             >
//               <input
//                 type="email"
//                 placeholder="Email address"
//                 className={styles.emailInput}
//                 {...register("email")}
//               />
//               {errors.email && (
//                 <p style={{ color: "#FE0000" }}> {errors.email?.message}</p>
//               )}
//               {/* <TextField id="outlined-basic" label="Email" variant="outlined" {...register(email,)} />
//                     {error.email && <span className="error-message">{error.email.message}</span>} */}
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className={styles.passInput}
//                 {...register("password")}
//               />
//               {errors.password && (
//                 <p style={{ color: "#FE0000" }}> {errors.password?.message}</p>
//               )}
//               <a className={styles.forgotPass} href="#">
//                 Forgot password?
//               </a>
//               <button className={styles.loginButton}>Login</button>
//             </form>
//           </div>
//         </DialogContent>
//         <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
//           <Button onClick={toggleLogin} className={styles.cancelButton}>
//             Close
//           </Button>
//         </DialogActions>
//       </div>
//     </Dialog>
//   );
// };

// export default LoginModal;

// "use client";
// import { Box, Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
// import React, { useState } from "react";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";

// type Props = {};

// const LoginPage = (props: Props) => {
//   const [open, setOpen] = useState(false);
//   const [tabValue, setTabValue] = React.useState(0);

//   const toggleDialog = () => {
//     setOpen(!open);
//   };

//   const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
//     setTabValue(newValue);
//   };

//   return (
//     <Box sx={{ m: 4 }}>
//       <Button variant="contained" onClick={toggleDialog}>
//         Login
//       </Button>
//       <Dialog open={open} fullWidth onClose={toggleDialog}>
//         <DialogTitle>Welcome</DialogTitle>
//         <DialogContent>
//           <Box>
//             <Tabs value={tabValue} onChange={handleTabChange}>
//               <Tab label="Login" />
//               <Tab label="Signup" />
//             </Tabs>
//             {tabValue === 0 && <div>Login Form</div>}
//             {tabValue === 1 && <div>Signup Form</div>}
//           </Box>
//         </DialogContent>
//       </Dialog>
//     </Box>
//   );
// };

// export default LoginPage;

"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";

type Props = {};

const loginSchema = z
  .object({
    email: z.string().email("Email must be a valid"),
    password: z.string().min(6, "Password should be atleast 6 chars").max(12),
  })
  .required();

const LoginPage = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      height="100%"
      width="90%"
      border={0}
      p={2}
      sx={{
        border: "2px solid grey",
      }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography mb={3} fontSize="2rem" fontWeight="600">
        Welcome back!
      </Typography>
      <Box display="flex" alignItems="center" mb={1}>
        <Typography>New User?</Typography>

        <Typography fontWeight="600" sx={{ color: "#378ce7" }}>
          <Link href="#">&nbsp;Create account</Link>
        </Typography>
      </Box>

      <TextField
        sx={{ mb: 2 }}
        {...register("email")}
        color="primary"
        type="email"
        name="email"
        fullWidth
        placeholder="abc@gmail.com"
        label="Email"
        helperText={errors?.email?.message as any}
        error={Boolean(errors?.email?.message)}
      />
      <TextField
        sx={{ mb: 1 }}
        color="primary"
        {...register("password")}
        type="password"
        name="password"
        fullWidth
        placeholder="********"
        label="Password"
        helperText={errors?.password?.message as any}
        error={Boolean(errors?.password?.message)}
      />
      <Typography textAlign="right" color="#378ce7">
        <Link href="">Forgot password?</Link>{" "}
      </Typography>
      <Button
        type="submit"
        style={{ backgroundColor: "#378CE7", flex: "1" }}
        sx={{ mt: 1 }}
        color="primary"
        variant="contained"
      >
        Login
      </Button>
    </Box>
  );
};

export default LoginPage;
