import { Box, Typography } from "@mui/material";
import { ArrowDownwardSharp, ArrowUpwardSharp } from "@mui/icons-material";

const SunriseSunset = ({ sunrise = "4:20", sunset = "21:37" }) => {
  return (
    <>
      <Typography
        variant={"body2"}
        fontWeight={"bold"}
        textAlign={"center"}
        color={"text.secondary"}
      >
        Sunrise & Sunset
      </Typography>
      <Box
        paddingX={2}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <ArrowUpwardSharp />
        <Typography variant={"h6"} fontWeight={"bold"}>
          {sunrise}
        </Typography>
      </Box>
      <Box
        paddingX={2}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <ArrowDownwardSharp />
        <Typography variant={"h6"} fontWeight={"bold"}>
          {sunset}
        </Typography>
      </Box>
    </>
  );
};

export default SunriseSunset;
