import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useState } from "react";

export default function Home() {
  return (
    <Grid container spacing={2} columns={16} height={"100vh"}>
      <Grid xs={8}>
        <div className="img">
          <a href="#">
            <img
              src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"
              alt="logo"
              width={"40px"}
              style={{
                position: "absolute",
                margin: "2.5rem",
                borderRadius: "15px",
              }}
            />
          </a>
        </div>
        <div
          className="img2"
          style={{
            position: "relative",
            width: "100%",
            height: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            top: "8rem",
          }}
        >
          <div>
            <h1
              style={{
                color: "white",
                fontSize: "35px",
                textAlign: "center",
                fontWeight: "200",
                padding: "0.5rem",
              }}
            >
              Designed for Individuals
            </h1>
            <p
              style={{
                color: "white",
                textAlign: "start",
                padding: " 1rem 12rem",
                opacity: "0.5",
                fontWeight: "200",
              }}
            >
              See the data and know about your posts remotely, from anywhere!
            </p>
          </div>
        </div>
      </Grid>

      <Grid xs={8} bgcolor={"white"} borderRadius={" 0 5px 5px 0"}>
        <div id="main">
          <Typography
            variant="h4"
            color={"#1B1A55"}
            marginBottom={"2.5rem"}
            fontWeight={"100"}
          >
            Login
          </Typography>
          <Typography mb={"0.3rem"}>Email address</Typography>
          <TextField
            id="outlined-basic"
            label="example@gmail.com"
            variant="outlined"
          />
          <Typography mb={"0.3rem"} mt={"1.2rem"}>
            Password
          </Typography>
          <div
            style={{
              position: "relative",
            }}
          >
            <TextField
              id="outlined-password-input"
              label="********"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              sx={{ position: "absolute", width: "100%", height: "100%" }}
            ></TextField>
            <Link
              noWrap
              sx={{
                display: "block",
                zIndex: 9,
                paddingTop: "1em",
                paddingRight: "0.7em",
                float: "right",
                textDecoration: "none",
              }}
            >
              Reset Password
            </Link>
          </div>

          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.7rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <FormControlLabel
                style={{
                  marginRight: "0",
                  marginLeft: "-10px",
                }}
                control={
                  <Checkbox
                    defaultChecked
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 15 } }}
                  />
                }
                label=""
              />

              <Typography fontSize={"14px"}>Remember me</Typography>
            </div>
          </div>
          <a href="/posts">
            <div style={{ display: "flex", marginBottom: "1rem" }}>
              <Button
                variant="contained"
                style={{ backgroundColor: "#378CE7", flex: "1" }}
              >
                Login
              </Button>
            </div>
          </a>

          <div style={{ display: "flex", marginBottom: "1rem" }}>
            <p>Don't have an account? </p>
            <Link underline="none" noWrap>
              Sign up
            </Link>
          </div>
          <div className="hr">
            <span className="hrText">or</span>
          </div>
          <div style={{ display: "flex", marginTop: "2rem" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "black",
                flex: "1",
                fontSize: "0.7rem",
                padding: "1rem",
              }}
            >
              <div style={{ display: "flex", gap: "5px" }}>
                <div>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png"
                    alt=""
                    width={"20px"}
                    style={{ backgroundBlendMode: "color-burn" }}
                  />
                </div>

                <div style={{ fontSize: "12px", fontWeight: "560" }}>
                  Authorize with Google
                </div>
              </div>
            </Button>
          </div>
          <div
            style={{
              textAlign: "center",
              width: "100%",
              margin: "1rem 0",
              padding: "1rem",
              borderRadius: "10px",
              backgroundColor: "#378CE7",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "white" }}
              href={"./login"}
            >
              Visit our culty page
            </Link>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
