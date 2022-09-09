import { Box, Typography } from "@mui/material";
import { Thermostat } from "@mui/icons-material";

const Temperature = ({ temperatureMax = 4, temperatureMin = 13 }) => {
  return (
    <>
      <Typography
        variant={"body2"}
        fontWeight={"bold"}
        textAlign={"center"}
        color={"text.secondary"}
      >
        Temperature
      </Typography>
      <Box
        paddingX={2}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Thermostat sx={{ color: "custom.lightRed" }} />
        <Typography variant={"h6"} fontWeight={"bold"}>
          {temperatureMax}°
        </Typography>
      </Box>
      <Box
        paddingX={2}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Thermostat sx={{ color: "custom.lightBlue" }} />
        <Typography variant={"h6"} fontWeight={"bold"}>
          {temperatureMin}°
        </Typography>
      </Box>
    </>
  );
};

export default Temperature;
