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
