"use client";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";

type Props = {};

const signupSchema = z
  .object({
    firstName: z.string().min(3, "First Name is required").max(15),
    lastName: z.string().min(3, "Last Name is required").max(15),
    email: z.string().email("Email must be a valid"),
    password: z.string().min(6, "Password should be atleast 6 chars").max(12),
  })
  .required();

const SignupPage = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="right"
      height="100%"
      width="90%"
      p={2}
      sx={{
        border: "2px solid grey",
      }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography sx={{ mb: 2 }} fontSize="2rem" fontWeight="600">
        Get started absolutely free!
      </Typography>
      <Box display="flex" alignItems="center" mb={1}>
        <Typography>Already have an account?</Typography>
        <Typography fontWeight="600" sx={{ color: "#378ce7" }}>
          <Link href="#">&nbsp;Sign in</Link>
        </Typography>
      </Box>
      <TextField
        sx={{ mb: 1 }}
        {...register("firstName")}
        color="primary"
        type="string"
        name="firstName"
        fullWidth
        placeholder="First Name"
        label="First name"
        helperText={errors?.firstName?.message as any}
        error={Boolean(errors?.firstName?.message)}
      />
      <TextField
        sx={{ mb: 1 }}
        {...register("lastName")}
        color="primary"
        type="string"
        name="lastName"
        fullWidth
        placeholder="Last Name"
        label="Last name"
        helperText={errors?.lastName?.message as any}
        error={Boolean(errors?.lastName?.message)}
      />
      <TextField
        sx={{ mb: 1 }}
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
      <Button
        type="submit"
        style={{ backgroundColor: "#378CE7", flex: "1" }}
        sx={{ mt: 2 }}
        color="primary"
        variant="contained"
      >
        Create account
      </Button>
    </Box>
  );
};

export default SignupPage;

// <Box
//                   display="flex"
//                   flexDirection="column"
//                   justifyContent="center"
//                   alignItems="right"
//                   height="100%"
//                   width="90%"
//                   p={2}
//                   sx={{
//                     border: "2px solid grey",
//                   }}
//                   component="form"
//                   onSubmit={handleSubmit(onSubmit)}
//                 >
//                   <Typography sx={{ mb: 1 }} variant="h5">
//                     Welcome
//                   </Typography>

//                   <TextField
//                     sx={{ mb: 1 }}
//                     {...register("firstName")}
//                     color="primary"
//                     type="string"
//                     name="firstName"
//                     fullWidth
//                     placeholder="First Name"
//                     label="First name"
//                     helperText={errors?.firstName?.message as any}
//                     error={Boolean(errors?.firstName?.message)}
//                   />
//                   <TextField
//                     sx={{ mb: 1 }}
//                     {...register("lastName")}
//                     color="primary"
//                     type="string"
//                     name="lastName"
//                     fullWidth
//                     placeholder="Last Name"
//                     label="Last name"
//                     helperText={errors?.lastName?.message as any}
//                     error={Boolean(errors?.lastName?.message)}
//                   />
//                   <TextField
//                     sx={{ mb: 1 }}
//                     {...register("email")}
//                     color="primary"
//                     type="email"
//                     name="email"
//                     fullWidth
//                     placeholder="abc@gmail.com"
//                     label="Email"
//                     helperText={errors?.email?.message as any}
//                     error={Boolean(errors?.email?.message)}
//                   />
//                   <TextField
//                     color="primary"
//                     {...register("password")}
//                     type="password"
//                     name="password"
//                     fullWidth
//                     placeholder="********"
//                     label="Password"
//                     helperText={errors?.password?.message as any}
//                     error={Boolean(errors?.password?.message)}
//                   />
//                   <Button
//                     type="submit"
//                     style={{ backgroundColor: "#378CE7", flex: "1" }}
//                     sx={{ mt: 2 }}
//                     color="primary"
//                     variant="contained"
//                   >
//                     Create account
//                   </Button>
//                   <Box sx={{ color: "red" }}></Box>
//                 </Box>
