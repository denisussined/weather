import { Box, Toolbar } from "@mui/material";
import { ChangeForecastButton } from "components/buttons";
import ForecastCard from "./ForecastCard";

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
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
      </Box>
    </>
  );
};

export default Forecast;
