// "use client";
// import React, { useState } from "react";
// import {
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
// } from "@mui/material";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { loginSchema, signupSchema } from "./validationSchema"; // Import your validation schemas
// import { z } from "zod";

// // Define login form data structure
// interface LoginForm {
//   email: string;
//   password: string;
// }

// // Define signup form data structure
// interface SignupForm {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
// }

// const LoginPage: React.FC = () => {
//   const [openLogin, setOpenLogin] = useState<boolean>(false);
//   const [openSignup, setOpenSignup] = useState<boolean>(false);

//   const handleLoginOpen = () => setOpenLogin(true);
//   const handleLoginClose = () => setOpenLogin(false);

//   const handleSignupOpen = () => setOpenSignup(true);
//   const handleSignupClose = () => setOpenSignup(false);

//   const {
//     register: loginRegister,
//     handleSubmit: handleLoginSubmit,
//     formState: loginFormState,
//   } = useForm<LoginForm>({ resolver: zodResolver(loginSchema) });
//   const {
//     register: signupRegister,
//     handleSubmit: handleSignupSubmit,
//     formState: signupFormState,
//   } = useForm<SignupForm>({ resolver: zodResolver(signupSchema) });

//   const handleLogin = (data: LoginForm) => console.log("Login Data:", data);
//   const handleSignup = (data: SignupForm) => console.log("Signup Data:", data);

//   return (
//     <div>
//       <Button variant="outlined" onClick={handleLoginOpen}>
//         Login
//       </Button>
//       <Button variant="outlined" onClick={handleSignupOpen}>
//         Signup
//       </Button>

//       {/* Login Modal */}
//       <Dialog open={openLogin} onClose={handleLoginClose}>
//         <DialogTitle>Login</DialogTitle>
//         <DialogContent>
//           <form onSubmit={handleLoginSubmit(handleLogin)}>
//             <TextField
//               label="Email"
//               {...loginRegister("email")}
//               {errors.password && <span>{errors.email.message}</span>}
//             />
//             <TextField
//               label="Password"
//               type="password"
//               {...loginRegister("password")}
//               {errors.password && <span>{errors.password.message}</span>}
//             />
//           </form>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleLoginClose}>Cancel</Button>
//           <Button type="submit" onClick={handleLoginSubmit(handleLogin)}>
//             Login
//           </Button>
//         </DialogActions>
//       </Dialog>

//       {/* Signup Modal */}
//       <Dialog open={openSignup} onClose={handleSignupClose}>
//         <DialogTitle>Signup</DialogTitle>
//         <DialogContent>
//           <form onSubmit={handleSignupSubmit(handleSignup)}>
//             <TextField
//               label="First Name"
//               {...signupRegister("firstName")}
//               {errors.password && <span>{errors.firstName.message}</span>}
//             />
//             <TextField
//               label="Last Name"
//               {...signupRegister("lastName")}
//               {errors.password && <span>{errors.lastName.message}</span>}
//             />
//             <TextField
//               label="Email"
//               {...signupRegister("email")}
//               {errors.password && <span>{errors.email.message}</span>}
//             />
//             <TextField
//               label="Password"
//               type="password"
//               {...signupRegister("password")}
//               {errors.password && <span>{errors.password.message}</span>}
//             />
//           </form>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleSignupClose}>Cancel</Button>
//           <Button type="submit" onClick={handleSignupSubmit(handleSignup)}>
//             Signup
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default LoginPage;
