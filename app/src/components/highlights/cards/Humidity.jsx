import { Box, Typography } from "@mui/material";

const Humidity = ({ humidityPercent = 81, humidityStatus = "Miserable" }) => {
  return (
    <>
      <Typography
        variant={"body2"}
        fontWeight={"bold"}
        textAlign={"center"}
        color={"text.secondary"}
      >
        Humidity
      </Typography>
      <Typography
        variant={"body1"}
        fontWeight={"bold"}
        textAlign={"center"}
        color={"text.primary"}
      >
        {humidityStatus}
      </Typography>
      <Box height={"10px"} position={"relative"} bgcolor={"primary.main"}>
        <Box
          height={"14px"}
          width={`${humidityPercent}%`}
          bgcolor={"custom.blue"}
          sx={{ transform: "translateY(-2px)" }}
        />
      </Box>
    </>
  );
};

export default Humidity;
