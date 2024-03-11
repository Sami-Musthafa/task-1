import { Grid, Typography } from "@mui/material";
import React from "react";

const CoverPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Monospace",
          fontStyle: "italic",
          color: "#92a8d1",
          fontWeight: "900",
        }}
        noWrap
      >
        Designed for Individuals
      </Typography>
      <Typography
        width={"22rem"}
        ml={21}
        mt={4}
        sx={{ fontStyle: "oblique", color: "#92a8d1", fontWeight: "600" }}
      >
        See the data and know about your posts remotely, from anywhere!
      </Typography>
    </div>
  );
};

export default CoverPage;
