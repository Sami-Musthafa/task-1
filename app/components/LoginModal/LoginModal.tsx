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
          <Link href="/">&nbsp;Create account</Link>
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
