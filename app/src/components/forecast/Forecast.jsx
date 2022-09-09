import { Box, Toolbar } from "@mui/material";
import ForecastCard from "./ForecastCard";
import ChangeForecastButton from "../buttons/ChangeForecastButton";

const days = [1, 2, 3, 4, 5];

const Forecast = () => {
  return (
    <>
      <Toolbar sx={{ justifyContent: "center", display: { md: "none" } }}>
        <ChangeForecastButton />
      </Toolbar>
      <Box
        display={"flex"}
        justifyContent={"start"}
        gap={3}
        py={2}
        overflow={"scroll"}
        sx={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {days.map(() => (
          <ForecastCard />
        ))}
      </Box>
    </>
  );
};

export default Forecast;
