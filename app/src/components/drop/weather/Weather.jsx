import { Box, Divider, TextField, Typography } from "@mui/material";
import { thunder } from "images";

const Weather = ({
  temperature = 8,
  clouds = 23,
  location = "Ukraine, Kyiv",
  day = "Monday",
  time = "12:45",
}) => {
  return (
    <Box>
      <Box padding={"12px 16px 0"}>
        <TextField fullWidth label={"Search for places"} variant={"standard"} />
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
        <img
          src={thunder}
          alt={"thunder"}
          style={{ height: "250px", width: "250px" }}
        />
      </Box>
      <Divider variant={"middle"} textAlign={"left"}>
        <Typography fontSize={"10px"}>temperature</Typography>
      </Divider>
      <Typography
        variant={"h6"}
        component={"p"}
        textAlign={"end"}
        paddingX={4}
        fontWeight={"bold"}
        color={"secondary.main"}
      >
        {temperature}°
      </Typography>
      <Divider variant={"middle"} textAlign={"left"}>
        <Typography fontSize={"10px"}>clouds</Typography>
      </Divider>
      <Typography
        variant={"h6"}
        component={"p"}
        textAlign={"end"}
        paddingX={4}
        fontWeight={"bold"}
        color={"secondary.main"}
      >
        {clouds}%
      </Typography>
      <Divider variant={"middle"} textAlign={"left"}>
        <Typography fontSize={"10px"}>location</Typography>
      </Divider>
      <Typography
        variant={"h6"}
        component={"p"}
        textAlign={"end"}
        paddingX={4}
        fontWeight={"bold"}
        color={"secondary.main"}
      >
        {location}
      </Typography>
      <Divider variant={"middle"} textAlign={"left"}>
        <Typography fontSize={"10px"}>time</Typography>
      </Divider>
      <Typography
        variant={"h6"}
        component={"p"}
        textAlign={"end"}
        paddingX={4}
        fontWeight={"bold"}
        color={"secondary.main"}
      >
        {`${day}, ${time}`}
      </Typography>
    </Box>
  );
};

export default Weather;
