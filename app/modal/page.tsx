// "use client";
// import * as React from "react";
// import Button from "@mui/material/Button";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";
// import styles from "./modal.module.css";
// import Link from "next/link";
// import { z } from "zod";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { useState } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import LoginModal from "../components/LoginModal";
// import SignupModal from "../components/SignupModal";

// type Props = {};

// type FormInputs = {
//   email: string;
//   password: string;
//   firstName: string;
//   lastName: string;
// };

// const schema = z.object({
//   email: z.string().email({ message: "Invalid email format" }),
//   password: z
//     .string()
//     .min(6, { message: "Password must be at least 6 characters long" }),
//   firstName: z.string().min(2, { message: "Invalid First Name" }),
//   laststName: z.string().min(2, { message: "Invalid Last Name" }),
// });

// export default function ResponsiveDialog() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormInputs>({ resolver: zodResolver(schema) });

//   const [openLogin, setOpenLogin] = useState(false);
//   const [openSignup, setOpenSignup] = useState(false);
//   const theme = useTheme();
//   const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

//   // const handleLoginOpen = () => setOpenLogin(true);
//   // const handleLoginClose = () => setOpenLogin(false);
//   const toggleLogin = () => setOpenLogin(!openLogin);
//   const toggleSignup = () => setOpenSignup(!openSignup);
//   const handleSignupOpen = () => setOpenSignup(true);
//   const handleSignupClose = () => setOpenSignup(false);

//   const onSubmit: SubmitHandler<FormInputs> = (data) => console.log(data);

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-around",
//         alignItems: "center",
//         paddingTop: "3rem",
//       }}
//     >
//       <div className={styles.btnBoth}>
//         <React.Fragment>
//           <Button
//             id="loginSection"
//             variant="outlined"
//             sx={{ color: "white" }}
//             onClick={toggleLogin}
//           >
//             Login
//           </Button>
//           <LoginModal open={openLogin} onClose={toggleLogin} />
//         </React.Fragment>
//       </div>
//       <div className={styles.btnBoth}>
//         <React.Fragment>
//           <Button
//             id="signupSection"
//             sx={{ color: "white" }}
//             variant="outlined"
//             onClick={toggleSignup}
//           >
//             Sign Up
//           </Button>
//           <SignupModal open={openSignup} onClose={toggleSignup} />
//         </React.Fragment>
//       </div>
//     </div>
//   );
// }

"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
//import styles from './page.module.css';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Tabs,
  Tab,
} from "@mui/material";
import LoginPage from "../components/LoginModal";
import SignupPage from "../components/SignupModal";

const signupSchema = z
  .object({
    firstName: z.string().min(3, "First Name is required").max(15),
    lastName: z.string().min(3, "Last Name is required").max(15),
    email: z.string().email("Email must be a valid"),
    password: z.string().min(6, "Password should be atleast 6 chars").max(12),
  })
  .required();
const loginSchema = z
  .object({
    email: z.string().email("Email must be a valid email address"),
    password: z.string().min(8, "password should be atleast 8 chars").max(12),
  })
  .required();
type Props = {};
const Home = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [tabValue, setTabValue] = React.useState(0);

  const toggleDialog = () => {
    setOpen(!open);
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  return (
    <Box>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Button
          variant="contained"
          onClick={toggleDialog}
          sx={{ fontWeight: "200" }}
        >
          Join Culty
        </Button>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        sx={{ mb: 2 }}
      >
        <Dialog open={open} fullWidth onClose={toggleDialog}>
          <DialogTitle
            sx={{
              textAlign: "center",
              color: "rgb(18, 64, 118)",
              fontSize: "2.5rem",
              fontWeight: "700",
              fontFamily: "sans-serif",
            }}
          >
            <i>Culty</i>
          </DialogTitle>
          <DialogContent
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Tabs
                value={tabValue}
                onChange={handleTabChange}
                sx={{
                  flex: "1",
                  width: "90%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Tab label="Login" sx={{ flex: "1" }} />
                <Tab label="Signup" sx={{ flex: "1" }} />
              </Tabs>
              {tabValue === 0 && <LoginPage />}
              {tabValue === 1 && <SignupPage />}
            </Box>
          </DialogContent>
        </Dialog>
      </Box>
    </Box>
  );
};
export default Home;
