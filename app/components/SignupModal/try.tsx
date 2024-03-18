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
